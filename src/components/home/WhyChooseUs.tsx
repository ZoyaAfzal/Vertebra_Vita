import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Target, Dna, Users, Smartphone, RefreshCcw, Plus, Minus } from "lucide-react";
import { SplitText } from "../shared/SplitText";

const features = [
  { icon: Target, title: "Root-Cause Diagnosis", body: "We don't treat symptoms, we treat the source." },
  { icon: Dna, title: "Evidence-Based Protocols", body: "Every treatment is clinically validated." },
  { icon: Users, title: "1-on-1 Therapist Time", body: "No shared sessions. Your therapist is 100% focused on you." },
  { icon: Smartphone, title: "Digital Progress Tracking", body: "Monitor your recovery with our patient portal." },
  { icon: RefreshCcw, title: "Holistic Recovery Plans", body: "Nutrition, movement, and alignment in one plan." },
];

const slides = [
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80",
];

export function WhyChooseUs() {
  const [open, setOpen] = useState(0);
  const [slide, setSlide] = useState(0);

  return (
    <section className="py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-sage mb-5">Why Choose Us</p>
          <SplitText as="h2" text="Get back in motion safely with customized recovery plans built for you."
            className="font-display text-4xl md:text-5xl leading-[1.05] text-forest" />

          <div className="mt-10 divide-y divide-forest/15">
            {features.map((f, i) => (
              <button key={i} onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left py-5 group">
                <div className="flex items-center gap-4">
                  <f.icon className="w-5 h-5 text-sage shrink-0" />
                  <span className="flex-1 font-display text-2xl text-forest">{f.title}</span>
                  {open === i ? <Minus className="w-5 h-5 text-forest" /> : <Plus className="w-5 h-5 text-forest" />}
                </div>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }} className="overflow-hidden"
                    >
                      <p className="pt-3 pl-9 text-stone">{f.body}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-forest">
            <AnimatePresence mode="wait">
              <motion.img
                key={slide}
                src={slides[slide]} alt="Recovery in action"
                initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
          <div className="absolute bottom-6 right-6 flex gap-2">
            <button onClick={() => setSlide((s) => (s - 1 + slides.length) % slides.length)} className="w-12 h-12 rounded-full bg-cream text-forest grid place-items-center hover:bg-gold transition-colors" aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => setSlide((s) => (s + 1) % slides.length)} className="w-12 h-12 rounded-full bg-cream text-forest grid place-items-center hover:bg-gold transition-colors" aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
