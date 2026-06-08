import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowUpRight, Plus, Minus, Check } from "lucide-react";
import { useState } from "react";
import { services, getService } from "@/lib/services-data";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { SplitText } from "@/components/shared/SplitText";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    return {
      meta: s ? [
        { title: `${s.name} — VertebraVita` },
        { name: "description", content: s.tagline },
        { property: "og:title", content: `${s.name} — VertebraVita` },
        { property: "og:description", content: s.tagline },
        { property: "og:image", content: s.image },
      ] : [],
    };
  },
  component: ServiceDetail,
  notFoundComponent: () => <div className="pt-40 text-center">Service not found</div>,
  errorComponent: () => <div className="pt-40 text-center">Something went wrong.</div>,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const [openFaq, setOpenFaq] = useState(0);
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative pt-36 pb-20 bg-forest text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={service.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-forest/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <BreadcrumbNav items={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: service.name }]} />
          <SplitText as="h1" text={service.name}
            className="mt-8 font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl" />
          <p className="mt-6 text-xl text-cream/80 max-w-2xl">{service.tagline}</p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-sage mb-5">Overview</p>
            <p className="text-lg text-charcoal leading-relaxed">{service.description}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-sage mb-5">Key Benefits</p>
            <ul className="space-y-3">
              {service.benefits.map((b: string) => (
                <li key={b} className="flex gap-3 items-start text-charcoal">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" /> <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-5">Our Process</p>
          <h2 className="font-display text-4xl md:text-5xl mb-16 max-w-2xl">How treatment works.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p: any, i: number) => (
              <motion.div key={p.step}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-t border-cream/25 pt-5"
              >
                <div className="font-mono text-gold text-sm mb-3">{p.step}</div>
                <h3 className="font-display text-2xl mb-2">{p.title}</h3>
                <p className="text-cream/70 text-sm">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-sage mb-5">What To Expect</p>
          <h2 className="font-display text-4xl md:text-5xl text-forest mb-10">Common questions, answered.</h2>
          <div className="divide-y divide-forest/15">
            {service.faq.map((f: any, i: number) => (
              <button key={i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full text-left py-5">
                <div className="flex items-center gap-4">
                  <span className="flex-1 font-display text-xl text-forest">{f.q}</span>
                  {openFaq === i ? <Minus className="w-5 h-5 text-forest" /> : <Plus className="w-5 h-5 text-forest" />}
                </div>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="pt-3 text-stone">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.25em] text-sage mb-5">Related Services</p>
          <h2 className="font-display text-4xl text-forest mb-10">Explore more care.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="group block relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={r.image} alt={r.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                  <h3 className="font-display text-2xl mb-1">{r.name}</h3>
                  <span className="text-xs uppercase tracking-[0.18em] text-gold inline-flex items-center gap-1.5">View Service <ArrowUpRight className="w-3 h-3" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest text-cream">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl mb-6">Ready to feel better? Book your session today.</h2>
          <p className="text-cream/70 mb-10 max-w-xl mx-auto">A free 20-minute consultation is the first step toward lasting recovery.</p>
          <Link to="/contact"><MagneticButton variant="primary">Book Your Session</MagneticButton></Link>
        </div>
      </section>

      <section className="pb-20 bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-gold hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>
        </div>
      </section>
    </>
  );
}
