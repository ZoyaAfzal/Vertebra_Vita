import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  type?: "button" | "submit";
}

export function MagneticButton({ children, onClick, variant = "primary", className = "", type = "button" }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15 });
  const sy = useSpring(y, { stiffness: 150, damping: 15 });

  const onMove = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  const styles: Record<string, string> = {
    primary: "bg-gold text-forest hover:brightness-110",
    ghost: "bg-transparent text-cream border border-cream/40 hover:bg-cream/10",
    outline: "bg-transparent text-forest border border-forest hover:bg-forest hover:text-cream",
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-medium uppercase tracking-[0.18em] transition-[filter,background-color,color] duration-300 cursor-pointer ${styles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
