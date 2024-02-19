"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 1);

  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] text-center leading-8 scroll-mt-28  mb-28 sm:mb-0"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-slate-600 dark:text-slate-400">
        I am a <span className="font-medium">Software Engineer</span>, currently
        working on my <span className="font-medium">React</span> skills, when
        being employed for Deloitte in Warsaw. I graduated from the Warsaw
        University of Technology with a master's degree in automation, robotics
        and industrial informatics.
      </p>
      <p className="mb-3 text-slate-600 dark:text-slate-400">
        <span className="italic">Besides my professional experience</span>, I am
        working on my{" "}
        <span className="font-medium">frontend/web development</span> skills, as
        I am self-taught in almost every tech stack included in my portfolio.
        Drawing, computer graphics and all that is related to it are the things
        I have always wanted to focus on ever since I can remember. Since I tend
        to take many opportunities to learn something new, I enjoy taking new{" "}
        <span className="italic font-medium">challenges</span>. I{" "}
        <span className="underline">love</span> the moment of finally finding
        out a solution to some tough problem.
      </p>
      <p className="text-slate-600 dark:text-slate-400">
        <span className="italic">In my free time</span>, I enjoy playing video
        and board games, watching movies and doing some sport activities. I also
        enjoy <span className="font-medium">traveling</span>, which is a credit
        to my woman for lighting the flame of traveler in me.
      </p>
    </motion.section>
  );
}
