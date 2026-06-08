import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SplitText } from "@/components/shared/SplitText";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { CountUpNumber } from "@/components/shared/CountUpNumber";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About VertebraVita — Our Story & Philosophy" },
      { name: "description", content: "Learn about VertebraVita's evidence-based approach to chiropractic care, our mission, and the team behind 15 years of clinical excellence." },
      { property: "og:title", content: "About VertebraVita" },
      { property: "og:description", content: "Our story, philosophy, and the team behind 15 years of clinical excellence." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1623820919239-0d0ff10797a1?w=1200&q=80" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-sage mb-6">Our Story</p>
          <SplitText as="h1" text="A clinic built on movement, evidence, and care."
            className="font-display text-5xl md:text-7xl leading-[1.02] text-forest max-w-5xl" />
        </div>
      </section>

      <section className="pb-20 bg-cream">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="aspect-[4/3] rounded-3xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1200&q=80" alt="VertebraVita clinic" className="w-full h-full object-cover" />
          </motion.div>
          <div className="space-y-5 text-lg text-stone leading-relaxed">
            <p>VertebraVita began in 2009 with a simple belief: spinal care should treat the whole person — not just the symptom in front of you.</p>
            <p>Over fifteen years and 3,200+ patients later, that belief drives every consultation, treatment, and follow-up. Our clinicians come from chiropractic, physiotherapy, and neurological rehabilitation backgrounds, and they work as a single team around each patient's plan.</p>
            <p>We don't believe in one-size-fits-all. We do believe in evidence, time, and trust.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-10">
          {[
            { val: 15, suffix: "+", label: "Years of Practice" },
            { val: 3200, suffix: "+", label: "Patients Served" },
            { val: 4.97, suffix: "/5", label: "Patient Satisfaction", decimals: 2 },
          ].map((s, i) => (
            <div key={i} className="border-t border-cream/20 pt-6">
              <div className="font-display text-6xl text-gold"><CountUpNumber to={s.val} suffix={s.suffix} decimals={s.decimals ?? 0} /></div>
              <p className="mt-3 text-cream/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}

function CTABand() {
  return (
    <section className="py-20 bg-cream">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl text-forest mb-6">Ready to feel better?</h2>
        <p className="text-stone mb-8 max-w-xl mx-auto">Book a free consultation and start your recovery today.</p>
        <Link to="/contact"><MagneticButton variant="outline">Book Free Consultation</MagneticButton></Link>
      </div>
    </section>
  );
}
