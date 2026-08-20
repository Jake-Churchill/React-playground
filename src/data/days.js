import Day01 from "../days/day01-components-props/Day01.jsx";

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
];
