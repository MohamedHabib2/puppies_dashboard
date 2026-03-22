"use client";

import { useEffect, useState } from "react";
import styles from "./priority.module.css";
import { Zap, GripVertical, MapPin, Plus, Loader2, Trash2 } from "lucide-react";
import { addCityAction, deleteCityAction, fetchCitiesAction, saveCitiesOrderAction } from "@/app/actions/priority";

interface CityItem {
  id: string;
  name: string;
}

const initialDummyCities: CityItem[] = [
  { id: "d1", name: "Cairo (Dummy)" },
  { id: "d2", name: "Alexandria (Dummy)" },
  { id: "d3", name: "Giza (Dummy)" },
];

export default function PriorityPage() {
  const [cities, setCities] = useState<CityItem[]>([]);
  const [newCityName, setNewCityName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const [successStatus, setSuccessStatus] = useState<string | null>(null);
  const [isLateNight, setIsLateNight] = useState(false);
  const [isSavingOrder, setIsSavingOrder] = useState(false);
  const [tomorrowDate, setTomorrowDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Initialize data on mount
  useEffect(() => {
    async function loadCities() {
      try {
        const dbCities = await fetchCitiesAction();
        if (dbCities && dbCities.length > 0) {
          setCities(dbCities.map((c: any) => ({ id: String(c.id), name: c.city })));
        } else {
          setCities(initialDummyCities);
        }
      } catch (err) {
        console.error("Fetch failed", err);
        setCities(initialDummyCities);
      }
    }

    const checkCairoTime = () => {
      const now = new Date();
      const cairoTimeStr = new Intl.DateTimeFormat('en-GB', { 
        timeZone: 'Africa/Cairo', 
        hour: '2-digit', 
        hour12: false 
      }).format(now);
      const hour = parseInt(cairoTimeStr);
      
      if (hour >= 0 && hour < 24) {
        setIsLateNight(true);
        const tomorrow = new Date(now);
        tomorrow.setDate(now.getDate() + 1);
        const tomorrowStr = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Cairo',
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }).format(tomorrow);
        setTomorrowDate(tomorrowStr);
      }
    };

    loadCities();
    checkCairoTime();
  }, []);

  const handleSaveOrder = async () => {
    setIsSavingOrder(true);
    setErrorStatus(null);
    setSuccessStatus(null);

    const orderedIds = cities.filter(c => !c.id.startsWith('d')).map(c => c.id);
    
    if (orderedIds.length === 0) {
      setErrorStatus("No real cities in the queue to save.");
      setIsSavingOrder(false);
      return;
    }

    const result = await saveCitiesOrderAction(orderedIds);
    if (result.success) {
      setSuccessStatus("Queue order saved successfully to database!");
      setTimeout(() => setSuccessStatus(null), 3000);
    } else {
      setErrorStatus(result.error || "Failed to save order.");
    }
    setIsSavingOrder(false);
  };

  const handleAddCity = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCityName.trim()) return;

    setIsSubmitting(true);
    setErrorStatus(null);
    setSuccessStatus(null);

    const result = await addCityAction(newCityName);

    if (result.success && result.city) {
      const cityData = result.city;
      const newCityObj: CityItem = { id: String(cityData.id), name: cityData.city };
      setCities(prev => [newCityObj, ...prev]);
      setNewCityName("");
      setSuccessStatus(`Successfully added '${cityData.city}' to DB!`);
      setTimeout(() => setSuccessStatus(null), 3000);
    } else {
      setErrorStatus(result.error || "Failed to add city.");
    }

    setIsSubmitting(false);
  };

  const handleManualPriority = (currentIndex: number, newDisplayIndex: string) => {
    const targetIndex = parseInt(newDisplayIndex) - 1;
    if (isNaN(targetIndex) || targetIndex < 0 || targetIndex >= cities.length) {
      return;
    }
    if (targetIndex === currentIndex) return;

    const newCities = [...cities];
    const [itemToMove] = newCities.splice(currentIndex, 1);
    newCities.splice(targetIndex, 0, itemToMove);
    setCities(newCities);
  };

  const handleDeleteCity = async (id: string) => {
    if (id.startsWith('d')) {
        setCities(prev => prev.filter(c => c.id !== id));
        return;
    }
    if (!confirm("Are you sure you want to delete this city?")) return;
    const result = await deleteCityAction(id);
    if (result.success) {
        setCities(prev => prev.filter(c => c.id !== id));
        setSuccessStatus("City deleted successfully.");
        setTimeout(() => setSuccessStatus(null), 3000);
    } else {
        setErrorStatus(result.error || "Failed to delete city.");
    }
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedItemIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = () => {
    setDraggedItemIndex(null);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedItemIndex === null || draggedItemIndex === index) return;

    const newCities = [...cities];
    const itemToMove = newCities[draggedItemIndex];
    newCities.splice(draggedItemIndex, 1);
    newCities.splice(index, 0, itemToMove);

    setDraggedItemIndex(index);
    setCities(newCities);
  };

  const filteredCities = cities
    .map((city, actualIndex) => ({ ...city, actualIndex }))
    .filter(city => 
      city.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className={styles.main}>
      <header className={`${styles.header} animate-fade-in`}>
        <div className={styles.headerTitleArea}>
          <h1 className={styles.title}>Scraping Priority Queue</h1>
          <p className={styles.subtitle}>Add new cities to the queue and reorder them by priority.</p>
        </div>
      </header>

      <section className={`${styles.controlsSection} animate-fade-in`} style={{ animationDelay: '0.1s' }}>
        <div className={styles.controlsGrid}>
            {/* Add City Form */}
            <form onSubmit={handleAddCity} className={`${styles.formPanel} glass-panel`}>
                <div className={styles.inputWrapper}>
                    <MapPin size={18} className={styles.inputIcon} />
                    <input
                        type="text"
                        value={newCityName}
                        onChange={(e) => setNewCityName(e.target.value)}
                        placeholder="Add new city..."
                        className={styles.textInput}
                    />
                </div>
                <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
                   {isSubmitting ? <Loader2 size={18} className="spin" /> : <Plus size={18} />}
                </button>
            </form>

            {/* Search Filter Box */}
            <div className={`${styles.formPanel} glass-panel`}>
                <div className={styles.inputWrapper}>
                    <div 
                        onClick={() => setSearchQuery("")}
                        className={styles.inputIcon}
                        style={{ cursor: 'pointer', zIndex: 2 }}
                    >
                         <Plus size={18} style={{ transform: searchQuery ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }} />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for a city in queue..."
                        className={styles.textInput}
                    />
                </div>
            </div>
        </div>

        {errorStatus && <div className={`${styles.statusAlert} ${styles.error}`}>{errorStatus}</div>}
        {successStatus && <div className={`${styles.statusAlert} ${styles.success}`}>{successStatus}</div>}
        {isLateNight && (
          <div className={`${styles.statusAlert} ${styles.warning}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Zap size={20} />
            <span style={{ fontWeight: 600 }}> now we started cycle the next cycle will start at {tomorrowDate}</span>
          </div>
        )}
      </section>

      <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
         <div className={styles.queueHeader}>
            <h2 className={styles.sectionTitle} style={{ margin: 0 }}>
                Queue Order ({filteredCities.length} {searchQuery ? 'results' : 'total'})
            </h2>
            <button
               onClick={handleSaveOrder}
               disabled={isSavingOrder || cities.length === 0}
               className={styles.saveOrderButton}
            >
               {isSavingOrder ? <Loader2 size={16} className="spin" /> : <Zap size={16} />}
               Submit New Order
            </button>
         </div>

         <div className={styles.citiesGrid}>
           {filteredCities.map((city) => (
             <div
               key={city.id}
               draggable
               onDragStart={(e) => handleDragStart(e, city.actualIndex)}
               onDragEnd={handleDragEnd}
               onDragOver={(e) => handleDragOver(e, city.actualIndex)}
               className={`${styles.cityCard} glass-panel ${draggedItemIndex === city.actualIndex ? styles.cityCardActive : ''}`}
             >
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                 <div className={styles.cityIconBox}>
                   <MapPin size={18} />
                 </div>
                 <div style={{ flex: 1 }}>
                   <span style={{ fontWeight: 600, fontSize: '1rem', color: '#fff' }}>{city.name}</span>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Pos:</span>
                      <input 
                        key={`${city.id}-${city.actualIndex}`}
                        type="number" 
                        defaultValue={city.actualIndex + 1}
                        onBlur={(e) => handleManualPriority(city.actualIndex, e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleManualPriority(city.actualIndex, (e.target as HTMLInputElement).value);
                                (e.target as HTMLInputElement).blur();
                            }
                        }}
                        className={styles.posInput}
                      />
                   </div>
                 </div>
               </div>
               
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button 
                    onClick={() => handleDeleteCity(city.id)}
                    className={styles.deleteButton}
                  >
                    <Trash2 size={16} />
                  </button>
                  <GripVertical size={20} style={{ color: 'var(--text-secondary)', opacity: 0.5 }} />
               </div>
             </div>
           ))}
         </div>

         <div className={styles.infoBox}>
            <Zap size={16} style={{ color: 'var(--text-accent)' }} />
            <span>Drag cities to reorder. Submit button saves the sequence to database.</span>
         </div>
      </section>

      <style jsx>{`
        .spin {
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
