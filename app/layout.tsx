import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const geist = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gautam Balgi / AI and Data Scientist",
  description: "Portfolio of Gautam Balgi. AI/ML Engineer, Data Scientist, and Graduate Researcher at Syracuse University. Building intelligent systems that translate research into real-world impact.",
  keywords: ["Gautam Balgi", "AI Engineer", "Data Scientist", "Machine Learning", "Syracuse University", "NLP", "LLMs", "RAG"],
  authors: [{ name: "Gautam Balgi" }],
  openGraph: {
    title: "Gautam Balgi / AI and Data Scientist",
    description: "Building intelligent systems. MS Applied Data Science, Syracuse University.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable} ${jetbrains.variable}`}>
      <body className="noise">
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
