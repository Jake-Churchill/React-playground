import Day01 from "../days/day01-components-props/Day01.jsx";
import Day02 from "../days/day02-state-usestate/Day02.jsx";
import Day03 from "../days/day03-lifting-state-up/Day03.jsx";
import Day04 from "../days/day04-useeffect/Day04.jsx";
import Day05 from "../days/day05-lists-keys/Day05.jsx";
import Day06 from "../days/day06-refs-useref/Day06.jsx";
import Day07 from "../days/day07-context-usecontext/Day07.jsx";
import Day08 from "../days/day08-usereducer/Day08.jsx";
import Day09 from "../days/day09-custom-hooks/Day09.jsx";

// Single source of truth for the home page log and the router.
// Adding a day = new folder in src/days + one entry here.
export const days = [
  {
    slug: "day-01-components-props",
    index: 1,
    date: "2026-08-20",
    concept: "components & props",
    summary:
      "One component, called three times with different data — how props replace copy-paste.",
    component: Day01,
  },
  {
    slug: "day-02-state-usestate",
    index: 2,
    date: "2026-08-21",
    concept: "state & useState",
    summary:
      "Three independent counters — how useState gives a component memory that persists across renders.",
    component: Day02,
  },
  {
    slug: "day-03-lifting-state-up",
    index: 3,
    date: "2026-08-22",
    concept: "lifting state up",
    summary:
      "A Celsius/Fahrenheit converter — when two components must agree, the state moves to their shared parent.",
    component: Day03,
  },
  {
    slug: "day-04-useeffect",
    index: 4,
    date: "2026-08-23",
    concept: "useEffect",
    summary:
      "A stopwatch — using useEffect to start and clean up a setInterval side effect in sync with state.",
    component: Day04,
  },
  {
    slug: "day-05-lists-keys",
    index: 5,
    date: "2026-08-24",
    concept: "lists & keys",
    summary:
      "A task list — rendering an array with map(), and why each item needs a stable key instead of its array index.",
    component: Day05,
  },
  {
    slug: "day-06-refs-useref",
    index: 6,
    date: "2026-08-25",
    concept: "refs & useRef",
    summary:
      "A self-focusing search input — using useRef for DOM access and for values that persist across renders without triggering one.",
    component: Day06,
  },
  {
    slug: "day-07-context-usecontext",
    index: 7,
    date: "2026-08-26",
    concept: "context & useContext",
    summary:
      "A nested dashboard reading a shared session — using useContext to skip prop drilling through components that don't need the data.",
    component: Day07,
  },
  {
    slug: "day-08-usereducer",
    index: 8,
    date: "2026-08-27",
    concept: "useReducer",
    summary:
      "A counter with undo — using useReducer to keep a count and its history in sync as one atomic state transition instead of two useState calls.",
    component: Day08,
  },
  {
    slug: "day-09-custom-hooks",
    index: 9,
    date: "2026-08-28",
    concept: "custom hooks",
    summary:
      "A useLocalStorage hook backing a name field and an accent picker — extracting the read-once/write-on-change pattern so it isn't copy-pasted per component.",
    component: Day09,
  },
];
