import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(26,60,52,0)", "rgba(26,60,52,0.97)"]);
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(12px)"]);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      <motion.header
        style={{ backgroundColor: bg, backdropFilter: blur }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-forest">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gold">
              <path d="M12 2v20M8 5l4 2 4-2M7 9l5 2 5-2M7 13l5 2 5-2M8 17l4 2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="font-display text-2xl tracking-tight">VertebraVita</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group relative text-sm uppercase tracking-[0.18em] text-forest/85 hover:text-forest transition-colors"
              >
                {l.label}
                <span
                  className={`absolute left-0 -bottom-1 h-px bg-gold transition-all duration-500 ${pathname === l.to ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center rounded-full border border-gold/70 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-gold hover:bg-gold hover:text-forest transition-colors"
          >
            Book Appointment
          </Link>

          <button onClick={() => setOpen(true)} className="lg:hidden text-forest" aria-label="Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[60] bg-forest text-cream p-8 lg:hidden"
        >
          <div className="flex justify-end">
            <button onClick={() => setOpen(false)} aria-label="Close"><X className="w-6 h-6" /></button>
          </div>
          <nav className="mt-20 flex flex-col gap-6">
            {links.map((l, i) => (
              <motion.div key={l.to}
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.06 }}
              >
                <Link to={l.to} onClick={() => setOpen(false)} className="font-display text-4xl">
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
}
