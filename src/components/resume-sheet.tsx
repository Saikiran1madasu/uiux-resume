import { resume } from "@/data/resume";

function SectionLabel({ children }: { children: string }) {
  return (
    <h2 className="mb-2.5 flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.22em] text-accent">
      <span>{children}</span>
      <span className="h-px flex-1 bg-rule/80" />
    </h2>
  );
}

export function ResumeSheet() {
  return (
    <div className="space-y-8 sm:space-y-10 print:space-y-0">
      {/* PAGE 1 */}
      <article className="resume-page mx-auto flex flex-col justify-between bg-cream px-7 py-7 text-ink shadow-[0_24px_60px_-24px_rgba(26,35,50,0.35)] sm:px-10 sm:py-8">
        <div>
          {/* Header */}
          <header className="border-b border-rule pb-3.5">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.28em] text-accent">
              {resume.role}
            </p>
            <h1 className="mt-1 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {resume.name}
            </h1>
            <div className="mt-2.5 flex flex-wrap items-center justify-between gap-y-1 gap-x-4 border-t border-rule/50 pt-2 font-sans text-xs sm:text-[13px] text-ink-soft">
              <div>
                <a className="font-medium hover:text-accent transition-colors" href={resume.phoneHref}>
                  {resume.phone}
                </a>
              </div>
              <span className="hidden text-rule sm:inline" aria-hidden>·</span>
              <div>
                <a className="break-all font-medium hover:text-accent transition-colors" href={`mailto:${resume.email}`}>
                  {resume.email}
                </a>
              </div>
              <span className="hidden text-rule sm:inline" aria-hidden>·</span>
              <div className="font-medium">{resume.location}</div>
              <span className="hidden text-rule sm:inline" aria-hidden>·</span>
              <div>
                <a
                  className="break-all font-medium text-accent hover:underline"
                  href={resume.portfolio}
                  target="_blank"
                  rel="noreferrer"
                >
                  {resume.portfolioLabel}
                </a>
              </div>
            </div>
          </header>

          {/* Page 1 Sections */}
          <div className="mt-4 space-y-4 sm:space-y-5">
            {/* Profile */}
            <section>
              <SectionLabel>Profile</SectionLabel>
              <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-ink-soft">{resume.summary}</p>
            </section>

            {/* Experience */}
            <section>
              <SectionLabel>Experience</SectionLabel>
              <div className="space-y-4">
                {resume.experience.map((job) => (
                  <div key={job.org} className="rounded-sm">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h3 className="font-display text-base font-bold text-ink">{job.title}</h3>
                      <span className="font-sans text-xs font-semibold uppercase tracking-wider text-muted">
                        {job.dates}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs font-semibold text-accent">
                      {job.org}
                      <span className="text-muted font-normal"> · {job.type}</span>
                    </p>
                    <ul className="mt-1.5 list-disc space-y-1 pl-5 text-[12.5px] sm:text-[13px] leading-relaxed text-ink-soft">
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Selected Work & Key Projects */}
            <section>
              <SectionLabel>Selected Work & Key Projects</SectionLabel>
              <div className="grid gap-3 sm:grid-cols-2">
                {resume.projects.map((p) => (
                  <div
                    key={p.title}
                    className="flex flex-col justify-between rounded border border-rule/80 bg-paper/50 p-3 sm:p-3.5"
                  >
                    <div>
                      <h3 className="font-display text-[13.5px] font-bold text-ink leading-snug">{p.title}</h3>
                      <p className="mt-1.5 text-[12px] leading-relaxed text-ink-soft">{p.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Page 1 Footer */}
        <footer className="mt-4 flex items-center justify-between border-t border-rule/70 pt-2.5 text-xs text-muted">
          <span className="font-medium text-ink-soft">Madasu Sai Kiran — UX/UI Designer</span>
          <span className="font-semibold">Page 1 of 2</span>
        </footer>
      </article>

      {/* PAGE 2 */}
      <article className="resume-page mx-auto flex flex-col justify-between bg-cream px-7 py-7 text-ink shadow-[0_24px_60px_-24px_rgba(26,35,50,0.35)] sm:px-10 sm:py-8">
        <div>
          {/* Header Sub-bar */}
          <header className="flex items-baseline justify-between border-b border-rule pb-3">
            <div>
              <h2 className="font-display text-xl font-bold text-ink">{resume.name}</h2>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                {resume.role} · Technical Profile & Credentials
              </p>
            </div>
            <div className="text-right text-xs text-ink-soft">
              <a href={resume.portfolio} target="_blank" rel="noreferrer" className="text-accent font-medium hover:underline">
                {resume.portfolioLabel}
              </a>
            </div>
          </header>

          {/* Page 2 Sections */}
          <div className="mt-4 space-y-4 sm:space-y-4.5">
            {/* Core Design Skills */}
            <section>
              <SectionLabel>Core Design Skills</SectionLabel>
              <div className="grid gap-3 sm:grid-cols-3">
                {Object.entries(resume.skills).map(([group, items]) => (
                  <div key={group} className="rounded border border-rule/80 bg-paper/40 p-3 text-xs">
                    <p className="font-bold uppercase tracking-wider text-ink text-xs">{group}</p>
                    <ul className="mt-1.5 list-disc pl-4 space-y-1 text-[12px] leading-snug text-ink-soft">
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Tools & Technologies */}
            <section>
              <SectionLabel>Tools & Technologies</SectionLabel>
              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded border border-rule/80 bg-paper/40 p-3 text-xs">
                  <p className="font-bold uppercase tracking-wider text-ink text-xs">UI/UX Design</p>
                  <ul className="mt-1.5 list-disc pl-4 space-y-1 text-[12px] leading-snug text-ink-soft">
                    <li>Figma (Auto Layout)</li>
                    <li>Design Tokens</li>
                    <li>FigJam</li>
                    <li>Balsamiq</li>
                  </ul>
                </div>
                <div className="rounded border border-rule/80 bg-paper/40 p-3 text-xs">
                  <p className="font-bold uppercase tracking-wider text-ink text-xs">Prototyping</p>
                  <ul className="mt-1.5 list-disc pl-4 space-y-1 text-[12px] leading-snug text-ink-soft">
                    <li>Adobe XD</li>
                    <li>Framer</li>
                    <li>Interactive Flows</li>
                    <li>Zeplin Handoff</li>
                  </ul>
                </div>
                <div className="rounded border border-rule/80 bg-paper/40 p-3 text-xs">
                  <p className="font-bold uppercase tracking-wider text-ink text-xs">AI-Assisted Workflow</p>
                  <ul className="mt-1.5 list-disc pl-4 space-y-1 text-[12px] leading-snug text-ink-soft">
                    <li>Cursor AI</li>
                    <li>Antigravity</li>
                    <li>Claude</li>
                    <li>ChatGPT Prompting</li>
                  </ul>
                </div>
                <div className="rounded border border-rule/80 bg-paper/40 p-3 text-xs">
                  <p className="font-bold uppercase tracking-wider text-ink text-xs">Frontend & Web</p>
                  <ul className="mt-1.5 list-disc pl-4 space-y-1 text-[12px] leading-snug text-ink-soft">
                    <li>HTML5 & CSS3</li>
                    <li>Tailwind CSS</li>
                    <li>Wix Studio</li>
                    <li>Responsive Layouts</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Domain Expertise */}
            <section>
              <SectionLabel>Domain Expertise & Competencies</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {resume.domainExpertise.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-rule bg-paper/60 px-2.5 py-1 text-[11.5px] font-medium text-ink-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            {/* Education & Certifications */}
            <section>
              <SectionLabel>Education & Certifications</SectionLabel>
              <div className="space-y-3.5">
                {/* Education Cards */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {resume.education.map((ed) => (
                    <div
                      key={ed.school}
                      className="flex flex-col justify-between rounded border border-rule/80 bg-paper/40 p-3"
                    >
                      <div>
                        <div className="flex items-baseline justify-between gap-2">
                          <p className="text-xs sm:text-[13px] font-bold text-ink">{ed.school}</p>
                          <span className="text-[11px] font-semibold text-muted">{ed.dates}</span>
                        </div>
                        <p className="mt-0.5 text-xs text-accent font-semibold">{ed.credential}</p>
                        <p className="mt-1.5 text-[11.5px] text-ink-soft leading-relaxed">{ed.note}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certifications: 3x2 Grid */}
                <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {resume.certifications.map((c) => (
                    <div
                      key={c.name}
                      className="flex flex-col justify-between rounded border border-rule/80 bg-paper/40 p-2.5 text-xs"
                    >
                      <p className="font-semibold text-ink leading-snug text-[12px]">{c.name}</p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                        {c.org}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Languages */}
            <section className="flex flex-wrap items-center justify-between gap-2 border-t border-rule/80 pt-2.5 text-xs text-ink-soft">
              <span className="font-bold uppercase tracking-wider text-accent">Languages</span>
              <span className="font-medium text-ink text-[12.5px]">{resume.languages.join("   ·   ")}</span>
            </section>
          </div>
        </div>

        {/* Page 2 Footer */}
        <footer className="mt-4 flex items-center justify-between border-t border-rule/70 pt-2.5 text-xs text-muted">
          <span className="font-medium text-ink-soft">{resume.email} · {resume.phone}</span>
          <span className="font-semibold">Page 2 of 2</span>
        </footer>
      </article>
    </div>
  );
}

