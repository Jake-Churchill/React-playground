import DayShell from "../../components/DayShell.jsx";

// A single component, reused three times with different data below.
// Everything that changes between the three cards arrives as props —
// nothing inside ProfileCard is hardcoded per-person.
function ProfileCard({ name, role, streak, accent }) {
  return (
    <div className="rounded-lg border border-line bg-ink-raised p-5">
      <div
        className="mb-3 h-1 w-8 rounded-full"
        style={{ backgroundColor: accent }}
      />
      <p className="font-mono text-sm text-dim">{role}</p>
      <h3 className="mt-1 text-lg font-medium text-paper">{name}</h3>
      <p className="mt-3 font-mono text-xs text-dim">
        streak: <span className="text-paper">{streak} days</span>
      </p>
    </div>
  );
}

export default function Day01() {
  return (
    <DayShell
      index={1}
      concept="components & props"
      note={
        <>
          A component is a function that returns UI. Props are the arguments
          you pass it. <code className="text-amber">ProfileCard</code> below
          is defined once — the three cards on screen are the same function
          called three times with different props, the same way you'd call{" "}
          <code className="text-amber">formatDate(x)</code> with different{" "}
          <code className="text-amber">x</code>. Open{" "}
          <code className="text-amber">Day01.jsx</code> to see it: no
          conditionals, no per-card copy-paste — just one component and three
          different prop objects.
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <ProfileCard
          name="Ada"
          role="frontend"
          streak={7}
          accent="var(--color-amber)"
        />
        <ProfileCard
          name="Grace"
          role="backend"
          streak={21}
          accent="var(--color-moss-bright)"
        />
        <ProfileCard
          name="Margaret"
          role="design"
          streak={3}
          accent="var(--color-paper)"
        />
        <ProfileCard
          name="Jake"
          role="backend"
          streak={1}
          accent="blue"
        />
        <ProfileCard
          name="TEST NAME"
          role="TEST"
          streak={4}
          accent="RED"
        />
      </div>
    </DayShell>
  );
}
