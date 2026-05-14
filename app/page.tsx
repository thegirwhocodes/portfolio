import Link from "next/link";

const EMAIL = "nivie@wesleyan.edu";
const LINKEDIN = "https://linkedin.com/in/naomi-ivie";
const RESUME = "/Naomi-Ivie-Resume.pdf";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 sm:px-8 sm:py-28 md:py-32">
      {/* HEADER */}
      <header className="mb-20 md:mb-24">
        <h1 className="font-serif text-5xl tracking-tight text-[var(--color-ink)] sm:text-6xl">
          Naomi Ivie
        </h1>
        <p className="mt-5 text-base leading-relaxed text-[var(--color-ink)] sm:text-lg">
          Founder of{" "}
          <Link
            href="https://sabi.eduforequality.org"
            className="border-b border-[var(--color-rule)] hover:border-[var(--color-accent)]"
          >
            Sabi
          </Link>
          . I build voice AI that teaches Nigerian children to read on any
          phone — no internet, no smartphone, no cost to the family.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
          Wesleyan ’27, Economics &amp; Data Analysis. Based between
          Middletown and Lagos.
        </p>

        <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href={`mailto:${EMAIL}`}
            className="border-b border-[var(--color-rule)] pb-px hover:border-[var(--color-accent)]"
          >
            Email
          </Link>
          <Link
            href={LINKEDIN}
            className="border-b border-[var(--color-rule)] pb-px hover:border-[var(--color-accent)]"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </Link>
          <Link
            href={RESUME}
            className="border-b border-[var(--color-rule)] pb-px hover:border-[var(--color-accent)]"
            target="_blank"
            rel="noopener"
          >
            Resume
          </Link>
        </nav>
      </header>

      {/* WORK */}
      <section className="mb-20 md:mb-24">
        <SectionLabel>Work</SectionLabel>

        <article className="mt-10">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-2xl tracking-tight">Sabi</h2>
            <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
              2026 — Now
            </span>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink)]">
            A voice AI tutor for the 20+ million Nigerian children out of
            school and the 70% of ten-year-olds who cannot read a sentence.
            Five-to-seven-minute phone calls on any $5 feature phone — no
            internet, no smartphone, no cost to the family. I built the full
            pipeline: Whisper for Nigerian-accented speech, Claude as the
            tutor, a custom voice clone for warmth, on a self-hosted GPU
            server.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
            MIT Sloan Africa Business Challenge — 2nd place. Wesleyan New
            Venture Awards — Grand Prize. UNICEF AI Ventures Accelerator —
            inaugural cohort, $10K equity-free. Schmidt Futures × Rhodes
            Trust Rise for the World — finalist. Patricelli Center for
            Entrepreneurship — Social Impact Fellow.
          </p>
          <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
            <Link
              href="https://sabi.eduforequality.org"
              target="_blank"
              rel="noopener"
              className="border-b border-[var(--color-rule)] hover:border-[var(--color-accent)]"
            >
              sabi.eduforequality.org ↗
            </Link>
            <Link
              href="https://eduforequality.org"
              target="_blank"
              rel="noopener"
              className="border-b border-[var(--color-rule)] hover:border-[var(--color-accent)]"
            >
              eduforequality.org ↗
            </Link>
          </p>
        </article>

        <article className="mt-12">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-2xl tracking-tight">Class on Time</h2>
            <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
              2026 — Now
            </span>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink)]">
            An iOS commitment device that charges me $100 every time I’m late
            to class. It reads my Google Calendar, computes a walking ETA
            from where I am, sends a “leave now” push thirty minutes before
            each event, and a Stripe charge fires the moment I miss the
            geofence. Removing a payment method takes seven days — the
            anti-escape mechanism is the entire point. Voice rollcall every
            morning, Whisper + Claude intent classification, Mapbox routing,
            Africa-on-Wesleyan-campus venue dictionary.
          </p>
          <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm">
            <Link
              href="https://go-place.vercel.app"
              target="_blank"
              rel="noopener"
              className="border-b border-[var(--color-rule)] hover:border-[var(--color-accent)]"
            >
              go-place.vercel.app ↗
            </Link>
          </p>
        </article>

        <article className="mt-12">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-2xl tracking-tight">Cortex</h2>
            <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
              2026 — Now
            </span>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink)]">
            A personal AI agent that knows me. Cortex ingests my email,
            calendar, messages, and notes, fine-tunes a per-user LoRA on
            Qwen3-4B for roughly a dollar a retrain, and runs two surfaces:
            a web dashboard that drafts emails in my voice, and a hands-free
            voice-email loop that lets me triage my inbox by talking to it.
            Built because general-purpose chatbots forget who you are between
            sessions.
          </p>
        </article>

        <article className="mt-12">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-2xl tracking-tight">Bethel</h2>
            <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
              2026 — Now
            </span>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink)]">
            A native iOS app for Bible reading and dream journaling, written
            in Swift. The AI is a four-layer pipeline — personal RAG over
            your journal, a fine-tuned Phi-3.5 adapter, the entire NKJV
            embedded in pgvector, and Claude Haiku as the reasoning fallback.
            Gold on warm dark; Satoshi for display, Literata for scripture.
            Designed to feel like opening a leather journal by candlelight.
          </p>
        </article>

        <article className="mt-12">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-2xl tracking-tight">Adjutant</h2>
            <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
              SCSP 2026
            </span>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink)]">
            Voice-first, fully offline AI assistant for the three million
            U.S. service members buried in paperwork. A junior NCO talks to
            it the way they’d talk to their S1 — and gets back a
            regulation-cited answer plus a populated DA-31 PDF. Same flow
            for travel vouchers and counseling. 271K chunks across 933 Army
            regulations in a local FAISS index; Whisper, Llama 3.2, and
            Kokoro 82M all run on the laptop. Submitted to the SCSP
            Hackathon GenAI.mil track.
          </p>
        </article>

        <article className="mt-12">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-serif text-2xl tracking-tight">
              Morgan Hacks — ASL to Speech
            </h2>
            <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
              2026 · 1st place
            </span>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink)]">
            A model that recognizes American Sign Language and converts it
            to spoken language in real time. Built on the WLASL dataset over
            a weekend. First place.
          </p>
        </article>
      </section>

      {/* HONORS */}
      <section className="mb-20 md:mb-24">
        <SectionLabel>Recognition</SectionLabel>
        <ul className="mt-10 space-y-3 text-[15px] leading-relaxed">
          <Honor year="2026" body="MIT Sloan Africa Business Challenge — 2nd place" />
          <Honor year="2026" body="Wesleyan New Venture Awards — Grand Prize (selected from 37 ventures)" />
          <Honor year="2026" body="UNICEF AI Ventures Accelerator — inaugural cohort" />
          <Honor year="2026" body="Morgan Hacks — Hackathon 1st place" />
          <Honor year="2026" body="Schmidt Futures × Rhodes Trust Rise for the World — finalist" />
          <Honor year="2025" body="Oxford Map the System — Runner Up, Wesleyan Round" />
          <Honor year="2023" body="Wesleyan African Scholars — inaugural cohort, $360K merit scholarship" />
          <Honor year="2021" body="High School Valedictorian · Best Student in Economics" />
        </ul>
      </section>

      {/* BACKGROUND */}
      <section className="mb-20 md:mb-24">
        <SectionLabel>Background</SectionLabel>

        <div className="mt-10 space-y-8">
          <Item
            title="Wesleyan University"
            meta="2023 — 2027 · Middletown, CT"
            body="B.A. Economics, Minor in Data Analysis. CGPA 3.7. Inaugural cohort of the Wesleyan African Scholars program."
          />
          <Item
            title="Dartmouth Tuck School of Business Bridge"
            meta="January 2026 · Hanover, NH"
            body="Faculty-led MBA program in Finance, Accounting, Strategy, Leadership and Marketing. Pitched a $250B+ DCF valuation of Coca-Cola to a Goldman Sachs MD and a Bain Capital Partner."
          />
          <Item
            title="African Leadership Academy"
            meta="2021 — 2023 · Johannesburg, South Africa"
            body="Africa’s premier boarding school. Valedictorian. Best Student in Economics. Highest national mark in High School Theatre coursework (97%). 10/10 A*s in IGCSE."
          />
        </div>
      </section>

      {/* PRIOR WORK */}
      <section className="mb-20 md:mb-24">
        <SectionLabel>Earlier</SectionLabel>
        <div className="mt-10 space-y-8">
          <Item
            title="Patricelli Center for Entrepreneurship"
            meta="2024 — Now · Social Impact Fellow"
            body="Pitched to the Irish UN Ambassador and CNN’s former president. Won $1,200 in grant funding for the first stages of the Sabi Lagos pilot."
          />
          <Item
            title="Wesleyan ITS — Help Desk Technician"
            meta="2025 — Now"
            body="Frontline IT for the university. 20+ tickets weekly at 85% first-contact resolution; 400 faculty and staff supported across macOS and Windows."
          />
          <Item
            title="Wes_Code Club — Executive Board"
            meta="2025 — Now"
            body="Organized 8 events, raised $2,000+ for members to attend hackathons, grew participation 30%."
          />
          <Item
            title="Model African Union Conference"
            meta="2022 — 2023 · Director of Logistics"
            body="Ran the $100K+ budget and logistics for a 200-delegate Pan-African diplomacy summit spanning 30 countries. Executed three investment pitches that raised ~$10K and grew scholarship recipients 30-fold."
          />
        </div>
      </section>

      {/* CONTACT */}
      <section>
        <SectionLabel>Contact</SectionLabel>
        <p className="mt-10 text-[15px] leading-relaxed">
          For Sabi, collaboration, or anything else — write to{" "}
          <Link
            href={`mailto:${EMAIL}`}
            className="border-b border-[var(--color-rule)] hover:border-[var(--color-accent)]"
          >
            {EMAIL}
          </Link>
          .
        </p>
      </section>

      <footer className="mt-24 border-t border-[var(--color-rule)] pt-6 text-xs text-[var(--color-muted)]">
        © {new Date().getFullYear()} Naomi Ivie
      </footer>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
      {children}
    </h3>
  );
}

function Honor({ year, body }: { year: string; body: string }) {
  return (
    <li className="flex gap-5 sm:gap-8">
      <span className="w-12 shrink-0 text-xs uppercase tracking-widest text-[var(--color-muted)] sm:pt-0.5">
        {year}
      </span>
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
    <article>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="font-serif text-xl tracking-tight">{title}</h3>
        <span className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
          {meta}
        </span>
      </div>
      <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-ink)]">
        {body}
      </p>
    </article>
  );
}
