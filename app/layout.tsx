import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Playfair_Display } from 'next/font/google';
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({ subsets: ['latin'], weight: '700' });

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'], 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fav Book Recommender",
  description: "AI powered book recommender",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={merriweather.className}
      >
        {children}
      </body>
    </html>
  );
}
