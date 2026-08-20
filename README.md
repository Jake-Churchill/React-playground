# react-playground

A React concept playground — one day, one concept, one commit.

## Convention

Each entry lives in `src/days/day-NN-<concept>/` as a self-contained
component demonstrating a single React idea. Adding a new day:

1. Create `src/days/day-NN-<slug>/DayNN.jsx`
2. Wrap it in `<DayShell>` (see `src/components/DayShell.jsx`) for the
   consistent header/note layout
3. Add one entry to `src/data/days.js` — this drives both the home page
   log and the router, so nothing else needs to change

## Stack

Vite + React + React Router + Tailwind CSS v4. No test framework yet —
this is a learning sandbox, not production code.

## Running locally

```bash
npm install
npm run dev
```

## Log

| Day | Concept | Notes |
|---|---|---|
| 01 | Components & props | One `ProfileCard` component, called three times with different props |
