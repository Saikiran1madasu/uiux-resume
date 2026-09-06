import { resume } from "@/data/resume";

export function resumePlainText() {
  const skillLine = Object.entries(resume.skills)
    .map(([group, items]) => `${group}: ${items.join(", ")}`)
    .join("\n");

  const jobs = resume.experience
    .map(
      (job) =>
        `${job.title}\n${job.org} | ${job.type} | ${job.dates}\n${job.bullets.map((b) => `- ${b}`).join("\n")}`,
    )
    .join("\n\n");

  const projects = resume.projects.map((p) => `${p.title}\n${p.detail}`).join("\n\n");

  const education = resume.education
    .map((ed) => {
      const extra = "note" in ed ? `\n${ed.note}` : "";
      return `${ed.credential}, ${ed.school}, ${ed.dates}${extra}`;
    })
    .join("\n\n");

  const certs = resume.certifications.map((c) => `${c.name}, ${c.org}`).join("\n");

  return [
    resume.name.toUpperCase(),
    resume.role.replace(" / ", "/"),
    `${resume.phone} | ${resume.email} | ${resume.location}`,
    resume.portfolio,
    "",
    "SUMMARY",
    resume.summary,
    "",
    "EXPERIENCE",
    jobs,
    "",
    "PROJECTS",
    projects,
    "",
    "SKILLS",
    skillLine,
    "",
    "TOOLS",
    resume.tools.join(", "),
    "",
    "EDUCATION",
    education,
    "",
    "CERTIFICATIONS",
    certs,
    "",
    "LANGUAGES",
    resume.languages.join(", "),
  ].join("\n");
}
