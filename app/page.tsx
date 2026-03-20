import { Activity, CheckCircle2, Database, DownloadCloud, FolderSync, Clock, Settings, LayoutDashboard } from "lucide-react";
import styles from "./page.module.css";
import prisma from "./lib/prisma";
import AutoRefresh from "./components/AutoRefresh";

export const revalidate = 0;

// Server Action to fetch data
async function getCities() {
  try {
    if (!prisma) {
       console.log("Database not yet linked.");
       return [];
    }
    const cities = await prisma.cityProgress.findMany();
    return cities;
  } catch (err: any) {
    console.log("Database connection failed, using empty list.");
    return [];
  }
}

export default async function Dashboard() {
  const cities = await getCities();
  
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
          <Database className={styles.brandIcon} size={28} />
          <span>Data Extraction</span>
        </div>
        
        <nav className={styles.nav}>
          <div className={`${styles.navLink} ${styles.active}`}>
            <LayoutDashboard size={20} />
            Dashboard
          </div>
          {/* <div className={styles.navLink}>
            <FolderSync size={20} />
            Downloaded Files
          </div>
          <div className={styles.navLink}>
            <Activity size={20} />
            Logs
          </div>
          <div className={styles.navLink}>
            <Settings size={20} />
            Settings
          </div> */}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className={styles.main}>
        
        {/* Header section */}
        <header className={`${styles.header} animate-fade-in`}>
          <div>
            <h1 className={styles.title}>Dashboard</h1>
            <p className={styles.subtitle}>Monitor city data extraction status and Neon DB sync</p>
          </div>
        </header>

        {/* Top KPIs / Stats Grid */}
        <section className={styles.statsGrid}>
          
          <div className={`${styles.statCard} glass-panel animate-fade-in`} style={{animationDelay: '0.1s'}}>
            <div className={styles.statHeader}>
              <span className={styles.statTitle}>Completed Cities</span>
              <div className={styles.statIcon} style={{color: 'var(--success-color)'}}>
                <CheckCircle2 size={24} />
              </div>
            </div>
            <div className={styles.statValue}>{completedCities} / {totalCities}</div>
          </div>

          <div className={`${styles.statCard} glass-panel animate-fade-in`} style={{animationDelay: '0.2s'}}>
            <div className={styles.statHeader}>
              <span className={styles.statTitle}>Scraping In Progress</span>
              <div className={styles.statIcon} style={{color: 'var(--text-accent)'}}>
                <Activity size={24} />
              </div>
            </div>
            <div className={styles.statValue}>{inProgressCities}</div>
          </div>

          <div className={`${styles.statCard} glass-panel animate-fade-in`} style={{animationDelay: '0.3s'}}>
            <div className={styles.statHeader}>
              <span className={styles.statTitle}>Total Files (Today)</span>
              <div className={styles.statIcon} style={{color: 'var(--primary-color)'}}>
                <DownloadCloud size={24} />
              </div>
            </div>
            <div className={styles.statValue}>{totalFiles}</div>
          </div>

        </section>

        {/* Data Table */}
        <section className={`${styles.tableSection} animate-fade-in`} style={{animationDelay: '0.4s'}}>
          <h2 className={styles.sectionTitle}>
            <Database size={24} />
            Live Cities Status
          </h2>
          
          <div className={`${styles.tableContainer} glass-panel`}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>City</th>
                  <th>Status</th>
                  <th>Progress</th>
                  <th>Downloaded Files</th>
                  {/* <th>Last Updated</th> */}
                </tr>
              </thead>
              <tbody>
                {cities.length === 0 && (
                   <tr>
                     <td colSpan={5} style={{textAlign: 'center', padding: '40px', color: 'var(--text-secondary)'}}>
                        No cities found in Database. Please check your .env 
                     </td>
                   </tr>
                )}
                {sortedCities.map((city: any) => (
                  <tr key={city.id}>
                    <td>
                      <div className={styles.cityName}>
                        <span className={`${styles.statusIndicator} ${
                          (city.status?.toLowerCase() === 'complete' || city.status?.toLowerCase() === 'completed') ? styles.completed :
                          city.status?.toLowerCase() === 'working' ? styles.scraping : styles.pending
                        }`}></span>
                        {city.city}
                      </div>
                    </td>
                    <td>
                      <span className={`badge ${
                         (city.status?.toLowerCase() === 'complete' || city.status?.toLowerCase() === 'completed') ? 'completed' :
                         city.status?.toLowerCase() === 'working' ? 'scraping' : 'pending'
                      }`}>
                        {(city.status?.toLowerCase() === 'complete' || city.status?.toLowerCase() === 'completed') ? 'Completed' : 
                         city.status?.toLowerCase() === 'working' ? 'Working' : 'Pending'}
                      </span>
                    </td>
                    <td>
                      <div className={styles.progressWrapper}>
                        <div className={styles.progressBar}>
                          <div 
                            className={`${styles.progressFill} ${(city.status?.toLowerCase() === 'complete' || city.status?.toLowerCase() === 'completed') ? styles.completed : ''}`}
                            style={{width: `${(city.status?.toLowerCase() === 'complete' || city.status?.toLowerCase() === 'completed') ? 100 : 0}%`}}
                          ></div>
                        </div>
                        <span style={{fontSize: '0.85rem', color: 'var(--text-secondary)'}}>
                          {(city.status?.toLowerCase() === 'complete' || city.status?.toLowerCase() === 'completed') ? '100%' : '0%'}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span style={{fontFamily: 'monospace', fontSize: '1.1rem'}}>{city.pages || 0}</span>
                    </td>
                    {/* <td>
                      <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)'}}>
                        <Clock size={14} />
                        Connected
                      </div>
                    </td> */}
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
