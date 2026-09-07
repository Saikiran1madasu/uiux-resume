import { resume } from "./resume";

export const coverLetter = {
  candidate: {
    name: resume.name,
    role: resume.role,
    phone: resume.phone,
    phoneHref: resume.phoneHref,
    email: resume.email,
    location: resume.location,
    portfolio: resume.portfolio,
    portfolioLabel: resume.portfolioLabel,
  },
  recipient: {
    greeting: "Dear Hiring Manager & Design Team,",
    roleTitle: "UX / UI Designer",
    company: "[Company Name]",
  },
  date: "September 2026",
  subject: "Application for UX / UI Designer Role",
  paragraphs: [
    "I am writing to express my strong interest in the UX/UI Designer position. With a solid track record of shipping 7+ responsive web platforms and 3 mobile applications across fintech, SaaS, and digital marketing ecosystems, I specialize in transforming complex user requirements into intuitive, accessible, and conversion-focused digital experiences.",
    "In my current role at Intexm Media, I lead end-to-end product design across mobile apps and responsive web platforms. By conducting qualitative user research, usability testing sessions, and customer journey mapping, I identified critical friction points and redesigned high-value transaction flows—driving a 22% uplift in user onboarding conversion. My approach pairs rigorous user-centered methodologies with data-informed design decisions to deliver measurable product and business outcomes.",
    "Beyond individual features, I take pride in crafting scalable design systems from the ground up. In Figma, I architected comprehensive multi-brand component libraries utilizing Auto Layout, component variants, and design tokens, reducing developer handoff time by 30% and ensuring strict compliance with WCAG 2.1 AA accessibility guidelines. Furthermore, I integrate modern AI-assisted workflows (Cursor AI, Antigravity, Claude) and rapid prototyping tools (Framer, FigJam, Tailwind CSS) to accelerate iteration cycles from low-fidelity wireframes to production-ready interfaces.",
    "I am excited about the opportunity to bring my problem-solving mindset, passion for craft, and collaborative energy to your team. You can review my complete case studies, interactive prototypes, and design artifacts on my portfolio at saikiran1madasu.github.io/portfolio. Thank you for your time and consideration; I look forward to discussing how my experience and skills can contribute to your product vision.",
  ],
  signoff: "Sincerely,",
};
