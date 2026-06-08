import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { CountUpNumber } from "../shared/CountUpNumber";
import { MagneticButton } from "../shared/MagneticButton";
import { ArrowUpRight } from "lucide-react";

export function StatsSection() {
  return (
    <section className="py-28 bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {[
            { val: 126, suffix: "%", label: "Average pain reduction reported" },
            { val: 3200, suffix: "+", label: "Patients treated since 2009" },
            { val: 4.97, suffix: "/5", label: "Average patient satisfaction", decimals: 2 },
          ].map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="border-t border-cream/20 pt-6"
            >
              <div className="font-display text-7xl md:text-8xl text-gold leading-none">
                <CountUpNumber to={s.val} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </div>
              <p className="mt-4 text-cream/70 max-w-xs">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="max-w-2xl text-lg text-cream/85 leading-relaxed">
          We offer a safe, professional environment equipped with modern facilities and evidence-based techniques.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-12 p-8 md:p-12 rounded-3xl bg-charcoal/60 backdrop-blur border border-cream/10 flex flex-wrap items-center justify-between gap-8"
        >
          <p className="font-display text-2xl md:text-3xl max-w-xl">
            All treatment plans are customized to your body's needs. Let's talk.
          </p>
          <Link to="/contact">
            <MagneticButton variant="primary">Contact Us <ArrowUpRight className="w-4 h-4" /></MagneticButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
