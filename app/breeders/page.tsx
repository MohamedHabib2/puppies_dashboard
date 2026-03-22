import { Users, MapPin, Phone, Dog, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";
import prisma from "../lib/prisma";

export const revalidate = 0; // Disable caching to get fresh data

async function getBreeders(page: number, itemsPerPage: number) {
  if (!prisma) return { breeders: [], total: 0 };
  try {
    const [breeders, total] = await Promise.all([
      prisma.sellers.findMany({
        orderBy: [
          { source_date: 'desc' },
          { id: 'desc' }
        ],
        skip: (page - 1) * itemsPerPage,
        take: itemsPerPage
      }),
      prisma.sellers.count()
    ]);
    return { breeders, total };
  } catch (error) {
    console.error("Error fetching breeders:", error);
    return { breeders: [], total: 0 };
  }
}

export default async function BreedersHub({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || '1');
  const itemsPerPage = 10;
  
  const { breeders, total } = await getBreeders(currentPage, itemsPerPage);
  const totalPages = Math.ceil(total / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;

  const getPageUrl = (page: number) => {
    return `/breeders?page=${page}`;
  };

  return (
    <div className={styles.main}>
      <header className={`${styles.header} animate-fade-in`}>
        <div className={styles.headerTitleArea}>
          <h1 className={styles.title}>Breeders Hub</h1>
          <p className={styles.subtitle}>
            Overview of registered sellers and their kennel status.
          </p>
        </div>
      </header>

      <section className={`${styles.tableSection} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
        <div className={styles.tableHeader}>
          <h2 className={styles.sectionTitle}>
            <Users size={20} />
            Detailed Sellers Report
          </h2>
        </div>

        <div className={`${styles.tableContainer} glass-panel`}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th> name </th>
                <th> phone </th>
                <th> address </th>
                <th> dog count </th>
                <th> last update </th>
              </tr>
            </thead>
            <tbody>
              {breeders.length === 0 ? (
                <tr>
                   <td colSpan={5} style={{textAlign: 'center', padding: '60px', color: 'var(--text-secondary)'}}>
                      <p>No records found in sellers table.</p>
                   </td>
                </tr>
              ) : (
                breeders.map((breeder) => (
                  <tr key={breeder.id}>
                    <td>
                      <Link href={`/breeders/${breeder.id}`} className={styles.breederLink}>
                        <div className={styles.breederName}>
                          {String(breeder.name || 'N/A')}
                        </div>
                      </Link>
                    </td>
                    <td>
                      <div className={styles.phoneLabel}>
                        <Phone size={16} style={{ marginRight: '8px', display: 'inline' }} />
                        {String(breeder.phone || 'N/A')}
                      </div>
                    </td>
                    <td>
                      <div className={styles.addressLabel}>
                        <MapPin size={14} style={{ marginRight: '8px', display: 'inline' }} />
                        {String(breeder.location || breeder.city || 'N/A')}
                      </div>
                    </td>
                    <td>
                      <div className={styles.countLabel}>
                        <Dog size={14} style={{ marginRight: '8px', display: 'inline' }} />
                        <span>{breeder.puppies_count || 0}</span>
                      </div>
                    </td>
                    <td>
                      <div className={styles.dateLabel}>
                        <Calendar size={14} style={{ marginRight: '8px', display: 'inline' }} />
                        {breeder.source_date ? (new Date(breeder.source_date)).toLocaleDateString() : 'N/A'}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Pagination Controls */}
          {total > 0 && (
            <div className={styles.pagination}>
              <div className={styles.paginationInfo}>
                Showing <span>{Math.min(startIdx + 1, total)}</span> to <span>{Math.min(startIdx + itemsPerPage, total)}</span> of <span>{total}</span> sellers
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
  );
}
