import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const TEXT =
  "I DON'T BUILD DEMOS FOR APPLAUSE. I ENGINEER SYSTEMS THAT RUN BUSINESSES, AUTOMATE THE BORING PARTS, AND SHIP WHILE OTHERS ARE STILL PLANNING.";

const ACID_WORDS = new Set(["SYSTEMS", "BUSINESSES,", "AUTOMATE", "SHIP"]);

const Word = ({ children, progress, range, acid }) => {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const color = useTransform(progress, range, ["#33332e", acid ? "#c8ff2e" : "#e8e6df"]);
  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.26em] will-change-[opacity]">
      {children}
    </motion.span>
  );
};

const BigStatement = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.95", "end 0.1"] });
  const words = TEXT.split(" ");

  return (
    <section ref={ref} data-testid="big-statement" className="px-6 md:px-10 py-28 md:py-44 border-y border-white/10 bg-ink/40">
      <Reveal>
        <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-acid">{"// THE CREED"}</span>
      </Reveal>
      <p className="font-display font-extrabold text-2xl md:text-5xl lg:text-[3.4rem] leading-[1.15] tracking-tight max-w-6xl mt-8">
        {words.map((w, i) => (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[i / words.length * 0.68, Math.min(0.82, (i + 2) / words.length * 0.68)]}
            acid={ACID_WORDS.has(w)}
          >
            {w}
          </Word>
        ))}
      </p>
    </section>
  );
};

export default BigStatement;
