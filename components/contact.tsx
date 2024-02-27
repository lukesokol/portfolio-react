"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          lukaszsokol97@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <div className="flex-none mt-10 border border-b-0  border-slate-200 rounded-t-lg bg-white transition dark:bg-slate-800 dark:border-slate-700 dark:bg-opacity-80 dark:focus:bg-opacity-100">
        <div className="flex items-center h-8 space-x-1.5 px-3">
          <div className="w-2.5 h-2.5 bg-[#EC6A5F] rounded-full group-hover:bg-slate-400 transition"></div>
          <div className="w-2.5 h-2.5 bg-[#F4BF50] rounded-full group-hover:bg-slate-400 transition"></div>
          <div className="w-2.5 h-2.5 bg-[#61C454] rounded-full group-hover:bg-slate-400 transition"></div>
        </div>
      </div>
      <form
        className="flex flex-col dark:text-slate-300"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully");
        }}
      >
        <input
          className="h-14 px-4 !rounded-none borderBlack !border-b-0 focus:outline-slate-400 dark:bg-slate-800 dark:border-slate-700 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:placeholder-slate-500"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 mb-4 !rounded-b-lg !rounded-t-none borderBlack p-4 focus:outline-slate-400 dark:bg-slate-800 dark:border-slate-700 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:placeholder-slate-500"
          name="message"
          required
          maxLength={5000}
          placeholder="Your message"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
