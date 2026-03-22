"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { sendContactMessage } from "@/app/actions/contact";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null as string | null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(event.currentTarget);
    const result = await sendContactMessage(formData);

    setIsPending(false);

    if (result.success) {
      setSuccess(true);
      (event.target as HTMLFormElement).reset();
    } else {
      setError(result.error || "Something went wrong");
    }
  }

  return (
    <div className={`${styles.formContainer} glass-panel`}>
      <h2 style={{ marginBottom: "1.5rem", fontSize: "1.5rem", fontWeight: "700" }}>Contact Us</h2>
      
      {success ? (
        <div className={styles.successMessage}>
          <CheckCircle2 size={48} color="var(--success-color)" />
          <div>
            <h3 className={styles.successTitle}>Message Sent!</h3>
            <p style={{ color: "var(--text-secondary)" }}>Thank you for your feedback.</p>
          </div>
          <button 
            onClick={() => setSuccess(false)}
            className={styles.secondaryButton}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}> Message </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Write your message here..."
              className={styles.textarea}
            />
          </div>

          {error && (
            <div className={styles.errorMessage}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className={styles.submitButton}
          >
            {isPending ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={20} />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
