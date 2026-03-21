import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";


export const metadata: Metadata = {
  title: "Puppies Dashboard | Cities Data Extraction",
  description: "Monitor cities data extraction status",
  icons: {
    icon: '/icon.svg', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <div className="dashboard-layout">
          <Sidebar />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
