import { resume } from "@/data/resume";

function Heading({ children }: { children: string }) {
  return (
    <h2 className="mb-1.5 border-b border-ink font-ats text-[13px] font-bold uppercase tracking-wider text-ink">
      {children}
    </h2>
  );
}

export function AtsResume() {
  const skillLine = [
    ...Object.values(resume.skills).flat(),
    "Product Design",
    "Interaction Design",
    "Design Systems",
    "Accessibility (WCAG)",
    "Responsive Design",
    "Fintech UI",
  ].filter((v, i, a) => a.indexOf(v) === i);

  return (
    <div className="space-y-6 sm:space-y-8 print:space-y-0 font-ats">
      {/* PAGE 1 */}
      <article className="resume-page mx-auto flex flex-col justify-between bg-white px-8 py-8 sm:px-10 sm:py-9 text-ink shadow-[0_24px_60px_-24px_rgba(26,35,50,0.28)]">
        <div>
          {/* Header */}
          <header className="text-left border-b-2 border-ink pb-3">
            <h1 className="font-ats text-2xl sm:text-3xl font-bold uppercase tracking-tight text-ink">{resume.name}</h1>
            <p className="font-ats text-sm sm:text-base font-bold text-ink mt-0.5">{resume.role}</p>
            <p className="mt-2 font-ats text-xs leading-normal text-ink">
              {resume.phone} &nbsp;|&nbsp; {resume.email} &nbsp;|&nbsp; {resume.location}
            </p>
            <p className="mt-0.5 font-ats text-xs text-ink">
              <a href={resume.portfolio} target="_blank" rel="noreferrer" className="underline font-medium">
                {resume.portfolio}
              </a>
            </p>
          </header>

          {/* Professional Summary */}
          <section className="mt-4">
            <Heading>Professional Summary</Heading>
            <p className="font-ats text-[13px] leading-relaxed text-ink">{resume.summary}</p>
          </section>

          {/* Experience */}
          <section className="mt-4">
            <Heading>Professional Experience</Heading>
            <div className="space-y-3.5">
              {resume.experience.map((job) => (
                <div key={job.org}>
                  <div className="flex flex-wrap items-baseline justify-between">
                    <p className="font-ats text-[14px] font-bold text-ink">{job.title}</p>
                    <span className="font-ats text-xs font-semibold text-ink">{job.dates.replace("—", "-")}</span>
                  </div>
                  <p className="font-ats text-xs font-semibold text-ink">
                    {job.org} &nbsp;|&nbsp; {job.type}
                  </p>
                  <ul className="mt-1.5 list-disc pl-5 font-ats text-[12.5px] leading-relaxed text-ink space-y-1">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Projects */}
          <section className="mt-4">
            <Heading>Key Projects & Case Studies</Heading>
            <div className="space-y-2">
              {resume.projects.map((p) => (
                <div key={p.title} className="font-ats text-[12.5px] leading-relaxed text-ink">
                  <span className="font-bold">{p.title}: </span>
                  <span>{p.detail}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Page 1 Footer */}
        <footer className="mt-4 flex items-center justify-between border-t border-ink/40 pt-2 text-[11px] text-ink">
          <span>{resume.name} — UX/UI Designer</span>
          <span className="font-semibold">Page 1 of 2</span>
        </footer>
      </article>

      {/* PAGE 2 */}
      <article className="resume-page mx-auto flex flex-col justify-between bg-white px-8 py-8 sm:px-10 sm:py-9 text-ink shadow-[0_24px_60px_-24px_rgba(26,35,50,0.28)]">
        <div>
          {/* Header Sub-bar */}
          <header className="text-left border-b-2 border-ink pb-2.5 flex items-baseline justify-between">
            <div>
              <h2 className="font-ats text-lg font-bold uppercase tracking-tight text-ink">{resume.name}</h2>
              <p className="font-ats text-xs font-semibold text-ink">{resume.role} · Technical Profile</p>
            </div>
            <p className="font-ats text-xs text-ink">{resume.email}</p>
          </header>

          {/* Skills & Tools */}
          <section className="mt-4">
            <Heading>Technical & Design Skills</Heading>
            <ul className="list-disc pl-5 font-ats text-[12.5px] leading-relaxed text-ink space-y-1.5">
              <li>
                <span className="font-bold">Core Skills & Methodologies: </span>
                {skillLine.join(", ")}
              </li>
              <li>
                <span className="font-bold">UI/UX Design Tools: </span>
                Figma (Auto Layout, Components, Tokens), FigJam, Balsamiq
              </li>
              <li>
                <span className="font-bold">Prototyping & Developer Handoff: </span>
                Adobe XD, Framer, Zeplin
              </li>
              <li>
                <span className="font-bold">AI Tools & Modern Workflow: </span>
                Cursor AI, Antigravity, Claude, ChatGPT
              </li>
              <li>
                <span className="font-bold">Frontend Code & Web Builders: </span>
                HTML5 & CSS3, Tailwind CSS, Wix Studio
              </li>
            </ul>
          </section>

          {/* Education */}
          <section className="mt-4">
            <Heading>Education</Heading>
            <div className="space-y-2 font-ats text-[12.5px] leading-snug text-ink">
              {resume.education.map((ed) => (
                <div key={ed.school} className="flex flex-wrap justify-between items-baseline">
                  <span>
                    <span className="font-bold">{ed.credential}</span> &nbsp;—&nbsp; {ed.school}
                  </span>
                  <span className="font-semibold text-xs">{ed.dates.replace("—", "-")}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mt-4">
            <Heading>Certifications & Credentials</Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 font-ats text-[12.5px] text-ink">
              {resume.certifications.map((c) => (
                <div key={c.name} className="flex items-baseline justify-between">
                  <span className="font-medium">• {c.name}</span>
                  <span className="text-ink font-semibold text-xs shrink-0 ml-1">({c.org})</span>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="mt-4">
            <Heading>Languages</Heading>
            <p className="font-ats text-[12.5px] text-ink">{resume.languages.join("   ·   ")}</p>
          </section>
        </div>

        {/* Page 2 Footer */}
        <footer className="mt-4 flex items-center justify-between border-t border-ink/40 pt-2 text-[11px] text-ink">
          <span>{resume.email} &nbsp;|&nbsp; {resume.phone}</span>
          <span className="font-semibold">Page 2 of 2</span>
        </footer>
      </article>
    </div>
  );
}
