import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services-data";
import { SplitText } from "@/components/shared/SplitText";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — VertebraVita" },
      { name: "description", content: "Chiropractic adjustments, sports rehab, manual therapy, neurological physio, and more. All under one expert roof." },
      { property: "og:title", content: "Our Services — VertebraVita" },
      { property: "og:description", content: "Comprehensive chiropractic and physiotherapy services." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="pt-36 pb-12 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <BreadcrumbNav items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-sage">Our Expertise</p>
          <SplitText as="h1" text="Comprehensive care for every body."
            className="mt-4 font-display text-5xl md:text-7xl leading-[1.02] text-forest max-w-4xl" />
        </div>
      </section>

      <section className="pb-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.slug}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1 }}
            >
              <Link to="/services/$slug" params={{ slug: s.slug }} className="group block relative aspect-[4/3] rounded-3xl overflow-hidden">
                <img src={s.image} alt={s.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-cream">
                  <h3 className="font-display text-3xl mb-2">{s.name}</h3>
                  <p className="text-cream/75 mb-4 max-w-md">{s.tagline}</p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold">View Service <ArrowUpRight className="w-3.5 h-3.5" /></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
