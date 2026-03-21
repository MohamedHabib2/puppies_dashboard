import { Activity, CheckCircle2, Database, DownloadCloud, FolderSync, Clock, Settings, LayoutDashboard, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./page.module.css";
import Link from "next/link";
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

export default async function Dashboard({ searchParams }: { searchParams: Promise<{ date?: string, page?: string }> }) {
  const params = await searchParams;
  const cities = await getCities(params.date);
  const currentPage = parseInt(params.page || '1');
  const itemsPerPage = 9;
  
  const totalCities = cities.length;
  const completedCities = cities.filter((c: any) => c.status?.toLowerCase() === "complete" || c.status?.toLowerCase() === "completed").length;
  const inProgressCities = cities.filter((c: any) => c.status?.toLowerCase() === "working").length;
  const totalFiles = cities.reduce((acc: number, c: any) => acc + (c.pages || 0), 0);

  // Sorting: Finished cities at the bottom
  const sortedCities = [...cities].sort((a: any, b: any) => {
    const isDoneA = a.status?.toLowerCase() === "complete" || a.status?.toLowerCase() === "completed";
    const isDoneB = b.status?.toLowerCase() === "complete" || b.status?.toLowerCase() === "completed";
    
    // If one is done and the other isn't, put the non-done one first
    if (!isDoneA && isDoneB) return -1;
    if (isDoneA && !isDoneB) return 1;
    
    // Otherwise keep current order (can be id or name if desired)
    return 0;
  });

  // Pagination slicing
  const totalPages = Math.ceil(totalCities / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedCities = sortedCities.slice(startIdx, startIdx + itemsPerPage);
  
  // Helper to generate pagination URL
  const getPageUrl = (page: number) => {
    const query = new URLSearchParams();
    if (params.date) query.set('date', params.date);
    query.set('page', page.toString());
    return `/?${query.toString()}`;
  };

  return (
    <>
      <AutoRefresh interval={15000} />
      <div className={styles.main}>
        
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
                {paginatedCities.map((city: any) => (
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

            {/* Pagination Controls */}
            {totalCities > 0 && (
                <div className={styles.pagination}>
                    <div className={styles.paginationInfo}>
                        Showing <span>{Math.min(startIdx + 1, totalCities)}</span> to <span>{Math.min(startIdx + itemsPerPage, totalCities)}</span> of <span>{totalCities}</span> cities
                    </div>
                    {totalPages > 1 && (
                        <div className={styles.paginationControls}>
                            <Link 
                                href={getPageUrl(currentPage - 1)} 
                                className={`${styles.pageLink} ${currentPage <= 1 ? styles.disabled : ''}`}
                            >
                                <ChevronLeft size={16} /> Previous
                            </Link>
                            <Link 
                                href={getPageUrl(currentPage + 1)} 
                                className={`${styles.pageLink} ${currentPage >= totalPages ? styles.disabled : ''}`}
                            >
                                Next <ChevronRight size={16} />
                            </Link>
                        </div>
                    )}
                </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
