
import type { LucideIcon } from 'lucide-react';
import type { StaticImageData } from 'next/image';
import airbnbCloneImageFile from '../images/airbnb_clone.png';
import mentoreAgroImageFile from '../images/mentore.png'; // Import the new image

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
  imageUrl: string | StaticImageData; // Can be a URL string or an imported image
  dataAiHint: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

export const projects: ProjectData[] = [
  {
    id: 'project-airbnb-clone',
    title: 'Airbnb Clone',
    description: 'A full-stack clone of Airbnb, demonstrating key booking, listing, and user management features using the MERN stack.',
    longDescription: "This project is a comprehensive full-stack clone of the popular Airbnb platform, developed using the MERN stack (MongoDB, Express.js, React, Node.js). It aims to replicate core functionalities such as user registration and authentication, property listings with detailed descriptions and images, searching and filtering properties, booking management, and user profiles. The frontend is built with React, leveraging its component-based architecture for a dynamic and responsive user interface. The backend, powered by Node.js and Express.js, provides robust RESTful APIs for data handling and business logic, with MongoDB serving as the database. This project showcases skills in full-stack development, API design, and user interface implementation.\n\nBackend code: https://github.com/Kishorkumar28/Clone_OfAirbnb_backend",
    imageUrl: airbnbCloneImageFile,
    dataAiHint: 'airbnb project',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'MongoDB', 'Node.js', 'Express.js'],
    liveLink: 'https://projecthotelbookingbykishor.netlify.app/',
    repoLink: 'https://github.com/Kishorkumar28/Airbnb_clone_Front-End-Code',
  },
  {
    id: 'project-mentore-agro',
    title: 'Mentore Agro Fertilizer Company',
    description: 'Freelance website development for an agro fertilizer company, built with the MERN stack, focusing on product showcase and company information.',
    longDescription: "This personal freelance project involved developing a comprehensive website for Mentore Agro Fertilizer Company. The site was built using the MERN stack (MongoDB, Express.js, React, Node.js) to deliver a robust and dynamic online presence for the company. Key features include a detailed product catalog for their fertilizer products, company information, contact forms, and a user-friendly interface to enhance customer engagement. This project demonstrates the ability to deliver full-stack solutions tailored to client needs.",
    imageUrl: mentoreAgroImageFile,
    dataAiHint: 'agro fertilizer',
    technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'MongoDB', 'Node.js', 'Express.js'],
    liveLink: 'https://mentor-eagroproducts.netlify.app/',
    // repoLink: '#', // Add if available
  },
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
  name: "Portfolio",
  title: "EtherealFolio - Full-Stack Developer",
  description: "Portfolio of a Full-Stack Developer specializing in MERN stack and modern web technologies.",
  author: "Kishorkumar K.",
  professionalSummary: "Creative and detail-oriented Full Stack Developer with strong proficiency in the MERN stack, including React.js, Node.js, and MongoDB. Experienced in building responsive and dynamic web applications, including a full-featured Airbnb clone. Passionate about clean UI/UX, efficient code, and solving real-world problems through technology. Seeking to contribute to forward-thinking development teams in a full stack or specialized front-/back- end role",
};

