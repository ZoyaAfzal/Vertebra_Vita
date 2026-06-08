import { useEffect } from "react";
import { motion } from "motion/react";
import { SplitText } from "../shared/SplitText";
import { Facebook, Twitter, Youtube, Linkedin, ArrowRight } from "lucide-react";

export function ContactCTA() {
  useEffect(() => {
    // Add the external script once
    const scriptId = "ghl-form-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://link.webtechs.dev/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="grain relative py-28 bg-cream overflow-hidden">
      {/* Interactive Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-sage/10 blur-3xl rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, -30, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-24 -left-24 w-80 h-80 bg-gold/10 blur-3xl rounded-full pointer-events-none" 
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-forest/15 bg-cream/60 backdrop-blur-sm text-xs uppercase tracking-[0.2em] text-forest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Direct Support
            </motion.div>

            <SplitText 
              as="h2" 
              text="Your journey to recovery begins here."
              className="font-display text-4xl md:text-6xl leading-[1.02] text-forest"
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-stone text-lg max-w-md leading-relaxed"
            >
              Complete the form to schedule your initial evaluation. Our specialists are ready to help you reclaim your mobility.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 space-y-6"
            >
              <div className="flex items-center gap-4 text-forest group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-forest/5 flex items-center justify-center group-hover:bg-forest group-hover:text-cream transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <span className="text-sm uppercase tracking-widest font-medium">View Pricing & Plans</span>
              </div>
              
              <div className="pt-8 border-t border-forest/10">
                <p className="text-xs uppercase tracking-[0.2em] text-sage mb-4">Connect With Us</p>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
                    <motion.a 
                      key={i} 
                      href="#" 
                      whileHover={{ y: -3 }}
                      className="w-11 h-11 rounded-full border border-forest/15 grid place-items-center hover:bg-forest hover:border-forest hover:text-cream transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full min-h-[800px]"
          >
            <iframe
              src="https://link.webtechs.dev/widget/form/Zh1NjoFeiiEIiAcn8jGg"
              style={{ width: "100%", height: "800px", border: "none" }}
              id="inline-Zh1NjoFeiiEIiAcn8jGg" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Vertebra_Vita form"
              data-height="800"
              data-layout-iframe-id="inline-Zh1NjoFeiiEIiAcn8jGg"
              data-form-id="Zh1NjoFeiiEIiAcn8jGg"
              title="Vertebra_Vita form"
              data-modal-height="500"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
