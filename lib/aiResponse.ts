import { EXPERIENCE, PROJECTS, SERVICES, PERSONAL_INFO, ABOUT_TEXT, TAGLINE, SKILLS, ROLES } from "./constants";

// Calculate experience months
function calculateMonths(startDate: Date): number {
  const now = new Date();
  const months = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
  return Math.max(0, months);
}

const juniorDevStartDate = new Date(2025, 5, 1); // June 2025
const juniorDevMonths = calculateMonths(juniorDevStartDate);
const internStartDate = new Date(2023, 8, 1); // Sep 2023
const totalInternshipMonths = calculateMonths(internStartDate);

export function generateAIResponse(userMessage: string): string {
  const message = userMessage.toLowerCase().trim();
  
  // Who is / Introduction questions - HIGHEST PRIORITY
  if (message.includes("who is") || message.includes("who are") || (message.includes("who") && (message.includes("bhavin") || message.includes("he") || message.includes("you")))) {
    const currentRole = EXPERIENCE[0];
    const topSkills = SKILLS.slice(0, 6).map(s => s.name).join(", ");
    return `${PERSONAL_INFO.name} is a ${currentRole.role} at ${currentRole.company}, based in ${PERSONAL_INFO.city}, India. ${TAGLINE}

${ABOUT_TEXT}

Currently ${PERSONAL_INFO.age} years old, ${PERSONAL_INFO.name} is pursuing a Bachelor's degree in Computer Engineering from Sarvajanik College of Engineering and Technology, Surat. With expertise in ${topSkills}, and more, ${PERSONAL_INFO.name} specializes in building modern web applications and AI-powered systems.`;
  }
  
  // Where is / Location questions
  if (message.includes("where is") || message.includes("where are") || (message.includes("where") && (message.includes("from") || message.includes("located") || message.includes("based")))) {
    const currentExp = EXPERIENCE[0];
    return `${PERSONAL_INFO.name} is from ${PERSONAL_INFO.city}, Gujarat, India. Currently working as a ${currentExp.role} at ${currentExp.company} in ${currentExp.location}. ${PERSONAL_INFO.name} is pursuing education at Sarvajanik College of Engineering and Technology in Surat. You can reach ${PERSONAL_INFO.name} at ${PERSONAL_INFO.email} or ${PERSONAL_INFO.phone}.`;
  }
  
  // About me / Introduction
  if (message.includes("about") || message.includes("introduce") || message.includes("tell me about yourself") || message.includes("describe yourself")) {
    const currentRole = EXPERIENCE[0];
    const projectCount = PROJECTS.length;
    return `${ABOUT_TEXT}

${TAGLINE}

Currently working as a ${currentRole.role} at ${currentRole.company}, ${PERSONAL_INFO.name} has worked on ${projectCount} major projects and has ${totalInternshipMonths} months of internship experience plus ${juniorDevMonths}+ months as a Junior Developer. ${PERSONAL_INFO.name} is ${PERSONAL_INFO.age} years old and is currently ${PERSONAL_INFO.freelance.toLowerCase()} for freelance projects and consulting opportunities.`;
  }
  
  // Experience related
  if (message.includes("experience") || message.includes("work") || message.includes("job") || message.includes("career") || message.includes("employment") || message.includes("worked")) {
    const expDetails = EXPERIENCE.map(exp => 
      `${exp.role} at ${exp.company} (${exp.location}) - ${exp.period}`
    ).join("\n• ");
    
    return `${PERSONAL_INFO.name} has ${totalInternshipMonths} months of internship experience and ${juniorDevMonths}+ months as a Junior Software Developer. Work experience includes:

• ${expDetails}

Currently working at ScaleCapacity as a Junior Software Developer, focusing on AI-driven systems, RAG pipelines, and Agentic RAG architectures using AWS and Langflow. Previously worked at GraphBud Technologies and ScaleCapacity (as intern), building full-stack applications with React, Node.js, and MongoDB, and developing AI chatbots with AWS Lex.`;
  }
  
  // Skills related
  if (message.includes("skill") || message.includes("technology") || message.includes("tech stack") || message.includes("what can you do") || message.includes("proficient") || message.includes("expertise")) {
    const topSkills = SKILLS.filter(s => parseFloat(s.description.match(/\d+/)?.[0] || "0") >= 80)
      .map(s => `${s.name} (${s.description.match(/\d+/)?.[0]}%)`)
      .slice(0, 10)
      .join(", ");
    
    const servicesList = SERVICES.map(s => s.title).join(", ");
    
    return `Core technical skills include: ${topSkills}, and more.

Specialized in: ${servicesList}

Proficient in the MERN stack (MongoDB, Express, React, Node.js), modern frontend frameworks like Next.js and React, backend technologies including Node.js, Python, and GraphQL, AI/ML frameworks like Langflow, Langchain, and Agentic AI, cloud services on AWS (Lambda, S3, CloudWatch, Amplify, IAM, Lex), and DevOps tools like Docker.`;
  }
  
  // Projects related
  if (message.includes("project") || message.includes("work on") || message.includes("built") || message.includes("developed") || message.includes("portfolio") || message.includes("showcase")) {
    const featuredProjects = PROJECTS.filter(p => p.featured).map(p => p.title);
    const allProjects = PROJECTS.map(p => p.title).join(", ");
    
    return `${PERSONAL_INFO.name} has worked on ${PROJECTS.length} projects. Featured projects include: ${featuredProjects.join(", ")}.

All projects: ${allProjects}

Notable work includes:
• ThinSLICE Digital Repository - A comprehensive digital repository for geological rock samples for University of Texas Austin
• CodeInsights - A coding platform with AI proctoring capabilities
• DataGrafico - An internship project showcasing data visualization
• Various AI-powered applications and full-stack web solutions

Each project demonstrates different aspects of skills from AI integration to full-stack development, cloud deployment, and modern UI/UX design.`;
  }
  
  // Education related
  if (message.includes("education") || message.includes("degree") || message.includes("university") || message.includes("college") || message.includes("studying") || message.includes("student")) {
    return `${PERSONAL_INFO.name} is currently pursuing a Bachelor's degree in Computer Engineering (${PERSONAL_INFO.degree}) from Sarvajanik College of Engineering and Technology, Surat, Gujarat, India. ${PERSONAL_INFO.name} has completed primary and high school education in Surat, India. Currently ${PERSONAL_INFO.age} years old, born on ${PERSONAL_INFO.birthday}.`;
  }
  
  // Contact / Email / Phone
  if (message.includes("contact") || message.includes("email") || message.includes("phone") || message.includes("reach") || message.includes("get in touch")) {
    return `You can contact ${PERSONAL_INFO.name} through:
• Email: ${PERSONAL_INFO.email}
• Phone: ${PERSONAL_INFO.phone}
• Location: ${PERSONAL_INFO.city}, Gujarat, India
• Website: ${PERSONAL_INFO.website}
• Resume: Available for download

${PERSONAL_INFO.name} is currently ${PERSONAL_INFO.freelance.toLowerCase()} for freelance projects and consulting opportunities. You can also connect on LinkedIn or check out GitHub for latest projects.`;
  }
  
  // Services / What I do
  if (message.includes("service") || message.includes("what do you do") || message.includes("offer") || message.includes("provide") || message.includes("capabilities")) {
    const servicesDetails = SERVICES.map(s => 
      `• ${s.title}: ${s.description}`
    ).join("\n");
    
    return `${PERSONAL_INFO.name} offers the following services:

${servicesDetails}

${PERSONAL_INFO.name} builds modern, scalable applications using cutting-edge technologies and is currently ${PERSONAL_INFO.freelance.toLowerCase()} for new projects.`;
  }
  
  // AI/ML specific
  if (message.includes("ai") || message.includes("machine learning") || message.includes("ml") || message.includes("rag") || message.includes("langflow") || message.includes("langchain") || message.includes("agentic")) {
    const currentExp = EXPERIENCE[0];
    return `${PERSONAL_INFO.name} specializes in AI/ML integration, particularly working with:
• Agentic AI - Autonomous reasoning, decision-making, and dynamic tool usage
• RAG (Retrieval Augmented Generation) pipelines - Enhanced LLM responses with context
• Langflow - Visual workflow orchestration for AI pipelines
• Langchain - Building LLM applications with chains and agents
• AWS Lex - Conversational AI chatbots with intent recognition

Currently working on RAG pipelines and Agentic RAG architectures at ${currentExp.company}. ${PERSONAL_INFO.name} has built conversational AI chatbots using AWS Lex and integrated AI capabilities into production systems.`;
  }
  
  // AWS / Cloud
  if (message.includes("aws") || message.includes("cloud") || message.includes("deployment") || message.includes("docker") || message.includes("infrastructure")) {
    const awsSkills = SKILLS.filter(s => s.name.includes("AWS")).map(s => s.name).join(", ");
    return `${PERSONAL_INFO.name} has extensive experience with AWS services including: ${awsSkills}, and more.

Also experienced with:
• Docker for containerization
• Vercel for deployment with custom domain management
• CI/CD pipelines for automated builds and deployments
• Cloud infrastructure design and management

Currently working on cloud-based AI systems at ScaleCapacity, deploying and managing applications on AWS with serverless architectures.`;
  }
  
  // Company / Work place
  if (message.includes("company") || message.includes("employer") || message.includes("workplace") || message.includes("scalecapacity") || message.includes("graphbud")) {
    const companies = [...new Set(EXPERIENCE.map(e => e.company))];
    const currentCompany = EXPERIENCE[0].company;
    return `${PERSONAL_INFO.name} currently works as a ${EXPERIENCE[0].role} at ${currentCompany} in ${EXPERIENCE[0].location}. 

Previous companies: ${companies.filter(c => c !== currentCompany).join(", ")}

Work history spans ${totalInternshipMonths} months of internships and ${juniorDevMonths}+ months as a Junior Developer, working on AI-driven systems, full-stack applications, and cloud infrastructure.`;
  }
  
  // Age / Birthday
  if (message.includes("age") || message.includes("old") || message.includes("birthday") || message.includes("born")) {
    return `${PERSONAL_INFO.name} is ${PERSONAL_INFO.age} years old, born on ${PERSONAL_INFO.birthday}.`;
  }
  
  // Resume / CV
  if (message.includes("resume") || message.includes("cv") || message.includes("curriculum vitae")) {
    return `You can download ${PERSONAL_INFO.name}'s resume from the portfolio website. The resume includes detailed information about education, work experience, projects, and technical skills. ${PERSONAL_INFO.name} is ${PERSONAL_INFO.freelance.toLowerCase()} for new opportunities.`;
  }
  
  // Default response - comprehensive
  return `I'm ${PERSONAL_INFO.name}, a ${EXPERIENCE[0].role} at ${EXPERIENCE[0].company} based in ${PERSONAL_INFO.city}, India. ${TAGLINE}

I have ${totalInternshipMonths} months of internship experience and ${juniorDevMonths}+ months as a Junior Developer. I specialize in Full-Stack Web Development, AI/ML Integration, and Cloud Infrastructure.

I can tell you more about:
• My experience and work history
• Technical skills and technologies I use
• Projects I've worked on
• Education and background
• Services I offer
• Contact information

What would you like to know more about?`;
}
