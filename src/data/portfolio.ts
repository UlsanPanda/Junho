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

export const campusInvolvement = [
  {
    name: "Club or organization name",
    role: "Role (e.g. Member, Treasurer)",
    description: "Brief description of what the club does and your involvement.",
    period: "2024 – Present",
  },
  {
    name: "Another organization",
    role: "Role",
    description: "Short description of activities and impact.",
    period: "2023 – 2024",
  },
] as const;

export const skills = {
  certifications: [
    { name: "Certification name", issuer: "Issuing organization", year: "2024" },
    { name: "Another certification", issuer: "Issuer", year: "2023" },
  ],
  skillGroups: [
    {
      title: "Technical",
      items: ["Python", "R", "Excel", "SQL", "Data analysis"],
    },
    {
      title: "Tools & platforms",
      items: ["Tableau", "JIRA", "Git", "Figma"],
    },
    {
      title: "Other",
      items: ["Project management", "Technical writing"],
    },
  ],
} as const;
