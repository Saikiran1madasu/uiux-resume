import { resume } from "./resume";

export const coverLetters = {
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
  greeting: "Dear Hiring Team,",
  subject: "Application for UX / UI Designer Role",
  signoff: "Sincerely,",
  versions: {
    short: {
      title: "Short (100 Words)",
      description: "Fast-read elevator pitch for LinkedIn InMail, quick job portal messages, and fast outreach.",
      paragraphs: [
        "I am writing to express my strong interest in the UX/UI Designer role. With proven experience shipping 7+ web platforms and 3 mobile applications across fintech, SaaS, and marketing, I specialize in transforming complex user requirements into intuitive, accessible, and high-converting products.",
        "At Intexm Media, I led end-to-end design initiatives that boosted onboarding conversion by 22% and architected Figma design systems reducing developer handoff time by 30%. Grounded in human-centered research and WCAG accessibility, I create scalable, business-driven user experiences.",
        "You can explore my interactive prototypes at saikiran1madasu.github.io/portfolio. I would welcome the opportunity to discuss how my skill set can bring immediate value to your product team.",
      ],
    },
    concise: {
      title: "Concise (300 Words)",
      description: "Quick-read, high-impact format tailored for busy recruiters and job boards.",
      paragraphs: [
        "I am writing to express my strong interest in the UX/UI Designer role. As a product-focused designer with hands-on experience shipping 7+ responsive web platforms and 3 mobile applications across fintech, SaaS, and marketing domains, I specialize in creating intuitive, accessible, and high-converting user experiences.",
        "At Intexm Media, I lead end-to-end design initiatives from user discovery to production handoff. By conducting qualitative user research, journey mapping, and usability testing sessions, I identified critical user friction points and redesigned core transaction funnels, delivering a 22% increase in onboarding conversion. My work is grounded in human-centered design principles, ensuring every interface is backed by user evidence and business objectives.",
        "I also place deep emphasis on scalable design systems and execution speed. In Figma, I architected multi-brand design systems utilizing Auto Layout, design tokens, and reusable component libraries that reduced developer handoff friction by 30% while ensuring WCAG 2.1 AA accessibility standards. Additionally, I leverage modern AI tools (Cursor AI, Antigravity, Claude) alongside rapid prototyping in Framer and Tailwind CSS to validate ideas early and iterate quickly.",
        "Whether collaborating with cross-functional engineering teams or presenting design rationale to stakeholders, I focus on delivering seamless, delightful products that drive tangible results.",
        "You can explore my interactive case studies and UI prototypes on my portfolio at saikiran1madasu.github.io/portfolio. Thank you for your time and consideration. I would welcome the opportunity to discuss how my design skill set and dedication can bring value to your product team.",
      ],
    },
    comprehensive: {
      title: "Comprehensive (350 Words)",
      description: "In-depth narrative highlighting design methodologies and product impact.",
      paragraphs: [
        "I am writing to express my strong interest in the UX/UI Designer position. With a proven track record of shipping 7+ responsive web platforms and 3 mobile applications across fintech, SaaS, and digital marketing ecosystems, I specialize in transforming complex user requirements into intuitive, accessible, and conversion-focused digital experiences.",
        "In my role at Intexm Media, I lead end-to-end product design across mobile applications and responsive web platforms. By conducting qualitative user research, usability testing sessions, and customer journey mapping, I identified critical friction points and redesigned high-value transaction flows—driving a 22% uplift in user onboarding conversion. My approach pairs rigorous user-centered methodologies with data-informed design decisions to deliver measurable product and business outcomes.",
        "Beyond individual features, I take pride in crafting scalable design systems from the ground up. In Figma, I architected comprehensive multi-brand component libraries utilizing Auto Layout, component variants, and design tokens, reducing developer handoff time by 30% while ensuring strict compliance with WCAG 2.1 AA accessibility guidelines. Furthermore, I integrate modern AI-assisted workflows (Cursor AI, Antigravity, Claude) and rapid prototyping tools (Framer, FigJam, Tailwind CSS) to accelerate iteration cycles from low-fidelity wireframes to production-ready interfaces.",
        "I am excited about the opportunity to bring my problem-solving mindset, passion for craft, and collaborative energy to your organization. You can review my complete case studies, interactive prototypes, and design artifacts on my portfolio at saikiran1madasu.github.io/portfolio. Thank you for your time and consideration; I look forward to discussing how my experience and skills can contribute to your product vision.",
      ],
    },
  },
};

export type CoverLetterVariant = keyof typeof coverLetters.versions;

export function coverLetterPlainText(variant: CoverLetterVariant = "concise"): string {
  const v = coverLetters.versions[variant];
  return [
    coverLetters.candidate.name.toUpperCase(),
    coverLetters.candidate.role,
    `${coverLetters.candidate.phone} | ${coverLetters.candidate.email} | ${coverLetters.candidate.location}`,
    coverLetters.candidate.portfolio,
    "",
    `Subject: ${coverLetters.subject}`,
    "",
    coverLetters.greeting,
    "",
    ...v.paragraphs.flatMap((p) => [p, ""]),
    coverLetters.signoff,
    coverLetters.candidate.name,
    coverLetters.candidate.role,
  ].join("\n");
}

export const coverLetter = {
  ...coverLetters,
  paragraphs: coverLetters.versions.concise.paragraphs,
};
