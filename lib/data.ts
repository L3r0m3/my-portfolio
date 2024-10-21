import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import littleLemon from "@/public/images/little-lemon-screensh2.png";
import pokedex from "@/public/images/pokedex.png";
import airclone from "@/public/images/airclone_screensh.png";

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
    title: "airclone",
    description:
      "Rental Home Project! This cutting-edge web application was built using the latest tech stack (Next.js, TypeScript, Tailwind CSS) and leverages Prisma and MongoDB for database management.",
    tags: [
      "Next.js",
      "Typescript",
      "Tailwind",
      "Next-auth",
      "Mongodb",
      "Prisma",
      "Cloudinary",
      "Axios",
      "Zustand",
      "...",
    ],
    imageUrl: airclone,
    siteUrl: "https://airclone.leromebrown.com/",
  },
  {
    title: "Pokédex",
    description:
      "This is a Pokédex site I created where I learned how to fetch data externaly and working with the Pokémon API, prefetching data, pagination, infinite scroll and searchbar.",
    tags: ["Next.js", "Typescript", "Sass", "react-query"],
    imageUrl: pokedex,
    siteUrl: "https://pokedex.leromebrown.com/",
  },
  {
    title: "Little-Lemon",
    description:
      "This is a capstone-project I worked on during the Meta Frontend-Developer certification course.",
    tags: ["React", "Figma", "Chakra-UI"],
    imageUrl: littleLemon,
    siteUrl: "https://little-lemon.leromebrown.com",
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
