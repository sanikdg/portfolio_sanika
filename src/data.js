export const profile = {
  name: 'Sanika Patil',
  role: 'Full Stack MERN Developer',
  tagline:
    'I build fast, responsive websites and web apps, add AI features, and deploy them live.',
  email: 'sanikaspatil100@gmail.com',
  github: 'https://github.com/sanikdg',
  linkedin: '', // TODO: paste your full LinkedIn URL
  fiverr: '', // TODO: add your Fiverr profile URL once it is live
  resume: '', // TODO: copy your resume into /public with this name
}

export const about = [
  'I am a full stack developer who builds production-ready websites and web apps with the MERN stack: MongoDB, Express, React and Node.js.',
  'I have delivered three live websites for real clients (a nail art studio, a civil engineering firm and a school), built AI-powered tools with REST APIs, dashboards and secure login, and I handle deployment too: hosting, domain and SSL on AWS, Vercel and Render.',
  'I write clean code, communicate clearly and deliver on time.',
]

export const skills = {
  Frontend: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  Database: ['MongoDB', 'MySQL'],
  'Cloud and Tools': ['AWS', 'Docker', 'Vercel', 'Render', 'Netlify', 'Git and GitHub', 'Postman', 'n8n'],
}

export const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Tryonix Studio Private Limited (Remote)',
    period: 'June 2026 - Present', // TODO: change to an end month if this job has ended
    points: [
      'Built and maintained full stack MERN applications, including an Employee Portal System with authentication, dashboards, REST APIs and MongoDB integration.',
      'Designed scalable REST APIs and optimized MongoDB queries for faster data handling and better performance.',
      'Developed responsive interfaces with React.js and Tailwind CSS in an Agile team using Git and GitHub.',
    ],
  },
]

export const projects = [
  {
    title: 'NailsByNandini',
    type: 'Client project: nail art studio',
    image: '/projects/nailsbynandini.jpg',
    description:
      'A full website for a nail art studio with appointment booking, a filterable design gallery, a custom design request flow where customers upload an inspiration photo or paste a link, and customer login.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    live: 'https://nailsbynandini.website',
    code: '',
  },
  {
    title: 'Dhanvij Builders',
    type: 'Client project: civil engineering firm',
    image: '/projects/dhanvij-builders.jpg',
    description:
      'A business website for a civil engineering company with service and project pages, user sign up and sign in, an enquiry form for free consultations, a client review section and a language switcher.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    live: 'https://dhanvij-builders.online',
    code: '',
  },
  {
    title: 'Grace Academy',
    type: 'Client project: school website',
    image: '/projects/grace-academy.jpg',
    description:
      'A school website for a K-10 school with admissions enquiries, notices, events, a photo gallery, academics pages and an admin login to manage content.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    live: 'https://grace-academy.online',
    code: '',
  },
  {
    title: 'IntelliFlow',
    type: 'Personal project: AI workflow automation',
    description:
      'AI-driven Jira workflow automation with RAG-based issue resolution and intelligent task recommendations, plus dashboards and scalable REST APIs.',
    stack: ['MERN', 'RAG', 'REST APIs'],
    live: '',
    code: '', // TODO: add the GitHub repo link
  },
  {
    title: 'CodePrep AI',
    type: 'Personal project: AI interview preparation',
    description:
      'Coding practice, aptitude tests, mock interviews and performance tracking with JWT authentication and AI-based feedback.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    live: '',
    code: '', // TODO: add the GitHub repo link
  },
]

export const services = [
  {
    title: 'Websites and Landing Pages',
    text: 'Fast, mobile-friendly business websites that look good and load quickly.',
  },
  {
    title: 'Custom Web Apps',
    text: 'Full stack apps with login, dashboards, admin panels and a database.',
  },
  {
    title: 'Bug Fixes and New Features',
    text: 'Fixes, upgrades and new features for your existing React and Node.js apps.',
  },
  {
    title: 'Deployment and Hosting',
    text: 'Live setup with hosting, domain and SSL on AWS, Vercel or Render.',
  },
  {
    title: 'AI Features',
    text: 'Chat, RAG-based tools and AI-powered features added to your product.',
  },
  {
    title: 'Workflow Automation',
    text: 'n8n workflows and API integrations that save you manual work.',
  },
]

export const achievements = [
  'Runner-Up, National Level Hackathon, SKN Sinhgad College of Engineering',
  'Top 5 Finalist, AI and Innovation Sprint at KKWIEER; project selected for the Yukti National Innovation Repository',
  'Contributor, GirlScript Summer of Code (GSSoC) 2026',
  'Infosys Empower Her AI: built and deployed an AI Learning Buddy',
  'AWS Cloud Foundations (AWS Academy)',
]
