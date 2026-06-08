import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { SplitText } from "../shared/SplitText";

const items = [
  {
    name: "Lorenzo S. Whitman",
    img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&q=80",
    quote: "From start to finish the experience was seamless. They listened carefully and delivered exceptional results. I highly recommend VertebraVita.",
    stat: "98% Pain Reduction",
  },
  {
    name: "Suza M. DiCosta",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    quote: "Every step was smooth and exceeded my expectations. My chronic back pain is gone after 6 sessions.",
    stat: "Full Mobility Restored",
  },
  {
    name: "Lawrence K. Restic",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    quote: "Professional from beginning to end. Attention to every detail. I'm now completely pain-free.",
    stat: "12 Sessions to Recovery",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-sage mb-5">User Ratings</p>
          <SplitText as="h2" text="Discover what our patients have to say about their recovery."
            className="font-display text-4xl md:text-5xl leading-[1.05] text-forest" />
        </div>

        <div className="space-y-5">
          {items.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="grid md:grid-cols-[200px_1fr_auto] gap-6 md:gap-10 items-center p-6 md:p-8 rounded-3xl bg-card border border-forest/10 hover:border-gold/40 transition-colors"
            >
              <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-3">
                <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <p className="font-display text-lg text-forest">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-stone">Verified Patient</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Quote className="w-6 h-6 text-gold shrink-0" />
                <p className="text-lg text-charcoal leading-relaxed">{t.quote}</p>
              </div>
              <div className="md:text-right border-t md:border-t-0 md:border-l border-forest/10 pt-4 md:pt-0 md:pl-8">
                <p className="font-display text-2xl text-forest leading-tight">{t.stat}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
