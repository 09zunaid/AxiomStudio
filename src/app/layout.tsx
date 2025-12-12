import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navigation } from "@/components/layout/Navigation";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Axiom Studio",
  description: "Avant-Garde Design Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-axiom-1 text-foreground selection:bg-axiom-9 selection:text-axiom-1" suppressHydrationWarning>
        <SmoothScroll>
          <NoiseOverlay />
          <CustomCursor />
          <Navigation />
          <main className="relative z-10 min-h-screen w-full">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
