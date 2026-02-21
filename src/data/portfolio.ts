/**
 * Edit this file to customize your portfolio content.
 */

export const site = {
  name: "Junho Lee",
  tagline: "Developer & creator",
  email: "junho@junho-lee.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/junholee05/" },
  ],
} as const;

export const about = {
  heading: "About",
  body: "I'm Junho Lee, and I'm studying Industrial and Operations Engineering at the University of Michigan.",
} as const;

export const projects = [
  {
    title: "Project One",
    description: "Short description of what this project does and what you learned.",
    href: "#",
    tags: ["React", "TypeScript", "Vite"],
  },
  {
    title: "Project Two",
    description: "Another project with a brief summary and tech stack.",
    href: "#",
    tags: ["Node", "API", "Database"],
  },
  {
    title: "Project Three",
    description: "A third project to show range—design, backend, or tooling.",
    href: "#",
    tags: ["Design", "UI", "Figma"],
  },
] as const;
