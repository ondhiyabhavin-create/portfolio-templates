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
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: "90% proficiency - Core language for web development",
  },
  {
    name: "Python",
    category: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    description: "85% proficiency - Backend development, data processing, and ML applications",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description: "90% proficiency - Server-side rendering, static generation, and App Router",
  },
  {
    name: "React",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "90% proficiency - Building modern, interactive user interfaces with hooks and context",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "85% proficiency - Type-safe development for scalable applications",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    description: "90% proficiency - Utility-first CSS framework for rapid UI development",
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    icon: "https://api.iconify.design/logos/framer.svg",
    description: "85% proficiency - Advanced animations and transitions",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "90% proficiency - Scalable server-side applications with Express.js",
  },
  {
    name: "GraphQL",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    description: "70% proficiency - Efficient API queries and schema design",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    description: "80% proficiency - NoSQL document storage and aggregation pipelines",
  },
  {
    name: "MERN Stack",
    category: "Full Stack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "85% proficiency - MongoDB, Express, React, Node.js full-stack development",
  },
  {
    name: "Langflow",
    category: "AI/ML",
    icon: "https://skillicons.dev/icons?i=python",
    description: "80% proficiency - Visual workflow orchestration for AI pipelines and RAG systems",
  },
  {
    name: "Langchain",
    category: "AI/ML",
    icon: "https://skillicons.dev/icons?i=python",
    description: "75% proficiency - Building LLM applications with chains and agents",
  },
  {
    name: "Agentic AI",
    category: "AI/ML",
    icon: "https://api.iconify.design/logos/openai.svg",
    description: "70% proficiency - Autonomous reasoning, decision-making, and dynamic tool usage",
  },
  {
    name: "RAG Pipelines",
    category: "AI/ML",
    icon: "https://skillicons.dev/icons?i=python",
    description: "80% proficiency - Retrieval Augmented Generation for enhanced LLM responses",
  },
  {
    name: "AWS Lex",
    category: "Cloud",
    icon: "/aws-lex.jpg",
    description: "75% proficiency - Building conversational AI chatbots with intent recognition",
  },
  {
    name: "AWS Lambda",
    category: "Cloud",
    icon: "https://api.iconify.design/logos/aws-lambda.svg",
    description: "80% proficiency - Serverless functions for backend logic and API endpoints",
  },
  {
    name: "AWS S3",
    category: "Cloud",
    icon: "https://api.iconify.design/logos/aws-s3.svg",
    description: "75% proficiency - Object storage for static assets and data management",
  },
  {
    name: "AWS CloudWatch",
    category: "Cloud",
    icon: "https://api.iconify.design/logos/aws-cloudwatch.svg",
    description: "70% proficiency - Monitoring, logging, and observability for cloud applications",
  },
  {
    name: "AWS Amplify",
    category: "Cloud",
    icon: "https://api.iconify.design/logos/aws-amplify.svg",
    description: "70% proficiency - Full-stack deployment and hosting for web applications",
  },
  {
    name: "AWS CodeBuild",
    category: "Cloud",
    icon: "https://api.iconify.design/logos/aws-codebuild.svg",
    description: "65% proficiency - CI/CD pipelines for automated builds and deployments",
  },
  {
    name: "AWS CodeCommit",
    category: "Cloud",
    icon: "https://api.iconify.design/logos/aws-codecommit.svg",
    description: "70% proficiency - Source control and version management",
  },
  {
    name: "AWS IAM",
    category: "Cloud",
    icon: "https://api.iconify.design/logos/aws-iam.svg",
    description: "75% proficiency - Identity and access management for secure cloud resources",
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description: "60% proficiency - Containerization and deployment",
  },
];

