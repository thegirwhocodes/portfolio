import Link from "next/link";
import ProductShowcase from "./product-showcase";

const EMAIL = "nivie@wesleyan.edu";
const LINKEDIN = "https://linkedin.com/in/naomi-ivie";
const RESUME = "/Naomi-Ivie-Resume.pdf";
const GITHUB = "https://github.com/thegirwhocodes";

const metrics = [
  { value: "7", label: "AI-native products shipped" },
  { value: "4", label: "hackathon / venture-prize wins in 5 months" },
  { value: "$0", label: "internet, smartphone, or data cost for a Sabi learner" },
];

const honors = [
  ["2026", "MIT Sloan Africa Business Challenge — 2nd place"],
  ["2026", "Wesleyan New Venture Awards — Grand Prize, selected from 37 ventures"],
  ["2026", "UNICEF AI Ventures Accelerator — inaugural cohort"],
  ["2026", "Morgan Hacks — 1st place"],
  ["2026", "Schmidt Futures x Rhodes Trust Rise for the World — finalist"],
  ["2025", "Oxford Map the System — Runner Up, Wesleyan round"],
  ["2023", "Wesleyan African Scholars — inaugural cohort, $360K merit scholarship"],
  ["2021", "African Leadership Academy — Valedictorian · Best Student in Economics"],
];

