import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaFigma
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiTailwindcss,
  SiPhp,
  SiCanva
} from "react-icons/si";

export const SKILLS = [
  { name: 'Python', icon: FaPython, color: '#3776AB', category: 'Language' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Language' },

  { name: 'React', icon: FaReact, color: '#61DAFB', category: 'Frontend' },
  { name: 'HTML', icon: FaHtml5, color: '#E34F26', category: 'Frontend' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8', category: 'Frontend' },

  { name: 'Node.js', icon: FaNodeJs, color: '#339933', category: 'Backend' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4', category: 'Backend' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Database' },

  { name: 'Figma', icon: FaFigma, color: '#F24E1E', category: 'Design' },
  { name: 'Canva', icon: SiCanva, color: '#00C4CC', category: 'Design' },
];
export const PROJECTS = [
  {
    title: 'Web Scraping System',
    description: 'Developed a system to extract and manage product data efficiently with secure user authentication and data handling.',
    tech: ['ASP.NET', 'MySQL'],
    gradient: 'from-purple-900/40 via-blue-900/30 to-transparent',
    accentColor: '#a855f7',
    emoji: '🌐',
    category: 'E-Commerce Portal',

       live: "#",       // ✅ Project 1 live
    github: "https://github.com/GOKUL-sketch-coder/Web-Scraping" 
  },
  {
    title: 'Customer Relationship Management',
    description: 'Built a CRM system to manage customer interactions, track sales, and improve business relationships through a centralized platform.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    gradient: 'from-cyan-900/40 via-blue-900/30 to-transparent',
    accentColor: '#06b6d4',
    emoji: '📊',
    category: 'Business Application',

       live: "#",       // ✅ Project 1 live
    github: "https://github.com/GOKUL-sketch-coder/customer-relationship-management" 
  },
  {
    title: 'Railway Ticket Reservation System',
    description: 'Designed and developed a web-based system for booking, canceling, and managing railway tickets with real-time seat availability and secure login.',
    tech: ['JavaScript', 'CSS', 'PHP', 'MySQL'],
    gradient: 'from-pink-900/40 via-purple-900/30 to-transparent',
    accentColor: '#f472b6',
    emoji: '🚆',
    category: 'Web Application',

       live: "https://eagri-demo.vercel.app",       // ✅ Project 1 live
    github: "https://github.com/gokul/e-agri" 
  },
  {
  title: 'Modern Portfolio',
  description: 'Designed and developed a modern, responsive personal portfolio website showcasing projects, skills, and certificates with interactive UI and smooth animations.',
  tech: ['React', 'TailwindCSS', 'JavaScript'],
  gradient: 'from-indigo-900/40 via-purple-900/30 to-transparent',
  accentColor: '#6366f1',
  emoji: '💻',
  category: 'Portfolio Website',

     live: "#",       // ✅ Project 1 live
    github: "https://github.com/GOKUL-sketch-coder/Model-Portfolio" 
}
];

  export const CERTIFICATES = [
    {
    title: 'AI Workshop-Ai & Ml',
    issuer: 'Guvi Hcl',
    date: '2026',
    desc: 'Participated in an AI & ML workshop by GUVI & HCL, learning basic machine learning concepts.',
    color: '#10b981',
  },
  {
    title: 'Python Programming',
    issuer: 'Coursera',
    date: '2024',
    desc: 'Learned core Python programming concepts including OOP and problem solving through Coursera.',
    color: '#a855f7',
  },
  {
    title: 'Java Programming',
    issuer: 'Great Learning',
    date: '2023',
    desc: 'Learned core Java programming and OOP concepts through Great Learning.',
    color: '#f63bda',
  },
  {
    title: 'Python For Datascience',
    issuer: 'Cognitive Class',
    date: '2021',
    desc: 'Learned data analysis and visualization using Python through Cognitive Class.',
    color: '#f0f006',
  },
  {
    title: 'Frontend Html & Css',
    issuer: 'IBM Skill Build',
    date: '2023',
    desc: 'Learned to build responsive web pages using HTML and CSS through IBM SkillBuild.',
    color: '#6203f0ea',
  },
];