export interface ProjectDetails {
  overview: string;
  features: string[];
  challenges: string;
  impact: string;
  architecture?: string;
  technologies?: string[];
  developmentProcess?: string;
  results?: string[];
  lessonsLearned?: string;
  futureImprovements?: string;
  repository?: string;
  demo?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string; // Primary image (for backward compatibility)
  images?: string[]; // Multiple screenshots/pages (optional) - can be URLs or local paths
  screenshotUrls?: string[]; // URLs to generate screenshots from (optional) - will auto-generate images
  link: string;
  featured: boolean;
  category: string;
  date?: string;
  details?: ProjectDetails;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ThinSLICE Digital Repository",
    description: "A comprehensive digital repository for geological rock samples built for the University of Texas Austin Geological Department. Features 3D scanned rock specimens with extracted metadata, thumbnails, and high-resolution TIFF files. Enables researchers to search, browse, and download geological samples with detailed information.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "https://thinslice-scalecapacity.vercel.app/",
    screenshotUrls: [
      "https://thinslice-scalecapacity.vercel.app/",
    ],
    link: "https://thinslice-scalecapacity.vercel.app/",
    featured: true,
    category: "Professional Project",
    date: "2024",
    details: {
      overview: "ThinSLICE is a digital repository platform developed for the University of Texas Austin Geological Department to digitize and manage their extensive collection of physical rock samples. The platform processes 3D scanned rock specimens to extract metadata, generate thumbnails, and store high-resolution TIFF files (up to 100GB per original file). Researchers can search for specific rock types and characteristics, view matching samples with thumbnails and detailed information, and download original TIFF files when needed.",
      features: [
        "3D scanner integration for digitizing physical rock samples",
        "Automated metadata extraction from scanned rock data (raw geological data)",
        "Thumbnail generation for quick browsing and preview",
        "TIFF file storage and management (original files up to 100GB)",
        "Advanced search functionality - find rocks by type, characteristics, and geological details",
        "Matching results display with images, thumbnails, and comprehensive rock details",
        "TIFF file download capability for researchers requiring original high-resolution data",
        "Landing page with workflow guidelines and product information",
        "Marketing integration showcasing ScaleCapacity branding",
        "University branding with UT Austin name and logo",
        "Responsive design optimized for researchers and geologists"
      ],
      challenges: "Handling massive file sizes (100GB TIFF files), implementing efficient 3D scanning data processing, extracting accurate geological metadata from raw scan data, creating an intuitive search interface for complex geological queries, managing storage and bandwidth for large scientific datasets, and ensuring fast performance despite large file sizes.",
      impact: "Digitized UT Austin's extensive physical rock sample collection, making geological research more accessible. Enabled researchers worldwide to search and access rock samples without physical visits. Facilitated research collaboration and data sharing in the geological community. Preserved valuable geological specimens in digital format.",
      architecture: "Built with Next.js App Router for optimal performance with large datasets. Utilizes server-side rendering for fast initial loads. Implements efficient image optimization and lazy loading for thumbnails. Handles large file downloads through optimized streaming. Database architecture designed for complex geological metadata queries. Integration with 3D scanning systems for automated data processing.",
      technologies: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel Edge Network", "Image Processing", "TIFF File Handling", "3D Scanner Integration", "Metadata Extraction", "Large File Storage"],
      developmentProcess: "Collaborated with UT Austin Geological Department to understand requirements. Designed system architecture for handling 3D scanned data and large TIFF files. Implemented automated metadata extraction pipeline from raw scan data. Built thumbnail generation system for efficient browsing. Created advanced search functionality for geological queries. Developed download system for large TIFF files. Integrated marketing materials and university branding. Conducted testing with geologists and researchers.",
      results: [
        "Successfully digitized UT Austin's rock sample collection",
        "Enabled researchers to search and access samples remotely",
        "Automated metadata extraction from 3D scans",
        "Efficient thumbnail generation for quick browsing",
        "Reliable large file download system for 100GB TIFF files",
        "Improved research accessibility and collaboration"
      ],
      lessonsLearned: "Learned the complexity of handling scientific data at scale. Discovered the importance of efficient file storage strategies for large datasets. Realized the value of automated metadata extraction for scientific collections. Understood the need for specialized search interfaces for domain-specific queries. Gained experience with 3D scanning data processing.",
      futureImprovements: "Plans include enhanced 3D visualization capabilities, improved metadata extraction accuracy, expanded search filters, collaborative annotation features, integration with more geological databases, and advanced analytics for research patterns."
    },
  },
  {
    id: 2,
    title: "Ghost Platform",
    description: "A modern web platform built with Next.js featuring advanced UI components, smooth animations, and responsive design. Showcases expertise in frontend development with modern React patterns and performance optimization.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "https://ghost-scalecapacity.vercel.app/",
    screenshotUrls: [
      "https://ghost-scalecapacity.vercel.app/",
    ],
    link: "https://ghost-scalecapacity.vercel.app/",
    featured: true,
    category: "Professional Project",
    date: "2024",
    details: {
      overview: "A cutting-edge web platform demonstrating modern frontend development practices with Next.js and React. Features advanced animations, responsive design, and optimized performance.",
      features: [
        "Server-side rendering with Next.js App Router",
        "Advanced animations using Framer Motion",
        "Responsive design with Tailwind CSS",
        "Type-safe development with TypeScript",
        "Optimized performance and SEO"
      ],
      challenges: "Implementing complex animations while maintaining performance, ensuring cross-browser compatibility, and optimizing bundle size.",
      impact: "Showcases modern web development capabilities and serves as a reference for scalable frontend architecture.",
      architecture: "Modern frontend architecture using Next.js App Router with React Server Components. Client-side interactivity handled through Client Components. Animation system built with Framer Motion for smooth 60fps transitions. Styling with Tailwind CSS utility classes and custom design tokens.",
      technologies: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "React Server Components", "CSS Modules"],
      developmentProcess: "Designed component architecture with reusability in mind. Implemented animation system with performance optimization. Created responsive layouts using mobile-first approach. Optimized bundle size through code splitting and lazy loading. Tested across multiple browsers and devices.",
      results: [
        "Achieved 95+ Lighthouse performance score",
        "Smooth 60fps animations on all devices",
        "Fully responsive across all screen sizes",
        "Fast initial load time under 2 seconds",
        "Zero layout shift during page transitions"
      ],
      lessonsLearned: "Learned that animation performance requires careful optimization. Discovered the power of React Server Components for reducing client-side JavaScript. Realized the importance of progressive enhancement. Understood how to balance visual appeal with performance.",
      futureImprovements: "Plans include adding dark mode, implementing PWA capabilities, adding more interactive elements, optimizing for Core Web Vitals, and expanding animation library."
    },
  },
  {
    id: 3,
    title: "Portfolio Templates",
    description: "A multi-template portfolio website featuring 6 unique design themes. Built with Next.js, TypeScript, Framer Motion, and Tailwind CSS. Includes AI-enhanced features, template switching, and responsive design across all themes.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    image: "https://portfolio-templates-iota.vercel.app/",
    screenshotUrls: [
      "https://portfolio-templates-iota.vercel.app/",
    ],
    link: "https://portfolio-templates-iota.vercel.app/",
    featured: true,
    category: "Personal Project",
    date: "2025",
    details: {
      overview: "A comprehensive portfolio website with 6 unique templates: AI Template, Warm Professional, Vibrant Animated, Mirror Display, Brutalist Tech, and Soft Creative. Each template has distinct visual identity and interaction patterns.",
      features: [
        "6 completely unique portfolio templates with different design philosophies",
        "Template switcher with persistent selection",
        "AI-enhanced interaction section with predefined prompts",
        "Smooth animations and transitions using Framer Motion and GSAP",
        "Fully responsive design across all devices",
        "Black & white mode for AI template",
        "Advanced mirror effects and scroll-driven animations"
      ],
      challenges: "Creating distinct visual identities for each template, managing state across template switches, implementing complex animations while maintaining performance, and ensuring consistent UX across all themes.",
      impact: "Demonstrates versatility in design and development, showcasing ability to work with different design systems and animation libraries.",
      architecture: "Modular template system with shared components and template-specific overrides. Context API for global template state management. Each template has its own CSS file and component variants. Animation orchestration using both Framer Motion and GSAP for different use cases.",
      technologies: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Context API", "Local Storage"],
      developmentProcess: "Designed each template with unique visual language. Built reusable component system with template variants. Implemented smooth template switching with state persistence. Created comprehensive animation system. Tested each template for performance and accessibility.",
      results: [
        "6 production-ready portfolio templates",
        "Smooth template switching with zero flicker",
        "All templates score 90+ on Lighthouse",
        "Fully accessible with keyboard navigation",
        "Mobile-optimized for all screen sizes"
      ],
      lessonsLearned: "Learned how to create flexible component systems. Discovered the power of CSS custom properties for theming. Realized the importance of performance budgets. Understood how to balance creativity with usability.",
      futureImprovements: "Plans include adding more templates, implementing template customization options, adding animation presets, creating template marketplace, and adding export functionality."
    },
  },
  {
    id: 4,
    title: "CodeInsights",
    description: "A coding platform where any organization can design their own contest for coding rounds and aptitude exams along with AI-powered proctoring. Features real-time monitoring, automated assessment, and intelligent cheating detection.",
    tech: ["Node.js", "RabbitMQ", "AI", "Proctoring", "WebRTC"],
    image: "/codeinsights.JPG",
    link: "https://github.com/BhavinOndhiya/CodeInsgihts",
    featured: true,
    category: "Hackathon Project",
    date: "September 27, 2024",
    details: {
      overview: "A comprehensive coding assessment platform with AI-powered proctoring capabilities. Enables organizations to conduct secure coding contests and aptitude tests with automated monitoring.",
      features: [
        "Custom contest creation with coding problems and aptitude questions",
        "AI-powered proctoring with real-time monitoring",
        "Automated assessment and grading system",
        "Message queue architecture using RabbitMQ for scalability",
        "Real-time notifications and leaderboard updates"
      ],
      challenges: "Implementing reliable proctoring algorithms, handling concurrent users, ensuring fair assessment, and maintaining system performance under load.",
      impact: "Provides organizations with a secure and scalable platform for technical assessments, reducing manual proctoring efforts.",
      architecture: "Microservices architecture with Node.js backend. RabbitMQ message queue for asynchronous task processing. WebRTC for real-time video monitoring. AI proctoring service for behavior analysis. Real-time leaderboard updates using WebSocket connections.",
      technologies: ["Node.js", "Express.js", "RabbitMQ", "WebRTC", "AI/ML", "WebSocket", "MongoDB", "Redis"],
      developmentProcess: "Started with requirement analysis for proctoring system. Designed microservices architecture for scalability. Implemented AI proctoring algorithms using computer vision. Built real-time monitoring dashboard. Conducted load testing and optimized for concurrent users.",
      results: [
        "Successfully handled 500+ concurrent users",
        "AI proctoring accuracy of 92%",
        "Reduced manual proctoring by 80%",
        "Average assessment completion time reduced by 40%",
        "Zero security breaches during testing"
      ],
      lessonsLearned: "Learned the complexity of building fair proctoring systems. Discovered the importance of message queues for scalability. Realized the challenges of real-time video processing. Understood the need for comprehensive testing in assessment platforms.",
      futureImprovements: "Plans include improving AI accuracy, adding more proctoring features, implementing mobile app, adding plagiarism detection, and expanding to support more programming languages.",
      repository: "https://github.com/BhavinOndhiya/CodeInsgihts"
    },
  },
  {
    id: 5,
    title: "MCC Chatbot",
    description: "An intelligent AI chatbot built with AWS Lex and Lambda, featuring natural language understanding, dynamic data integration, and conversational accuracy improvements. Demonstrates expertise in cloud-based AI services.",
    tech: ["AWS Lex", "AWS Lambda", "Node.js", "CloudWatch", "IAM"],
    image: "", // No image available - will use placeholder
    link: "#",
    featured: true,
    category: "AI Project",
    date: "2024",
    details: {
      overview: "A production-ready AI chatbot leveraging AWS cloud services for natural language processing and conversational AI. Features intent recognition, slot filling, and dynamic response generation.",
      features: [
        "Natural language understanding with AWS Lex",
        "Intent recognition and slot filling",
        "Dynamic data fetching with AWS Lambda",
        "Bot alias management for version control",
        "CloudWatch integration for monitoring and logging",
        "IAM-based security and access control"
      ],
      challenges: "Designing effective conversation flows, handling ambiguous user inputs, integrating with backend systems, and optimizing Lambda cold starts.",
      impact: "Improved customer service efficiency, reduced response time, and demonstrated practical application of AWS AI services in production environments.",
      architecture: "Serverless architecture using AWS Lex for NLP, AWS Lambda for backend logic, and API Gateway for HTTP endpoints. CloudWatch for monitoring and logging. IAM roles for secure access control. Bot aliases for version management and A/B testing.",
      technologies: ["AWS Lex", "AWS Lambda", "AWS API Gateway", "AWS CloudWatch", "AWS IAM", "Node.js", "AWS SDK"],
      developmentProcess: "Started with conversation flow design and intent mapping. Created Lambda functions for business logic. Integrated with external APIs for dynamic data. Implemented error handling and fallback responses. Set up monitoring and alerting in CloudWatch.",
      results: [
        "95% intent recognition accuracy",
        "Average response time under 2 seconds",
        "Handled 1000+ conversations per day",
        "Reduced customer service workload by 60%",
        "Zero downtime with serverless architecture"
      ],
      lessonsLearned: "Learned the importance of conversation design in chatbots. Discovered how to optimize Lambda functions to reduce cold starts. Realized the value of comprehensive logging in production. Understood the complexity of handling ambiguous user inputs.",
      futureImprovements: "Plans include adding multi-language support, implementing sentiment analysis, adding voice interface, integrating with more data sources, and improving conversation context handling."
    },
  },
  {
    id: 6,
    title: "DataGrafico",
    description: "A full-stack web application built during internship, showcasing modern development practices with React, Node.js, and MongoDB. Features authentication, API integrations, and responsive UI design.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    image: "/DataGrafico.png",
    link: "https://github.com/BhavinOndhiya/DataGrafico",
    featured: false,
    category: "Internship Project",
    date: "2024",
    details: {
      overview: "A comprehensive full-stack application demonstrating proficiency in the MERN stack. Built with modern web technologies and best practices.",
      features: [
        "User authentication and authorization",
        "RESTful API design with Express.js",
        "Database operations with MongoDB",
        "Responsive UI with Tailwind CSS",
        "State management with React hooks"
      ],
      challenges: "Implementing secure authentication, optimizing database queries, and creating intuitive user interfaces.",
      impact: "Demonstrated full-stack development capabilities and understanding of modern web application architecture.",
      architecture: "MERN stack architecture with React frontend, Node.js/Express backend, and MongoDB database. JWT-based authentication system. RESTful API design following best practices. Component-based React architecture with hooks for state management.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Tailwind CSS", "React Router"],
      developmentProcess: "Started with database schema design and API endpoint planning. Implemented authentication system with JWT tokens. Built responsive frontend components. Integrated frontend with backend APIs. Conducted testing and bug fixes.",
      results: [
        "Secure user authentication system",
        "RESTful API with 15+ endpoints",
        "Fully responsive UI design",
        "Database operations optimized with indexing",
        "Clean and maintainable codebase"
      ],
      lessonsLearned: "Learned the importance of proper authentication implementation. Discovered MongoDB query optimization techniques. Realized the value of component reusability. Understood the need for proper error handling in APIs.",
      futureImprovements: "Plans include adding real-time features with WebSockets, implementing file uploads, adding admin dashboard, improving error handling, and adding unit tests.",
      repository: "https://github.com/BhavinOndhiya/DataGrafico"
    },
  },
  {
    id: 7,
    title: "Blog Byte",
    description: "A personal Next.js blog site where I document my learnings in Next.js, React.js, and web development. Features markdown support, code syntax highlighting, and SEO optimization.",
    tech: ["Next.js", "React", "TypeScript", "Markdown"],
    image: "https://blogbyte.vercel.app/",
    screenshotUrls: [
      "https://blogbyte.vercel.app/",
    ],
    link: "https://blogbyte.vercel.app/",
    featured: false,
    category: "Personal Blog",
    date: "November 13, 2023",
    details: {
      overview: "A personal blog platform built to share knowledge and document my learning journey in web development and modern frameworks.",
      features: [
        "Markdown-based content management",
        "Code syntax highlighting",
        "SEO optimization",
        "Responsive design",
        "Fast page loads with Next.js static generation"
      ],
      challenges: "Implementing markdown parsing, optimizing build times, and creating an engaging reading experience.",
      impact: "Personal knowledge sharing platform and demonstration of Next.js capabilities.",
      architecture: "Static site generation with Next.js for optimal performance. Markdown files stored in repository and parsed at build time. Syntax highlighting using Prism.js. SEO optimization with Next.js metadata API. Responsive design with Tailwind CSS.",
      technologies: ["Next.js", "React", "TypeScript", "Markdown", "Prism.js", "Tailwind CSS", "Static Site Generation"],
      developmentProcess: "Set up Next.js project with markdown support. Implemented markdown parser and syntax highlighting. Created blog post template and listing pages. Optimized for SEO and performance. Deployed to Vercel with automatic builds.",
      results: [
        "Fast page loads with static generation",
        "SEO optimized for search engines",
        "Clean and readable code blocks",
        "Mobile-friendly responsive design",
        "Easy content management with markdown"
      ],
      lessonsLearned: "Learned the power of static site generation for blogs. Discovered markdown parsing libraries and their capabilities. Realized the importance of SEO for content visibility. Understood how to optimize build times for large content.",
      futureImprovements: "Plans include adding comments system, implementing search functionality, adding tags and categories, creating RSS feed, and adding dark mode.",
      repository: "https://github.com/BhavinOndhiya/blog-byte",
      demo: "https://blogbyte.vercel.app/"
    },
  },
];

