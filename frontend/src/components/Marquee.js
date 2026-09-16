import { useRef } from "react";
import { motion, useScroll, useVelocity, useSpring, useTransform, useMotionValue, useAnimationFrame } from "framer-motion";

const ITEMS = [
  "FULL-STACK", "FOUNDER", "AI SYSTEMS", "AUTOMATION",
  "NEXT.JS", "LLM PIPELINES", "N8N", "SYSTEM DESIGN",
];

const wrap = (min, max, v) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

const Row = () => (
  <>
    {ITEMS.map((t, i) => (
      <span key={i} className="flex items-center shrink-0">
        <span data-hover className="font-display font-extrabold text-2xl md:text-4xl text-stroke-faint px-6 md:px-10 hover:text-acid transition-colors duration-300">
          {t}
        </span>
        <span className="text-acid text-lg md:text-2xl">✦</span>
      </span>
    ))}
  </>
);

const Marquee = () => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4.5], { clamp: false });
  const skewX = useTransform(smoothVelocity, [-1200, 1200], [-5, 5]);
  const direction = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = direction.current * 2.2 * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) direction.current = -1;
    else if (vf > 0) direction.current = 1;
    moveBy += direction.current * moveBy * Math.abs(vf);
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  return (
    <div data-testid="marquee" className="border-y border-white/10 py-5 md:py-7 overflow-hidden bg-void relative z-10">
      <motion.div style={{ x }} className="marquee-track">
        <motion.div style={{ skewX }} className="flex shrink-0 will-change-transform">
          <Row /><Row />
        </motion.div>
        <motion.div style={{ skewX }} className="flex shrink-0 will-change-transform">
          <Row /><Row />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Marquee;
