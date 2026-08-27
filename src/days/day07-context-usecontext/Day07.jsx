import { createContext, useContext, useState } from "react";
import DayShell from "../../components/DayShell.jsx";

const SessionContext = createContext(null);

function Dashboard() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Sidebar />
      <MainPanel />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="rounded-lg border border-line bg-ink-raised p-4">
      <p className="font-mono text-xs text-dim">sidebar</p>
      <UserBadge />
    </div>
  );
}

function UserBadge() {
  const session = useContext(SessionContext);
  return (
    <p className="mt-2 font-mono text-sm text-paper">
      {session.name} ·{" "}
      <span className="text-moss-bright">{session.role}</span>
    </p>
  );
}

function MainPanel() {
  return (
    <div className="rounded-lg border border-line bg-ink-raised p-4">
      <p className="font-mono text-xs text-dim">main panel</p>
      <PermissionGate />
    </div>
  );
}

function PermissionGate() {
  const session = useContext(SessionContext);
  return session.role === "admin" ? (
    <p className="mt-2 font-mono text-sm text-amber">
      admin controls unlocked
    </p>
  ) : (
    <p className="mt-2 font-mono text-sm text-dim">
      sign in as admin to see controls
    </p>
  );
}

export default function Day07() {
  const [role, setRole] = useState("guest");
  const session = { name: "Jake", role };

  return (
    <DayShell
      index={7}
      concept="context & useContext"
      note={
        <>
          Every day so far has passed data downward through props, one hop
          at a time. Context skips the hops.{" "}
          <code className="text-amber">createContext</code> opens a channel,
          and wrapping a subtree in{" "}
          <code className="text-amber">SessionContext.Provider</code> makes
          that value reachable from anywhere inside it, no matter how deep.{" "}
          <code className="text-amber">Dashboard</code>,{" "}
          <code className="text-amber">Sidebar</code>, and{" "}
          <code className="text-amber">MainPanel</code> below never receive{" "}
          <code className="text-amber">session</code> as a prop and never
          forward it — they don't even know it exists. Only{" "}
          <code className="text-amber">UserBadge</code> and{" "}
          <code className="text-amber">PermissionGate</code>, three
          components deep, call{" "}
          <code className="text-amber">useContext(SessionContext)</code> to
          reach in and read it directly. Toggle the role below: the value
          updates once, in the provider, and both consumers three layers
          down re-render with it — no prop threaded through a single
          component in between.
        </>
      }
    >
      <button
        onClick={() =>
          setRole((r) => (r === "guest" ? "admin" : "guest"))
        }
        className="rounded-md border border-line px-3 py-1 font-mono text-sm text-paper transition-colors hover:border-amber hover:text-amber"
      >
        switch to {role === "guest" ? "admin" : "guest"}
      </button>

      <SessionContext.Provider value={session}>
        <div className="mt-4">
          <Dashboard />
        </div>
      </SessionContext.Provider>
    </DayShell>
  );
}
