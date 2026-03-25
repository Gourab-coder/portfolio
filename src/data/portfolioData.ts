export type SkillGroup = {
  title: string;
  values: string[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export type Experience = {
  role: string;
  company: string;
  duration: string;
  details: string[];
};

export type PortfolioData = {
  brand: string;
  roleLabel: string;
  navLinks: Array<{ label: string; href: string }>;
  hero: {
    greeting: string;
    title: string;
    intro: string;
    subtitle: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    stats: Array<{ value: string; label: string }>;
    highlights: string[];
  };
  about: {
    heading: string;
    paragraphs: string[];
    principles: string[];
  };
  skills: SkillGroup[];
  projects: Project[];
  experience: Experience[];
  contact: {
    email: string;
    phone: string;
    location: string;
    socials: Array<{ label: string; href: string }>;
  };
};

export const portfolioData: PortfolioData = {
  brand: "Gourab Das",
  roleLabel: "Full-Stack Engineer",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    greeting: "Available for impactful product work",
    title: "Building",
    intro: "Gourab Das",
    subtitle:
      "I design and build full-stack experiences that feel polished on the surface and stay maintainable underneath. My work focuses on performant interfaces, practical architecture, and shipping features that solve real user problems.",
    ctaPrimary: { label: "View Projects", href: "#projects" },
    ctaSecondary: { label: "Contact Me", href: "#contact" },
    stats: [
      { value: "1+", label: "Years building web products" },
      { value: "8+", label: "Production-grade projects shipped" },
      { value: "Full stack", label: "From interface to API design" },
    ],
    highlights: [
      "Modern React and Next.js frontends with clear UX focus",
      "Scalable backend services, APIs, and database design",
      "Clean component systems with maintainable developer experience",
    ],
  },
  about: {
    heading: "About Me",
    paragraphs: [
      "I enjoy turning product ideas into reliable, high-quality software with careful attention to both user experience and engineering structure.",
      "My current focus is full-stack development with TypeScript, React, Next.js, Node.js, and modern tooling that keeps teams moving quickly without losing code quality.",
      "I care about building systems that are understandable, performant, and ready to evolve as product needs grow.",
    ],
    principles: [
      "Design with intent, not decoration",
      "Keep code readable under pressure",
      "Optimize for performance and maintainability together",
    ],
  },
  skills: [
    {
      title: "Languages",
      values: ["C++", "TypeScript", "JavaScript", "Python", "SQL"],
    },
    {
      title: "Frontend",
      values: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "SCSS", "Responsive UI"],
    },
    {
      title: "Backend",
      values: ["Node.js", "Express.js", "Flask", "REST APIs", "Authentication"],
    },
    {
      title: "Database & Tools",
      values: ["PostgreSQL", "MongoDB", "SQLite", "Git", "Linux", "Figma", "Vercel"],
    },
    {
      title: "CS Fundamentals & Concepts",
      values: ["Data Structures", "Algorithms", "Database Management Systems", "Object-Oriented Programming", "Computer Networks", "Operating Systems"],
    },
  ],
  projects: [
    {
      title: "ChertNodes",
      description:
        "A hosting and management platform for Minecraft servers with a cleaner operational workflow, stronger information layout, and dashboard-focused UX.",
      stack: ["HTML", "SCSS", "Python", "Flask"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "ProtectX",
      description:
        "A Discord protection platform designed to reduce moderation friction and automate defensive actions for large communities.",
      stack: ["React", "Express", "Discord.js", "Node.js"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Kahoot Answers Viewer",
      description:
        "A lightweight utility project focused on fast interaction flow, dependable Express-based delivery, and simple user-first behavior.",
      stack: ["CSS", "Express", "Node.js"],
      liveUrl: "#",
      repoUrl: "#",
    },
  ],
  experience: [
    {
      role: "Full-Stack Engineer",
      company: "Yukin AI",
      duration: "Jan, 2026 - Present",
      details: [
        "Designed and developed full-stack web applications from planning through deployment.",
        "Built reusable UI systems, API layers, and practical project structures for faster iteration.",
        "Worked directly from user requirements to shape features, workflows, and implementation priorities.",
      ],
    },
  ],
  contact: {
    email: "gourabdas034@gmail.com",
    phone: "+91 93398 56577",
    location: "India || Remote",
    socials: [
      { label: "GitHub", href: "https://github.com/Gourab-coder" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/gourab-das-79a566289" },
      { label: "LeetCode", href: "https://leetcode.com/u/dreams2000/" },
    ],
  },
};
