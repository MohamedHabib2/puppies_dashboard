"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { sendContactMessage } from "@/app/actions/contact";

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
      setError(result.error || "حدث خطأ ما");
    }
  }

  return (
    <div className="glass-panel" style={{ padding: "2rem", maxWidth: "600px", margin: "2rem auto" }}>
      <h2 style={{ marginBottom: "1.5rem", fontSize: "1.5rem", fontWeight: "700" }}>Contact Us</h2>
      
      {success ? (
        <div style={{ 
          background: "rgba(16, 185, 129, 0.1)", 
          border: "1px solid var(--success-color)", 
          padding: "1.5rem", 
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          textAlign: "center"
        }}>
          <CheckCircle2 size={48} color="var(--success-color)" />
          <div>
            <h3 style={{ color: "var(--success-color)", marginBottom: "0.5rem" }}> Sent Successfully </h3>
            <p style={{ color: "var(--text-secondary)" }}> Thnk you</p>
          </div>
          <button 
            onClick={() => setSuccess(false)}
            style={{ 
              background: "var(--card-bg)", 
              border: "1px solid var(--card-border)", 
              padding: "0.5rem 1.5rem", 
              borderRadius: "8px",
              marginTop: "0.5rem"
            }}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label htmlFor="message" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}> Message </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Write your message here..."
              style={{
                width: "100%",
                minHeight: "150px",
                padding: "1rem",
                borderRadius: "12px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid var(--card-border)",
                color: "var(--text-primary)",
                fontFamily: "inherit",
                fontSize: "1rem",
                outline: "none",
                transition: "border-color 0.2s ease",
                resize: "vertical"
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = "var(--primary-color)"}
              onBlur={(e) => e.currentTarget.style.borderColor = "var(--card-border)"}
            />
          </div>

          {error && (
            <div style={{ color: "var(--danger-color)", fontSize: "0.9rem", textAlign: "right" }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            style={{
              background: "var(--primary-color)",
              color: "white",
              padding: "1rem",
              borderRadius: "12px",
              fontWeight: "600",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              cursor: isPending ? "not-allowed" : "pointer",
              opacity: isPending ? 0.7 : 1,
              boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)"
            }}
          >
            {isPending ? (
              <>
                <Loader2 size={20} className="animate-pulse" />
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
