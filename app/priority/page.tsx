"use client";

import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";
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
          // Assuming fetchCities returns objects with id, city, priority
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
      
      // If hour is between 00:00 and 05:59
      if (hour >= 0 && hour < 24) {
        setIsLateNight(true);
        // Get tomorrow's date in Cairo
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
    
    console.log("Saving new order:", cities.map((c, i) => `${i + 1}. ${c.name}`));

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
    
    // Validate target index
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
    if (id.startsWith('d')) { // Delete dummy
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

  const handleDragEnd = (e: React.DragEvent) => {
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

      {/* Control Actions Form */}
      <section className="animate-fade-in" style={{ animationDelay: '0.1s', marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* Add City Form */}
            <form onSubmit={handleAddCity} className="glass-panel" style={{ padding: '24px', display: 'flex', gap: '12px' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                    <MapPin size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                    <input
                        type="text"
                        value={newCityName}
                        onChange={(e) => setNewCityName(e.target.value)}
                        placeholder="Add new city..."
                        style={{
                            width: '100%',
                            padding: '14px 14px 14px 44px',
                            borderRadius: '12px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid var(--card-border)',
                            color: '#fff',
                            fontSize: '1rem',
                            outline: 'none',
                        }}
                    />
                </div>
                <button type="submit" disabled={isSubmitting} style={{ padding: '0 24px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--primary-color), var(--text-accent))', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
                   {isSubmitting ? <Loader2 size={18} className="spin" /> : <Plus size={18} />}
                </button>
            </form>

            {/* Search Filter Box */}
            <div className="glass-panel" style={{ padding: '24px', display: 'flex', gap: '12px' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                    <div 
                        onClick={() => setSearchQuery("")}
                        style={{ 
                            position: 'absolute', 
                            left: '16px', 
                            top: '50%', 
                            transform: 'translateY(-50%)', 
                            color: 'var(--text-secondary)', 
                            display: 'flex',
                            cursor: 'pointer',
                            zIndex: 2
                        }}
                    >
                         <Plus size={18} style={{ transform: searchQuery ? 'rotate(45deg)' : 'none' }} />
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for a city in queue..."
                        style={{
                            width: '100%',
                            padding: '14px 14px 14px 44px',
                            borderRadius: '12px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid var(--card-border)',
                            color: '#fff',
                            fontSize: '1rem',
                            outline: 'none',
                        }}
                    />
                </div>
            </div>
        </div>

        {errorStatus && <div style={{ padding: '12px 18px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', color: 'var(--danger-color)' }}>{errorStatus}</div>}
        {successStatus && <div style={{ padding: '12px 18px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', color: 'var(--success-color)' }}>{successStatus}</div>}
        {isLateNight && (
          <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)', color: 'var(--warning-color)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Zap size={20} />
            <span style={{ fontWeight: 600 }}> now we started cycle the next cycle will start at {tomorrowDate}</span>
          </div>
        )}
      </section>

      <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0 }}>
                Queue Order ({filteredCities.length} {searchQuery ? 'results' : 'total'})
            </h2>
            <button
               onClick={handleSaveOrder}
               disabled={isSavingOrder || cities.length === 0}
               style={{
                  padding: '10px 20px',
                  borderRadius: '10px',
                  background: 'var(--success-color)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)'
               }}
            >
               {isSavingOrder ? <Loader2 size={16} className="spin" /> : <Zap size={16} />}
               Submit New Order
            </button>
         </div>

         <div 
           style={{ 
             display: 'grid', 
             gridTemplateColumns: 'repeat(4, 1fr)', 
             gap: '20px'
           }}
         >
           {filteredCities.map((city) => (
             <div
               key={city.id}
               draggable
               onDragStart={(e) => handleDragStart(e, city.actualIndex)}
               onDragEnd={handleDragEnd}
               onDragOver={(e) => handleDragOver(e, city.actualIndex)}
               className="glass-panel"
               style={{
                 padding: '24px',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'space-between',
                 cursor: 'grab',
                 transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                 border: draggedItemIndex === city.actualIndex ? '2px solid var(--text-accent)' : '1px solid var(--card-border)',
                 background: draggedItemIndex === city.actualIndex ? 'rgba(56, 189, 248, 0.1)' : 'var(--card-bg)',
                 transform: draggedItemIndex === city.actualIndex ? 'scale(1.05)' : 'scale(1)',
               }}
             >
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                 <div style={{ 
                   width: '32px', 
                   height: '32px', 
                   borderRadius: '8px', 
                   background: 'rgba(255,255,255,0.05)',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   color: 'var(--text-accent)'
                 }}>
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
                        style={{
                            width: '45px',
                            background: 'rgba(0,0,0,0.2)',
                            border: '1px solid var(--card-border)',
                            borderRadius: '4px',
                            color: 'var(--text-accent)',
                            fontSize: '0.8rem',
                            padding: '2px 4px',
                            textAlign: 'center',
                            outline: 'none'
                        }}
                      />
                   </div>
                 </div>
               </div>
               
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button 
                    onClick={() => handleDeleteCity(city.id)}
                    style={{ 
                        color: 'var(--danger-color)', 
                        opacity: 0.4, 
                        transition: 'opacity 0.2s', 
                        cursor: 'pointer',
                        padding: '4px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0.4'}
                  >
                    <Trash2 size={16} />
                  </button>
                  <GripVertical size={20} style={{ color: 'var(--text-secondary)', opacity: 0.5 }} />
               </div>
             </div>
           ))}
         </div>

         <div style={{ 
           marginTop: '40px', 
           padding: '20px', 
           borderRadius: '12px', 
           background: 'rgba(37, 99, 235, 0.05)',
           border: '1px solid rgba(37, 99, 235, 0.2)',
           textAlign: 'center',
           color: 'var(--text-secondary)',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           gap: '10px'
         }}>
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
