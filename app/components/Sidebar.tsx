"use client";

import { Activity, Database, LayoutDashboard, MessageSquare, Zap, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  // Close sidebar when route changes
  useEffect(() => {
    closeSidebar();
  }, [pathname]);

  // Prevent scrolling when mobile sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {/* Mobile Top Header */}
      <header className={styles.mobileHeader}>
        <div className={styles.brand}>
          <div className={styles.brandIconWrapper}>
            <Database className={styles.brandIcon} size={20} />
          </div>
          <span>Puppies Dashboard</span>
        </div>
        <button className={styles.menuButton} onClick={toggleSidebar} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Backdrop for mobile */}
      {isOpen && <div className={styles.backdrop} onClick={closeSidebar} />}

      {/* Sidebar Overlay/Drawer */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.isOpen : ""} glass-panel`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.brand}>
            <div className={styles.brandIconWrapper}>
              <Database className={styles.brandIcon} size={24} />
            </div>
            <span>Puppies Dashboard</span>
          </div>
          <button className={styles.closeButton} onClick={closeSidebar}>
            <X size={24} />
          </button>
        </div>

        {/* Brand visible on desktop */}
        <div className={styles.desktopBrand}>
          <div className={styles.brand}>
            <div className={styles.brandIconWrapper}>
              <Database className={styles.brandIcon} size={24} />
            </div>
            <span>Puppies Dashboard</span>
          </div>
        </div>
        
        <nav className={styles.nav}>
          <Link 
            href="/" 
            className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <LayoutDashboard size={20} />
            Overview
          </Link>
          <Link 
            href="/reports" 
            className={`${styles.navLink} ${pathname === "/reports" ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <Activity size={20} />
            Reports
          </Link>
          <Link 
            href="/breeders" 
            className={`${styles.navLink} ${pathname === "/breeders" ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <Database size={20} />
            Breeders Hub
          </Link>
          <Link 
            href="/priority" 
            className={`${styles.navLink} ${pathname === "/priority" ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <Zap size={20} />
            Special Priority
          </Link>
          <Link 
            href="/contact" 
            className={`${styles.navLink} ${pathname === "/contact" ? styles.active : ""}`}
            onClick={closeSidebar}
          >
            <MessageSquare size={20} />
            Contact Us
          </Link>
        </nav>


        <div className={styles.sidebarFooter}>
            <div className={styles.statusBadge}>
                <div className={styles.statusPulse}></div>
                System Online
            </div>
        </div>
      </aside>
    </>
  );
}
