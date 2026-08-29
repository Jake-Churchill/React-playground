import DayShell from "../../components/DayShell.jsx";
import useLocalStorage from "./useLocalStorage.js";

export default function Day09() {
  const [name, setName] = useLocalStorage("day9:display-name", "");
  const [accent, setAccent] = useLocalStorage("day9:accent", "amber");

  return (
    <DayShell
      index={9}
      concept="custom hooks"
      note={
        <>
          Every hook so far — <code className="text-amber">useState</code>,{" "}
          <code className="text-amber">useEffect</code>,{" "}
          <code className="text-amber">useRef</code>,{" "}
          <code className="text-amber">useReducer</code> — is built into
          React. A custom hook is just a function whose name starts with{" "}
          <code className="text-amber">use</code> that calls some of those
          underneath, so the pattern inside it can be reused instead of
          copy-pasted.{" "}
          <code className="text-amber">useLocalStorage</code> below does
          exactly that: it reads a key from{" "}
          <code className="text-amber">localStorage</code> once, as{" "}
          <code className="text-amber">useState</code>'s lazy initializer,
          then a <code className="text-amber">useEffect</code> writes the
          value back out every time it changes. The two fields underneath
          are completely unrelated — a name and an accent color — but
          neither rewrites that read/write logic; they just call the hook
          with a different key. Change either one and reload the page: the
          hook remembered.
        </>
      }
    >
      <div className="space-y-6">
        <div className="rounded-lg border border-line bg-ink-raised p-6">
          <label
            className="font-mono text-sm text-dim"
            htmlFor="display-name"
          >
            display name
          </label>
          <input
            id="display-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="type a name, then reload the page"
            className="mt-2 w-full rounded-md border border-line bg-ink px-3 py-2 font-mono text-sm text-paper focus:border-amber focus:outline-none"
          />
        </div>

        <div className="rounded-lg border border-line bg-ink-raised p-6">
          <p className="font-mono text-sm text-dim">accent</p>
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => setAccent("amber")}
              className={`rounded-md border px-3 py-1 font-mono text-sm transition-colors ${
                accent === "amber"
                  ? "border-amber text-amber"
                  : "border-line text-dim hover:border-amber hover:text-amber"
              }`}
            >
              amber
            </button>
            <button
              onClick={() => setAccent("moss")}
              className={`rounded-md border px-3 py-1 font-mono text-sm transition-colors ${
                accent === "moss"
                  ? "border-moss-bright text-moss-bright"
                  : "border-line text-dim hover:border-moss-bright hover:text-moss-bright"
              }`}
            >
              moss
            </button>
          </div>

          <div
            className={`mt-4 rounded-md border-2 p-4 font-mono text-sm ${
              accent === "amber"
                ? "border-amber text-amber"
                : "border-moss-bright text-moss-bright"
            }`}
          >
            {name || "unnamed"} — accent set to {accent}
          </div>
        </div>
      </div>
    </DayShell>
  );
}
