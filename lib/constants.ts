export const ROLES = [
  "Software Developer",
  "Web Developer",
  "Backend Developer",
  "ML Enthusiast",
  "DSA Lover",
];

export const SKILLS = [
  {
    name: "JavaScript",
    category: "Language",
    icon: "⚛️",
    description: "90% proficiency - Core language for web development",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "▲",
    description: "90% proficiency - Server-side rendering and static generation",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "🟢",
    description: "90% proficiency - Scalable server-side applications",
  },
  {
    name: "GraphQL",
    category: "Backend",
    icon: "🔷",
    description: "70% proficiency - Efficient API queries",
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: "🐳",
    description: "50% proficiency - Containerization and deployment",
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: "☁️",
    description: "45% proficiency - Cloud infrastructure and services",
  },
  {
    name: "React",
    category: "Frontend",
    icon: "⚛️",
    description: "Building modern, interactive user interfaces",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "🍃",
    description: "NoSQL document storage",
  },
  {
    name: "MERN Stack",
    category: "Full Stack",
    icon: "🚀",
    description: "MongoDB, Express, React, Node.js full-stack development",
  },
  {
    name: "Python",
    category: "Language",
    icon: "🐍",
    description: "Machine Learning and data processing",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "💨",
    description: "Utility-first CSS framework",
  },
  {
    name: "Machine Learning",
    category: "AI/ML",
    icon: "🤖",
    description: "Learning phase - AI and ML enthusiast",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "CodeInsights",
    description: "A coding platform where any organization can design their own contest for coding round and aptitude exam along with Proctoring using NodeJS, RabbitMQ, and Artificial Intelligence.",
    tech: ["Node.js", "RabbitMQ", "AI", "Proctoring"],
    image: "/codeinsights.JPG",
    link: "https://github.com/BhavinOndhiya/CodeInsgihts",
    featured: true,
    category: "Hackathon Project",
    date: "September 27, 2024",
  },
  {
    id: 2,
    title: "DataGrafico",
    description: "Internship project showcasing full-stack development skills with modern web technologies.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/DataGrafico.png",
    link: "https://github.com/BhavinOndhiya/DataGrafico",
    featured: true,
    category: "Internship Project",
  },
  {
    id: 3,
    title: "Blog Byte",
    description: "My own Next.js blog site where I post about my learnings in Next.js and React.js. A personal project to share knowledge and document my journey.",
    tech: ["Next.js", "React", "TypeScript"],
    image: "/Screenshot 2024-02-25 150804.png",
    link: "https://blogbyte.vercel.app/",
    featured: true,
    category: "Personal Blog",
    date: "November 13, 2023",
  },
  {
    id: 4,
    title: "MCC Chatbot",
    description: "Showcasing proficiency in full-stack development, cloud-based services, and complex system design.",
    tech: ["AWS", "Node.js", "AI"],
    image: "/project-4.jpg",
    link: "#",
    featured: false,
    category: "AI Project",
    date: "January 29, 2025",
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Junior Software Developer",
    company: "ScaleCapacity",
    location: "Surat, India",
    mode: "Onsite",
    period: "Jun 2024 - Present",
    description: "Working on advanced AI-driven systems focusing on RAG (Retrieval Augmented Generation) pipelines and exploring the evolution towards Agentic RAG architectures. Learning how Agentic AI differs from traditional RAG by enabling autonomous reasoning, decision-making, and dynamic tool usage. Building and experimenting with these intelligent agents using AWS cloud services and Langflow for orchestration and workflow design.",
    highlights: [
      "Working on RAG pipelines and Agentic RAG architectures",
      "Using AWS cloud services and Langflow for AI orchestration",
      "Building intelligent agents with autonomous reasoning capabilities",
    ],
  },
  {
    id: 2,
    role: "Software Developer Intern",
    company: "ScaleCapacity",
    location: "Surat, India",
    mode: "Onsite",
    period: "Sep 2023 - Jun 2024",
    description: "Developed an AI chatbot using AWS Lex, creating intents for user interactions and managing bot aliases for version control. Integrated AWS Lambda for backend logic to fetch dynamic data and improve conversational accuracy.",
    highlights: [
      "Developed AI chatbot using AWS Lex",
      "Integrated AWS Lambda for backend logic",
      "Improved conversational accuracy with dynamic data",
    ],
  },
  {
    id: 3,
    role: "Full Stack Developer Intern",
    company: "GraphBud Technologies Private Limited",
    location: "Pollachi, Tamil Nadu, India",
    mode: "Remote",
    period: "Nov 2023 - May 2024",
    description: "Built full-stack web applications using React, Node.js, and MongoDB. Implemented authentication, API integrations, and responsive UI with Tailwind CSS.",
    highlights: [
      "Built full-stack applications with React, Node.js, MongoDB",
      "Implemented authentication and API integrations",
      "Created responsive UI with Tailwind CSS",
    ],
  },
  {
    id: 4,
    role: "Back End Developer Intern",
    company: "GraphBud Technologies Private Limited",
    location: "Pollachi, Tamil Nadu, India",
    mode: "Remote",
    period: "May 2023 - Oct 2023",
    description: "Focused on backend development using Node.js and Express. Designed RESTful APIs, handled database queries, and optimized performance for data-intensive modules.",
    highlights: [
      "Designed RESTful APIs with Node.js and Express",
      "Optimized performance for data-intensive modules",
      "Handled complex database queries",
    ],
  },
  {
    id: 5,
    role: "Full Stack Developer Intern",
    company: "Oasis Infobyte",
    location: "Remote",
    mode: "Remote",
    period: "Mar 2023 - Apr 2023",
    description: "Created responsive web pages and interactive UI components using HTML, CSS, and JavaScript. Improved website performance and accessibility.",
    highlights: [
      "Created responsive web pages",
      "Built interactive UI components",
      "Improved website performance and accessibility",
    ],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "B-Tech in Computer Engineering",
    institution: "CHARUSAT University, Nadiad",
    period: "2021 - 2025",
    details: "Currently pursuing my B-Tech in Computer Engineering.",
    cgpa: "8.89",
  },
  {
    id: 2,
    degree: "Science Stream",
    institution: "Shakti Secondary School, Rajkot",
    period: "2019 - 2021",
    details: "Successfully completed my 11th and 12th grade in the science stream, demonstrating dedicated efforts and achieving exceptional results.",
  },
  {
    id: 3,
    degree: "Primary and High School",
    institution: "St Mary's School, Gondal",
    period: "2008 - 2019",
    details: "Completed my primary and high school education.",
  },
];

