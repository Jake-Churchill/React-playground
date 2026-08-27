import { useEffect, useRef, useState } from "react";
import DayShell from "../../components/DayShell.jsx";

export default function Day06() {
  const [query, setQuery] = useState("");
  const [snapshot, setSnapshot] = useState(null);
  const inputRef = useRef(null);
  const previousQueryRef = useRef("");
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current += 1;
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChange(e) {
    previousQueryRef.current = query;
    setQuery(e.target.value);
  }

  function readRefs() {
    setSnapshot({
      previousQuery: previousQueryRef.current,
      renderCount: renderCountRef.current,
    });
  }

  return (
    <DayShell
      index={6}
      concept="refs & useRef"
      note={
        <>
          State isn't the only kind of value a component can hold onto
          between renders — <code className="text-amber">useRef</code> gives
          you a mutable <code className="text-amber">.current</code> box that
          survives re-renders too, but changing it never schedules one. Both
          refs below tick along silently on every keystroke: the previous
          query is written straight into the input's{" "}
          <code className="text-amber">onChange</code> handler, capturing
          the outgoing value the instant before{" "}
          <code className="text-amber">setQuery</code> replaces it, and the
          render count climbs in an effect that runs after every commit.
          Neither shows up on screen by itself — that's the point. The "read
          refs" button copies both current values into state, which is the
          only thing that can make React paint something new. Try typing,
          watch nothing update, then click the button and see both catch up
          at once. The input uses <code className="text-amber">useRef</code>{" "}
          for a second job too:{" "}
          <code className="text-amber">inputRef.current.focus()</code>{" "}
          reaches straight into the DOM node on mount, something state has no
          way to express.
        </>
      }
    >
      <div className="rounded-lg border border-line bg-ink-raised p-6">
        <label className="font-mono text-sm text-dim" htmlFor="ref-search">
          search
        </label>
        <input
          id="ref-search"
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="type something"
          className="mt-2 w-full rounded-md border border-line bg-ink px-3 py-2 font-mono text-sm text-paper focus:border-amber focus:outline-none"
        />

        <button
          onClick={readRefs}
          className="mt-4 rounded-md border border-line px-3 py-1 font-mono text-sm text-paper transition-colors hover:border-amber hover:text-amber"
        >
          read refs
        </button>

        <dl className="mt-4 grid grid-cols-2 gap-4 border-t border-line pt-4">
          <div>
            <dt className="font-mono text-xs text-dim">previous query</dt>
            <dd className="mt-1 font-mono text-sm text-paper">
              {snapshot ? (
                snapshot.previousQuery || <span className="text-dim">—</span>
              ) : (
                <span className="text-dim">not read yet</span>
              )}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-dim">render count</dt>
            <dd className="mt-1 font-mono text-sm text-paper tabular-nums">
              {snapshot ? (
                snapshot.renderCount
              ) : (
                <span className="text-dim">not read yet</span>
              )}
            </dd>
          </div>
        </dl>
      </div>
    </DayShell>
  );
}
