import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { days } from "./data/days.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {days.map((day) => (
          <Route
            key={day.slug}
            path={`/${day.slug}`}
            element={<day.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
