import { useState } from "react";
import DayShell from "../../components/DayShell.jsx";

let nextId = 4;

const initialTasks = [
  { id: 1, text: "learn JSX", done: true },
  { id: 2, text: "learn props", done: true },
  { id: 3, text: "learn state", done: true },
];

export default function Day05() {
  const [tasks, setTasks] = useState(initialTasks);
  const [text, setText] = useState("");

  function addTask(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setTasks((t) => [...t, { id: nextId++, text: trimmed, done: false }]);
    setText("");
  }

  function toggleTask(id) {
    setTasks((t) =>
      t.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    );
  }

  function removeTask(id) {
    setTasks((t) => t.filter((task) => task.id !== id));
  }

  return (
    <DayShell
      index={5}
      concept="lists & keys"
      note={
        <>
          Every day so far has rendered a fixed number of things — three
          profile cards, four counters, two temperature inputs. This list is
          different: it changes shape at runtime, so it has to be built with{" "}
          <code className="text-amber">tasks.map()</code> instead of writing
          out JSX by hand. React needs a{" "}
          <code className="text-amber">key</code> on each item to tell which
          list item is which across renders — that's why each task carries a
          stable <code className="text-amber">id</code> from the moment it's
          created, instead of using its position in the array. An index would
          work until you remove a task from the middle: every item after it
          shifts down one slot, so the index no longer refers to the same
          task and React would mismatch state like{" "}
          <code className="text-amber">done</code> onto the wrong row.
        </>
      }
    >
      <form onSubmit={addTask} className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="add a task"
          className="w-full rounded-md border border-line bg-ink px-3 py-2 font-mono text-sm text-paper focus:border-amber focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-md border border-line px-3 py-2 font-mono text-sm text-paper transition-colors hover:border-amber hover:text-amber"
        >
          add
        </button>
      </form>

      {tasks.length > 0 ? (
        <ul className="mt-4 divide-y divide-line rounded-lg border border-line bg-ink-raised">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between gap-3 px-4 py-3"
            >
              <button
                onClick={() => toggleTask(task.id)}
                className={`flex-1 text-left font-mono text-sm ${
                  task.done ? "text-dim line-through" : "text-paper"
                }`}
              >
                {task.text}
              </button>
              <button
                onClick={() => removeTask(task.id)}
                className="shrink-0 font-mono text-xs text-dim transition-colors hover:text-amber"
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 font-mono text-sm text-dim">
          no tasks left — add one above.
        </p>
      )}
    </DayShell>
  );
}
