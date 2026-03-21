"use client";

import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, AreaChart, Area
} from 'recharts';
import styles from './reports.module.css';

interface ChartData {
  name: string;
  pages: number;
}

interface ChartsContainerProps {
  dailyData: ChartData[];
  weeklyData: ChartData[];
  monthlyData: ChartData[];
}

export default function ChartsContainer({ dailyData, weeklyData, monthlyData }: ChartsContainerProps) {
  return (
    <div className={styles.chartsGrid}>
      {/* Daily Progress Comparison */}
      <div className={`${styles.chartCard} glass-panel animate-fade-in`} style={{animationDelay: '0.1s'}}>
        <div className={styles.chartHeader}>
          <h3 className={styles.chartTitle}>Daily Progress (Pages Scraped)</h3>
        </div>
        <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis 
                dataKey="name" 
                stroke="var(--text-secondary)" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="var(--text-secondary)" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                  border: '1px solid var(--card-border)',
                  borderRadius: '12px',
                  color: '#fff'
                }}
                itemStyle={{ color: 'var(--text-accent)' }}
              />
              <Bar dataKey="pages" fill="var(--primary-color)" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Weekly Trend */}
      <div className={`${styles.chartCard} glass-panel animate-fade-in`} style={{animationDelay: '0.2s'}}>
        <div className={styles.chartHeader}>
          <h3 className={styles.chartTitle}>Weekly Trend</h3>
        </div>
        <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis 
                dataKey="name" 
                stroke="var(--text-secondary)" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="var(--text-secondary)" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                  border: '1px solid var(--card-border)',
                  borderRadius: '12px',
                  color: '#fff'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="pages" 
                stroke="var(--text-accent)" 
                strokeWidth={3}
                dot={{ r: 4, fill: 'var(--text-accent)', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Monthly Growth */}
      <div className={`${styles.chartCard} ${styles.fullWidth} glass-panel animate-fade-in`} style={{animationDelay: '0.3s'}}>
        <div className={styles.chartHeader}>
          <h3 className={styles.chartTitle}>Monthly Growth & Comparison</h3>
        </div>
        <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="colorPages" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--success-color)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--success-color)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis 
                dataKey="name" 
                stroke="var(--text-secondary)" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="var(--text-secondary)" 
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(15, 23, 42, 0.9)', 
                  border: '1px solid var(--card-border)',
                  borderRadius: '12px',
                  color: '#fff'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="pages" 
                stroke="var(--success-color)" 
                fillOpacity={1} 
                fill="url(#colorPages)" 
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
