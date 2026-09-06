import { createFileRoute } from "@tanstack/react-router";
import { Columns2, ExternalLink, FileText, LayoutList, Mail, Printer } from "lucide-react";
import { useState } from "react";
import { AtsResume } from "@/components/ats-resume";
import { ResumeSheet } from "@/components/resume-sheet";
import { resume } from "@/data/resume";
import { resumePlainText } from "@/lib/resume-text";

type Version = "designed" | "ats";

export const Route = createFileRoute("/")({
  validateSearch: (raw: Record<string, unknown>): { v: Version; print: boolean } => ({
    v: raw.v === "ats" ? "ats" : "designed",
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

  const sheet = mode === "ats" ? <AtsResume /> : <ResumeSheet />;

  if (print) {
    return <div className="bg-white p-0">{sheet}</div>;
  }

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <div className="no-print border-b border-rule bg-cream/90">
        <div className="mx-auto max-w-4xl px-4 py-5 sm:px-6">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Two versions · same content
          </p>
          <h1 className="mt-1 font-display text-2xl font-semibold text-ink">
            Madasu Sai Kiran — resume pack
          </h1>
          <p className="mt-1 text-sm text-muted">
            Download both PDFs. Type 1 for people. Type 2 for job portals.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div
              className={`rounded-md border p-4 ${
                mode === "designed" ? "border-ink bg-ink text-cream" : "border-rule bg-cream text-ink"
              }`}
            >
              <p className="flex items-center gap-2 text-sm font-semibold">
                <Columns2 className="size-4" />
                Type 1 · Designed
              </p>
              <p className={`mt-1 text-sm leading-snug ${mode === "designed" ? "text-paper-deep" : "text-muted"}`}>
                Cream page, single-row layout with equal spacing. For email and interviews.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setMode("designed")}
                  className={`min-h-10 rounded px-3 text-sm font-medium ${
                    mode === "designed" ? "bg-cream text-ink" : "border border-rule bg-white"
                  }`}
                >
                  Preview
                </button>
                <a
                  href="/Madasu_Sai_Kiran_Resume_Designed.pdf"
                  download
                  className={`inline-flex min-h-10 items-center rounded px-3 text-sm font-medium ${
                    mode === "designed" ? "bg-accent text-cream" : "bg-ink text-cream"
                  }`}
                >
                  Download PDF
                </a>
              </div>
            </div>

            <div
              className={`rounded-md border p-4 ${
                mode === "ats" ? "border-ink bg-ink text-cream" : "border-rule bg-cream text-ink"
              }`}
            >
              <p className="flex items-center gap-2 text-sm font-semibold">
                <LayoutList className="size-4" />
                Type 2 · ATS
              </p>
              <p className={`mt-1 text-sm leading-snug ${mode === "ats" ? "text-paper-deep" : "text-muted"}`}>
                One column, Arial. For Naukri, LinkedIn, company sites.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setMode("ats")}
                  className={`min-h-10 rounded px-3 text-sm font-medium ${
                    mode === "ats" ? "bg-cream text-ink" : "border border-rule bg-white"
                  }`}
                >
                  Preview
                </button>
                <a
                  href="/Madasu_Sai_Kiran_Resume_ATS.pdf"
                  download
                  className={`inline-flex min-h-10 items-center rounded px-3 text-sm font-medium ${
                    mode === "ats" ? "bg-accent text-cream" : "bg-ink text-cream"
                  }`}
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent-deep"
            >
              <Printer className="size-4" />
              Print / Save as PDF
            </button>
            <button
              type="button"
              onClick={downloadTxt}
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-rule bg-cream px-4 py-2 text-sm font-medium text-ink hover:border-accent"
            >
              <FileText className="size-4" />
              ATS .txt
            </button>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-rule bg-cream px-4 py-2 text-sm font-medium text-ink hover:border-accent"
            >
              {copied ? (
                "Email copied"
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
              className="inline-flex min-h-11 items-center gap-2 rounded-md border border-rule bg-cream px-4 py-2 text-sm font-medium text-ink hover:border-accent"
            >
              <ExternalLink className="size-4" />
              Portfolio
            </a>
          </div>
        </div>
      </div>

      <main className="px-3 py-6 sm:px-6 sm:py-10">
        <p className="no-print mx-auto mb-3 max-w-4xl px-1 text-xs font-semibold uppercase tracking-wider text-muted">
          Preview · {mode === "designed" ? "Type 1 Designed" : "Type 2 ATS"}
        </p>
        {sheet}
      </main>
    </div>
  );
}
