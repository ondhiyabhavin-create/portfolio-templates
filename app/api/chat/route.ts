import { NextRequest, NextResponse } from 'next/server';

// Comprehensive portfolio data
const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Bhavin Ondhiya",
    title: "Software Developer & ML Enthusiast",
    email: "bhavinondhiya0@gmail.com",
    phone: "+91 99984 89403",
    location: {
      city: "Surat",
      state: "Gujarat",
      country: "India"
    },
    website: "https://streamivus.com",
    social: {
      linkedin: "https://linkedin.com/in/bhavin-ondhiya",
      github: "https://github.com/bhavinondhiya"
    },
    tagline: "ML and AI enthusiast, a dedicated software engineer who loves to work towards projects that make a bigger impact in society",
    hobbies: ["Playing guitar", "Exploring places", "Learning new technologies"],
    philosophy: "Believes in learning through the process"
  },
  about: {
    summary: "A passionate full-stack developer specializing in modern web technologies and AI/ML systems. With 24 months of internship experience and 6+ months as a Junior Software Developer, builds end-to-end solutions from development to deployment.",
    passion: "Building innovative solutions that combine software engineering with AI/ML technologies to make a meaningful impact",
    values: ["Clean code", "Beautiful design", "Performance optimization", "Continuous learning"]
  },
  currentPosition: {
    title: "Junior Software Developer",
    company: "ScaleCapacity",
    location: "Surat, India",
    type: "Onsite",
    startDate: "2025-06-01",
    duration: "6+ months",
    focus: [
      "Advanced AI-driven systems",
      "RAG (Retrieval Augmented Generation) pipelines",
      "Agentic RAG architectures",
      "Autonomous reasoning and decision-making",
      "AWS cloud services integration",
      "Langflow for orchestration"
    ],
    learnings: [
      "How Agentic AI differs from traditional RAG",
      "Autonomous reasoning implementation",
      "Dynamic tool usage in AI systems",
      "Workflow design with Langflow"
    ]
  },
  experience: {
    totalInternshipMonths: 24,
    totalCurrentRoleMonths: 6,
    positions: [
      {
        title: "Software Developer Intern",
        company: "ScaleCapacity",
        location: "Surat, India",
        type: "Onsite",
        startDate: "2023-09-01",
        endDate: "2024-06-30",
        duration: "9 months",
        responsibilities: [
          "Developed AI chatbot using AWS Lex",
          "Created intents for user interactions",
          "Managed bot aliases for version control",
          "Integrated AWS Lambda for backend logic",
          "Fetched dynamic data to improve conversational accuracy"
        ],
        technologies: ["AWS Lex", "AWS Lambda", "Node.js", "CloudWatch", "IAM"],
        achievements: [
          "Successfully deployed conversational AI chatbot",
          "Improved bot accuracy through Lambda integration"
        ]
      },
      {
        title: "Full Stack Developer Intern",
        company: "GraphBud Technologies Private Limited",
        location: "Pollachi, Tamil Nadu, India",
        type: "Remote",
        startDate: "2023-11-01",
        endDate: "2024-05-31",
        duration: "6 months",
        responsibilities: [
          "Built full-stack web applications",
          "Implemented authentication systems",
          "Created API integrations",
          "Designed responsive UI with Tailwind CSS"
        ],
        technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
        achievements: [
          "Delivered multiple full-stack applications",
          "Implemented secure authentication"
        ]
      },
      {
        title: "Back End Developer Intern",
        company: "GraphBud Technologies Private Limited",
        location: "Pollachi, Tamil Nadu, India",
        type: "Remote",
        startDate: "2023-05-01",
        endDate: "2023-10-31",
        duration: "5 months",
        responsibilities: [
          "Backend development using Node.js and Express",
          "Designed RESTful APIs",
          "Handled database queries",
          "Optimized performance for data-intensive modules"
        ],
        technologies: ["Node.js", "Express", "REST API", "Database Optimization"],
        achievements: [
          "Designed scalable RESTful APIs",
          "Optimized database query performance"
        ]
      },
      {
        title: "Full Stack Developer Intern",
        company: "Oasis Infobyte",
        location: "Remote",
        type: "Remote",
        startDate: "2023-03-01",
        endDate: "2023-04-30",
        duration: "1 month",
        responsibilities: [
          "Created responsive web pages",
          "Built interactive UI components",
          "Improved website performance",
          "Enhanced accessibility"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        achievements: [
          "Improved website performance metrics",
          "Enhanced user accessibility"
        ]
      }
    ]
  },
  skills: {
    frontend: {
      proficiency: 90,
      technologies: ["React", "Next.js", "Vue.js", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML", "CSS"]
    },
    backend: {
      proficiency: 90,
      technologies: ["Node.js", "Express", "Python", "REST API", "GraphQL", "MVC"]
    },
    aiMl: {
      proficiency: 85,
      technologies: ["Agentic AI", "RAG Pipelines", "Langflow", "Langchain", "AWS Lex", "Machine Learning"]
    },
    cloudDeployment: {
      platforms: ["AWS", "Docker", "Vercel", "Hostinger", "Railway"],
      awsServices: ["EC2", "CloudFormation", "Lambda", "S3", "CloudWatch", "Amplify", "IAM", "Lex", "CodeBuild"]
    },
    databases: {
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "SQL", "Oracle", "DBeaver", "Neo4j (GraphDB)", "Amazon RDS"]
    },
    deployment: {
      platforms: ["Vercel", "Hostinger", "Railway", "Serverless Lambda (AWS)"]
    },
    tools: {
      technologies: ["VSCode", "Cursor", "Postman", "Git", "GitHub", "Notion", "Jira", "Clockify", "Slack", "MyHours"]
    },
    other: {
      technologies: ["Git", "CI/CD", "Microservices", "WebRTC", "RabbitMQ", "Docker Containerization"]
    }
  },
  services: [
    {
      id: "fullstack",
      title: "Full-Stack Web Development",
      description: "Building modern, responsive web applications using React, Next.js, Vue.js for frontend and Node.js, Express, Python for backend. Creating scalable solutions with clean architecture and best practices.",
      technologies: ["React", "Next.js", "Vue.js", "Node.js", "Express", "Python", "MongoDB", "PostgreSQL"]
    },
    {
      id: "aiml",
      title: "AI/ML Integration",
      description: "Developing intelligent applications with Agentic AI, RAG pipelines, Langflow, and Langchain. Building conversational AI chatbots with AWS Lex and integrating AI capabilities into production systems.",
      technologies: ["Agentic AI", "RAG", "Langflow", "Langchain", "AWS Lex", "NLP"]
    },
    {
      id: "cloud",
      title: "Cloud Infrastructure & Deployment",
      description: "Deploying and managing applications on AWS (Lambda, S3, CloudWatch, Amplify, IAM), Docker containerization, and CI/CD pipelines. Hosting on Vercel with custom domain management via Hostinger.",
      technologies: ["AWS", "Docker", "Vercel", "Hostinger", "CI/CD", "Terraform"]
    },
    {
      id: "api",
      title: "API Development & Integration",
      description: "Designing RESTful and GraphQL APIs with Node.js and Express. Building microservices architecture and integrating third-party services for seamless data flow.",
      technologies: ["REST", "GraphQL", "Node.js", "Express", "Microservices", "WebSockets"]
    },
    {
      id: "database",
      title: "Database Design & Management",
      description: "Working with MongoDB, PostgreSQL, and GraphDB (Neo4j) for efficient data storage and retrieval. Designing schemas and optimizing queries for performance.",
      technologies: ["MongoDB", "PostgreSQL", "Neo4j", "SQL", "NoSQL"]
    },
    {
      id: "uiux",
      title: "UI/UX Design & Frontend",
      description: "Creating beautiful, intuitive user interfaces with React, Next.js, Tailwind CSS, and Framer Motion. Focusing on responsive design, accessibility, and smooth animations.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP", "CSS3"]
    }
  ],
  projects: [
    {
      id: "thinslice",
      title: "ThinSLICE Digital Repository",
      type: "Professional Project",
      category: "professional",
      year: 2024,
      client: "University of Texas Austin Geological Department",
      description: "A comprehensive digital repository for geological rock samples built for the University of Texas Austin Geological Department. Features 3D scanned rock specimens with extracted metadata, thumbnails, and high-resolution TIFF files. Enables researchers to search, browse, and download geological samples with detailed information.",
      longDescription: "Developed a sophisticated digital repository system for managing geological rock samples. The platform features advanced 3D scanning integration, metadata extraction, and high-resolution image processing. Researchers can efficiently search, browse, and download geological samples with comprehensive information. The largest publicly accessible thin section collection in the U.S. and possibly the world with 100,000+ digitized specimens.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "3D Scanning"],
      features: [
        "3D scanned rock specimens display",
        "Automated metadata extraction",
        "High-resolution TIFF file support",
        "Advanced search and filtering",
        "Research-grade data management",
        "Thumbnail generation",
        "Download management",
        "100,000+ physical specimens",
        "Global public access"
      ],
      impact: "Enabling geological research at a top university - making the largest thin section collection publicly accessible",
      link: "https://thinslice-scalecapacity.vercel.app/",
      featured: true
    },
    {
      id: "ghost",
      title: "Ghost Platform",
      type: "Professional Project",
      category: "professional",
      year: 2024,
      description: "A real-time infrastructure health and security monitoring platform designed to provide instant situational awareness across distributed systems. Inspired by large-scale government and defense operations dashboards, the system prioritizes visual intelligence over tables, allowing operators to quickly identify issues, threats, and anomalies. Features automatic incident generation and tracking for critical service states.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Real-time infrastructure health monitoring",
        "Security threat detection and visualization",
        "Automatic incident generation for critical states",
        "Multi-region service status tracking",
        "Visual intelligence dashboard",
        "Distributed systems monitoring"
      ],
      impact: "Enabling rapid response to infrastructure and security threats through visual intelligence",
      link: "https://ghost-scalecapacity.vercel.app/",
      featured: true
    },
    {
      id: "portfolio",
      title: "Portfolio Templates",
      type: "Personal Project",
      category: "personal",
      year: 2025,
      description: "A modern portfolio website with white and dark mode themes. Built with Next.js, TypeScript, Framer Motion, and Tailwind CSS. Includes AI-enhanced features, mode switching, and responsive design.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "AI Integration", "Groq API"],
      features: [
        "White and dark mode themes",
        "AI-powered chatbot assistant",
        "Seamless mode switching",
        "Fully responsive design",
        "Smooth animations",
        "SEO optimized"
      ],
      impact: "Showcasing versatility in design and AI integration",
      link: "https://portfolio-templates-iota.vercel.app/",
      featured: true
    },
    {
      id: "codeinsights",
      title: "CodeInsights",
      type: "Hackathon Project",
      category: "hackathon",
      date: "2024-09-27",
      description: "A coding platform where any organization can design their own contest for coding rounds and aptitude exams along with AI-powered proctoring. Features real-time monitoring, automated assessment, and intelligent cheating detection.",
      technologies: ["Node.js", "RabbitMQ", "AI", "Proctoring", "WebRTC", "Machine Learning"],
      features: [
        "Custom contest creation",
        "AI-powered proctoring system",
        "Real-time video monitoring",
        "Automated assessment",
        "Intelligent cheating detection",
        "Multiple camera angles",
        "Behavior analysis",
        "Report generation"
      ],
      impact: "Enabling secure online coding assessments",
      achievements: "Built complete proctoring system during hackathon",
      link: "https://github.com/BhavinOndhiya/CodeInsgihts",
      featured: true
    },
    {
      id: "mcc-chatbot",
      title: "MCC Chatbot",
      type: "AI Project",
      category: "ai",
      year: 2024,
      description: "An intelligent AI chatbot built with AWS Lex and Lambda, featuring natural language understanding, dynamic data integration, and conversational accuracy improvements. Demonstrates expertise in cloud-based AI services.",
      technologies: ["AWS Lex", "AWS Lambda", "Node.js", "CloudWatch", "IAM", "NLP"],
      features: [
        "Natural language understanding",
        "Dynamic data integration",
        "Intent management",
        "Bot version control with aliases",
        "Conversational accuracy tuning",
        "Cloud-based deployment",
        "Real-time responses",
        "Context awareness"
      ],
      impact: "Improving customer service automation",
      featured: true
    },
    {
      id: "datagrafico",
      title: "DataGrafico",
      type: "Internship Project",
      category: "internship",
      year: 2024,
      description: "A full-stack web application built during internship, showcasing modern development practices with React, Node.js, and MongoDB. Features authentication, API integrations, and responsive UI design.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      features: [
        "User authentication system",
        "RESTful API integrations",
        "Responsive UI design",
        "CRUD operations",
        "Modern design patterns",
        "Data visualization",
        "Role-based access"
      ],
      impact: "Streamlining data management processes",
      link: "https://github.com/BhavinOndhiya/DataGrafico",
      featured: false
    },
    {
      id: "blogbyte",
      title: "Blog Byte",
      type: "Personal Blog",
      category: "personal",
      date: "2023-11-13",
      description: "A personal Next.js blog site where I document my learnings in Next.js, React.js, and web development. Features markdown support, code syntax highlighting, and SEO optimization.",
      technologies: ["Next.js", "React", "TypeScript", "Markdown", "MDX"],
      features: [
        "Markdown/MDX support",
        "Code syntax highlighting",
        "SEO optimization",
        "Blog post management",
        "Category system",
        "Learning documentation",
        "Share functionality"
      ],
      impact: "Sharing knowledge with the developer community",
      link: "https://blogbyte.vercel.app/",
      featured: false
    }
  ],
  education: {
    current: {
      degree: "Bachelor's in Computer Engineering",
      institution: "Sarvajanik College of Engineering and Technology",
      location: "Surat, Gujarat, India",
      status: "Currently Pursuing",
      focus: ["Computer Science", "Software Engineering", "AI/ML"]
    },
    previous: [
      {
        level: "High School",
        location: "Surat, India",
        completed: true
      },
      {
        level: "Primary School",
        location: "Surat, India",
        completed: true
      }
    ]
  },
  availability: {
    status: "Available",
    types: ["Freelance projects", "Consulting opportunities", "Full-time positions", "Contract work"],
    preferredWork: ["AI/ML projects", "Full-stack development", "Cloud architecture", "Web applications", "RAG implementations"],
    workStyle: ["Remote", "Onsite", "Hybrid"],
    idealProjects: ["Innovative AI/ML solutions", "Scalable web applications", "Cloud-native applications", "Projects with social impact"]
  },
  achievements: [
    "Successfully deployed AI chatbots in production",
    "Built digital repository for major university",
    "Developed AI proctoring system in hackathon",
    "24+ months of diverse internship experience",
    "Proficient in 6+ programming languages/frameworks"
  ]
};

