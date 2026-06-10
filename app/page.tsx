import Link from "next/link";

const EMAIL = "nivie@wesleyan.edu";
const LINKEDIN = "https://linkedin.com/in/naomi-ivie";
const RESUME = "/Naomi-Ivie-Resume.pdf";
const GITHUB = "https://github.com/thegirwhocodes";

const metrics = [
  { value: "7", label: "AI-native products shipped" },
  { value: "4", label: "hackathon / venture-prize wins in 5 months" },
  { value: "$0", label: "internet, smartphone, or data cost for a Sabi learner" },
];

const projects = [
  {
    name: "Go",
    meta: "2026 · Private alpha",
    accent: "amber",
    body:
      "An iOS commitment device: when it ships, it charges me $100 every time I'm late to class. It reads my Google Calendar, computes a walking ETA with Mapbox, sends a leave-now push, and fires a Stripe charge the moment I miss the geofence. Removing a payment method takes seven days; the anti-escape mechanism is the product.",
    links: [{ label: "Live site", href: "https://go-place.vercel.app" }],
  },
  {
    name: "Cortex",
    meta: "2026 — Now",
    accent: "violet",
    body:
      "A personal AI agent that knows me. Cortex ingests my email, calendar, messages, and notes; fine-tunes a per-user LoRA on Qwen3-4B; and runs two surfaces: a dashboard that drafts in my voice, and a hands-free voice-email loop for triaging my inbox by talking.",
    links: [
      { label: "Cortex web", href: "https://cortex-web-one.vercel.app" },
      { label: "Voice email", href: "https://voice-email-app.vercel.app" },
    ],
  },
  {
    name: "Dactyl",
    meta: "Morgan Hacks 2026 · 1st place",
    accent: "blue",
    body:
      "Real-time bidirectional ASL translation glasses, built with Tomisin. We hand-recorded 400+ ASL sign videos, trained a TensorFlow LSTM on MediaPipe Holistic temporal keypoints, and wired Groq, Edge TTS, local Whisper, Flask, and SocketIO into a sub-one-second sign-to-speech and speech-to-caption loop.",
    links: [{ label: "Devpost", href: "https://devpost.com/software/dactyl" }],
  },
  {
    name: "Rings",
    meta: "Jan 2025 — Now · v2.1",
    accent: "green",
    body:
      "A personal CRM for relationship maintenance. Rings is built on Dunbar's circles: the inner three every two weeks, the next twelve every six weeks, then thirty, fifty, one hundred, two hundred on calibrated cadences. It started as a Python tkinter prototype and is now a multi-device Swift app for iPhone and Mac with CloudKit sync.",
    links: [],
  },
  {
    name: "Bethel",
    meta: "2026 — Now",
    accent: "gold",
    body:
      "A native Swift iOS app for Bible reading and dream journaling. The AI pipeline layers personal RAG over your journal, a Phi-3.5 adapter, NKJV embeddings in pgvector, and Claude Haiku as the reasoning fallback. It is intentionally quiet: gold on warm dark, Literata for scripture, no religious clip-art.",
    links: [],
  },
  {
    name: "Adjutant",
    meta: "SCSP 2026",
    accent: "slate",
    body:
      "Voice-first, fully offline AI assistant for Army paperwork. A junior NCO talks to it like they would talk to S1 and gets back a regulation-cited answer plus a populated DA-31 PDF. 271K chunks across 933 Army regulations in local FAISS; Whisper, Llama 3.2, and Kokoro 82M all run on the laptop.",
    links: [{ label: "GitHub", href: "https://github.com/thegirwhocodes/adjutant" }],
  },
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
          title="Products first, prizes second."
          body="The projects below are not coursework dressed up as a portfolio. They are small operating systems: voice agents, iOS apps, payment flows, GPU inference, local RAG, and hackathon hardware that had to work in front of people."
        />

        <article className="mt-12 grid overflow-hidden rounded-[8px] border border-[var(--color-rule)] bg-white lg:grid-cols-[minmax(0,1fr)_390px]">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="font-serif text-4xl">Sabi</h2>
              <span className="eyebrow text-[var(--color-muted)]">2026 — Now</span>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-ink)]">
              A voice AI tutor for the 20+ million Nigerian children out of
              school and the 70% of ten-year-olds who cannot read a sentence.
              A child calls a number and gets a five-to-seven-minute literacy
              or numeracy lesson on any basic phone. The family needs no
              internet, no smartphone, and no data.
            </p>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[var(--color-muted)]">
              Whisper for Nigerian-accented speech, Claude for the tutor loop,
              Chatterbox for warm TTS, Supabase + pgvector for cross-call
              memory, and telephony through Africa's Talking with Twilio for
              U.S. demos. The constraint is the product: make the $200+ AI
              tutoring stack behave like a $5-per-student intervention.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm">
              <Link className="action-link" href="/sabi">
                Read the Sabi page
              </Link>
              <Link
                className="action-link"
                href="https://youtu.be/KUGy9RsFXzA"
                target="_blank"
                rel="noopener"
              >
                Watch demo
              </Link>
              <Link
                className="action-link"
                href="https://sabi.eduforequality.org"
                target="_blank"
                rel="noopener"
              >
                Live site
              </Link>
            </div>
          </div>
          <SabiVisual />
        </article>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
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
            body="B.A. Economics, Minor in Data Analysis. CGPA 3.7. Inaugural cohort of the Wesleyan African Scholars program."
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

