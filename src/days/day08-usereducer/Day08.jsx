import { useReducer } from "react";
import DayShell from "../../components/DayShell.jsx";

const initialState = { count: 0, history: [0] };

function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      const count = state.count + 1;
      return { count, history: [...state.history, count] };
    }
    case "decrement": {
      const count = state.count - 1;
      return { count, history: [...state.history, count] };
    }
    case "undo": {
      if (state.history.length <= 1) return state;
      const history = state.history.slice(0, -1);
      return { count: history[history.length - 1], history };
    }
    case "reset":
      return initialState;
    default:
      throw new Error(`unknown action: ${action.type}`);
  }
}

export default function Day08() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DayShell
      index={8}
      concept="useReducer"
      note={
        <>
          Day 2 used <code className="text-amber">useState</code> for one
          number. This counter needs two things to change together: the
          count itself, and a trail of every count that got it there, so{" "}
          <code className="text-amber">undo</code> has something to pop.
          Two separate <code className="text-amber">useState</code> calls
          can drift out of sync — nothing stops one from updating without
          the other.{" "}
          <code className="text-amber">useReducer</code> closes that gap by
          putting both fields in one state object and one function,{" "}
          <code className="text-amber">reducer</code>, that's the only
          place allowed to decide what the next state looks like. The
          buttons below don't compute anything — they just{" "}
          <code className="text-amber">dispatch</code> an action describing
          what happened, like{" "}
          <code className="text-amber">{"{ type: \"increment\" }"}</code>,
          and the reducer's <code className="text-amber">switch</code>{" "}
          statement is the one place that turns that intent into a new
          count and a new history, always as a single, atomic update.
        </>
      }
    >
      <div className="rounded-lg border border-line bg-ink-raised p-6">
        <p className="font-mono text-4xl font-medium text-paper tabular-nums">
          {state.count}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => dispatch({ type: "decrement" })}
            className="rounded-md border border-line px-3 py-1 font-mono text-sm text-paper transition-colors hover:border-amber hover:text-amber"
          >
            −
          </button>
          <button
            onClick={() => dispatch({ type: "increment" })}
            className="rounded-md border border-line px-3 py-1 font-mono text-sm text-paper transition-colors hover:border-amber hover:text-amber"
          >
            +
          </button>
          <button
            onClick={() => dispatch({ type: "undo" })}
            disabled={state.history.length <= 1}
            className="rounded-md border border-line px-3 py-1 font-mono text-sm text-paper transition-colors hover:border-amber hover:text-amber disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line disabled:hover:text-paper"
          >
            undo
          </button>
          <button
            onClick={() => dispatch({ type: "reset" })}
            className="rounded-md border border-line px-3 py-1 font-mono text-sm text-dim transition-colors hover:border-amber hover:text-amber"
          >
            reset
          </button>
        </div>

        <div className="mt-4 border-t border-line pt-4">
          <p className="font-mono text-xs text-dim">history</p>
          <p className="mt-1 font-mono text-sm text-moss-bright tabular-nums">
            {state.history.join(" → ")}
          </p>
        </div>
      </div>
    </DayShell>
  );
}
