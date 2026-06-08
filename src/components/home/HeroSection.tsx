import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Star, Play, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SplitText } from "../shared/SplitText";
import { MagneticButton } from "../shared/MagneticButton";
import { useEffect, useState } from "react";

export function HeroSection() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });
  const [video, setVideo] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 60);
      my.set((e.clientY / window.innerHeight - 0.5) * 60);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  const t1x = useTransform(sx, (v) => v * 0.6);
  const t1y = useTransform(sy, (v) => v * 0.6);
  const t2x = useTransform(sx, (v) => v * 0.3);
  const t2y = useTransform(sy, (v) => v * 0.3);
  const t3x = useTransform(sx, (v) => v * -0.45);
  const t3y = useTransform(sy, (v) => v * -0.45);

  return (
    <section className="grain relative min-h-[100svh] bg-cream pt-32 pb-20 overflow-hidden">
      <div className="absolute -left-32 top-0 w-[60vw] h-[80vh] bg-gradient-to-br from-sage/25 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-6 items-center relative">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-forest/15 bg-cream/60 backdrop-blur-sm text-xs uppercase tracking-[0.2em] text-forest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Premium Chiropractic Care
          </motion.div>

          <SplitText
            as="h1"
            text="Restore your spine. Reclaim your life."
            className="font-display text-[clamp(2.8rem,6.5vw,5.8rem)] leading-[0.95] text-forest tracking-tight"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-stone max-w-md leading-relaxed"
          >
            Evidence-based chiropractic care tailored to every patient's unique recovery journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/5 text-forest text-xs font-medium">
              <Star className="w-3.5 h-3.5 fill-gold text-gold" /> 4.9 on Google · 6,200+ reviews
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/5 text-forest text-xs font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-sage" /> 15+ Years of Clinical Excellence
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link to="/contact"><MagneticButton variant="primary">Book Free Consultation</MagneticButton></Link>
            <button onClick={() => setVideo(true)} className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-forest group">
              <span className="w-12 h-12 rounded-full border border-forest/40 grid place-items-center group-hover:bg-forest group-hover:text-cream transition-colors">
                <Play className="w-4 h-4 ml-0.5" />
              </span>
              Watch Our Story
            </button>
          </motion.div>
        </div>

        <div className="relative h-[520px] lg:h-[620px]">
          <motion.div
            style={{ x: t1x, y: t1y }}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.9 }}
            className="absolute top-0 right-0 w-[72%] h-[58%] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80" alt="Chiropractor performing spinal adjustment" loading="eager" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            style={{ x: t2x, y: t2y }}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.9 }}
            className="absolute bottom-0 left-0 w-[48%] h-[42%] rounded-2xl overflow-hidden shadow-xl"
          >
            <img src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&q=80" alt="Close-up hands on back" loading="eager" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            style={{ x: t3x, y: t3y }}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.9 }}
            className="absolute bottom-12 right-6 w-[44%] h-[38%] rounded-2xl overflow-hidden shadow-xl"
          >
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80" alt="Modern clinic interior" loading="eager" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -left-4 bg-forest text-cream rounded-2xl p-5 shadow-2xl max-w-[200px]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">Live Recovery</p>
            <p className="font-display text-2xl leading-tight">98% report pain reduction</p>
          </motion.div>
        </div>
      </div>

      {video && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          onClick={() => setVideo(false)}
          className="fixed inset-0 z-[100] bg-charcoal/90 backdrop-blur grid place-items-center p-6"
        >
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}
            className="aspect-video w-full max-w-4xl bg-charcoal rounded-2xl grid place-items-center text-cream/60"
          >
            Story video placeholder
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
