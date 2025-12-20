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
      description: "A modern web platform built with Next.js featuring advanced UI components, smooth animations, and responsive design. Showcases expertise in frontend development with modern React patterns and performance optimization.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Advanced UI components library",
        "Smooth page transitions",
        "Responsive design system",
        "Performance-optimized rendering",
        "Modern React patterns",
        "Accessibility compliance"
      ],
      impact: "Demonstrating cutting-edge frontend development",
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
1. Answer using ONLY the information provided above
2. Be specific with numbers, dates, company names, and project links
3. Speak in first person as ${personalInfo.name}
4. Keep responses natural and conversational
5. ALWAYS format your responses with proper structure and readability:
   - Use **bold** for project names, important terms, and key points
   - Use bullet points (•) for lists - each item on a new line
   - Use numbered lists (1., 2., 3.) when listing sequential items
   - Add blank lines between paragraphs and sections for readability
   - Keep paragraphs concise (2-4 sentences max)
   - Use proper spacing and line breaks
6. When mentioning projects:
   - Format as: **Project Name** - description
   - For projects with live sites (ThinSLICE, Ghost, Portfolio): include link inline as [Visit](url)
   - For GitHub projects (DataGrafico, CodeInsights): mention "Visit GitHub repository" 
   - For blog sites (Blog Byte): mention "Visit blog"
   - Always provide a brief description after the project name
7. When listing multiple items (projects, skills, experiences):
   - Use bullet points (•) with each item on its own line
   - Add spacing between items for clarity
   - Use consistent formatting throughout
8. For technical information:
   - Organize by category with clear headings or bold labels
   - Use bullet points for lists within categories
   - Keep descriptions concise but informative
9. For greetings: Be brief, friendly, and offer to help
10. Encourage direct contact (${personalInfo.email}) for detailed discussions
11. Never make up or assume information not provided
12. If asked about something not in the data, politely say you don't have that information and suggest contacting directly
13. When discussing technical skills, organize them by category (Frontend, Backend, AI/ML, Cloud, Databases, Tools) with clear formatting
14. IMPORTANT: When asked about resume/CV, keep the response brief (1-2 sentences) and mention that the resume is available for download. Do NOT provide detailed resume content or list all experiences/skills. Just say something like "Here's my resume! You can download it below." or "I'd be happy to share my resume. You can download it below."
15. Always ensure your response is well-formatted, easy to read, with proper spacing, bullet points, and clear structure - similar to how ChatGPT formats responses.`;
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
    const githubBlogLinks: Array<{ name: string; url: string }> = [];
    
    projects.forEach(project => {
      if (project.link && project.link !== '#' && project.link.startsWith('http')) {
        urlToProjectMap[project.link] = project.title;
        
        // Check if it's a GitHub or blog link (for "Visit" button display)
        const isGitHub = project.link.includes('github.com');
        const isBlog = project.link.includes('blogbyte.vercel.app');
        
        if (isGitHub || isBlog) {
          githubBlogLinks.push({
            name: project.title,
            url: project.link
          });
        }
      }
    });

    // Format message: Replace URLs with formatted inline links
    // For GitHub/blog links, we'll remove them from text and show as buttons
    Object.entries(urlToProjectMap).forEach(([url, projectName]) => {
      const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const escapedProjectName = projectName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const isGitHub = url.includes('github.com');
      const isBlog = url.includes('blogbyte.vercel.app');
      
      // For GitHub/blog links, remove URL from text (will show as button)
      if (isGitHub || isBlog) {
        // Remove patterns like: **Project Name** (url) or Project Name (url)
        const patterns = [
          new RegExp(`\\*\\*${escapedProjectName}\\*\\*\\s*\\(${escapedUrl}\\)`, 'g'),
          new RegExp(`${escapedProjectName}\\s*\\(${escapedUrl}\\)`, 'g'),
          new RegExp(`\\b${escapedUrl}\\b`, 'g'),
        ];
        
        patterns.forEach(pattern => {
          if (pattern.source.includes(projectName)) {
            aiMessage = aiMessage.replace(pattern, `**${projectName}**`);
          } else {
            aiMessage = aiMessage.replace(pattern, '');
          }
        });
        
        // Clean up extra spaces
        aiMessage = aiMessage.replace(/\s+/g, ' ').replace(/\s*-\s*-/g, ' -').trim();
      } else {
        // For other links (live sites), format as inline markdown links
        const pattern1 = new RegExp(`\\*\\*${escapedProjectName}\\*\\*\\s*\\(${escapedUrl}\\)`, 'g');
        if (pattern1.test(aiMessage)) {
          try {
            const hostname = new URL(url).hostname;
            aiMessage = aiMessage.replace(pattern1, `**${projectName}** ([Visit](${url}))`);
          } catch (e) {
            aiMessage = aiMessage.replace(pattern1, `**${projectName}** ([Visit](${url}))`);
          }
        }
        
        const pattern2 = new RegExp(`${escapedProjectName}\\s*\\(${escapedUrl}\\)`, 'g');
        if (pattern2.test(aiMessage)) {
          try {
            const hostname = new URL(url).hostname;
            aiMessage = aiMessage.replace(pattern2, `**${projectName}** ([Visit](${url}))`);
          } catch (e) {
            aiMessage = aiMessage.replace(pattern2, `**${projectName}** ([Visit](${url}))`);
          }
        }
        
        // Standalone URL
        const pattern3 = new RegExp(`\\b${escapedUrl}\\b`, 'g');
        if (pattern3.test(aiMessage) && !aiMessage.includes(`[Visit](${url})`)) {
          aiMessage = aiMessage.replace(pattern3, `[Visit](${url})`);
        }
      }
    });

    // Handle any remaining standalone URLs that weren't project URLs
    const urlRegex = /(https?:\/\/[^\s\)]+)/g;
    aiMessage = aiMessage.replace(urlRegex, (url: string) => {
      // Skip if already formatted as markdown link
      if (url.includes('[') || url.includes(']')) {
        return url;
      }
      
      const cleanUrl = url.replace(/[.,;:!?]+$/, '');
      try {
        const urlObj = new URL(cleanUrl);
        return `[${urlObj.hostname}](${cleanUrl})`;
      } catch {
        return url;
      }
    });

    return NextResponse.json({ 
      message: aiMessage,
      showResumeButton: aiMentionsResume,
      visitLinks: githubBlogLinks.length > 0 ? githubBlogLinks : undefined
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}