function SabiVisual() {
  return (
    <div className="border-t border-[var(--color-rule)] bg-[#17221d] p-6 text-white lg:border-l lg:border-t-0">
      <div className="mx-auto flex h-full min-h-[420px] max-w-sm flex-col rounded-[32px] border border-white/15 bg-[#0b0f0d] p-5 shadow-2xl">
        <div className="mx-auto h-1.5 w-16 rounded-full bg-white/20" />
        <div className="mt-8 flex items-center justify-between text-xs uppercase text-white/45">
          <span>Incoming</span>
          <span>+234</span>
        </div>
        <div className="mt-8">
          <p className="font-serif text-4xl leading-none">Sabi</p>
          <p className="mt-2 text-sm text-white/60">Voice tutor over a phone call</p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-2 text-center text-xs">
          {["STT", "Tutor", "TTS"].map((step) => (
            <span className="rounded-full border border-white/15 px-3 py-2" key={step}>
              {step}
            </span>
          ))}
        </div>
        <div className="mt-auto rounded-[8px] border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between text-xs uppercase text-white/40">
            <span>Constraint</span>
            <span>Outcome</span>
          </div>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-white/55">Learner device</dt>
              <dd>Any phone</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-white/55">Family data</dt>
              <dd>Zero</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-white/55">Lesson length</dt>
              <dd>5-7 min</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
}: {
  project: {
    name: string;
    meta: string;
    accent: string;
    body: string;
    links: { label: string; href: string }[];
  };
}) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <ProjectVisual name={project.name} />
      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-serif text-3xl">{project.name}</h3>
        <span className="eyebrow text-[var(--color-muted)]">{project.meta}</span>
      </div>
      <p className="mt-4 text-[15px] leading-7 text-[var(--color-ink)]">{project.body}</p>
      {project.links.length > 0 && (
        <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {project.links.map((link) => (
            <Link className="action-link" href={link.href} key={link.href} target="_blank" rel="noopener">
              {link.label}
            </Link>
          ))}
        </p>
      )}
    </article>
  );
}

function ProjectVisual({ name }: { name: string }) {
  if (name === "Go") {
    return (
      <div className="visual visual-go">
        <div className="route-dot start" />
        <div className="route-line" />
        <div className="route-dot end" />
        <div className="visual-chip">Leave by 3:18 · $100 armed</div>
      </div>
    );
  }

  if (name === "Cortex") {
    return (
      <div className="visual visual-cortex">
        <div className="voice-ring" />
        <div className="mail-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  if (name === "Dactyl") {
    return (
      <div className="visual visual-dactyl">
        {Array.from({ length: 18 }).map((_, index) => (
          <i key={index} style={{ left: `${12 + ((index * 23) % 76)}%`, top: `${16 + ((index * 31) % 68)}%` }} />
        ))}
        <div className="visual-chip">ASL → speech · &lt;1s</div>
      </div>
    );
  }

  if (name === "Rings") {
    return (
      <div className="visual visual-rings">
        {[3, 12, 30, 50, 100, 200].map((ring, index) => (
          <span key={ring} style={{ width: `${34 + index * 20}px`, height: `${34 + index * 20}px` }}>
            {index === 0 ? ring : null}
          </span>
        ))}
      </div>
    );
  }

  if (name === "Bethel") {
    return (
      <div className="visual visual-bethel">
        <div className="phone-frame">
          <span>Good evening</span>
          <strong>Isaiah 40:29</strong>
          <em>He gives power to the faint.</em>
        </div>
      </div>
    );
  }

  return (
    <div className="visual visual-adjutant">
      {["Name", "Rank", "Unit", "Dates", "Citation"].map((field) => (
        <div key={field}>
          <span>{field}</span>
          <b />
        </div>
      ))}
    </div>
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
