import { useState } from "react";
import { Download, Copy, Check } from "lucide-react";
import { coverLetters, coverLetterPlainText, type CoverLetterVariant } from "@/data/cover-letter";

export function CoverLetter() {
  const [variant, setVariant] = useState<CoverLetterVariant>("concise");
  const [copied, setCopied] = useState(false);
  const { candidate, greeting, subject, signoff, versions } = coverLetters;
  const current = versions[variant];

  function downloadVariantTxt() {
    const blob = new Blob([coverLetterPlainText(variant)], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Madasu_Sai_Kiran_Cover_Letter_${variant}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function copyVariantText() {
    try {
      await navigator.clipboard.writeText(coverLetterPlainText(variant));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  }

  return (
    <div className="mx-auto w-full max-w-[210mm] font-sans space-y-4">
      {/* Screen-only Length Selector and Direct Actions */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3 rounded-lg border border-rule/70 bg-cream/80 p-2.5 px-4 text-xs shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold text-ink-soft">Cover Letter Variant:</span>
          <div className="flex flex-wrap items-center gap-1 bg-paper/80 p-1 rounded-md border border-rule/60">
            <button
              type="button"
              onClick={() => setVariant("short")}
              className={`rounded px-2.5 py-1 font-semibold transition text-xs ${
                variant === "short"
                  ? "bg-ink text-cream shadow-xs"
                  : "text-ink-soft hover:text-ink hover:bg-cream"
              }`}
            >
              Short · 100w
            </button>
            <button
              type="button"
              onClick={() => setVariant("concise")}
              className={`rounded px-2.5 py-1 font-semibold transition text-xs ${
                variant === "concise"
                  ? "bg-ink text-cream shadow-xs"
                  : "text-ink-soft hover:text-ink hover:bg-cream"
              }`}
            >
              Concise · 300w
            </button>
            <button
              type="button"
              onClick={() => setVariant("comprehensive")}
              className={`rounded px-2.5 py-1 font-semibold transition text-xs ${
                variant === "comprehensive"
                  ? "bg-ink text-cream shadow-xs"
                  : "text-ink-soft hover:text-ink hover:bg-cream"
              }`}
            >
              Comprehensive · 350w
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={downloadVariantTxt}
            className="inline-flex items-center gap-1.5 rounded-md border border-rule bg-white px-2.5 py-1 text-xs font-semibold text-ink hover:border-accent hover:text-accent transition shadow-xs"
          >
            <Download className="size-3.5" />
            Download .txt
          </button>
          <button
            type="button"
            onClick={copyVariantText}
            className="inline-flex items-center gap-1.5 rounded-md border border-rule bg-white px-2.5 py-1 text-xs font-semibold text-ink hover:border-accent hover:text-accent transition shadow-xs"
          >
            {copied ? (
              <>
                <Check className="size-3.5 text-green-600" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="size-3.5" />
                Copy Letter
              </>
            )}
          </button>
        </div>
      </div>

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
          <div className="mt-4 sm:mt-5 border-b border-rule/60 pb-2.5 text-xs sm:text-[13px]">
            <span className="font-bold text-accent uppercase tracking-wider">Re: {subject}</span>
          </div>

          {/* Salutation */}
          <div className="mt-4 sm:mt-5 text-[13.5px] sm:text-[14px] font-bold text-ink">
            {greeting}
          </div>

          {/* Body Paragraphs */}
          <div className="mt-3 space-y-3 text-[12.5px] sm:text-[13px] leading-relaxed text-ink-soft">
            {current.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Signoff */}
          <div className="mt-5 sm:mt-6">
            <p className="text-[12.5px] sm:text-[13px] text-ink-soft">{signoff}</p>
            <div className="mt-2.5">
              <p className="font-display text-lg sm:text-xl font-bold text-ink">{candidate.name}</p>
              <p className="font-sans text-xs sm:text-[12.5px] font-semibold text-accent uppercase tracking-wider mt-0.5">
                {candidate.role}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-5 flex items-center justify-between border-t border-rule/70 pt-2.5 text-[11px] sm:text-[11.5px] text-muted">
          <span className="font-medium text-ink-soft">Madasu Sai Kiran — UX/UI Designer · {candidate.email}</span>
          <span className="font-semibold">Cover Letter · Page 1 of 1</span>
        </footer>
      </article>
    </div>
  );
}
