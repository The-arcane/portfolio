import { motion } from "framer-motion";
import Scramble from "@/components/Scramble";

export const Reveal = ({ children, delay = 0, y = 44, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionHead = ({ index, title, hint }) => (
  <Reveal>
    <div className="flex items-end justify-between border-b border-white/10 pb-5 mb-12 md:mb-16">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-acid">{index}</span>
        <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight">
          <Scramble text={title} auto />
        </h2>
      </div>
      <span className="hidden md:block font-mono text-xs text-dim">{hint}</span>
    </div>
  </Reveal>
);
