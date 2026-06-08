import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Bone, HeartPulse, Dna, ArrowUpRight } from "lucide-react";
import { SplitText } from "../shared/SplitText";

const pillars = [
  { icon: Bone, title: "Precision Spinal Assessment", body: "Diagnostics that find the root cause, not just the symptoms." },
  { icon: HeartPulse, title: "Personalized Recovery Plans", body: "Built around your body, lifestyle, and timeline." },
  { icon: Dna, title: "Evidence-Based Techniques", body: "Every treatment is clinically validated and outcomes-driven." },
];

export function AboutSnippet() {
  return (
    <section className="py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1623820919239-0d0ff10797a1?w=900&q=80" alt="Physiotherapist working with patient" className="w-full h-full object-cover" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="absolute -bottom-6 -right-6 bg-forest text-cream p-6 rounded-2xl shadow-2xl max-w-[260px]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Patients</p>
            <p className="font-display text-4xl">2,400+</p>
            <p className="text-sm text-cream/70 mt-1">recovered with us</p>
          </motion.div>
        </motion.div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-sage mb-5">About VertebraVita</p>
          <SplitText
            as="h2"
            text="Your journey begins with a thorough evaluation and a plan built around you."
            className="font-display text-4xl md:text-5xl leading-[1.05] text-forest"
          />
          <p className="mt-6 text-stone leading-relaxed">
            We combine evidence-based chiropractic techniques with modern diagnostics to treat the root cause — not just the symptoms. From sports injuries to chronic back pain, our team delivers results.
          </p>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="mt-10 space-y-5"
          >
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={{ hidden: { x: -30, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-mint/40 grid place-items-center shrink-0 text-forest">
                  <p.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-forest">{p.title}</h3>
                  <p className="text-sm text-stone mt-1">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-forest border-b border-forest pb-1 hover:gap-3 transition-all">
            Learn Our Story <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
