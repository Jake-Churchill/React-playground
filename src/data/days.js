import Day01 from "../days/day01-components-props/Day01.jsx";
import Day02 from "../days/day02-state-usestate/Day02.jsx";
import Day03 from "../days/day03-lifting-state-up/Day03.jsx";
import Day04 from "../days/day04-useeffect/Day04.jsx";

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
];
