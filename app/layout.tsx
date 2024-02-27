"use client";

import Header from "@/components/header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Fira_Code } from "next/font/google";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesConfig from "../config/particles-config";
import { ISourceOptions } from "@tsparticles/engine";
import ParticlesBackground from "@/components/particles-background";

//👇 Configure our font object
const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-firacode",
});

// Temporary solution - to be changed based on the theme
// var particlesConfigMod = JSON.parse(JSON.stringify(particlesConfig));
// particlesConfigMod.background.color = "";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${firaCode.variable} bg-slate-50 text-slate-950 relative pt-28 sm:pt-36 dark:bg-slate-900 dark:text-slate-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ParticlesBackground />
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
          <Toaster />
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
