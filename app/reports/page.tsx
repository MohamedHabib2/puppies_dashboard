import prisma from "../lib/prisma";
import styles from "./reports.module.css";
import ChartsContainer from "./ChartsContainer";
import { Suspense } from "react";

export const revalidate = 0;

interface CityRecord {
  id: number;
  city: string;
  status: string | null;
  pages: number | null;
  date: string;
}

async function getAggregatedData() {
  try {
    if (!prisma ) {
        console.warn("Prisma client is null. Database might not be linked.");
        return { daily: [], weekly: [], monthly: [] };
    }

    const allRecords = await prisma.cityProgress.findMany({
      where: {
        date: { not: null }
      },
      orderBy: { date: 'asc' }
    }) as CityRecord[];

    if (!allRecords || allRecords.length === 0) {
      return { daily: [], weekly: [], monthly: [] };
    }

    // Daily Aggregation
    const dailyMap = new Map<string, number>();
    allRecords.forEach((record: CityRecord) => {
      const date = record.date;
      dailyMap.set(date, (dailyMap.get(date) || 0) + (record.pages || 0));
    });

    const daily = Array.from(dailyMap.entries())
      .map(([name, pages]) => ({ name, pages }))
      .slice(-10); // Last 10 days

    // Weekly Aggregation
    const weeklyMap = new Map<string, number>();
    allRecords.forEach((record: CityRecord) => {
      try {
        const d = new Date(record.date);
        if (isNaN(d.getTime())) return;
        
        // Get Monday of the week
        const day = d.getDay();
        const diff = d.getDate() - day + (day === 0 ? -6 : 1);
        const monday = new Date(new Date(d).setDate(diff)).toISOString().split('T')[0];
        const key = `Wk ${monday.substring(5)}`; // Simplified label Wk MM-DD
        weeklyMap.set(key, (weeklyMap.get(key) || 0) + (record.pages || 0));
      } catch {
        // Skip invalid dates
      }
    });
    const weekly = Array.from(weeklyMap.entries()).map(([name, pages]) => ({ name, pages }));

    // Monthly Aggregation
    const monthlyMap = new Map<string, number>();
    allRecords.forEach((record: CityRecord) => {
      const month = record.date.substring(0, 7); // YYYY-MM
      monthlyMap.set(month, (monthlyMap.get(month) || 0) + (record.pages || 0));
    });
    const monthly = Array.from(monthlyMap.entries()).map(([name, pages]) => ({ name, pages }));

    return { daily, weekly, monthly };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.warn("Failed to fetch report data:", message);
    return { daily: [], weekly: [], monthly: [] };
  }
}

export default async function ReportsPage() {
  const data = await getAggregatedData();

  return (
    <div className={styles.main}>
      <header className={`${styles.header} animate-fade-in`}>
        <div>
          <h1 className={styles.title}>Analytics Reports</h1>
          <p className={styles.subtitle}>Track scraping trends and operational growth</p>
        </div>
      </header>

      <Suspense fallback={<div style={{padding: '100px', textAlign: 'center', opacity: 0.5}}>Loading Analytics Data...</div>}>
         {data.daily.length > 0 ? (
           <ChartsContainer 
              dailyData={data.daily}
              weeklyData={data.weekly}
              monthlyData={data.monthly}
           />
         ) : (
           <div className="glass-panel" style={{padding: '80px', textAlign: 'center', color: 'var(--text-secondary)'}}>
              <p>No historical data available yet to generate charts.</p>
              <p style={{fontSize: '0.9rem', marginTop: '10px'}}>Start extracting data to see comparisons here.</p>
           </div>
         )}
      </Suspense>
    </div>
  );
}
