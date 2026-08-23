import { useState } from "react";
import DayShell from "../../components/DayShell.jsx";

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) return "";
  const output = convert(input);
  return (Math.round(output * 1000) / 1000).toString();
}

// Neither input owns the temperature — Day03 does. Each TemperatureInput is
// controlled: it renders whatever value its props say and reports edits
// upward via onTemperatureChange instead of holding its own state.
function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const label = scale === "c" ? "Celsius" : "Fahrenheit";

  return (
    <div className="rounded-lg border border-line bg-ink-raised p-5">
      <p className="font-mono text-sm text-dim">{label}</p>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        placeholder="0"
        className="mt-2 w-full rounded-md border border-line bg-ink px-3 py-2 font-mono text-2xl text-paper focus:border-amber focus:outline-none"
      />
    </div>
  );
}

export default function Day03() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
  const parsedCelsius = parseFloat(celsius);
  const boils = !Number.isNaN(parsedCelsius) && parsedCelsius >= 100;

  return (
    <DayShell
      index={3}
      concept="lifting state up"
      note={
        <>
          Day02's counters were independent on purpose — nothing they did
          could affect each other. These two inputs are the opposite: they
          have to agree, so the temperature can't live inside either one.
          Instead <code className="text-amber">Day03</code> holds the single
          source of truth, and each{" "}
          <code className="text-amber">TemperatureInput</code> is
          controlled — it just renders the value it's given and calls{" "}
          <code className="text-amber">onTemperatureChange</code> when the
          user types. Edit either field and watch the other convert.
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={(value) => {
            setScale("c");
            setTemperature(value);
          }}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={(value) => {
            setScale("f");
            setTemperature(value);
          }}
        />
      </div>
      <p className="mt-4 font-mono text-sm text-dim">
        {celsius === ""
          ? "enter a temperature"
          : boils
            ? "the water would boil."
            : "the water would not boil."}
      </p>
    </DayShell>
  );
}
