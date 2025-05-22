
import type { LucideIcon } from 'lucide-react';

export interface NavLinkData {
  href: string;
  label: string;
  isSection?: boolean; // True if it's a link to a section on the current page
}

export const navLinks: NavLinkData[] = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About', isSection: true },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  // { href: '#contact', label: 'Contact', isSection: true }, // Example for a potential contact section
];

export interface SkillData {
  id: string;
  name: string;
  level: number; // Proficiency level (0-100)
  Icon?: LucideIcon; // Optional: Lucide icon component
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Languages';
}

export const skills: SkillData[] = [
  // MERN Stack
  { id: 'react', name: 'React', level: 80, category: 'Frontend' },
  { id: 'nodejs', name: 'Node.js', level: 75, category: 'Backend' },
  { id: 'expressjs', name: 'Express.js', level: 75, category: 'Backend' },
  { id: 'mongodb', name: 'MongoDB', level: 60, category: 'Database' },
  // Other Full-Stack Skills
  { id: 'javascript', name: 'JavaScript (ES6+)', level: 80, category: 'Languages' },
  { id: 'typescript', name: 'TypeScript', level: 80, category: 'Languages' },
  { id: 'html5', name: 'HTML5', level: 95, category: 'Frontend' },
  { id: 'css3', name: 'CSS3', level: 90, category: 'Frontend' },
  { id: 'tailwindcss', name: 'Tailwind CSS', level: 70, category: 'Frontend' },
  { id: 'git', name: 'Git & GitHub', level: 85, category: 'Tools' },
  { id: 'restapi', name: 'RESTful APIs', level: 90, category: 'Backend' },
  { id: 'nextjs', name: 'Next.js', level: 80, category: 'Frontend' },
  { id: 'sql', name: 'SQL', level: 80, category: 'Database' },
];


export interface ProjectData {
  id: string;
  title: string;
  description: string; // Short description for card
  longDescription: string; // Detailed description for case study
  imageUrl: string;
  dataAiHint: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

export const projects: ProjectData[] = [
  {
    id: 'project-1',
    title: 'MERN TaskMaster',
    description: 'A full-stack task management application with user authentication and real-time updates.',
    longDescription: 'TaskMaster is a comprehensive task management solution built with the MERN stack (MongoDB, Express.js, React, Node.js). It features secure user authentication, intuitive task creation and organization, due date tracking, and priority settings. The application utilizes a RESTful API for seamless communication between the React frontend and the Node.js/Express backend. Real-time collaboration features are planned for future iterations.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'task manager',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Tailwind CSS', 'Redux Toolkit'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 'project-2',
    title: 'DevPortfolio CMS',
    description: 'A headless CMS backend tailored for managing developer portfolio content.',
    longDescription: 'This project is a specialized headless CMS designed to power developer portfolios. Built with Node.js, Express, and MongoDB, it provides a robust set of APIs for managing projects, skills, blog posts, and personal information. The system emphasizes ease of content creation and flexible data modeling, allowing developers to easily integrate it with any frontend framework of their choice. Key features include role-based access control, media asset management, and version history for content.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'cms developer',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'Cloudinary', 'Docker'],
    repoLink: '#',
  },
  {
    id: 'project-3',
    title: 'Interactive Data Visualizer',
    description: 'A React-based application for visualizing complex datasets with interactive charts.',
    longDescription: 'The Interactive Data Visualizer is a frontend application developed using React and Recharts (or a similar charting library). It allows users to upload datasets (e.g., CSV files) and generate various types of interactive charts and graphs, such as bar charts, line graphs, and pie charts. The focus is on providing an intuitive user interface for data exploration and customization of visualizations. This project showcases strong frontend development skills and data handling capabilities.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'data visualization',
    technologies: ['React', 'Recharts', 'TypeScript', 'CSS Modules', 'Data Parsing'],
    liveLink: '#',
  },
];

export const siteConfig = {
  name: "EtherealFolio",
  title: "EtherealFolio - Full-Stack Developer",
  description: "Portfolio of a Full-Stack Developer specializing in MERN stack and modern web technologies.",
  author: "Your Name Here", // Replace with actual name
  professionalSummary: "A passionate and results-driven Full-Stack Developer with X years of experience in designing, developing, and deploying web applications using the MERN stack and other modern technologies. Proficient in building scalable, responsive, and user-friendly solutions. Strong problem-solving skills and a collaborative team player dedicated to continuous learning and innovation.", // Replace X and customize
};
