import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Portfolio - Łukasz Sokołowski",
  description: "Hope you find something interesting here ☕",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
