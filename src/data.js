export const NAME = 'Sankalpa Sithmina'
export const TITLE = 'Creative Full-Stack Developer'

export const NAV_SECTIONS = [
  { id: 'hero', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const PROJECTS = [
  {
    title: 'E-Passport System',
    tag: 'Web App',
    color: 'magenta',
    desc: 'Secure digital passport management platform designed to simplify passport applications, verification, and document processing.',
    stack: ['React', 'Node.js', 'WebSockets', 'PostgreSQL'],
    repo: 'https://github.com/sana1211/E-Passport-Booking-System',
  },
  {
    title: 'Employee Management System',
    tag: 'WebSite',
    color: 'amber',
    desc: "A centralized web platform for managing employee records, attendance, roles, and organizational activities efficiently.",
    stack: ['Next.js', 'TypeScript', 'Tremor', 'Supabase'],
    repo: 'https://github.com/sana1211',
  },
  {
    title: 'AgriTwin AI',
    tag: 'WebSite',
    color: 'mint',
    desc: 'An AI-powered smart farming platform that helps farmers monitor crops, manage farms, and make data-driven agricultural decisions.',
    stack: ['React Native', 'GraphQL', 'Redis'],
    repo: 'https://github.com/sana1211',
  },
  {
    title: 'Mobile Wallpaper Downloader WebSite',
    tag: 'WebSite',
    color: 'violet',
    desc: "A responsive web platform that allows users to explore, search, and download high-quality wallpapers for mobile devices.",
    stack: ['Python', 'FastAPI', 'React', 'Airflow'],
    repo: 'https://github.com/sana1211/Wallpaper-4k',
  },
  {
    title: 'Automatic Plant Watering System',
    tag: 'Arduino',
    color: 'magenta',
    desc: "An Arduino-based smart irrigation system that automatically monitors soil moisture and waters plants when needed.",
    stack: ['Python', 'FastAPI', 'React', 'Airflow'],
    repo: 'https://github.com/sana1211/Automatic_Plant_Watering_System',
  },
  {
    title: 'Real Time People Counter',
    tag: 'Python',
    color: 'magenta',
    desc: "AI-powered real-time people counting system that detects and tracks people using a camera, accurately counting entries and exits with live occupancy and performance monitoring.",
    stack: ['Python', 'YOLO11', 'OpenCV', 'ByteTrack', 'NumPy'],
    repo: 'https://github.com/sana1211/Real-Time-People-Counter',
  },
  {
    title: 'Wedding Gallery Celebration Story',
    tag: 'Website',
    color: 'magenta',
    desc: "Interactive wedding website with a photo gallery, love story timeline, guestbook, photo uploads, favorites, and event details.",
    stack: ['React.js' , 'TypeScript' , 'Tailwind CSS' , 'Vite' , 'Responsive Web Design'],
    repo: 'https://sana1211.github.io/wedding-gallery-celebration',
  },
  {
    title: 'Wedding Invitation Card',
    tag: 'WEbsite',
    color: 'magenta',
    desc: "Elegant digital wedding invitation featuring countdowns, RSVP, event details, animations, and a responsive design.",
    stack: ['React.js' , 'TypeScript' , 'Tailwind CSS' , 'Vite' , 'Responsive Web Design'],
    repo: 'https://sana1211.github.io/Wedding-invitation',
  },
]

export const SKILLS = [
  {
    group: 'Frontend',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Framer Motion', icon: 'framer' },
    ],
  },
  {
    group: 'Backend',
    items: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Python', icon: 'python' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'GraphQL', icon: 'graphql' },
      { name: 'Redis', icon: 'redis' },
    ],
  },
  {
    group: 'Craft',
    items: [
      { name: 'Figma', icon: 'figma' },
      { name: 'Design Systems', icon: 'designSystems' },
      { name: 'Accessibility', icon: 'accessibility' },
      { name: 'Motion Design', icon: 'motionDesign' },
      { name: 'Testing', icon: 'testing' },
    ],
  },
]

export const EDUCATION = [
  {
    year: '2024 — Present',
    title: 'Bachelor of Information Technology',
    place: 'University of Moratuwa',
    desc: 'Focused on human-computer interaction and distributed systems. Senior capstone on real-time collaborative editing.',
  },
  {
    year: '2025',
    title: 'Amazon Q Developer Fundamentals',
    place: 'AWS Training & Certification',
    desc: 'Intensive 16-week program building production-grade full-stack applications from the ground up.',
  },
  {
    year: '2022',
    title: 'Web Design for Beginners',
    place: 'University of Moratuwa (CODL)',
    desc: 'Intensive 16-week program building production-grade full-stack applications from the ground up.',
  },
  {
    year: '2022',
    title: 'Python for Beginners',
    place: 'University of Moratuwa (CODL)',
    desc: 'Intensive 16-week program building production-grade full-stack applications from the ground up.',
  },
  
]

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/sana1211' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sankalpa-sithmina/' },
]

export const COLOR_MAP = {
  magenta: { text: 'text-magenta', border: 'border-magenta', bg: 'bg-magenta' },
  amber: { text: 'text-amber', border: 'border-amber', bg: 'bg-amber' },
  mint: { text: 'text-mint', border: 'border-mint', bg: 'bg-mint' },
  violet: { text: 'text-violet', border: 'border-violet', bg: 'bg-violet' },
}
