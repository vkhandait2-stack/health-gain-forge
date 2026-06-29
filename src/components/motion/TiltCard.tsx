import { useRef, type ReactNode, type ElementType } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { itemVariants } from "@/components/site/Reveal";

/**
 * Premium card interaction: subtle 3D tilt toward the cursor plus a
 * specular glass reflection that follows the pointer. Honors reduced motion
 * and keeps the existing reveal variants. Layout/markup unchanged.
 */
export function TiltCard({
  children,
  className,
  as = "article",
  variants = true,
  max = 6,
}: {
  children: ReactNode;
  className?: string;
  as?: "article" | "div" | "li";
  variants?: boolean;
  max?: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * max * 2);
    rx.set((0.5 - py) * max * 2);
    gx.set(px * 100);
    gy.set(py * 100);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  const MotionTag = motion[as] as ElementType;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      variants={variants ? itemVariants : undefined}
      style={{
        rotateX: srx,
        rotateY: sry,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useReflection(gx, gy),
        }}
      />
      {children}
    </MotionTag>
  );
}

import { useTransform, type MotionValue } from "motion/react";
function useReflection(gx: MotionValue<number>, gy: MotionValue<number>) {
  return useTransform([gx, gy], ([x, y]) =>
    `radial-gradient(420px circle at ${x}% ${y}%, oklch(0.7 0.16 250 / 0.12), transparent 55%)`,
  );
}