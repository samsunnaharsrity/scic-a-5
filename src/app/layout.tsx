import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/commonPage/navbar";
import Footer from "@/app/components/commonPage/footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgenticAI - Modern SaaS AI Platform",
  description: "Create, deploy, and manage autonomous AI agents with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <div className="flex-1 flex flex-col">
          {children}
<Toaster 
  position="top-right"
  toastOptions={{
    duration: 4000,
    style: {
      borderRadius: '12px',
      background: '#ffffff',
      color: '#111827',
      border: '1px solid #e5e7eb',
      fontSize: '14px',
    },
    success: {
      iconTheme: {
        primary: '#059669',
        secondary: '#fff',
      },
    },
    error: {
      iconTheme: {
        primary: '#ef4444',
        secondary: '#fff',
      },
    },
  }}
/>        </div>
        <Footer />
      </body>
    </html>
  );
}
