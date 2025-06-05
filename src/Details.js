// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import wordpress from "./assets/techstack/wordpress.png"
import shopify from "./assets/techstack/shopify.png"
// Porject Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Heyram",
  tagline: "I build fast, responsive websites with: ",
  web: "-ReactJS   -Shopify   -WordPress",
  img: profile,
  about: `As a B.Sc. Computer Science graduate from Ramakrishna Mission Vivekananda College, I'm actively enhancing my skills through an internship at Aryu. I have hands-on experience building projects including a React.js application, a functional Shopify store, and two WordPress websites. While I'm still expanding my technical expertise, I'm eager to apply my problem-solving abilities in an entry-level developer role where I can contribute to real-world projects while growing professionally.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/heyram-m-232554254/",
  github: "https://github.com/Heyram33",

};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Internship",
    Company: `Aryu Technologies`,
    Location: "Chennai",
    Type: "Full Time",
    Duration: "Dec 2024 - May 2025",
  },
  
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Frontend Development",
    Company: "Coursera - HTML & CSS ",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2024",
  },
  {
    Position: "Shopify",
    Company: `Aryu Academy`,
    Location: "chennai",
    Type: "Full Time",
    Duration: "Dec 2024 ",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  git: git,
  github: github,
  figma: figma,
  wordpress: wordpress,
  shopify: shopify
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Avinsaa",
    image: projectImage1,
    description: `An e-commerce store specializing in eco-friendly wooden toys for children, built with Shopify. Implemented product collections, custom Liquid templates, and secure checkout flow to showcase sustainable play products.`,
    techstack: "Shopify, Liquid, HTML/CSS",
    previewLink: "https://avinsaa.com/",
  },
  {
    title: "HR Metrics",
    image: projectImage2,
    description: `Corporate website for HR analytics services, developed with WordPress and Elementor. Features responsive design, service pages, and contact forms to generate business leads.`,
    techstack: "WordPress, Elementor",
    previewLink: "https://hrmetrics.in/",
  },
  {
    title: "Stream PCB",
    image: projectImage3,
    description: `Informational website for PCB manufacturing solutions, created using WordPress and Elementor. Includes product specifications, technical documentation, and inquiry forms.`,
    techstack: "WordPress, Elementor, JavaScript",
    previewLink: "https://streampcb.com/",
  },
  {
    title: "ARYU Enterprises",
    image: projectImage4,
    description: `Modern company portfolio website built with React.js and Tailwind CSS. Features animated components, responsive layout, and service sections to showcase business capabilities.`,
    techstack: "ReactJS, TailwindCSS, JavaScript",
    previewLink: "https://aryuenterprises.com/",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "heyram334@gmail.com",
  // phone: "+91 12345 67890",
};
