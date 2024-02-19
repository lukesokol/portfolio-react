"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0  scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/me.jpg"
              alt="Łukasz portrait"
              width="192"
              height="192"
              quality="80"
              priority={true}
              className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl dark:border-slate-700"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            ☕
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <code className="font-bold text-cyan-500 dark:text-sky-400">
          Hello, I&apos;m Łukasz.
        </code>{" "}
        I&apos;m a{" "}
        <code className="font-bold text-cyan-500 dark:text-sky-400">
          full-stack developer
        </code>{" "}
        with{" "}
        <code className="font-bold text-cyan-500 dark:text-sky-400">
          3 years
        </code>{" "}
        of experience. I enjoy taking on{" "}
        <code className="italic text-cyan-500 dark:text-sky-400">
          new challenges
        </code>
        . My focus right now is{" "}
        <code className="font-bold text-cyan-500 dark:text-sky-400">
          React & Next.js
        </code>
        .
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-slate-900 px-7 py-3 flex items-center gap-2 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold rounded-lg justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group px-7 py-3 flex items-center text-left space-x-3 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-sky-500 shadow-sm rounded-lg text-slate-900 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700 dark:focus:ring-1"
          href="/Lukasz_Sokolowski_CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="sm:flex items-center text-left space-x-3 p-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-sky-500 shadow-sm rounded-lg text-slate-900 hover:text-slate-700 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700 dark:focus:ring-1 dark:hover:text-white"
          href="https://www.linkedin.com/in/%C5%82ukasz-soko%C5%82owski-32a379244/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="sm:flex items-center text-left space-x-3 p-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-sky-500 shadow-sm rounded-lg text-slate-900 hover:text-slate-700 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700 dark:focus:ring-1 dark:hover:text-white"
          href="https://github.com/lukesokol"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
