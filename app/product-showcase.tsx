"use client";

import Link from "next/link";
import type { FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";

const sabiLessons = {
  mat: {
    word: "mat",
    prompt: "Aunty, I cannot read this word.",
    tutor: "No wahala. Listen: /m/ /a/ /t/. Blend it slowly.",
    answer: "Mat.",
  },
  sun: {
    word: "sun",
    prompt: "This one is hard.",
    tutor: "Start with /s/, then /u/, then /n/. Push the sounds together.",
    answer: "Sun.",
  },
};

const dactylSigns = {
  thanks: {
    label: "Thank you",
    gloss: "THANK YOU",
    speech: "Thank you for learning with me.",
    confidence: "99% on 12-sign vocab",
  },
  water: {
    label: "Water",
    gloss: "WATER",
    speech: "Could I please have water?",
    confidence: "92% sequence match",
  },
  name: {
    label: "My name",
    gloss: "MY NAME",
    speech: "My name is Naomi.",
    confidence: "94% sequence match",
  },
};

const bethelStudies = {
  fear: {
    title: "What does the Bible say about fear?",
    old: "Psalm 56:3 starts with trust before certainty.",
    new: "2 Timothy 1:7 frames courage as something received.",
    practice: "Read the passages, name the fear plainly, then pray one sentence of trust.",
  },
  purpose: {
    title: "What does the Bible say about purpose?",
    old: "Jeremiah 1 shows calling before public readiness.",
    new: "Ephesians 2:10 ties purpose to prepared good works.",
    practice: "List one gift, one burden, and one person your obedience could serve.",
  },
  forgiveness: {
    title: "What does the Bible say about forgiveness?",
    old: "Joseph names harm honestly before choosing mercy.",
    new: "Matthew 18 makes forgiveness a daily spiritual discipline.",
    practice: "Separate reconciliation from release, then write the debt you are giving to God.",
  },
};

const cortexModes = {
  today: {
    label: "Brief me",
    headline: "Hello Naomi, here is what is on your plate today.",
    detail: "Sabi grant reply, two unread founder emails, Econ reading before 4.",
    tags: ["Sabi board note", "Reply drafted", "Calendar conflict"],
  },
  email: {
    label: "Triage email",
    headline: "The UNICEF thread is the one that matters.",
    detail: "I drafted a concise update with pilot scope, cost per learner, and demo link.",
    tags: ["High priority", "Draft ready", "Needs approval"],
  },
  voice: {
    label: "Voice loop",
    headline: "I can read the inbox one decision at a time.",
    detail: "Say archive, reply, or remind me tomorrow. The agent keeps the thread state.",
    tags: ["Listening", "Inbox", "Hands free"],
  },
};

const goModes = {
  calm: {
    label: "40 min",
    eta: "40 min away",
    leave: "Leave by 2:18 PM",
    status: "Safe if you leave after this paragraph.",
    risk: "Charge idle",
    progress: 34,
  },
  danger: {
    label: "18 min",
    eta: "18 min away",
    leave: "Leave now",
    status: "The geofence has no sympathy.",
    risk: "$100 armed",
    progress: 78,
  },
};

type SabiKey = keyof typeof sabiLessons;
type DactylKey = keyof typeof dactylSigns;
type BethelKey = keyof typeof bethelStudies;
type CortexKey = keyof typeof cortexModes;
type GoKey = keyof typeof goModes;
type RingsState = "draft" | "sent" | "hold";

export default function ProductShowcase() {
  return (
    <div className="product-wall" aria-label="Interactive project demos">
      <SabiCard />
      <DactylCard />
      <BethelCard />
      <CortexCard />
      <GoCard />
      <RingsCard />
      <AdjutantCard />
    </div>
  );
}

function SabiCard() {
  const [lessonKey, setLessonKey] = useState<SabiKey>("mat");
  const lesson = sabiLessons[lessonKey];

  return (
    <article className="product-card product-card--flagship vibe-sabi">
      <div className="product-copy">
        <p className="eyebrow">Sabi · 2026 - Now</p>
        <h3>A tutor that lives inside a phone call.</h3>
        <p>
          Sabi teaches literacy and numeracy over any phone: zero internet,
          zero smartphone, zero data, zero cost to the family. The product is
          the constraint.
        </p>
        <p>
          Whisper listens, Claude teaches, Chatterbox speaks, Supabase remembers,
          and Africa's Talking carries the call.
        </p>
        <div className="product-links">
          <Link href="/sabi">Read the Sabi page</Link>
          <Link href="https://youtu.be/KUGy9RsFXzA" target="_blank" rel="noopener">
            Watch demo
          </Link>
          <Link href="https://sabi.eduforequality.org" target="_blank" rel="noopener">
            Live site
          </Link>
        </div>
      </div>

      <div className="product-stage sabi-stage">
        <div className="sabi-phone">
          <div className="sabi-topline">
            <span>Sabi call</span>
            <b>03:42</b>
          </div>
          <CallLine speaker="Child" text={lesson.prompt} />
          <CallLine speaker="Sabi" text={lesson.tutor} />
          <CallLine speaker="Child" text={lesson.answer} />
          <div className="sabi-sounds" aria-label={`Current word ${lesson.word}`}>
            {lesson.word.split("").map((letter) => (
              <span key={`${lesson.word}-${letter}`}>/{letter}/</span>
            ))}
          </div>
        </div>
        <div className="demo-controls" aria-label="Sabi lesson selector">
          {Object.entries(sabiLessons).map(([key, item]) => (
            <button
              className={lessonKey === key ? "is-active" : ""}
              key={key}
              onClick={() => setLessonKey(key as SabiKey)}
              type="button"
            >
              {item.word}
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}

function DactylCard() {
  const [signKey, setSignKey] = useState<DactylKey>("thanks");
  const sign = dactylSigns[signKey];
  const points = useMemo(() => makePoints(signKey), [signKey]);

  return (
    <ProductCard
      className="product-card--wide vibe-dactyl"
      eyebrow="Dactyl · Morgan Hacks 2026 · 1st place"
      title="Sign becomes speech in under a second."
      body="We hand-recorded 400+ ASL videos, trained a TensorFlow LSTM over MediaPipe Holistic keypoints, then streamed the loop through Flask and SocketIO for glasses."
      links={[{ href: "https://devpost.com/software/dactyl", label: "Devpost" }]}
    >
      <div className="dactyl-stage">
        <div className="dactyl-camera" aria-hidden="true">
          {points.map((point) => (
            <i key={point.id} style={{ left: `${point.x}%`, top: `${point.y}%` }} />
          ))}
        </div>
        <div className="dactyl-readout">
          <span>MediaPipe gloss</span>
          <strong>{sign.gloss}</strong>
          <p>{sign.speech}</p>
          <b>{sign.confidence}</b>
        </div>
      </div>
      <div className="demo-controls dactyl-controls" aria-label="Dactyl sign selector">
        {Object.entries(dactylSigns).map(([key, item]) => (
          <button
            className={signKey === key ? "is-active" : ""}
            key={key}
            onClick={() => setSignKey(key as DactylKey)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
    </ProductCard>
  );
}

function BethelCard() {
  const [topicKey, setTopicKey] = useState<BethelKey>("fear");
  const [question, setQuestion] = useState("fear");
  const study = bethelStudies[topicKey];

  function submitQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = question.toLowerCase();
    if (normalized.includes("purpose") || normalized.includes("calling")) {
      setTopicKey("purpose");
      return;
    }
    if (normalized.includes("forgive")) {
      setTopicKey("forgiveness");
      return;
    }
    setTopicKey("fear");
  }

  return (
    <ProductCard
      className="product-card--narrow product-card--drop vibe-bethel"
      eyebrow="Bethel · native Swift"
      title="A study guide, not a chatbot answer."
      body="Bethel turns a spiritual question into a quiet guided study: Scripture, reflection, prayer, and memory surfaced from the user's journal."
    >
      <div className="bethel-stage">
        <form className="bethel-form" onSubmit={submitQuestion}>
          <label htmlFor="bethel-question">What does the Bible say about</label>
          <div>
            <input
              id="bethel-question"
              onChange={(event) => setQuestion(event.target.value)}
              value={question}
            />
            <button type="submit">Ask</button>
          </div>
        </form>
        <div className="bethel-study">
          <span>Guided study</span>
          <strong>{study.title}</strong>
          <StudyRow label="Old Testament" text={study.old} />
          <StudyRow label="New Testament" text={study.new} />
          <StudyRow label="Practice" text={study.practice} />
        </div>
      </div>
    </ProductCard>
  );
}

function CortexCard() {
  const [modeKey, setModeKey] = useState<CortexKey>("today");
  const [speaking, setSpeaking] = useState(false);
  const mode = cortexModes[modeKey];

  function speak() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(`${mode.headline} ${mode.detail}`);
    utterance.rate = 0.94;
    utterance.pitch = 0.96;
    utterance.onend = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <ProductCard
      className="product-card--narrow vibe-cortex"
      eyebrow="Cortex · personal agent"
      title="A voice layer over the chaos."
      body="Cortex ingests mail, calendar, notes, and messages, then turns the day into a sequence of decisions: brief, triage, draft, remind."
      links={[
        { href: "https://cortex-web-one.vercel.app", label: "Cortex web" },
        { href: "https://voice-email-app.vercel.app", label: "Voice email" },
      ]}
    >
      <div className="cortex-stage">
        <div className={speaking ? "cortex-orb is-speaking" : "cortex-orb"} aria-hidden="true" />
        <div className="cortex-queue">
          {mode.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="cortex-panel">
          <span>Cortex voice</span>
          <strong>{mode.headline}</strong>
          <p>{mode.detail}</p>
        </div>
      </div>
      <div className="demo-controls" aria-label="Cortex mode selector">
        {Object.entries(cortexModes).map(([key, item]) => (
          <button
            className={modeKey === key ? "is-active" : ""}
            key={key}
            onClick={() => setModeKey(key as CortexKey)}
            type="button"
          >
            {item.label}
          </button>
        ))}
        <button onClick={speak} type="button">
          Speak
        </button>
      </div>
    </ProductCard>
  );
}

function GoCard() {
  const [modeKey, setModeKey] = useState<GoKey>("calm");
  const mode = goModes[modeKey];

  return (
    <ProductCard
      className="product-card--wide product-card--drop-small vibe-go"
      eyebrow="Go · private alpha"
      title="A map with consequences."
      body="Go reads the calendar, computes the walking ETA, and makes lateness expensive. The anti-escape mechanism is the product: remove the payment method, wait seven days."
      links={[{ href: "https://go-place.vercel.app", label: "Live site" }]}
    >
      <div className="go-stage">
        <span className="go-block block-a" />
        <span className="go-block block-b" />
        <span className="go-block block-c" />
        <div className="route-line" />
        <div className="route-dot start" />
        <div className="route-dot end" />
        <div className="go-eta">
          <span>Current class</span>
          <strong>{mode.eta}</strong>
          <p>{mode.leave}. {mode.status}</p>
          <div className="go-meter" aria-label={`Route risk ${mode.progress}%`}>
            <i style={{ width: `${mode.progress}%` }} />
          </div>
          <b>{mode.risk}</b>
        </div>
      </div>
      <div className="demo-controls" aria-label="Go urgency selector">
        {Object.entries(goModes).map(([key, item]) => (
          <button
            className={modeKey === key ? "is-active" : ""}
            key={key}
            onClick={() => setModeKey(key as GoKey)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>
    </ProductCard>
  );
}

function RingsCard() {
  const [state, setState] = useState<RingsState>("draft");

  const status = {
    draft: "Draft ready",
    sent: "Sent by Rings",
    hold: "Queued for tomorrow",
  }[state];

  const body = {
    draft: "Thinking of you today. How did the interview go?",
    sent: "Thinking of you today. How did the interview go?",
    hold: "Can I call after dinner tomorrow?",
  }[state];

  return (
    <ProductCard
      className="product-card--wide vibe-rings"
      eyebrow="Rings · v2.1 plus rework"
      title="A relationship agent with a memory for warmth."
      body="Rings is currently a multi-device Swift relationship CRM. The next version plugs into calendar and communication surfaces so the agent can draft or send check-ins when life gets crowded."
    >
      <div className="rings-stage">
        <div className="rings-calendar">
          <span>Busy week</span>
          <strong>2 people need warmth today</strong>
          <p>Calendar says no long calls before 8 PM. Inner circle cadence is overdue.</p>
        </div>
        <div className="rings-message">
          <span>To Tomi</span>
          <p>{body}</p>
          <b>{status}</b>
        </div>
        <div className="rings-message secondary">
          <span>To Mom</span>
          <p>Can I call after dinner?</p>
          <b>queued</b>
        </div>
      </div>
      <div className="demo-controls" aria-label="Rings agent selector">
        <button className={state === "draft" ? "is-active" : ""} onClick={() => setState("draft")} type="button">
          Draft
        </button>
        <button className={state === "sent" ? "is-active" : ""} onClick={() => setState("sent")} type="button">
          Send
        </button>
        <button className={state === "hold" ? "is-active" : ""} onClick={() => setState("hold")} type="button">
          Hold
        </button>
      </div>
    </ProductCard>
  );
}

function AdjutantCard() {
  const [filled, setFilled] = useState(false);
  const fields = filled
    ? [
        ["Soldier", "CPL Ivie"],
        ["Unit", "HHC 2-327"],
        ["Dates", "12 Jun - 16 Jun"],
        ["POC", "SFC Alvarez"],
      ]
    : [
        ["Soldier", ""],
        ["Unit", ""],
        ["Dates", ""],
        ["POC", ""],
      ];

  return (
    <ProductCard
      className="product-card--narrow product-card--drop vibe-adjutant"
      eyebrow="Adjutant · prototype"
      title="Local RAG for paperwork that should not take a day."
      body="Adjutant is less finished than the others, so it is framed honestly: an offline prototype that turns a spoken request into a regulation-cited DA-31 packet."
    >
      <div className="adjutant-stage">
        <div className="adjutant-shell">
          <span>Offline packet</span>
          <strong>DA-31 leave form</strong>
          {fields.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <b>{value}</b>
            </div>
          ))}
          <p>AR 600-8-10 cited locally from FAISS.</p>
        </div>
      </div>
      <div className="demo-controls" aria-label="Adjutant form selector">
        <button className={filled ? "is-active" : ""} onClick={() => setFilled(true)} type="button">
          Fill form
        </button>
        <button className={!filled ? "is-active" : ""} onClick={() => setFilled(false)} type="button">
          Clear
        </button>
      </div>
    </ProductCard>
  );
}

function ProductCard({
  body,
  children,
  className,
  eyebrow,
  links = [],
  title,
}: {
  body: string;
  children: ReactNode;
  className: string;
  eyebrow: string;
  links?: { href: string; label: string }[];
  title: string;
}) {
  return (
    <article className={`product-card ${className}`}>
      <div className="product-stage">{children}</div>
      <div className="product-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h3>{title}</h3>
        <p>{body}</p>
        {links.length > 0 && (
          <div className="product-links">
            {links.map((link) => (
              <Link href={link.href} key={link.href} target="_blank" rel="noopener">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function CallLine({ speaker, text }: { speaker: string; text: string }) {
  return (
    <div className="sabi-line">
      <span>{speaker}</span>
      <p>{text}</p>
    </div>
  );
}

function StudyRow({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <b>{label}</b>
      <p>{text}</p>
    </div>
  );
}

function makePoints(seed: string) {
  const offset = seed === "water" ? 7 : seed === "name" ? 13 : 0;
  return Array.from({ length: 28 }).map((_, index) => ({
    id: `${seed}-${index}`,
    x: 9 + ((index * 17 + offset) % 78),
    y: 12 + ((index * 23 + offset) % 72),
  }));
}
