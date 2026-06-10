import type { Metadata } from "next";
import Link from "next/link";

const EMAIL = "nivie@wesleyan.edu";

export const metadata: Metadata = {
  title: "Sabi",
  description:
    "Sabi is Naomi Ivie's voice AI tutor for Nigerian children: literacy and numeracy lessons over any phone call, with no internet or smartphone required by the family.",
  alternates: {
    canonical: "/sabi",
  },
  openGraph: {
    title: "Sabi · Naomi Ivie",
    description:
      "Voice AI tutor for Nigerian children: zero internet, zero smartphone, zero data cost to the family.",
    url: "https://naomiivie.vercel.app/sabi",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const stack = [
  ["Input", "Africa's Talking and Twilio demos route the call into a voice loop."],
  ["Speech", "Whisper listens with Nigerian-English prompt biasing."],
  ["Tutor", "Claude Haiku runs the adaptive literacy and numeracy lesson."],
  ["Memory", "Supabase and pgvector keep cross-call learner context."],
  ["Voice", "Chatterbox TTS gives Sabi a warmer, less robotic voice."],
  ["Cost", "Self-hosted GPU inference keeps the intervention designed for scale."],
];

const proof = [
  "MIT Sloan Africa Business Challenge — 2nd place",
  "Wesleyan New Venture Awards — Grand Prize",
  "UNICEF AI Ventures Accelerator — inaugural cohort",
  "Schmidt Futures x Rhodes Trust Rise for the World — finalist",
  "Patricelli Center for Entrepreneurship — Social Impact Fellow",
];

export default function SabiPage() {
  return (
    <main>
      <header className="border-b border-[var(--color-rule)]">
        <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-10">
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--color-muted)]">
            <Link className="nav-link" href="/">
              Naomi Ivie
            </Link>
            <Link className="nav-link" href="https://sabi.eduforequality.org" target="_blank" rel="noopener">
              Live demo
            </Link>
            <Link className="nav-link" href="https://youtu.be/KUGy9RsFXzA" target="_blank" rel="noopener">
              YouTube
            </Link>
          </nav>

          <div className="max-w-4xl py-20 lg:py-28">
            <p className="eyebrow">Sabi</p>
            <h1 className="mt-5 font-serif text-6xl leading-[0.92] sm:text-7xl lg:text-8xl">
              A tutor that reaches the phone a child already has.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--color-ink)] sm:text-xl sm:leading-9">
              Sabi teaches literacy and numeracy over a phone call. A child
              does not need internet, a smartphone, an app store, a data plan,
              or a parent who can navigate a web platform.
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-3">
          <Stat value="0" label="internet required by the learner" />
          <Stat value="5-7" label="minutes per voice lesson" />
          <Stat value="$5" label="target annual cost per child at scale" />
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">The wedge</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight">
              The bottleneck is reach.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[var(--color-muted)]">
            <p>
              Nigeria has the highest number of out-of-school children in the
              world, and millions more are enrolled but unable to read a simple
              sentence. The usual edtech answer assumes a smartphone, reliable
              data, and a child with enough quiet time to sit in front of a
              screen.
            </p>
            <p>
              Sabi starts from the opposite assumption. Most families can
              access a basic phone. So the product is a call: short, adaptive,
              low-bandwidth, and designed around Nigerian speech, market math,
              and the reality that the learner may share a device with the
              whole household.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-rule)] bg-[var(--color-soft)]">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight">
              A phone-call stack, built for accent and cost.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              The hard part is not calling an LLM. The hard part is making the
              whole loop feel patient, audible, and cheap enough for the child
              who was never in the market for AI tutoring.
            </p>
          </div>
          <div className="grid gap-3">
            {stack.map(([title, body]) => (
              <div className="rounded-[8px] border border-[var(--color-rule)] bg-white p-5" key={title}>
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Outside diligence</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight">
              People have already chosen to back it.
            </h2>
          </div>
          <ul className="space-y-4">
            {proof.map((item) => (
              <li className="border-t border-[var(--color-rule)] pt-4 text-base leading-7" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="rounded-[8px] border border-[var(--color-rule)] bg-white p-6 sm:p-8 lg:p-10">
          <p className="eyebrow">Next</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight">
            Sabi is looking for partners who care about reach, not demos.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
            If you work on African education, telecommunications, grantmaking,
            or voice AI infrastructure, write to{" "}
            <Link className="text-link" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </Link>
            .
          </p>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm">
            <Link className="action-link" href="https://sabi.eduforequality.org" target="_blank" rel="noopener">
              Try Sabi
            </Link>
            <Link className="action-link" href="https://youtu.be/KUGy9RsFXzA" target="_blank" rel="noopener">
              Watch the demo
            </Link>
            <Link className="action-link" href="/">
              Back to portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[8px] border border-[var(--color-rule)] bg-white p-5">
      <div className="font-serif text-5xl leading-none">{value}</div>
      <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{label}</p>
    </div>
  );
}
