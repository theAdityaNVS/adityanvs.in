import { Project, Skill, Experience, SocialLink, Service } from './types';

export const RESUME_DATA = {
  name: "Aditya Nadamuni",
  title: "Full Stack Developer | MERN Specialist",
  bio: "I transform complex problems into beautiful, intuitive web applications. Specializing in the MERN stack, I build scalable solutions with a focus on smooth animations and user-centric design.",
  location: "Hyderabad, India",
  email: "aditya.nadamuni@gmail.com",
  availability: "Available",
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
  { name: "Gemini / OpenAI", level: 85, category: "ai", icon: "sparkles" },
  { name: "Docker / AWS", level: 70, category: "tools", icon: "container" },
  { name: "Git / CI/CD", level: 85, category: "tools", icon: "git-branch" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI-Powered SaaS Starter",
    description: "A comprehensive Next.js boilerplate featuring authentication, payment integration (Stripe), and AI text generation endpoints. Designed for rapid startup deployment.",
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    demoUrl: "#",
    githubUrl: "https://github.com/theAdityaNVS/saas-starter",
    featured: true,
  },
  {
    id: "2",
    title: "Real-time Collab Platform",
    description: "A collaborative whiteboard application allowing multiple users to draw and chat in real-time. Built with WebSockets for low-latency communication.",
    tags: ["React", "Socket.io", "Node.js", "Redis"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    demoUrl: "#",
    githubUrl: "https://github.com/theAdityaNVS/collab-platform",
    featured: true,
  },
  {
    id: "3",
    title: "E-Commerce Microservices",
    description: "A scalable backend architecture for high-traffic e-commerce sites. Decomposed into microservices for orders, inventory, and users using Docker.",
    tags: ["Node.js", "Docker", "Kubernetes", "MongoDB"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    featured: false,
    githubUrl: "https://github.com/theAdityaNVS/ecommerce-backend"
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Senior Full Stack Engineer",
    company: "TechNova Solutions",
    period: "2022 - Present",
    description: "Spearheading the migration of legacy monoliths to microservices. Implemented a new design system reducing development time by 30%. Mentored junior developers on React patterns.",
  },
  {
    id: "2",
    role: "Software Developer",
    company: "Innovate Digital",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client-facing web applications. Optimized database queries in MongoDB, resulting in a 40% reduction in API response times.",
  },
  {
    id: "3",
    role: "Frontend Developer Intern",
    company: "StartUp Inc",
    period: "2019 - 2020",
    description: "Collaborated with UI/UX designers to implement responsive landing pages. Gained hands-on experience with Redux state management and RESTful API integration.",
  },
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/theAdityaNVS", icon: "github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/theadityanvs/", icon: "linkedin" },
  { platform: "Twitter", url: "https://twitter.com", icon: "twitter" },
];
