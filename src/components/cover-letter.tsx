import { coverLetter } from "@/data/cover-letter";

export function CoverLetter() {
  const { candidate, recipient, paragraphs, signoff } = coverLetter;

  return (
    <div className="mx-auto w-full max-w-[210mm] font-sans">
      <article className="resume-page mx-auto flex flex-col justify-between bg-cream px-6 py-6 text-ink shadow-[0_24px_60px_-24px_rgba(26,35,50,0.35)] sm:px-10 sm:py-9">
        <div>
          {/* Header matching Designed Resume */}
          <header className="border-b border-rule pb-3.5">
            <p className="font-sans text-[11.5px] sm:text-xs font-bold uppercase tracking-[0.26em] text-accent">
              {candidate.role}
            </p>
            <h1 className="mt-0.5 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {candidate.name}
            </h1>
            <div className="mt-2.5 flex flex-wrap items-center justify-between gap-y-1 gap-x-3 border-t border-rule/50 pt-2 font-sans text-[12.5px] sm:text-[13px] text-ink-soft">
              <div>
                <a className="font-medium hover:text-accent transition-colors" href={candidate.phoneHref}>
                  {candidate.phone}
                </a>
              </div>
              <span className="hidden text-rule sm:inline" aria-hidden>·</span>
              <div>
                <a className="break-all font-medium hover:text-accent transition-colors" href={`mailto:${candidate.email}`}>
                  {candidate.email}
                </a>
              </div>
              <span className="hidden text-rule sm:inline" aria-hidden>·</span>
              <div className="font-medium">{candidate.location}</div>
              <span className="hidden text-rule sm:inline" aria-hidden>·</span>
              <div>
                <a
                  className="break-all font-medium text-accent hover:underline"
                  href={candidate.portfolio}
                  target="_blank"
                  rel="noreferrer"
                >
                  {candidate.portfolioLabel}
                </a>
              </div>
            </div>
          </header>

          {/* Letter Subject */}
          <div className="mt-5 sm:mt-6 border-b border-rule/60 pb-3 text-xs sm:text-[13px]">
            <span className="font-bold text-accent uppercase tracking-wider">Re: {recipient.subject}</span>
          </div>

          {/* Salutation */}
          <div className="mt-5 sm:mt-6 text-[13.5px] sm:text-[14px] font-bold text-ink">
            {recipient.greeting}
          </div>

          {/* Body Paragraphs */}
          <div className="mt-3.5 space-y-3.5 text-[13px] sm:text-[13.5px] leading-relaxed text-ink-soft">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Signoff */}
          <div className="mt-6 sm:mt-7">
            <p className="text-[13px] sm:text-[13.5px] text-ink-soft">{signoff}</p>
            <div className="mt-3">
              <p className="font-display text-lg sm:text-xl font-bold text-ink">{candidate.name}</p>
              <p className="font-sans text-xs sm:text-[12.5px] font-semibold text-accent uppercase tracking-wider mt-0.5">
                {candidate.role}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-6 flex items-center justify-between border-t border-rule/70 pt-3 text-[11px] sm:text-[11.5px] text-muted">
          <span className="font-medium text-ink-soft">Madasu Sai Kiran — UX/UI Designer · {candidate.email}</span>
          <span className="font-semibold">Cover Letter · Page 1 of 1</span>
        </footer>
      </article>
    </div>
  );
}