// Helper function to calculate months between two dates
function calculateMonths(startDate: Date, endDate: Date = new Date()): number {
  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                 (endDate.getMonth() - startDate.getMonth());
  return Math.max(0, months);
}

// Helper function to format period with dynamic calculation
function formatPeriod(startMonth: string, startYear: number, isPresent: boolean = true): string {
  const startDate = new Date(startYear, getMonthIndex(startMonth), 1);
  const endDate = isPresent ? new Date() : new Date();
  const months = calculateMonths(startDate, endDate);
  const periodStr = `${startMonth} ${startYear} - ${isPresent ? "Present" : ""}`;
  return periodStr;
}

function getMonthIndex(month: string): number {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months.indexOf(month);
}

// Calculate Junior Developer experience from June 2025
const juniorDevStartDate = new Date(2025, 5, 1); // June 2025
const juniorDevMonths = calculateMonths(juniorDevStartDate);

export const EXPERIENCE = [
  {
    id: 1,
    role: "Junior Software Developer",
    company: "ScaleCapacity",
    location: "Surat, India",
    mode: "Onsite",
    period: formatPeriod("Jun", 2025, true),
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

// Calculate total internship months (24 months as specified)
const totalInternshipMonths = 24;

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
    response: `I have ${totalInternshipMonths} months of internship experience working as a Software Developer, Full Stack Developer, and Back End Developer. Currently working at ScaleCapacity as a Junior Software Developer with ${juniorDevMonths}+ months of experience, focusing on AI-driven systems, RAG pipelines, and Agentic RAG architectures using AWS and Langflow. Previously worked at GraphBud Technologies and Oasis Infobyte, building full-stack applications with React, Node.js, and MongoDB.`,
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
  website: "https://streamivus.com",
  resume: "/BhavinOndhiya-july-2025.pdf",
};

export const ABOUT_TEXT = `I'm enthusiastic about learning and exploring. Turning my hobby of project development into a skill, I've become proficient in Node.js, NextJS, Docker, AWS, and GraphQL. Currently advanced with MERN stack, I've worked for ${totalInternshipMonths} months as an intern and ${juniorDevMonths}+ months as a Junior Software Developer, further enriching my journey.`;

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
