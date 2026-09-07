import { createFileRoute } from "@tanstack/react-router";
import { Columns2, ExternalLink, FileText, LayoutList, Mail, PenTool, Printer } from "lucide-react";
import { useState } from "react";
import { AtsResume } from "@/components/ats-resume";
import { CoverLetter } from "@/components/cover-letter";
import { ResumeSheet } from "@/components/resume-sheet";
import { resume } from "@/data/resume";
import { resumePlainText } from "@/lib/resume-text";

type Version = "designed" | "ats" | "cover-letter";

export const Route = createFileRoute("/")({
  validateSearch: (raw: Record<string, unknown>): { v: Version; print: boolean } => ({
    v: raw.v === "ats" ? "ats" : raw.v === "cover-letter" ? "cover-letter" : "designed",
    print: raw.print === "1" || raw.print === true,
  }),
  component: Home,
});

function Home() {
  const { v: mode, print } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [copied, setCopied] = useState(false);

  function setMode(next: Version) {
    void navigate({ search: (prev) => ({ ...prev, v: next }) });
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(resume.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${resume.email}`;
    }
  }

  function downloadTxt() {
    const blob = new Blob([resumePlainText()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Madasu_Sai_Kiran_UX_UI_Resume.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  const currentView =
    mode === "ats" ? (
      <AtsResume />
    ) : mode === "cover-letter" ? (
      <CoverLetter />
    ) : (
      <ResumeSheet />
    );

  if (print) {
    return <div className="bg-white p-0">{currentView}</div>;
  }

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <div className="no-print border-b border-rule bg-cream/90 sticky top-0 z-50 backdrop-blur-sm shadow-sm">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Complete Job Application Suite
              </p>
              <h1 className="mt-0.5 font-display text-xl sm:text-2xl font-bold text-ink">
                Madasu Sai Kiran — Resume & Cover Letter Pack
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex min-h-10 items-center gap-2 rounded-md bg-accent px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-accent-deep transition"
              >
                <Printer className="size-4" />
                Print / Save PDF
              </button>
              <button
                type="button"
                onClick={downloadTxt}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-md border border-rule bg-white px-3 py-2 text-xs sm:text-sm font-medium text-ink hover:border-accent transition"
              >
                <FileText className="size-4" />
                ATS .txt
              </button>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-md border border-rule bg-white px-3 py-2 text-xs sm:text-sm font-medium text-ink hover:border-accent transition"
              >
                {copied ? (
                  "Copied!"
                ) : (
                  <>
                    <Mail className="size-4" />
                    Copy email
                  </>
                )}
              </button>
              <a
                href={resume.portfolio}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center gap-1.5 rounded-md border border-rule bg-white px-3 py-2 text-xs sm:text-sm font-medium text-ink hover:border-accent transition"
              >
                <ExternalLink className="size-4" />
                Portfolio
              </a>
            </div>
          </div>

          {/* 3-Card Document Switcher */}
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {/* Card 1: Designed Resume */}
            <div
              onClick={() => setMode("designed")}
              className={`cursor-pointer rounded-md border p-3.5 transition ${
                mode === "designed"
                  ? "border-ink bg-ink text-cream shadow-sm"
                  : "border-rule bg-cream text-ink hover:border-accent"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold flex items-center gap-2">
                  <Columns2 className="size-4" />
                  Designed Resume
                </p>
                {mode === "designed" && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-accent text-white">
                    Active
                  </span>
                )}
              </div>
              <p
                className={`mt-1 text-xs leading-snug ${
                  mode === "designed" ? "text-paper-deep" : "text-muted"
                }`}
              >
                2-Page warm cream aesthetic for recruiters & interviews.
              </p>
            </div>

            {/* Card 2: ATS Resume */}
            <div
              onClick={() => setMode("ats")}
              className={`cursor-pointer rounded-md border p-3.5 transition ${
                mode === "ats"
                  ? "border-ink bg-ink text-cream shadow-sm"
                  : "border-rule bg-cream text-ink hover:border-accent"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold flex items-center gap-2">
                  <LayoutList className="size-4" />
                  ATS Resume
                </p>
                {mode === "ats" && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-accent text-white">
                    Active
                  </span>
                )}
              </div>
              <p
                className={`mt-1 text-xs leading-snug ${
                  mode === "ats" ? "text-paper-deep" : "text-muted"
                }`}
              >
                2-Page clean single-column Arial layout for job portals.
              </p>
            </div>

            {/* Card 3: Cover Letter */}
            <div
              onClick={() => setMode("cover-letter")}
              className={`cursor-pointer rounded-md border p-3.5 transition ${
                mode === "cover-letter"
                  ? "border-ink bg-ink text-cream shadow-sm"
                  : "border-rule bg-cream text-ink hover:border-accent"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold flex items-center gap-2">
                  <PenTool className="size-4" />
                  Cover Letter
                </p>
                {mode === "cover-letter" && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-accent text-white">
                    Active
                  </span>
                )}
              </div>
              <p
                className={`mt-1 text-xs leading-snug ${
                  mode === "cover-letter" ? "text-paper-deep" : "text-muted"
                }`}
              >
                1-Page matching cover letter highlighting fintech & UX impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="px-3 py-6 sm:px-6 sm:py-8 flex justify-center">
        {currentView}
      </main>
    </div>
  );
}
