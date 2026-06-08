import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { team } from "@/lib/team-data";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { SplitText } from "@/components/shared/SplitText";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — VertebraVita" },
      { name: "description", content: "Meet the chiropractors, physiotherapists, and rehab specialists behind VertebraVita." },
      { property: "og:title", content: "Our Team — VertebraVita" },
      { property: "og:description", content: "Meet our chiropractic specialists." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <section className="pt-36 pb-12 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <BreadcrumbNav items={[{ label: "Home", to: "/" }, { label: "Team" }]} />
          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-sage">Our Specialists</p>
          <SplitText as="h1" text="Expert hands. Real results."
            className="mt-4 font-display text-5xl md:text-7xl leading-[1.02] text-forest max-w-4xl" />
        </div>
      </section>

      <section className="pb-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8">
          {team.map((m, i) => (
            <motion.div key={m.slug}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: (i % 2) * 0.1 }}
            >
              <Link to="/team/$slug" params={{ slug: m.slug }} className="group grid grid-cols-[180px_1fr] gap-6 items-center">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <motion.img src={m.image} alt={m.name}
                    initial={{ filter: "grayscale(100%)" }} whileHover={{ filter: "grayscale(0%)" }}
                    transition={{ duration: 0.4 }} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-sage mb-2">{m.title}</p>
                  <h3 className="font-display text-3xl text-forest mb-2">{m.name}</h3>
                  <p className="text-sm text-stone mb-3">{m.credentials.join(" · ")}</p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-forest">View Profile <ArrowUpRight className="w-3.5 h-3.5" /></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
