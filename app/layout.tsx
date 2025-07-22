import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo as Navbar } from "./_components/navBar";
import Footer from "./_components/footer";
import ThemeProvider from "./_components/theme-provider";
import { GlobalCoolMode } from "./contact/global-cool-mode";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FALCON INDUSTRY - Professional Services",
  description: "FALCON INDUSTRY provides top-quality professional services including web development, design, and digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <GlobalCoolMode options={{ particleCount: 10, speedHorz: 8, speedUp: 28 }}> */}
          <ThemeProvider />
          <Navbar />
          <main>{children}</main>
          <Footer />
        {/* </GlobalCoolMode> */}
      </body>
    </html>
  );
}
