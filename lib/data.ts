import React from "react";
import { GiRobotGrab } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import fastReactPizzaImg from "@/public/fastreactpizzaco.png";
import farAwayImg from "@/public/faraway.png";
import eatnsplitImg from "@/public/eatnsplit.png";
import usepopcornImg from "@/public/usepopcorn.png";
import classyweatherImg from "@/public/classyweather.png";
import thereactquizImg from "@/public/thereactquiz.png";
import worldwiseImg from "@/public/worldwise.png";
import theatomicblogImg from "@/public/theatomicblog.png";
import thereactreduxbankImg from "@/public/thereactreduxbank.png";
import thewildoasisImg from "@/public/thewildoasislight.png";
import portfoliooldImg from "@/public/portfolio-old-projects.png";
import mrdetailingImg from "@/public/mrdetailing.png";
import superphotosImg from "@/public/superphotos.png";
import remotefactoryImg from "@/public/remotefactorycontrol.png";

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
    title: "Software Engineer / Senior Specialist",
    location: "Deloitte, Warsaw, PL",
    description:
      "Working currently as a Lead Software Engineer on an Australian project. In my career I have been involved in projects for: a leading Slovak bank (lead developer), one of the leading Hungarian banks, one of the leading Australian banks (lead developer).",
    icon: React.createElement(FaCode),
    date: "2021 - present",
  },
  {
    title: "Graphic Designer/Web Administrator",
    location: "MR Detailing Białystok, Białystok, PL",
    description:
      "I am the creator and administrator of the company's website - using only HTML, CSS and JS at the start of my web development journey. I was responsible for making the logo and various variations of it from scratch based on the client's requirements and industry specifics. I also created designs for: fence banners, social media banners, website banners and various versions of business card. Recently, I have only been doing monthly check-ups.",
    icon: React.createElement(MdDesignServices),
    date: "2020 - present",
  },
  {
    title: "Freelance Graphic Designer",
    location: "Warsaw, PL",
    description:
      "I was responsible of creating brand content (e.g. logos, roll-ups, various types of banners, business cards) for MR Detailing Autokosmetyka, Falcon Brothers Autokosmetyka, Galon Oleje, Madok Dekoracja Okien, Be Beauty Mobilny Salon Urody, Pokręcona Budka and others…",
    icon: React.createElement(MdDesignServices),
    date: "2020 - present",
  },
  {
    title: "Intern",
    location: "ARTMATIC S.C., Łódź",
    description:
      "On-site service, design of process visualisation, configuration and testing of MODBUS TCP/IP communication, programming in LAD and SCL, configuration of safety systems and time relays, testing of SCADA MAPS functions.",
    icon: React.createElement(GiRobotGrab),
    date: "2019",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio.py",
    description:
      "First version of my portfolio created using Django, JavaScript and jQuery.",
    tags: ["JavaScript", "jQuery", "Django", "Python", "Figma"],
    imageUrl: portfoliooldImg,
    fromCourse: "false",
  },
  {
    title: "MR Detailing website",
    description:
      "Company's website using plain HTML, CSS and JavaScript at the start of my web-dev journey.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: mrdetailingImg,
    fromCourse: "false",
    website: "true",
  },
  {
    title: "SuperPhotos",
    description:
      "A project for one of the subjects in college inspired by Pinterest.",
    tags: ["JavaScript", "jQuery", "Django", "Python", "Figma"],
    imageUrl: superphotosImg,
    fromCourse: "false",
    website: "true",
  },
  {
    title: "Remote Factory Control",
    description:
      "Simulation of remote factory control, which was the result of my master's thesis.",
    tags: ["JavaScript", "jQuery", "Django", "Python", "Arduino", "OPC UA"],
    imageUrl: remotefactoryImg,
    fromCourse: "false",
    website: "true",
  },
  {
    title: "The Wild Oasis",
    description:
      "Simulation of a booking-like site with broader set of options for user to choose from. User has a fully functional administration dashboard.",
    tags: ["React", "Redux", "React Query", "Tailwind", "Supabase"],
    imageUrl: thewildoasisImg,
    fromCourse: "true",
  },
  {
    title: "Fast React Pizza",
    description:
      "Simulation of a pizzeria web app. You can order some pizzas and track the delivery.",
    tags: ["React", "Redux", "Tailwind"],
    imageUrl: fastReactPizzaImg,
    fromCourse: "true",
  },
  {
    title: "Worldwise",
    description:
      "More advanced app with a world map that tracks your travel adventures. You can find and add new locations to your list.",
    tags: ["React", "Redux", "React Router"],
    imageUrl: worldwiseImg,
    fromCourse: "true",
  },
  {
    title: "The React Quiz",
    description:
      "Quiz to test user's knowledge about React. Initial tests of json-server to simulate some external API data fetching.",
    tags: ["React"],
    imageUrl: thereactquizImg,
    fromCourse: "true",
  },
  {
    title: "Eat-N-Split",
    description:
      "Simulation of a Splitwise-like app for a group of friends. Very easy to provide the data and see the summary.",
    tags: ["React"],
    imageUrl: eatnsplitImg,
    fromCourse: "true",
  },
  {
    title: "usePopcorn",
    description:
      "You can search for your favorite movies and rate them. App provides a summary list with all added items, their count, ratings and so on.",
    tags: ["React"],
    imageUrl: usepopcornImg,
    fromCourse: "true",
  },
  {
    title: "Far Away",
    description:
      "Simple app for making travel list with all necessary items. You can check when your item is already packed and track your progress.",
    tags: ["React"],
    imageUrl: farAwayImg,
    fromCourse: "true",
  },
  {
    title: "Classy Weather",
    description:
      "Very simple app to fetch weather data and display it for given city.",
    tags: ["React"],
    imageUrl: classyweatherImg,
    fromCourse: "true",
  },
  {
    title: "The Atomic Blog",
    description: "Simple blog app to test the performance of React.",
    tags: ["React"],
    imageUrl: theatomicblogImg,
    fromCourse: "true",
  },
  {
    title: "The React-Redux Bank",
    description:
      "Testing the functionalities of Redux by implementing simple simulation of bank operations.",
    tags: ["React", "Redux"],
    imageUrl: thereactreduxbankImg,
    fromCourse: "true",
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
  "Supabase",
  "Redux",
  "OracleSQL",
  "PostgreSQL",
  "Python",
  "Django",
  "Figma",
  "Framer Motion",
  "Data Migration",
  "Data Analysis",
  "Graphic Design",
] as const;
