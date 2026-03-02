import type { Metadata } from "next";
import { Outfit, Lexend } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SparkBots | Best Robotics Kit for Kids in India | STEM Educational Toys",
  description: "Premium, BIS-certified robotics kits for kids ages 6-12. Empowering the next generation of engineers with hands-on STEM learning. The Apple of kids robotics.",
  keywords: "robotics kit for kids, best STEM toys India, robotics kit for class 1, educational toys for 10 year olds, SparkBots India, ATL lab kit",
  icons: {
    icon: "/img/1.svg",
    apple: "/img/1.svg",
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StarCursor } from "@/components/ui/StarCursor";
import { ThemeProvider } from "@/lib/theme-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${lexend.variable} font-lexend antialiased selection:bg-primary selection:text-white`}
      >
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <div className="relative z-20 bg-background min-h-screen">
              <AnnouncementBar />
              <Navbar />
              <main>
                {children}
              </main>
            </div>
            <div className="sticky bottom-0 z-10 w-full">
              <Footer />
            </div>
            <WhatsAppButton />
            <StarCursor />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
