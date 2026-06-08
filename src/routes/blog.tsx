import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/lib/blog-data";
import { BreadcrumbNav } from "@/components/shared/BreadcrumbNav";
import { SplitText } from "@/components/shared/SplitText";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — VertebraVita" },
      { name: "description", content: "Wellness, recovery, and spinal health insights from the VertebraVita team." },
      { property: "og:title", content: "Blog — VertebraVita" },
      { property: "og:description", content: "Insights to keep your spine healthy every day." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <section className="pt-36 pb-12 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <BreadcrumbNav items={[{ label: "Home", to: "/" }, { label: "Blog" }]} />
          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-sage">Wellness Journal</p>
          <SplitText as="h1" text="Notes on movement, recovery, and life."
            className="mt-4 font-display text-5xl md:text-7xl leading-[1.02] text-forest max-w-4xl" />
        </div>
      </section>

      <section className="pb-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article key={p.slug}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-stone mb-3">{p.date} · {p.readTime}</div>
                <h3 className="font-display text-2xl text-forest mb-2 group-hover:text-sage transition-colors">{p.title}</h3>
                <p className="text-sm text-stone">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-forest">Read Article <ArrowUpRight className="w-3.5 h-3.5" /></span>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
