import { days } from "../data/days.js";
import ContributionStrip from "../components/ContributionStrip.jsx";
import DayRow from "../components/DayRow.jsx";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
      <div className="mb-10 flex items-center justify-between font-mono text-xs text-dim">
        <span>react-playground</span>
        <span>
          day {String(days.length).padStart(2, "0")} &middot; streak{" "}
          {days.length}
        </span>
      </div>

      <ContributionStrip filled={days.length} />

      <h1 className="mt-8 font-mono text-3xl font-medium text-paper sm:text-4xl">
        React, one concept a day.
      </h1>
      <p className="mt-3 max-w-prose text-dim">
        A public log of daily practice. Each entry is one React concept,
        committed the day it was learned.
      </p>

      <div className="mt-14">
        <p className="mb-2 font-mono text-xs tracking-wide text-dim uppercase">
          log
        </p>
        <div>
          {days.map((day, i) => (
            <DayRow key={day.slug} day={day} delay={i * 60} />
          ))}
        </div>
      </div>
    </div>
  );
}
