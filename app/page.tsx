import { Activity, CheckCircle2, Database, DownloadCloud, FolderSync, Clock, Settings, LayoutDashboard, Filter } from "lucide-react";
import styles from "./page.module.css";
import prisma from "./lib/prisma";
import AutoRefresh from "./components/AutoRefresh";
import DateFilter from "./components/DateFilter";
import { Suspense } from "react";

export const revalidate = 0;

// Helper to format date if needed
function formatDatePickerToDB(date: string) {
  if (!date) return null;
  // Database stores date as YYYY-MM-DD (string), so we return it directly
  return date;
}

// Server Action to fetch data
async function getCities(filterDate?: string) {
  try {
    if (!prisma) {
       console.log("Database not yet linked.");
       return [];
    }
    
    const dbDate = filterDate ? formatDatePickerToDB(filterDate) : null;
    
    const cities = await (prisma as any).cityProgress.findMany({
      where: dbDate ? {
        date: dbDate
      } : {}
    });
    return cities;
  } catch (err: any) {
    console.log("Database connection failed, using empty list:", err.message);
    return [];
  }
}

export default async function Dashboard({ searchParams }: { searchParams: Promise<{ date?: string }> }) {
  const params = await searchParams;
  const cities = await getCities(params.date);
  
  const totalCities = cities.length;
  const completedCities = cities.filter((c: any) => c.status?.toLowerCase() === "complete" || c.status?.toLowerCase() === "completed").length;
  const inProgressCities = cities.filter((c: any) => c.status?.toLowerCase() === "working").length;
  const totalFiles = cities.reduce((acc: number, c: any) => acc + (c.pages || 0), 0);

  // Sorting: Completed cities first
  const sortedCities = [...cities].sort((a: any, b: any) => {
    const isDoneA = a.status?.toLowerCase() === "complete" || a.status?.toLowerCase() === "completed";
    const isDoneB = b.status?.toLowerCase() === "complete" || b.status?.toLowerCase() === "completed";
    if (isDoneA && !isDoneB) return -1;
    if (!isDoneA && isDoneB) return 1;
    return 0;
  });

  return (
    <div className={styles.dashboard}>
      <AutoRefresh interval={15000} />
      {/* Sidebar Navigation */}
      <aside className={`${styles.sidebar} glass-panel`}>
        <div className={styles.brand}>
          <div className={styles.brandIconWrapper}>
            <Database className={styles.brandIcon} size={24} />
          </div>
          <span>Puppies Dashboard</span>
        </div>
        
        <nav className={styles.nav}>
          <div className={`${styles.navLink} ${styles.active}`}>
            <LayoutDashboard size={20} />
            Overview
          </div>
          <div className={styles.navLink}>
             <Activity size={20} />
             Reports
          </div>
        </nav>

        <div className={styles.sidebarFooter}>
            <div className={styles.statusBadge}>
                <div className={styles.statusPulse}></div>
                System Online
            </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={styles.main}>
        
        {/* Header section */}
        <header className={`${styles.header} animate-fade-in`}>
          <div className={styles.headerTitleArea}>
            <h1 className={styles.title}>Cities Status</h1>
            <p className={styles.subtitle}>
                {params.date ? `Showing data for ${params.date}` : "Live data overview across all dates"}
            </p>
          </div>
          
          <div className={styles.headerActions}>
            <Suspense fallback={<div className={styles.filterLoading}>Loading...</div>}>
              <DateFilter />
            </Suspense>
          </div>
        </header>

        {/* Top KPIs / Stats Grid */}
        <section className={styles.statsGrid}>
          
          <div className={`${styles.statCard} glass-panel animate-fade-in`} style={{animationDelay: '0.1s'}}>
            <div className={styles.statHeader}>
              <span className={styles.statTitle}>Success Rate</span>
              <div className={styles.statIcon} style={{color: 'var(--success-color)'}}>
                <CheckCircle2 size={24} />
              </div>
            </div>
            <div className={styles.statValue}>
                {totalCities > 0 ? Math.round((completedCities/totalCities)*100) : 0}%
            </div>
            <div className={styles.statSub}>{completedCities} / {totalCities} Cities Done</div>
          </div>

          <div className={`${styles.statCard} glass-panel animate-fade-in`} style={{animationDelay: '0.2s'}}>
            <div className={styles.statHeader}>
              <span className={styles.statTitle}>In Progress</span>
              <div className={styles.statIcon} style={{color: 'var(--text-accent)'}}>
                <Activity size={24} />
              </div>
            </div>
            <div className={styles.statValue}>{inProgressCities}</div>
            <div className={styles.statSub}>Currently Extracting</div>
          </div>

          <div className={`${styles.statCard} glass-panel animate-fade-in`} style={{animationDelay: '0.3s'}}>
            <div className={styles.statHeader}>
              <span className={styles.statTitle}>Files Tracked</span>
              <div className={styles.statIcon} style={{color: 'var(--primary-color)'}}>
                <DownloadCloud size={24} />
              </div>
            </div>
            <div className={styles.statValue}>{totalFiles.toLocaleString()}</div>
            <div className={styles.statSub}>Total Pages Saved</div>
          </div>

        </section>

        {/* Data Table */}
        <section className={`${styles.tableSection} animate-fade-in`} style={{animationDelay: '0.4s'}}>
          <div className={styles.tableHeader}>
            <h2 className={styles.sectionTitle}>
              <Database size={20} />
              Detailed Status Report
            </h2>
          </div>
          
          <div className={`${styles.tableContainer} glass-panel`}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>City Name</th>
                  <th>Process Status</th>
                  <th>Visual Progress</th>
                  <th>Files Count</th>
                  <th>Reference Date</th>
                </tr>
              </thead>
              <tbody>
                {cities.length === 0 && (
                   <tr>
                     <td colSpan={5} style={{textAlign: 'center', padding: '60px', color: 'var(--text-secondary)'}}>
                        <div className={styles.emptyState}>
                            <Filter size={48} style={{opacity: 0.2, marginBottom: '16px'}} />
                            <p>No records found for the selected criteria.</p>
                        </div>
                     </td>
                   </tr>
                )}
                {sortedCities.map((city: any) => (
                   <tr key={city.id}>
                    <td>
                      <div className={styles.cityName}>
                        {city.city}
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${
                         (city.status?.toLowerCase() === 'complete' || city.status?.toLowerCase() === 'completed') ? 'completed' :
                         city.status?.toLowerCase() === 'working' ? 'scraping' : 'pending'
                      }`}>
                        <span className={styles.badgeIndicator}></span>
                        {(city.status?.toLowerCase() === 'complete' || city.status?.toLowerCase() === 'completed') ? 'Finished' : 
                         city.status?.toLowerCase() === 'working' ? 'Running' : city.status || 'Pending'}
                      </span>
                    </td>
                    <td>
                      <div className={styles.progressWrapper}>
                        <div className={styles.progressBar}>
                          <div 
                            className={`${styles.progressFill} ${(city.status?.toLowerCase() === 'complete' || city.status?.toLowerCase() === 'completed') ? styles.completed : ''}`}
                            style={{width: `${(city.status?.toLowerCase() === 'complete' || city.status?.toLowerCase() === 'completed') ? 100 : 5}%`}}
                          ></div>
                        </div>
                        <span style={{fontSize: '0.8rem', color: 'var(--text-secondary)', width: '35px'}}>
                          {(city.status?.toLowerCase() === 'complete' || city.status?.toLowerCase() === 'completed') ? '100%' : '5%'}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className={styles.fileCount}>
                        <FolderSync size={14} style={{opacity: 0.5}} />
                        <span>{city.pages || 0}</span>
                      </div>
                    </td>
                    <td>
                       <span className={styles.dateLabel}>{city.date || 'N/A'}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
}
