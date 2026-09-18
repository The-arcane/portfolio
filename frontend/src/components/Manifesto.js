import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import { Reveal, SectionHead } from "@/components/Reveal";
import { CHAPTERS, STATS, PROFILE } from "@/data/content";

const Counter = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const num = parseInt(value, 10);
  const suffix = value.replace(/[0-9]/g, "");
  const [display, setDisplay] = useState("00");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, num, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(String(Math.round(v)).padStart(2, "0")),
    });
    return () => controls.stop();
  }, [inView, num]);

  return <span ref={ref} className="tabular-nums">{display}{suffix}</span>;
};

const Manifesto = () => (
  <section id="about" data-testid="manifesto-section" className="relative px-6 md:px-10 py-24 md:py-36">
    <SectionHead index="01" title="THE MANIFESTO" hint="04 CHAPTERS — NO FLUFF" />

    <div className="space-y-12 md:space-y-16">
      {CHAPTERS.map((c, i) => (
        <div key={c.num} className="grid md:grid-cols-12 gap-6 md:gap-6 items-start">
          <Reveal className={`md:col-span-3 ${i % 2 ? "md:order-3 md:text-right" : ""}`}>
            <span className="font-display font-black text-6xl md:text-8xl text-stroke-faint leading-none" data-hover>
              {c.num}
            </span>
          </Reveal>

          <Reveal delay={0.1} className={`md:col-span-6 ${i % 2 ? "md:order-1 md:col-start-4" : ""}`}>
            <h3 className="font-display font-extrabold text-xl md:text-3xl tracking-tight text-bone mb-4">
              {c.title}
            </h3>
            <p className="font-mono text-xs md:text-sm text-dim leading-relaxed max-w-xl">{c.body}</p>
            {i === 0 && (
              <motion.figure
                data-hover
                whileHover={{ rotate: -1.5 }}
                className="mt-8 w-56 md:w-64 border border-white/15 p-2 bg-ink"
              >
                <img
                  src={PROFILE.avatar}
                  alt="Raunaq Adlakha"
                  className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <figcaption className="font-mono text-[10px] text-dim pt-2 flex justify-between">
                  <span>SUBJECT: RAUNAQ.ADLAKHA</span>
                  <span className="text-acid">VERIFIED ✓</span>
                </figcaption>
              </motion.figure>
            )}
          </Reveal>

          <Reveal delay={0.18} className={`hidden md:flex md:col-span-3 items-start ${i % 2 ? "md:order-2" : "justify-end"}`}>
            <span className="font-mono text-[10px] tracking-[0.25em] text-dim [writing-mode:vertical-rl]">
              CHAPTER {c.num} — RAUNAQ ADLAKHA
            </span>
          </Reveal>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10 mt-24 md:mt-32">
      {STATS.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08} className="bg-void">
          <div className="p-6 sm:p-7 md:p-10 group hover:bg-ink transition-colors" data-hover>
            <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-bone group-hover:text-acid transition-colors">
              <Counter value={s.n} />
            </span>
            <p className="font-mono text-[10px] md:text-xs text-dim mt-3 tracking-[0.2em]">{s.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Manifesto;
