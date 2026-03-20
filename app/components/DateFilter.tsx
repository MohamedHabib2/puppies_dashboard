'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Calendar } from 'lucide-react';
import styles from '../page.module.css';

export default function DateFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentDate = searchParams.get('date') || '';

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (newDate) {
      // Convert YYYY-MM-DD to DD/MM/YYYY if needed, but for now let's keep it consistent
      // The user mentioned 20/3/2026. HTML date input uses YYYY-MM-DD.
      // Let's store as YYYY-MM-DD in URL for easier parsing, but we might need to format for DB.
      params.set('date', newDate);
    } else {
      params.delete('date');
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className={styles.filterWrapper}>
      <Calendar size={18} className={styles.filterIcon} />
      <input
        type="date"
        value={currentDate}
        onChange={handleDateChange}
        className={styles.dateInput}
        aria-label="Filter by date"
      />
    </div>
  );
}
