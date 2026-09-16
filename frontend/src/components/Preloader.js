import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onDone }) => {
  const [n, setN] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setN((v) => {
        const nv = v + Math.floor(Math.random() * 9) + 4;
        return nv >= 100 ? 100 : nv;
      });
    }, 64);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (n === 100) {
      const t = setTimeout(onDone, 550);
      return () => clearTimeout(t);
    }
  }, [n, onDone]);

  return (
    <motion.div
      data-testid="preloader"
      exit={{ y: "-100%", transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] bg-void flex flex-col justify-between p-6 md:p-10"
    >
      <div className="flex justify-between font-mono text-[10px] md:text-xs text-dim">
        <span className="flicker text-bone">RAUNAQ ADLAKHA — PORTFOLIO v2.0</span>
        <span>© 2026</span>
      </div>

      <div className="flex flex-col items-center gap-4">
        <span className="font-mono text-xs text-acid">INITIALIZING EXPERIENCE…</span>
        <span className="font-display font-black text-[26vw] md:text-[16vw] leading-none text-bone tabular-nums">
          {n}<span className="text-acid">%</span>
        </span>
      </div>

      <div>
        <div className="h-px w-full bg-white/10 relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full bg-acid transition-all duration-150" style={{ width: `${n}%` }} />
        </div>
        <div className="flex justify-between font-mono text-[10px] md:text-xs text-dim mt-3">
          <span>LOADING ASSETS / TYPE / MOTION</span>
          <span>{String(n).padStart(3, "0")}/100</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
