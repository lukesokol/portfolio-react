"use client";

import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { RiGraduationCapFill } from "react-icons/ri";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  fromCourse,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <div className="relative flex-none border border-b-0  border-slate-200/50 rounded-t-lg bg-white/75 group-hover:bg-slate-100/75 transition group-hover:border-slate-300/75 dark:bg-slate-800/50 dark:group-hover:bg-slate-700/50 dark:border-slate-700/50 dark:group-hover:border-slate-500/50 backdrop-blur-[0.25rem]">
        <div className="flex items-center h-8 space-x-1.5 px-3">
          <div className="w-2.5 h-2.5 bg-slate-300 rounded-full group-hover:bg-slate-400 transition dark:bg-slate-700 dark:group-hover:bg-slate-500"></div>
          <div className="w-2.5 h-2.5 bg-slate-300 rounded-full group-hover:bg-slate-400 transition dark:bg-slate-700 dark:group-hover:bg-slate-500"></div>
          <div className="w-2.5 h-2.5 bg-slate-300 rounded-full group-hover:bg-slate-400 transition dark:bg-slate-700 dark:group-hover:bg-slate-500"></div>
        </div>
      </div>
      <section className=" bg-white/75 max-w-[42rem] border border-slate-200/75 rounded-b-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] group-hover:bg-slate-100/75 group-hover:border-slate-300/75 transition sm:group-even:pl-8 dark:bg-slate-800/50 dark:group-hover:bg-slate-700/50 dark:text-white dark:border-slate-700/50 dark:group-hover:border-slate-500/50 backdrop-blur-[0.1rem] dark:backdrop-blur-[0.25rem]">
        <div className="py-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <span className="flex gap-1 items-center my-1 text-xs text-cyan-500 hover:text-cyan-600 transition dark:text-sky-500 dark:hover:text-sky-600">
            {fromCourse === "true" ? (
              <>
                <RiGraduationCapFill />{" "}
                <code className="uppercase text-[0.65rem]">From course</code>
              </>
            ) : (
              ""
            )}
          </span>
          <p className="mt-2 leading-relaxed text-sm text-slate-700 dark:text-slate-400">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-slate-900 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-lg dark:text-slate-200"
                key={index}
              >
                <code>{tag}</code>
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initia] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