export const AI_PROMPTS = [
  {
    id: 1,
    text: "Tell me about your experience",
    response: "I have 24+ months of internship experience working as a Software Developer, Full Stack Developer, and Back End Developer. Currently working at ScaleCapacity as a Junior Software Developer, focusing on AI-driven systems, RAG pipelines, and Agentic RAG architectures using AWS and Langflow. Previously worked at GraphBud Technologies and Oasis Infobyte, building full-stack applications with React, Node.js, and MongoDB.",
  },
  {
    id: 2,
    text: "What are your core skills?",
    response: "My core skills include JavaScript (90%), Next.js (90%), Node.js (90%), GraphQL (70%), Docker (50%), and AWS (45%). I'm proficient in the MERN stack and have experience building scalable web applications. I'm also learning Machine Learning and AI technologies.",
  },
  {
    id: 3,
    text: "What projects have you worked on?",
    response: "I've worked on several projects including CodeInsights (a coding platform with AI proctoring), DataGrafico (an internship project), Blog Byte (my personal Next.js blog), and MCC Chatbot (showcasing full-stack and cloud expertise). Each project demonstrates different aspects of my skills from AI integration to full-stack development.",
  },
];

export const PERSONAL_INFO = {
  name: "Bhavin Ondhiya",
  birthday: "29 Jan 2003",
  age: "23",
  email: "bhavinondhiya0@gmail.com",
  phone: "+91 99984 89403",
  city: "Surat",
  degree: "CE",
  freelance: "Available",
  website: "https://ondhiyabhavin.netlify.app/",
  resume: "/BhavinOndhiya-july-2025.pdf",
};

export const ABOUT_TEXT = "I'm enthusiastic about learning and exploring. Turning my hobby of project development into a skill, I've become proficient in Node.js, NextJS, Docker, AWS, and GraphQL. Currently advanced with MERN stack, I've worked with for 24 months as an intern, further enriching my journey.";

export const TAGLINE = "ML and AI enthusiast, a dedicated software engineer who loves to work towards projects that make a bigger impact in society. You will also find me playing with a guitar on some days and exploring places. Learning in the process is my belief.";

export const SERVICES = [
  {
    id: 1,
    title: "Web Development",
    description: "I can create any website using HTML, CSS, ReactJS for frontend and PHP, NodeJS in backend Along with GraphDB(NEO4j).",
    icon: "🌐",
  },
  {
    id: 2,
    title: "MERN Stack Development",
    description: "Proficient in Node.js, with expertise in building scalable and performant applications using asynchronous programming, event-driven architecture, and a strong command of core modules and npm packages.",
    icon: "🚀",
  },
  {
    id: 3,
    title: "Problem Solving",
    description: "I would be able to provide a solution for real-life problems using in-depth concepts of Data Structure and Algorithm.",
    icon: "💡",
  },
  {
    id: 4,
    title: "Machine Learning",
    description: "Learning Phase is going on.",
    icon: "🤖",
  },
];
