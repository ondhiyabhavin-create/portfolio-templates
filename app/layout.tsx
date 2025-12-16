import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Script
          id="template-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-template');
                  // Default to light template if not set
                  if (!saved || saved === 'ai-template') {
                    saved = 'ai-template-light';
                    localStorage.setItem('portfolio-template', 'ai-template-light');
                  }
                  
                  // Set background based on template
                  if (saved === 'ai-template-light') {
                    document.documentElement.style.backgroundColor = '#ffffff';
                    document.body.style.backgroundColor = '#ffffff';
                  } else if (saved === 'ai-template-dark') {
                    document.documentElement.style.backgroundColor = 'oklch(0.05 0 0)';
                    document.body.style.backgroundColor = 'oklch(0.05 0 0)';
                  }
                } catch (e) {
                  // If localStorage fails, default to light
                  document.documentElement.style.backgroundColor = '#ffffff';
                  document.body.style.backgroundColor = '#ffffff';
                }
              })();
            `,
          }}
        />
        <TemplateProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </TemplateProvider>
      </body>
    </html>
  );
}
