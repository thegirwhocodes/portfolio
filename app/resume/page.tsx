import Link from "next/link";
import type { Metadata } from "next";

const EMAIL = "nivie@wesleyan.edu";
const LINKEDIN = "https://linkedin.com/in/naomi-ivie";
const RESUME = "/Naomi-Ivie-Resume.pdf";
const GITHUB = "https://github.com/thegirwhocodes";
const SABI_RESEARCH_DRIVE =
  "https://drive.google.com/drive/folders/16sYzMSHtF-AFgMe-wsC57y6YgRshp2YN?usp=share_link";

export const metadata: Metadata = {
  title: "Résumé — Naomi Ivie",
  description:
    "Résumé, GitHub, and the two research case studies behind Sabi: the CSPL 420 Personal Impact Plan and the Sabi deep-research dossier.",
};

const impactPlanDocs = [
  {
    title: "Seeding Impact Abstract",
    detail: "CSPL 420 · framing memo · what the plan is trying to change",
    href: "/case-studies/personal-impact-plan/cspl-420-seeding-impact-abstract.pdf",
  },
  {
    title: "Iceberg Model",
    detail: "Events, patterns, structures, and mental models under the surface",
    href: "/case-studies/personal-impact-plan/iceberg-model.pdf",
  },
  {
    title: "Systems Map",
    detail: "How the parts of the system connect and reinforce each other",
    href: "/case-studies/personal-impact-plan/systems-map.pdf",
  },
  {
    title: "Stakeholders Map",
    detail: "Who has power, who holds interest, who shows up where",
    href: "/case-studies/personal-impact-plan/stakeholders-map.pdf",
  },
  {
    title: "Socioeconomic Barriers to Educational Access",
    detail: "Long-form written brief on the barriers the plan is confronting",
    href: "/case-studies/personal-impact-plan/socioeconomic-barriers-to-educational-access.pdf",
  },
];

export default function ResumePage() {
  return (
    <main>
      <header className="border-b border-[var(--color-rule)]">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-10 sm:px-8 lg:px-10">
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--color-muted)]">
            <Link className="nav-link" href="/">
              Home
            </Link>
            <Link className="nav-link" href="/sabi">
              Sabi
            </Link>
            <Link className="nav-link" href="/#recognition">
              Recognition
            </Link>
            <Link className="nav-link" href={`mailto:${EMAIL}`}>
              Email
            </Link>
          </nav>

          <div className="max-w-3xl">
            <p className="eyebrow">Résumé & case studies</p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.95] text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
              What I have built and the research underneath it.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-ink)] sm:text-xl sm:leading-9">
              The short version is one page. The long version is two research
              case studies: the systems work I did before building Sabi, and the
              deep research I keep doing while building it.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <Link
                className="action-link"
                href={RESUME}
                target="_blank"
                rel="noopener"
              >
                Download résumé (PDF)
              </Link>
              <Link
                className="action-link"
                href={GITHUB}
                target="_blank"
                rel="noopener"
              >
                GitHub
              </Link>
              <Link
                className="action-link"
                href={LINKEDIN}
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </Link>
              <Link className="action-link" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section
        id="case-studies"
        className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="max-w-3xl">
          <p className="eyebrow">Case studies</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Two research dossiers behind Sabi.
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
            The first one predates the code: a semester of systems-level work
            mapping how children fall out of learning in Nigeria. The second is
            the running research library that keeps Sabi honest — every telco,
            pedagogy paper, and STT benchmark that shaped what it is today.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <article className="flex flex-col rounded-[8px] border border-[var(--color-rule)] bg-white p-6 sm:p-8">
            <p className="eyebrow text-[var(--color-muted)]">
              Wesleyan · CSPL 420 · Seeding Impact
            </p>
            <h3 className="mt-3 font-serif text-3xl leading-tight">
              Personal Impact Plan
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-[var(--color-muted)]">
              A five-part research dossier from Wesleyan&rsquo;s Seeding Impact
              course. Maps the education-access problem in Nigeria as a system —
              the events, structures, stakeholders, and beliefs that keep 20+
              million children out of school — and grounds the intervention
              (Sabi) inside it.
            </p>

            <ul className="mt-8 flex-1 space-y-3">
              {impactPlanDocs.map((doc) => (
                <li key={doc.href}>
                  <Link
                    className="group grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-t border-[var(--color-rule)] pt-3 text-[15px] leading-6 transition-colors hover:text-[var(--color-ink)]"
                    href={doc.href}
                    target="_blank"
                    rel="noopener"
                  >
                    <span>
                      <span className="font-medium text-[var(--color-ink)]">
                        {doc.title}
                      </span>
                      <span className="mt-1 block text-[13px] leading-6 text-[var(--color-muted)]">
                        {doc.detail}
                      </span>
                    </span>
                    <span className="eyebrow shrink-0 text-[var(--color-muted)] group-hover:text-[var(--color-ink)]">
                      PDF ↗
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </article>

          <article className="flex flex-col rounded-[8px] border border-[var(--color-rule)] bg-white p-6 sm:p-8">
            <p className="eyebrow text-[var(--color-muted)]">
              Field research · Sabi
            </p>
            <h3 className="mt-3 font-serif text-3xl leading-tight">
              Sabi research dossier
            </h3>
            <p className="mt-4 text-[15px] leading-7 text-[var(--color-muted)]">
              The working research library behind Sabi: telephony and cost
              analyses, the Nigerian voice-AI landscape, deep pedagogy notes,
              STT benchmarks for 8&nbsp;kHz Nigerian phone audio, red-team plans,
              and the Sabi deep-research dossier. Updated as the product moves.
            </p>

            <div className="mt-8 flex-1" />

            <div className="mt-8">
              <Link
                className="action-link"
                href={SABI_RESEARCH_DRIVE}
                target="_blank"
                rel="noopener"
              >
                Open the research folder →
              </Link>
              <p className="mt-3 text-[13px] leading-6 text-[var(--color-muted)]">
                Hosted on Google Drive. Anyone with the link can view.
              </p>
            </div>
          </article>
        </div>
      </section>

      <footer className="border-t border-[var(--color-rule)] px-6 py-8 text-sm text-[var(--color-muted)] sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Naomi Ivie</span>
          <div className="flex gap-5">
            <Link className="nav-link" href="/">
              Home
            </Link>
            <Link className="nav-link" href="/sabi">
              Sabi
            </Link>
            <Link
              className="nav-link"
              href={RESUME}
              target="_blank"
              rel="noopener"
            >
              Résumé
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
