import { useState } from "react";
import DayShell from "../../components/DayShell.jsx";

// Props (Day 01) come from outside and never change on their own.
// State is different: it's a value the component owns, and calling its
// setter is what triggers React to re-render with the new value.
function Counter({ label, step, accent }) {
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-lg border border-line bg-ink-raised p-5">
      <div
        className="mb-3 h-1 w-8 rounded-full"
        style={{ backgroundColor: accent }}
      />
      <p className="font-mono text-sm text-dim">{label}</p>
      <p className="mt-1 font-mono text-3xl font-medium text-paper">
        {count}
      </p>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setCount((c) => c - step)}
          className="rounded-md border border-line px-3 py-1 font-mono text-sm text-paper transition-colors hover:border-amber hover:text-amber"
        >
          -{step}
        </button>
        <button
          onClick={() => setCount((c) => c + step)}
          className="rounded-md border border-line px-3 py-1 font-mono text-sm text-paper transition-colors hover:border-amber hover:text-amber"
        >
          +{step}
        </button>
        <button
          onClick={() => setCount(0)}
          className="rounded-md px-3 py-1 font-mono text-sm text-dim transition-colors hover:text-paper"
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default function Day02() {
  return (
    <DayShell
      index={2}
      concept="state & useState"
      note={
        <>
          Props flow in from outside; state lives inside the component and
          changes over time. <code className="text-amber">useState(0)</code>{" "}
          returns the current value and a setter — calling the setter is what
          tells React to re-render with the new value, the same way
          reassigning a variable does nothing on its own until something
          re-reads it. Each{" "}
          <code className="text-amber">Counter</code> below holds its own{" "}
          <code className="text-amber">count</code>: they're the same
          component called three times, but each instance's state is
          independent — clicking one never affects the others.
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <Counter label="by ones" step={1} accent="var(--color-amber)" />
        <Counter label="by fives" step={5} accent="var(--color-moss-bright)" />
        <Counter label="by tens" step={10} accent="var(--color-paper)" />
        <Counter label="by twelves" step={12} accent="var(--color-ink)" />
      </div>
    </DayShell>
  );
}
