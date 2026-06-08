import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/lib/blog-data";
import { SplitText } from "../shared/SplitText";

export function BlogPreview() {
  return (
    <section className="py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-sage mb-5">Fun Facts & Wellness</p>
            <SplitText as="h2" text="Insights to keep your spine healthy every day."
              className="font-display text-4xl md:text-5xl leading-[1.05] text-forest" />
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-forest border-b border-forest pb-1 hover:gap-3 transition-all">
            Read All Articles <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="block">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-forest/10 mb-5">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-stone mb-3">
                  <span>{p.date}</span><span>·</span><span>{p.readTime}</span>
                </div>
                <h3 className="font-display text-2xl text-forest mb-2 group-hover:text-sage transition-colors">{p.title}</h3>
                <p className="text-sm text-stone leading-relaxed">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-forest">
                  Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
