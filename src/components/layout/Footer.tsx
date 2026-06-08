import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Youtube, Linkedin, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "../shared/MagneticButton";

export function Footer() {
  return (
    <footer className="bg-forest text-cream relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-8">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-end pb-20 border-b border-cream/15">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
            Let's make it<br/>happen together.
          </h2>
          <Link to="/contact" className="justify-self-start lg:justify-self-end">
            <MagneticButton variant="primary">Let's Begin <ArrowUpRight className="w-4 h-4" /></MagneticButton>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">About Us</h3>
            <p className="text-sm text-cream/75 leading-relaxed">
              VertebraVita is a premium chiropractic clinic dedicated to evidence-based spinal care, recovery, and lifelong wellness.
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Contact</h3>
            <ul className="text-sm text-cream/75 space-y-2">
              <li>care@vertebravita.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              {[["/", "Home"], ["/about", "About"], ["/services", "Services"], ["/team", "Team"], ["/blog", "Blog"], ["/contact", "Contact"]].map(([to, l]) => (
                <li key={to}><Link to={to} className="text-cream/75 hover:text-gold transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Our Services</h3>
            <ul className="text-sm space-y-2">
              {[["spinal-adjustment", "Spinal Adjustment"], ["manual-therapy", "Manual Therapy"], ["sports-injury-rehab", "Sports Rehab"], ["neurological-physio", "Neurological Physio"]].map(([slug, l]) => (
                <li key={slug}><Link to="/services/$slug" params={{ slug }} className="text-cream/75 hover:text-gold transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-5 pb-10">
          {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 rounded-full border border-cream/25 grid place-items-center hover:bg-gold hover:border-gold hover:text-forest transition-colors">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <div className="pointer-events-none select-none">
          <div className="font-display text-[18vw] leading-[0.85] text-cream/[0.06] tracking-tighter -mb-[3vw] whitespace-nowrap">
            VERTEBRAVITA
          </div>
        </div>

        <div className="flex flex-wrap justify-end gap-4 pt-8 border-t border-cream/15 text-xs text-cream/55">
          <p>Powered by <a href="https://axistechgroup.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">AxisTechGroup</a></p>
        </div>
      </div>
    </footer>
  );
}
