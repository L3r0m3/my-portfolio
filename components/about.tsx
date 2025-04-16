// use client side rendering
"use client";

// Import required React components and hooks
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

// Component function
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="
        mb-28 max-w-[45rem]
        text-center leading-8
        sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-medium">Junior Frontend Developer</span>{" "}
        with a{" "}
        <span className="font-medium">
          Meta Frontend Developer Certification
        </span>
        ,{" "}
        <span className="italic">
          driven by a deep passion for programming and problem-solving.
        </span>{" "}
        I'm constantly motivated to embrace new technologies and expand my skill
        set.
      </p>
      <p>
        Beyond coding, I find balance in life through activities like jogging,
        Muay Thai and meditation. <span className="underline">I thrive</span> on
        turning{" "}
        <span className="font-medium">
          ideas into functional and user-friendly applications
        </span>{" "}
        and am{" "}
        <span className="italic">always eager to take on new challenges</span>.{" "}
        <span className="underline">Join me</span> on my journey as I explore
        the ever-evolving world of technology and continue to grow as a
        developer.
      </p>
    </motion.section>
  );
}
