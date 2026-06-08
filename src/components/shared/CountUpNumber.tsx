import { animate, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

interface Props {
  to: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function CountUpNumber({ to, suffix = "", decimals = 0, duration = 2, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const value = useMotionValue(0);
  const display = useTransform(value, (v) => v.toFixed(decimals) + suffix);

  useEffect(() => {
    if (inView) animate(value, to, { duration, ease: [0.22, 1, 0.36, 1] });
  }, [inView, to, duration, value]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