// Build comprehensive system prompt with all portfolio data
function buildSystemPrompt(): string {
  const { personalInfo, about, currentPosition, experience, skills, services, projects, education, availability, achievements } = PORTFOLIO_DATA;

  const experienceDetails = experience.positions.map(pos => 
    `- ${pos.title} at ${pos.company} (${pos.location}, ${pos.type}) - ${pos.duration} (${pos.startDate} to ${pos.endDate})
  Responsibilities: ${pos.responsibilities.join(', ')}
  Technologies: ${pos.technologies.join(', ')}
  Achievements: ${pos.achievements.join(', ')}`
  ).join('\n\n');

  const featuredProjects = projects.filter(p => p.featured).map(p => 
    `${p.title} (${p.type}, ${p.year || p.date}): ${p.description} Technologies: ${p.technologies.join(', ')}. ${p.link ? `Live: ${p.link}` : ''}`
  ).join('\n\n');

  const allProjects = projects.map(p => 
    `${p.title} - ${p.description} (${p.technologies.join(', ')})${p.link ? ` - ${p.link}` : ''}`
  ).join('\n');

  return `You are an AI assistant representing ${personalInfo.name}, a ${personalInfo.title} based in ${personalInfo.location.city}, ${personalInfo.location.state}, ${personalInfo.location.country}.

PERSONALITY:
- Speak in first person as ${personalInfo.name}
- Be professional, friendly, and enthusiastic
- Keep responses concise (2-4 sentences for simple questions, longer for detailed questions)
- Show passion for AI/ML and technology
- Never make up information not provided below
- ${personalInfo.philosophy}

KEY INFORMATION:

Personal:
- Name: ${personalInfo.name}
- Title: ${personalInfo.title}
- Age: 23 years old (born January 29, 2003)
- Location: ${personalInfo.location.city}, ${personalInfo.location.state}, ${personalInfo.location.country}
- Email: ${personalInfo.email}
- Phone: ${personalInfo.phone}
- Website: ${personalInfo.website}
- LinkedIn: ${personalInfo.social.linkedin}
- GitHub: ${personalInfo.social.github}
- Tagline: ${personalInfo.tagline}
- Hobbies: ${personalInfo.hobbies.join(', ')}
- Philosophy: ${personalInfo.philosophy}

About:
- Summary: ${about.summary}
- Passion: ${about.passion}
- Values: ${about.values.join(', ')}

Current Position:
- Role: ${currentPosition.title}
- Company: ${currentPosition.company}
- Location: ${currentPosition.location}
- Type: ${currentPosition.type}
- Duration: ${currentPosition.duration} (started ${currentPosition.startDate})
- Focus Areas: ${currentPosition.focus.join(', ')}
- Current Learnings: ${currentPosition.learnings.join(', ')}

Experience:
- Total Internship Experience: ${experience.totalInternshipMonths} months
- Current Role Experience: ${experience.totalCurrentRoleMonths}+ months
- Total Professional Experience: ${experience.totalInternshipMonths + experience.totalCurrentRoleMonths} months

Work History:
${experienceDetails}

Technical Skills:

Frontend (${skills.frontend.proficiency}% proficiency):
- Technologies: ${skills.frontend.technologies.join(', ')}

Backend (${skills.backend.proficiency}% proficiency):
- Technologies: ${skills.backend.technologies.join(', ')}

AI/ML (${skills.aiMl.proficiency}% proficiency):
- Technologies: ${skills.aiMl.technologies.join(', ')}

Cloud & Deployment:
- Platforms: ${skills.cloudDeployment.platforms.join(', ')}
- AWS Services: ${skills.cloudDeployment.awsServices.join(', ')}
- Deployment Platforms: ${skills.deployment.platforms.join(', ')}

Databases:
- Technologies: ${skills.databases.technologies.join(', ')}

Development Tools:
- ${skills.tools.technologies.join(', ')}

Other Technologies:
- ${skills.other.technologies.join(', ')}

Services Offered:
${services.map(s => `- ${s.title}: ${s.description} (Technologies: ${s.technologies.join(', ')})`).join('\n')}

Featured Projects (${projects.filter(p => p.featured).length}):
${featuredProjects}

All Projects (${projects.length} total):
${allProjects}

Education:
- Current: ${education.current.degree} from ${education.current.institution}, ${education.current.location} (${education.current.status})
- Focus Areas: ${education.current.focus.join(', ')}
- Previous: ${education.previous.map(e => `${e.level} in ${e.location}`).join(', ')}

Availability:
- Status: ${availability.status}
- Open to: ${availability.types.join(', ')}
- Preferred Work: ${availability.preferredWork.join(', ')}
- Work Style: ${availability.workStyle.join(', ')}
- Ideal Projects: ${availability.idealProjects.join(', ')}

Key Achievements:
${achievements.map(a => `- ${a}`).join('\n')}
RESPONSE RULES:

1. I will always answer using ONLY the information provided above.
2. I will speak in first person as Bhavin Ondhiya.
3. I will always respond in **bullet points**. I will never write paragraphs or merge bullets.
4. **CRITICAL**: Each bullet point MUST be on its own separate line. Press Enter/Return after each bullet point.
5. I will NEVER put multiple bullet points on the same line (e.g., "• point 1 * point 2" is WRONG).
6. Each bullet will contain **1-2 sentences max**.
7. I will use **bold** for project names, key points, and important terms.
8. I will leave a blank line between different sections (projects, skills, experiences).

PROJECTS:

9. When describing projects:
   9.1 I will only list exactly what is asked by the user.
   9.2 Each project will be in its **own bullet on a new line**.
   9.3 Format (each on a separate line):
       • **Project Name** - brief description
       • Key feature 1
       • Key feature 2
       • Technologies: tech1, tech2
   9.4 I will include 1-2 key features per project as separate bullets (each on a new line).
   9.5 I will include technologies used as a separate bullet (on a new line).
   9.6 I will include only the link(s) related to the project asked, nothing extra.

TECHNICAL SKILLS:

10. I will organize technical skills by category with bullets (each on a new line):
    • **Frontend**: skill1, skill2
    • **Backend**: skill1, skill2
    • **Other Tools**: tool1, tool2

RESUME/CV:

11. If asked about my resume/CV (on a new line):
    • Here's my resume! You can download it below.

GREETINGS:

12. For greetings, I will use 1-3 bullets max (each on a new line).
13. I will encourage direct contact at bhavinondhiya0@gmail.com for detailed discussion.

MISSING INFORMATION:

14. If information is missing, I will respond politely (on a new line):
    • I don't have that information, please contact me directly.

CRITICAL FORMATTING RULES:

15. Under no circumstances will I write flowing paragraphs.
16. Every response will follow bullet-point formatting.
17. **EACH BULLET POINT MUST BE ON A SEPARATE LINE** - never put multiple bullets on the same line.
18. Each bullet will be short, concise, and clear.
19. Blank lines will separate sections (projects, skills, experiences, greetings).
20. Example of CORRECT format:
    • First point

    • Second point

    • Third point
21. Example of WRONG format (DO NOT DO THIS):
    • First point * Second point * Third point (all on same line)

ADDITIONAL NOTES:

22. I will maintain consistency in formatting throughout the response.
23. I will not include URLs directly in the text unless specifically asked for a project link.
24. I will always ensure clarity and readability for each bullet point.
25. I will respond fully as Bhavin Ondhiya, in first person, following all bullet-point rules.


`;
}

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check if user is asking for resume
    const resumeKeywords = ['resume', 'cv', 'curriculum vitae', 'download resume', 'get resume', 'resume pdf', 'resume file'];
    const isResumeRequest = resumeKeywords.some(keyword => 
      message.toLowerCase().includes(keyword)
    );

    // If it's a resume request, return special response with button flag
    if (isResumeRequest) {
      return NextResponse.json({ 
        message: "Here's my resume! You can download it below.",
        showResumeButton: true
      });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      console.error('GROQ_API_KEY is not set');
      return NextResponse.json(
        { error: 'AI service is not configured' },
        { status: 500 }
      );
    }

    // Build conversation messages
    const messages = [
      {
        role: 'system',
        content: buildSystemPrompt(),
      },
      // Add conversation history (last 10 messages to stay within token limits)
      ...conversationHistory.slice(-10).map((msg: { text: string; isUser: boolean }) => ({
        role: msg.isUser ? 'user' : 'assistant',
        content: msg.text,
      })),
      {
        role: 'user',
        content: message,
      },
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages,
        temperature: 0.7,
        max_tokens: 800,
        stream: false,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Groq API Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to get AI response' },
        { status: response.status }
      );
    }

    const data = await response.json();
    let aiMessage = data.choices[0]?.message?.content || "I'm having trouble right now. Please contact me at bhavinondhiya0@gmail.com";

    // Check if AI response mentions resume
    const aiResumeKeywords = ['resume', 'cv', 'curriculum vitae'];
    const aiMentionsResume = aiResumeKeywords.some(keyword => 
      aiMessage.toLowerCase().includes(keyword)
    );

    // Map of URLs to project names
    const projects = PORTFOLIO_DATA.projects;
    const urlToProjectMap: { [key: string]: string } = {};
    const mentionedProjects: Set<string> = new Set();
    
    projects.forEach(project => {
      if (project.link && project.link !== '#' && project.link.startsWith('http')) {
        urlToProjectMap[project.link] = project.title;
      }
    });

    // First, check which projects are actually mentioned in the response
    const lowerMessage = aiMessage.toLowerCase();
    
    // Check each project to see if it's mentioned in the response
    projects.forEach(project => {
      if (project.link && project.link !== '#' && project.link.startsWith('http')) {
        const projectNameLower = project.title.toLowerCase();
        
        // Check for full project name match (most reliable)
        if (lowerMessage.includes(projectNameLower)) {
          mentionedProjects.add(project.link);
        } else {
          // Fallback: check for unique identifier (first word) as whole word
          const uniqueIdentifier = projectNameLower.split(/\s+/)[0];
          // Only match if identifier is at least 4 characters to avoid false matches
          if (uniqueIdentifier.length >= 4) {
            const identifierRegex = new RegExp(`\\b${uniqueIdentifier}\\b`, 'i');
            if (identifierRegex.test(aiMessage)) {
              mentionedProjects.add(project.link);
            }
          }
        }
      }
    });

    // Only create visit links for projects that are actually mentioned
    // Use a Map to ensure no duplicates by URL
    const visitLinksMap = new Map<string, { name: string; url: string }>();
    mentionedProjects.forEach(url => {
      if (urlToProjectMap[url] && !visitLinksMap.has(url)) {
        visitLinksMap.set(url, {
          name: urlToProjectMap[url],
          url: url
        });
      }
    });
    
    // Convert to array
    const visitLinks = Array.from(visitLinksMap.values());

    // Format message: Remove URLs from text only for mentioned projects
    Object.entries(urlToProjectMap).forEach(([url, projectName]) => {
      // Only process if this project was mentioned
      if (!mentionedProjects.has(url)) {
        return;
      }

      const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const escapedProjectName = projectName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      // Remove all patterns of URLs from text
      const patterns = [
        // Pattern: **Project Name** (url)
        new RegExp(`\\*\\*${escapedProjectName}\\*\\*\\s*\\(${escapedUrl}\\)`, 'gi'),
        // Pattern: **Project Name** ([Visit](url)) or similar markdown links
        new RegExp(`\\*\\*${escapedProjectName}\\*\\*\\s*\\[([^\\]]+)\\]\\(${escapedUrl}\\)`, 'gi'),
        // Pattern: Project Name (url)
        new RegExp(`${escapedProjectName}\\s*\\(${escapedUrl}\\)`, 'gi'),
        // Pattern: Standalone URL
        new RegExp(`\\b${escapedUrl}\\b`, 'gi'),
        // Pattern: Markdown link [text](url) for this project
        new RegExp(`\\[([^\\]]+)\\]\\(${escapedUrl}\\)`, 'gi'),
      ];
      
      patterns.forEach(pattern => {
        if (pattern.source.includes(projectName)) {
          // Replace with just the project name in bold
          aiMessage = aiMessage.replace(pattern, `**${projectName}**`);
        } else {
          // Remove the URL/markdown link entirely
          aiMessage = aiMessage.replace(pattern, '');
        }
      });
    });
    
    // CRITICAL: First split inline bullet points that are on the same line
    // Pattern: • text • text • text (all on one line) - split into separate lines
    // This must happen BEFORE space normalization
    aiMessage = aiMessage.replace(/(•[^•\n]+?)(\s+•)/g, '$1\n$2');
    
    // Also split bullet points separated by punctuation followed by bullet
    // Pattern: text. • text. • text.
    aiMessage = aiMessage.replace(/([\.\!\?])\s+(•)/g, '$1\n$2');
    
    // Split bullet points that are separated by periods but on same line
    // Pattern: • text. • text. • text.
    aiMessage = aiMessage.replace(/(•[^•\n]+?[\.\!\?])\s+(•)/g, '$1\n$2');
    
    // Clean up extra spaces and malformed markdown (but preserve newlines we just added)
    aiMessage = aiMessage
      .replace(/[ \t]+/g, ' ') // Normalize spaces but keep newlines
      .replace(/\s*-\s*-/g, ' -')
      .replace(/\[([^\]]+)\]\(https?:\/\/[^\)]+\)/g, '') // Remove any remaining markdown links
      // Fix malformed bold markdown patterns
      .replace(/\*\*([^*\n]+)\*([^*\n\s])/g, '**$1**$2') // Fix **text*text -> **text**text
      .replace(/\*\*([^*\n]+)\*$/gm, '**$1**') // Fix **text* at end of line
      .replace(/\*\*([^*\n]+)\*\s/g, '**$1** ') // Fix **text* followed by space
      .replace(/\*\*([^*\n]+)\*\n/g, '**$1**\n') // Fix **text* followed by newline
      .replace(/\*\*([^*\n]+)\*([\s\n•])/g, '**$1**$2') // Fix **text* followed by space/newline/bullet
      // Fix single asterisk bold (if it's meant to be bold)
      .replace(/([^\*])\*([^*\n\s]+)\*([^\*\n\s])/g, '$1**$2**$3') // Fix *text*text -> **text**text (but not if part of **)
      // Remove standalone single asterisks that aren't part of markdown (but keep bullet points)
      .replace(/([^\n•\-\*])\s+\*\s+([^\n•\-\*])/g, '$1 $2') // Remove standalone * with spaces (not bullets)
      .replace(/\s+/g, ' ')
      .trim();

    // Get all project URLs to exclude from further processing
    const projectUrls = new Set(Object.keys(urlToProjectMap));

    // Handle any remaining standalone URLs that weren't project URLs
    const urlRegex = /(https?:\/\/[^\s\)]+)/g;
    aiMessage = aiMessage.replace(urlRegex, (url: string) => {
      // Skip if already formatted as markdown link
      if (url.includes('[') || url.includes(']')) {
        return '';
      }
      
      const cleanUrl = url.replace(/[.,;:!?]+$/, '');
      
      // Skip if this is a project URL (should already be removed)
      if (projectUrls.has(cleanUrl)) {
        return '';
      }
      
      // Only convert non-project URLs to markdown links
      try {
        const urlObj = new URL(cleanUrl);
        return `[${urlObj.hostname}](${cleanUrl})`;
      } catch {
        return '';
      }
    });
    
    // Final cleanup
    aiMessage = aiMessage.replace(/\s+/g, ' ').trim();

    return NextResponse.json({ 
      message: aiMessage,
      showResumeButton: aiMentionsResume,
      visitLinks: visitLinks.length > 0 ? visitLinks : undefined
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}
