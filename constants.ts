import { Project, Skill, Experience, SocialLink, Service } from './types';

export const RESUME_DATA = {
  name: "Aditya Nadamuni",
  title: "Full Stack Developer | MERN Specialist",
  bio: "I transform complex problems into beautiful, intuitive web applications. Specializing in the MERN stack, I build scalable solutions with a focus on smooth animations and user-centric design.",
  location: "Bangalore, India",
  email: "contact@adityanadamuni.dev",
  availability: "Open to new opportunities",
};

export const SERVICES: Service[] = [
  { title: "App Development", description: "Building robust web and mobile applications using React and React Native ecosystem.", icon: "app" },
  { title: "UI/UX Engineering", description: "Translating design concepts into pixel-perfect, interactive experiences with Tailwind CSS.", icon: "palette" },
  { title: "AI Integration", description: "Enhancing applications with intelligent features using Gemini and OpenAI APIs.", icon: "sparkles" },
  { title: "Backend Architecture", description: "Designing scalable APIs and database schemas with Node.js and MongoDB.", icon: "server" },
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: "frontend", icon: "atom" },
  { name: "TypeScript", level: 90, category: "frontend", icon: "file-code" },
  { name: "Tailwind CSS", level: 95, category: "frontend", icon: "palette" },
  { name: "Node.js / Express", level: 85, category: "backend", icon: "server" },
  { name: "MongoDB / SQL", level: 80, category: "backend", icon: "database" },
  { name: "Gemini API", level: 85, category: "ai", icon: "sparkles" },
  { name: "Docker / AWS", level: 70, category: "tools", icon: "container" },
  { name: "Git / CI/CD", level: 85, category: "tools", icon: "git-branch" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Nebula Dashboard",
    description: "A real-time analytics dashboard powered by AI for predictive insights. Features dark mode, drag-and-drop widgets, and natural language query processing.",
    tags: ["React", "TypeScript", "Gemini API", "Recharts"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "EcoMarket",
    description: "A sustainable e-commerce marketplace built with the MERN stack. Includes geolocation features, payment processing with Stripe, and AI product recommendations.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "3",
    title: "DevFlow CLI",
    description: "A command-line tool for developers to scaffold projects and manage cloud deployments efficiently. Written in Rust and wrapped for Node.js.",
    tags: ["Rust", "Node.js", "CLI"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    featured: false,
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Senior Frontend Engineer",
    company: "TechNova Corp",
    period: "2021 - Present",
    description: "Leading the frontend team in migrating legacy monoliths to micro-frontends using React and Module Federation. Improved performance by 40%.",
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "Creative Solutions Studio",
    period: "2019 - 2021",
    description: "Built custom web applications for high-profile clients using the MERN stack. Integrated complex 3D animations using Three.js.",
  },
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com", icon: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { platform: "Twitter", url: "https://twitter.com", icon: "twitter" },
];
