import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-screen max-w-2xl place-items-center px-6 py-20 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight">
          That page wandered off.
        </h1>
        <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
          The useful paths are still here: Naomi's work, or the deeper Sabi
          page.
        </p>
        <div className="mt-8 flex justify-center gap-5 text-sm">
          <Link className="action-link" href="/">
            Home
          </Link>
          <Link className="action-link" href="/sabi">
            Sabi
          </Link>
        </div>
      </div>
    </main>
  );
}
