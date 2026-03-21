"use client";

import { Activity, Database, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={`${styles.sidebar} glass-panel`}>
      <div className={styles.brand}>
        <div className={styles.brandIconWrapper}>
          <Database className={styles.brandIcon} size={24} />
        </div>
        <span>Puppies Dashboard</span>
      </div>
      
      <nav className={styles.nav}>
        <Link 
          href="/" 
          className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
        >
          <LayoutDashboard size={20} />
          Overview
        </Link>
        <Link 
          href="/reports" 
          className={`${styles.navLink} ${pathname === "/reports" ? styles.active : ""}`}
        >
          <Activity size={20} />
          Reports
        </Link>
      </nav>

      <div className={styles.sidebarFooter}>
          <div className={styles.statusBadge}>
              <div className={styles.statusPulse}></div>
              System Online
          </div>
      </div>
    </aside>
  );
}
