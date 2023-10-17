import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import littleLem from "@/public/images/little-lemon-screensh2.png";
import airbnbClone from "@/public/images/airbnb-clone1.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Meta Front-End Developer",
    location: "Online, Coursera",
    description:
      "I graduated after 6 months of studying and now looking for a job.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Little-Lemon",
    description:
      "This is a capstone-project I worked on during the Meta Frontend-Developer certification course.",
    tags: ["React", "Figma", "Chakra-UI"],
    imageUrl: littleLem,
    siteUrl: 'http://little-lemon-mu.vercel.app'
  },
  {
    title: "Airbnb-Clone",
    description:
      "",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma", "Mongodb"],
    imageUrl: airbnbClone,
    siteUrl: 'http://'
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Python",
  "Framer Motion",
] as const;