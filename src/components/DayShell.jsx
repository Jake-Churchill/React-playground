import { Link } from "react-router-dom";

export default function DayShell({ index, concept, note, children }) {
  const tag = `d${String(index).padStart(2, "0")}`;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link
        to="/"
        className="font-mono text-sm text-dim transition-colors hover:text-amber"
      >
        &larr; log
      </Link>

      <header className="mt-6 mb-10 border-b border-line pb-6">
        <p className="font-mono text-sm text-moss-bright">{tag}</p>
        <h1 className="mt-1 font-mono text-2xl font-medium text-paper sm:text-3xl">
          {concept}
        </h1>
        <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-dim">
          {note}
        </p>
      </header>

      <main>{children}</main>
    </div>
  );
}
