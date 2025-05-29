import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import littleLemon from "@/public/images/little-lemon-screensh2.png";
import pokedex from "@/public/images/pokedex.png";
import shuu from "@/public/images/shuu.png";

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
    title: "Weather App",
    description:
      "This is a simple weather app I created to learn how to fetch data from an external API, working with the OpenWeatherMap API.",
    tags: ["Next.js", "Typescript", "Tailwind", "react-query"],
    imageUrl: shuu,
    siteUrl: "https://shuu.leromebrown.com/",
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
