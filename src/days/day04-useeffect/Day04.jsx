import { useEffect, useState } from "react";
import DayShell from "../../components/DayShell.jsx";

function formatElapsed(ms) {
  const centiseconds = Math.floor(ms / 10) % 100;
  const totalSeconds = Math.floor(ms / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60);
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(minutes)}:${pad(seconds)}.${pad(centiseconds)}`;
}

export default function Day04() {
  const [running, setRunning] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);

  // setInterval is a side effect: it lives outside React and keeps running
  // after this render finishes. The effect starts it only while `running`
  // is true, and the cleanup function — returned from the effect — clears
  // it before the effect re-runs or the component unmounts. Without that
  // cleanup, toggling start/stop would stack a new interval on top of the
  // last one every time.
  useEffect(() => {
    if (!running) return;

    const start = Date.now() - elapsedMs;
    const id = setInterval(() => {
      setElapsedMs(Date.now() - start);
    }, 10);

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  return (
    <DayShell
      index={4}
      concept="useEffect"
      note={
        <>
          Everything up through Day03 was pure render logic: given the same
          props and state, the output is the same. A stopwatch can't work
          that way — <code className="text-amber">setInterval</code> keeps
          firing after the render is done, whether or not the component
          renders again. <code className="text-amber">useEffect</code> is
          where that kind of ongoing, outside-of-React work belongs. This
          effect starts an interval when <code className="text-amber">
            running
          </code>{" "}
          turns true, and its cleanup function clears that interval before
          the effect runs again or the component unmounts — that cleanup is
          what keeps Stop from leaving a ghost interval behind.
        </>
      }
    >
      <div className="rounded-lg border border-line bg-ink-raised p-6">
        <p className="font-mono text-sm text-dim">elapsed</p>
        <p className="mt-1 font-mono text-4xl font-medium text-paper tabular-nums">
          {formatElapsed(elapsedMs)}
        </p>
        <div className="mt-5 flex gap-2">
          <button
            onClick={() => setRunning((r) => !r)}
            className="rounded-md border border-line px-3 py-1 font-mono text-sm text-paper transition-colors hover:border-amber hover:text-amber"
          >
            {running ? "stop" : "start"}
          </button>
          <button
            onClick={() => {
              setRunning(false);
              setElapsedMs(0);
            }}
            className="rounded-md px-3 py-1 font-mono text-sm text-dim transition-colors hover:text-paper"
          >
            reset
          </button>
        </div>
      </div>
    </DayShell>
  );
}
