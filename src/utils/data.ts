import RecipieImg from "../assets/images/recipie.png"
import Traveloop from "../assets/images/traveloop.png"
import Homefinder from "../assets/images/homefinder.png"

export const navLinks = [
  {
    linkName: "Home",
    id: "home",
    divider: true,
  },
  {
    linkName: "Skills",
    id: "skills",
    divider: true,
  },
  {
    linkName: "Work",
    id: "work",
    divider: true,
  },
  {
    linkName: "Get in Touch",
    id: "getintouch",
    divider: false,
  },
]

export const skillsData = [
  {
    skillName: "React",
    id: "react",
  },
  {
    skillName: "Typescript",
    id: "typescript",
  },
  {
    skillName: "Javascript",
    id: "javascript",
  },
  {
    skillName: "NextJS",
    id: "nextjs",
  },
  {
    skillName: "Svelte",
    id: "svelte",
  },
  {
    skillName: "Github",
    id: "github",
  },
  {
    skillName: "CSS",
    id: "css",
  },
  {
    skillName: "HMTL",
    id: "html",
  },
  {
    skillName: "Git",
    id: "git",
  },
  {
    skillName: "SASS",
    id: "sass",
  },
  {
    skillName: "Tailwind",
    id: "tailwind",
  },
]

export const otherSkills = [
  {
    skillName: "VS Code",
    id: "vscode",
  },
  {
    skillName: "Firebase",
    id: "firebase",
  },
  {
    skillName: "Figma",
    id: "figma",
  },
  {
    skillName: "Adobe XD",
    id: "adobexd",
  },
]

export const projectsInfo = [
  {
    name: "HomeFinder",
    overTitle: "Search properties",
    description:
      "HomeFinder is a NextJS app where you can find  rental or for sale properties and you can filter and sorting results based on location, bedroom number, price and accommodation type. It uses real data from Zoopla API. HomeFinder is completely responsive feel free to adjust your browser's viewport width",
    id: "homefinder",
    image: Homefinder,
    stackUsed: [
      { stackName: "React", stackId: "react" },
      { stackName: "Next.js", stackId: "next" },
      { stackName: "Firestore", stackId: "firestore" },
      { stackName: "Tailwind", stackId: "tailwind" },
    ],
    packagesUsed: [
      { packageName: "axios", packageId: "axios" },
      { packageName: "millify", packageId: "millify" },
      { packageName: "nprogress", packageId: "nprogress" },
      { packageName: "react-icons", packageId: "react-icons" },
    ],
  },
  {
    name: "Recipie",
    overTitle: "Save your recipies",
    description:
      "Recipie is A CRA (create-react-app) app where you can save food recipies and also favorite recipies to your favorites tab. Your recipies are saved on google's no-sql firestore database. Recipie is completely responsive feel free to adjust your browser's viewport width",
    image: RecipieImg,
    id: "recipie",
    stackUsed: [
      { stackName: "React", stackId: "react" },
      { stackName: "Firestore", stackId: "firestore" },
      { stackName: "SASS", stackId: "sass" },
    ],
    packagesUsed: [
      { packageName: "framer-motion", packageId: "framer-motion" },
      { packageName: "react-spinners", packageId: "react-spinners" },
      { packageName: "the-new-css-reset", packageId: "the-new-css-reset" },
      { packageName: "react-icons", packageId: "react-icons" },
      { packageName: "uuid", packageId: "uuid" },
    ],
  },
  {
    name: "Traveloop",
    overTitle: "Read travel posts",
    description:
      "Traveloop is a NextJS blog that displays blog categories, blog posts and individual post pages based on the same template. All data is drawn from firestore the no-sql database of firebase. Traveloop is completely responsive feel free to adjust your browser's viewport width",
    image: Traveloop,
    id: "traveloop",
    stackUsed: [
      { stackName: "React", stackId: "react" },
      { stackName: "Next.js", stackId: "next" },
      { stackName: "Firestore", stackId: "firestore" },
      { stackName: "Firebase Auth", stackId: "firebase-auth" },
      { stackName: "SASS", stackId: "sass" },
    ],
    packagesUsed: [
      { packageName: "yup", packageId: "yup" },
      { packageName: "react-hook-form", packageId: "react-hook-form" },
      { packageName: "@hookform/resolvers", packageId: "@hookform/resolvers" },
      { packageName: "framer-motion", packageId: "framer-motion" },
      { packageName: "react-icons", packageId: "react-icons" },
      { packageName: "the-new-css-reset", packageId: "the-new-css-reset" },
    ],
  },
]

export const noteWorthyProjects = [
  {
    title: "asdasd",
    description: "asdasd",
    stack: ["HTML", "CSS", "Typescript"],
  },
]

export const ctaButtons = [
  {
    text: "Github Account",
    id: "github-account",
  },
  {
    text: "LinkedIn account",
    id: "linkedin-account",
  },
]

export const sectionTitles = [
  {
    titleName: "My Skills_",
    id: "my-skills",
  },
  {
    titleName: "Projects I've built",
    id: "projects-built",
  },
  {
    titleName: "Noteworthy Smaller Projects",
    id: "noteworthy-projects",
  },
  {
    titleName: "Get in Touch_",
    id: "get-in-touch",
  },
]
