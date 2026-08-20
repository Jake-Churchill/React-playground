import { Link } from "react-router-dom";

// Cursor-tracked spotlight glow, adapted from the cinematic-site-components
// spotlight-border module: mouse position becomes CSS vars the radial
// gradient in index.css reads.
function handleMouseMove(e) {
  const row = e.currentTarget;
  const rect = row.getBoundingClientRect();
  row.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  row.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

export default function DayRow({ day, delay }) {
  const tag = `d${String(day.index).padStart(2, "0")}`;

  return (
    <Link
      to={`/${day.slug}`}
      onMouseMove={handleMouseMove}
      className="day-row group relative flex flex-col gap-1 border-b border-line px-2 py-4 transition-colors first:border-t hover:bg-white/[0.02] sm:flex-row sm:items-baseline sm:gap-4 sm:py-3"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="font-mono text-sm text-moss-bright">{tag}</span>
      <span className="font-mono text-xs text-dim sm:w-24 sm:shrink-0">
        {day.date}
      </span>
      <span className="font-mono text-sm text-paper sm:w-56 sm:shrink-0">
        {day.concept}
      </span>
      <span className="text-sm text-dim">{day.summary}</span>
      <span className="font-mono text-sm text-dim opacity-0 transition-opacity group-hover:opacity-100 sm:ml-auto">
        view &rarr;
      </span>
    </Link>
  );
}
