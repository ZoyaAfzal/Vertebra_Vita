const items = ["Spinal Adjustment", "Manual Therapy", "Sports Rehab", "Posture Correction", "Neurological Physio", "Deep Tissue"];

function Row({ reverse }: { reverse?: boolean }) {
  const repeated = [...items, ...items];
  return (
    <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
      {repeated.map((t, i) => (
        <div key={i} className="flex items-center gap-10 px-10">
          <span className="font-display text-4xl md:text-6xl text-forest uppercase tracking-tight whitespace-nowrap">{t}</span>
          <span className="w-2.5 h-2.5 rounded-full bg-gold shrink-0" />
        </div>
      ))}
    </div>
  );
}

export function MarqueeStrip() {
  return (
    <section className="py-14 bg-cream overflow-hidden border-y border-forest/10 space-y-4">
      <Row />
      <Row reverse />
    </section>
  );
}
