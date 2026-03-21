import ContactForm from "@/app/components/ContactForm";
import styles from "@/app/page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.main}>
      <header className={`${styles.header} animate-fade-in`}>
        <div className={styles.headerTitleArea}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>We are happy to hear your opinion and suggestions</p>
        </div>
      </header>

      <section className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <ContactForm />
      </section>
    </div>
  );
}

