import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { team } from "@/lib/team-data";
import { SplitText } from "../shared/SplitText";

export function TeamPreview() {
  return (
    <section className="py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-sage mb-5">Meet Our Specialists</p>
            <SplitText as="h2" text="Expert hands. Compassionate hearts. Real results."
              className="font-display text-4xl md:text-5xl leading-[1.05] text-forest" />
          </div>
          <Link to="/team" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-forest border-b border-forest pb-1 hover:gap-3 transition-all">
            Meet The Full Team <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <motion.div
              key={m.slug}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to="/team/$slug" params={{ slug: m.slug }} className="group block">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-forest/10">
                  <motion.img
                    src={m.image} alt={m.name}
                    initial={{ filter: "grayscale(100%)" }}
                    whileHover={{ filter: "grayscale(0%)" }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-x-0 bottom-0 bg-forest/95 backdrop-blur p-5 text-cream"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-gold mb-1">{m.title}</p>
                    <p className="font-display text-xl mb-2">{m.name}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs">View Profile <ArrowUpRight className="w-3 h-3" /></span>
                  </motion.div>
                </div>
                <div className="mt-4">
                  <p className="font-display text-xl text-forest">{m.name}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-stone mt-1">{m.title}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
