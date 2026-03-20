import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Puppies Dashboard | Cities Data Extraction",
  description: "Monitor cities data extraction status",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <main className="app-container">
          {children}
        </main>
      </body>
    </html>
  );
}
