import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { Bone, Activity, HeartPulse, Hand, Brain, AlignCenter, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services-data";
import { TiltCard } from "../shared/TiltCard";
import { SplitText } from "../shared/SplitText";

const iconMap = { Bone, Activity, HeartPulse, Hand, Brain, AlignCenter };

export function ServicesGrid() {
  return (
    <section className="py-28 bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-5">Our Expertise</p>
            <SplitText as="h2" text="We believe every patient deserves focused, compassionate care."
              className="font-display text-4xl md:text-5xl leading-[1.05]" />
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-gold border-b border-gold/60 pb-1 hover:gap-3 transition-all">
            View All Services <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
              >
                <TiltCard className="group relative h-80 rounded-2xl overflow-hidden">
                  <img src={s.image} alt={s.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20" />
                  <div className="absolute top-5 right-5 w-12 h-12 rounded-xl bg-cream/10 backdrop-blur border border-cream/20 grid place-items-center">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl mb-2">{s.name}</h3>
                    <p className="text-sm text-cream/70 mb-4">{s.tagline}</p>
                    <Link to="/services/$slug" params={{ slug: s.slug }} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold">
                      View Service <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
