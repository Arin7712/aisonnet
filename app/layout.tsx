import type { Metadata } from "next";
import {Montserrat} from "next/font/google"
import { Space_Grotesk } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";

const montserrat = Montserrat({
  subsets:['latin']
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin']
})

const inter = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "AI Sonnet | AI Automations Agency",
  description: "We automate your daily business workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body
        className={`${inter.className} antialiased`}
      >
        <div className="hidden md:block">
        
        </div>
        {children}
      </body>
    </html>
  );
}
