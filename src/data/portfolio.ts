/**
 * Edit this file to customize your portfolio content.
 */

export const site = {
  name: "Junho Lee",
  tagline: "Developer & creator",
  email: "hello@junholee.com",
  links: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
  ],
} as const;

export const about = {
  heading: "About",
  body: `I build things for the web and love turning ideas into clean, fast experiences. 
  When I'm not coding, I'm probably reading, exploring new tools, or tweaking side projects.`,
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
