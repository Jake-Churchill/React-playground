const TRACK_LENGTH = 30;

export default function ContributionStrip({ filled }) {
  const cells = Array.from({ length: TRACK_LENGTH }, (_, i) => i < filled);

  return (
    <div className="flex gap-1.5" aria-hidden="true">
      {cells.map((isFilled, i) => {
        const isLatest = isFilled && i === filled - 1;
        return (
          <span
            key={i}
            className={
              "h-3 w-3 rounded-sm border transition-colors " +
              (isFilled
                ? "border-moss-bright bg-moss-bright"
                : "border-line bg-transparent")
            }
            style={
              isLatest
                ? { boxShadow: "0 0 0 2px var(--color-amber)" }
                : undefined
            }
          />
        );
      })}
    </div>
  );
}