export default function Home() {
  return (
    <main>
      <header className="border-b border-[var(--color-rule)]">
        <div className="mx-auto grid min-h-[92vh] w-full max-w-6xl grid-cols-1 gap-12 px-6 py-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-10">
          <div className="flex flex-col justify-between gap-16">
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--color-muted)]">
              <Link className="nav-link" href="#work">
                Work
              </Link>
              <Link className="nav-link" href="/sabi">
                Sabi
              </Link>
              <Link className="nav-link" href="#recognition">
                Recognition
              </Link>
              <Link className="nav-link" href={`mailto:${EMAIL}`}>
                Email
              </Link>
            </nav>

            <div className="max-w-3xl">
              <p className="eyebrow">Naomi Ivie · Founder, Sabi · Wesleyan '27</p>
              <h1 className="mt-5 font-serif text-6xl leading-[0.95] text-[var(--color-ink)] sm:text-7xl lg:text-8xl">
                Building voice AI for children schools cannot reach.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-ink)] sm:text-xl sm:leading-9">
                I build products at the edge of AI, infrastructure, and
                constraint. My flagship is{" "}
                <Link className="text-link" href="https://sabi.eduforequality.org">
                  Sabi
                </Link>
                : a phone-call tutor for Nigerian children that requires zero
                internet, zero smartphone, and zero data from the family.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div className="metric" key={metric.label}>
                    <div className="font-serif text-3xl text-[var(--color-ink)]">
                      {metric.value}
                    </div>
                    <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <Link className="action-link" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </Link>
              <Link className="action-link" href={LINKEDIN} target="_blank" rel="noopener">
                LinkedIn
              </Link>
              <Link className="action-link" href={GITHUB} target="_blank" rel="noopener">
                GitHub
              </Link>
              <Link className="action-link" href={RESUME} target="_blank" rel="noopener">
                Resume
              </Link>
            </div>
          </div>

          <HeroPanel />
        </div>
      </header>

      <section id="work" className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionIntro
          eyebrow="Selected work"
          title="Each project gets its own world."
          body="One project per row, alternating left and right. Each surface is built to feel like the app itself: the live Sabi demo, a Dactyl translation loop, Sage reading an inbox, Go with money on the line, Kai in focus mode, Ed.it cutting video, and the systems that orbit them."
        />

        <ProductShowcase />
      </section>

      <section id="recognition" className="border-y border-[var(--color-rule)] bg-[var(--color-soft)]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-10 lg:py-24">
          <SectionIntro
            eyebrow="Recognition"
            title="Verified by people whose job is to say no."
            body="The cleanest way to read the awards is as outside diligence: funders, hackathon judges, and venture reviewers looked at the work and chose to back it."
          />
          <ul className="mt-12 space-y-4 lg:mt-0">
            {honors.map(([year, body]) => (
              <Honor key={`${year}-${body}`} year={year} body={body} />
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <SectionIntro
          eyebrow="Background"
          title="A builder with an operator's context."
          body="I study economics and data analysis at Wesleyan, came through the African Leadership Academy, and keep ending up at the point where product, research, and execution have to become one thing."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Item
            title="Wesleyan University"
            meta="2023 — 2027 · Middletown, CT"
            body="B.A. Economics, Minor in Data Analysis. mGPA: 3.5/4.0. Inaugural cohort of the Wesleyan African Scholars program."
          />
          <Item
            title="Dartmouth Tuck Bridge"
            meta="January 2026 · Hanover, NH"
            body="Faculty-led MBA program in finance, accounting, strategy, leadership, and marketing. Pitched a $250B+ DCF valuation of Coca-Cola to a Goldman Sachs MD and a Bain Capital partner."
          />
          <Item
            title="African Leadership Academy"
            meta="2021 — 2023 · Johannesburg"
            body="Valedictorian. Best Student in Economics. Highest national mark in high-school theatre coursework. 10/10 A*s in IGCSE."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="rounded-[8px] border border-[var(--color-rule)] bg-white p-6 sm:p-8 lg:p-10">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight">
            Building in African edtech, voice AI, or anything that has to work
            outside the easy part of the internet?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
            Write to{" "}
            <Link className="text-link" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </Link>
            . I am especially interested in people working on voice AI,
            emerging-market infrastructure, and tools that put serious
            technology in front of users who are usually designed around.
          </p>
        </div>
      </section>

      <footer className="border-t border-[var(--color-rule)] px-6 py-8 text-sm text-[var(--color-muted)] sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Naomi Ivie</span>
          <div className="flex gap-5">
            <Link className="nav-link" href="/sabi">
              Sabi
            </Link>
            <Link className="nav-link" href={RESUME} target="_blank" rel="noopener">
              Resume
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function HeroPanel() {
  return (
    <aside className="self-end rounded-[8px] border border-[var(--color-rule)] bg-white p-5 shadow-[0_30px_90px_rgba(20,24,32,0.08)] lg:sticky lg:top-8">
      <div className="rounded-[6px] bg-[var(--color-ink)] p-5 text-[var(--color-paper)]">
        <div className="flex items-center justify-between text-xs uppercase text-white/50">
          <span>Sabi call</span>
          <span>Live stack</span>
        </div>
        <div className="mt-10 space-y-4">
          <CallBubble speaker="Child" text="Aunty, I cannot read this word." />
          <CallBubble
            speaker="Sabi"
            text="No wahala. Let us break it together: /m/ /a/ /t/. What word?"
          />
          <CallBubble speaker="Child" text="Mat." />
        </div>
        <div className="mt-10 grid grid-cols-16 items-end gap-1" aria-hidden="true">
          {Array.from({ length: 32 }).map((_, index) => (
            <span
              className="block rounded-full bg-[var(--color-accent)]"
              key={index}
              style={{ height: `${10 + ((index * 17) % 38)}px` }}
            />
          ))}
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-[var(--color-muted)]">
        The portfolio now leads with the thing that makes Naomi hard to
        categorize: not just a founder, not just a student, but someone who
        ships real systems in constrained environments.
      </p>
    </aside>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">{body}</p>
    </div>
  );
}

function Honor({ year, body }: { year: string; body: string }) {
  return (
    <li className="grid grid-cols-[64px_minmax(0,1fr)] gap-5 border-t border-[var(--color-rule)] pt-4 text-[15px] leading-7">
      <span className="eyebrow pt-1 text-[var(--color-muted)]">{year}</span>
      <span className="text-[var(--color-ink)]">{body}</span>
    </li>
  );
}

function Item({
  title,
  meta,
  body,
}: {
  title: string;
  meta: string;
  body: string;
}) {
  return (
    <article className="rounded-[8px] border border-[var(--color-rule)] bg-white p-6">
      <p className="eyebrow text-[var(--color-muted)]">{meta}</p>
      <h3 className="mt-3 font-serif text-2xl">{title}</h3>
      <p className="mt-4 text-[15px] leading-7 text-[var(--color-muted)]">{body}</p>
    </article>
  );
}

function CallBubble({ speaker, text }: { speaker: string; text: string }) {
  return (
    <div className="rounded-[8px] border border-white/10 bg-white/[0.06] p-3">
      <p className="text-[10px] uppercase text-white/40">{speaker}</p>
      <p className="mt-1 text-sm leading-6 text-white/85">{text}</p>
    </div>
  );
}
