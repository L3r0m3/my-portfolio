import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import littleLem from "@/public/images/little-lemon-screensh2.png";
import pokédex from "@/public/images/pokédex.png";

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

export const qualificationsData = [
  {
    title: "Meta Back-End Developer",
    location: "Online, Coursera",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "Since Okt. 2023 in progress",
    certUrl: "...",
  },
  {
    title: "Meta Front-End Developer",
    location: "Online, Coursera",
    description:
      "I graduated after 6 months of studying and now looking for a job.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
    certUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/FK7QNSNRPG6S",
  },
  {
    title: "Architecting with Google Compute Engine",
    location: "Online, Coursera",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
    certUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/CP3YQDSMXWSS",
  },
] as const;

export const projectsData = [
  {
    title: "Pokédex",
    description:
      "This is a Pokédex site I created where I learned how to fetch data externaly and working with API, prefetching data, pagination and infinite scroll.",
    tags: ["Next.js", "Typescript", "Sass", "react-query"],
    imageUrl: pokédex,
    siteUrl: "https://pokedex-nine-coral.vercel.app/",
  },
  {
    title: "Little-Lemon",
    description:
      "This is a capstone-project I worked on during the Meta Frontend-Developer certification course.",
    tags: ["React", "Figma", "Chakra-UI"],
    imageUrl: littleLem,
    siteUrl: "http://little-lemon-mu.vercel.app",
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
  "Figma",
  "Tailwind",
  "Chakra-UI",
  "Prisma",
  "MongoDB",
  "Python",
  "Framer Motion",
] as const;
