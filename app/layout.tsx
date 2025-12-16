import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { TemplateProvider } from "@/context/TemplateContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhavin Ondhiya | Software Developer & ML Enthusiast",
  description: "ML and AI enthusiast, a dedicated software engineer who loves to work towards projects that make a bigger impact in society.",
  keywords: ["Bhavin Ondhiya", "Software Developer", "Full Stack Developer", "ML Enthusiast", "MERN Stack", "Node.js", "React", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TemplateProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </TemplateProvider>
      </body>
    </html>
  );
}
