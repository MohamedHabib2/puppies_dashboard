import { PrismaClient } from "../../generated/prisma";
import prisma from "../../lib/prisma";
import Link from "next/link";
import { ChevronLeft, MapPin, Phone, Dog, Calendar, ExternalLink, Tag, Package, Clock } from "lucide-react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

export const revalidate = 0;

async function getBreederData(id: number) {
  if (!prisma) return null;
  try {
    const breeder = await prisma.sellers.findUnique({
      where: { id },
      include: {
        puppy_listings: {
          orderBy: {
            processed_at: 'desc'
          }
        }
      }
    });
    return breeder;
  } catch (error) {
    console.error("Error fetching breeder data:", error);
    return null;
  }
}

export default async function BreederDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);
  
  if (isNaN(id)) {
    return notFound();
  }

  const breeder = await getBreederData(id);

  if (!breeder) {
    return notFound();
  }

  const puppies = breeder.puppy_listings;

  return (
    <div className={styles.main}>
      <header className={`${styles.header} animate-fade-in`}>
        <Link href="/breeders" className={styles.backButton}>
          <ChevronLeft size={16} />
          Back to Breeders
        </Link>
        
        <div className={styles.breederInfo}>
          <div className={styles.headerTitleArea}>
            <h1 className={styles.title}>{String(breeder.name || 'Unnamed Seller')}</h1>
            <div className={styles.breederMeta}>
              {breeder.location || breeder.city ? (
                <div className={styles.metaItem}>
                  <MapPin size={16} className={styles.icon} />
                  {String(breeder.location || breeder.city || '')}
                </div>
              ) : null}
              {breeder.phone ? (
                <div className={styles.metaItem}>
                  <Phone size={16} className={styles.icon} />
                  {String(breeder.phone || '')}
                </div>
              ) : null}
              <div className={styles.metaItem}>
                <Dog size={16} className={styles.icon} />
                {String(puppies.length)} Puppies Listed
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className={`${styles.contentSection} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
        {puppies.length === 0 ? (
          <div className={`${styles.emptyState} glass-panel`}>
             <Dog size={64} className={styles.emptyIcon} />
             <h3>No active listings</h3>
             <p>This seller currently has no puppies in our catalog.</p>
          </div>
        ) : (
          <div className={styles.puppiesGrid}>
            {puppies.map((puppy, index) => (
              <div 
                key={puppy.id} 
                className={`${styles.puppyCard} glass-panel animate-fade-in`}
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                <div className={styles.puppyHeader}>
                  <div className={styles.headerText}>
                    <h3 className={styles.puppyTitle}>{String(puppy.name || 'Puppy')}</h3>
                    <span className={styles.puppyBreed}>{String(puppy.breed || 'Unknown Breed')}</span>
                  </div>
                  {puppy.price && (
                    <div className={styles.priceTag}>
                      {String(puppy.price || '')}
                    </div>
                  )}
                </div>

                <div className={styles.puppyDetails}>
                  {puppy.age && (
                    <div className={styles.detailBadge}>
                      <Clock size={14} />
                      {String(puppy.age || '')}
                    </div>
                  )}
                  {puppy.folder_date && (
                    <div className={styles.detailBadge}>
                      <Calendar size={14} />
                      {String(puppy.folder_date || '')}
                    </div>
                  )}
                  {puppy.listing_url && (
                    <div className={styles.detailBadge}>
                      <Tag size={14} />
                      From source
                    </div>
                  )}
                </div>

                {puppy.listing_url && (
                  <a 
                    href={puppy.listing_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.viewButton}
                  >
                    View Original <ExternalLink size={14} style={{marginLeft: '4px', verticalAlign: 'middle'}} />
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
