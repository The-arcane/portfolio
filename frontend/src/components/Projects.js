import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Reveal";
import { PROJECTS } from "@/data/content";
import { PROFILE } from "@/data/content";

const Card = ({ p, i, rail = false }) => {
  const ref = useRef(null);

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      data-testid={`project-card-${i}`}
      data-hover
      className={`group relative border border-white/10 bg-ink overflow-hidden shrink-0 ${rail ? "w-[80vw] sm:w-[56vw] lg:w-[44vw]" : "w-full"}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgba(200,255,46,0.10), transparent 65%)" }}
      />

      <div className="relative overflow-hidden border-b border-white/10 aspect-[16/9]">
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          className="w-full h-full object-cover object-top grayscale-[0.6] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-[900ms] ease-out"
        />
        <span className="absolute top-3 left-3 z-10 font-mono text-[10px] bg-void/80 backdrop-blur px-2 py-1 text-acid border border-white/10">
          {p.id}
        </span>
        {p.link && (
          <a
            data-testid={`project-live-${i}`}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 font-mono text-[10px] bg-acid text-void font-bold px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            LIVE <ArrowUpRight size={11} />
          </a>
        )}
      </div>

      <div className="p-5 md:p-6">
        <h3 className="font-display font-bold text-base md:text-lg text-bone group-hover:text-acid transition-colors leading-snug">
          {p.title}
        </h3>
        <p className="font-mono text-[11px] md:text-xs text-dim leading-relaxed mt-3 line-clamp-3">
          {p.blurb}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {p.tags.map((t) => (
            <span key={t} className="font-mono text-[9px] md:text-[10px] tracking-widest border border-white/15 text-bone/60 px-2 py-1 group-hover:border-acid/40 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const Rail = () => {
  const targetRef = useRef(null);
  const trackRef = useRef(null);
  const [range, setRange] = useState(1200);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], [10, -range]);
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setRange(Math.max(0, trackRef.current.scrollWidth - window.innerWidth + 40));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div ref={targetRef} className="relative hidden md:block" style={{ height: "340vh" }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <motion.span
          style={{ x: bgX }}
          aria-hidden="true"
          className="absolute top-6 left-0 font-display font-black text-[18vw] leading-none text-stroke-faint whitespace-nowrap pointer-events-none select-none opacity-60"
        >
          WORK ✦ WORK ✦ WORK
        </motion.span>

        <div className="relative z-10 flex items-end justify-between px-10 mb-8">
          <div>
            <span className="font-mono text-xs text-acid">03</span>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl tracking-tight">SELECTED WORK</h2>
          </div>
          <span className="font-mono text-[10px] lg:text-xs text-dim tracking-[0.15em]">SCROLL TO DRIVE → 2024 — 2026 · 06 SHIPPED</span>
        </div>

        <motion.div ref={trackRef} style={{ x }} className="relative z-10 flex gap-8 pl-10 pr-10 will-change-transform">
          {PROJECTS.map((p, i) => (
            <Card key={p.id} p={p} i={i} rail />
          ))}
          <a
            data-testid="projects-github-cta"
            href={PROFILE.socials[1].href}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="group shrink-0 w-[30vw] border border-white/10 hover:border-acid/60 bg-ink flex flex-col items-center justify-center gap-4 transition-colors duration-500"
          >
            <span className="font-display font-extrabold text-2xl lg:text-3xl text-stroke group-hover:text-acid group-hover:[-webkit-text-stroke:0px] transition-all text-center px-6">
              MORE ON GITHUB
            </span>
            <ArrowRight className="text-acid group-hover:translate-x-2 transition-transform duration-300" size={28} />
          </a>
        </motion.div>

        <div className="absolute bottom-8 left-10 right-10 h-px bg-white/10">
          <motion.div style={{ scaleX: scrollYProgress }} className="h-full bg-acid origin-left" />
        </div>
      </div>
    </div>
  );
};

const Projects = () => (
  <section id="work" data-testid="projects-section" className="py-24 md:py-0 md:pb-0">
    <div className="md:hidden px-6">
      <SectionHead index="03" title="SELECTED WORK" hint="06 SHIPPED" />
      <div className="flex flex-col gap-6">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={0.05}>
            <Card p={p} i={i} />
          </Reveal>
        ))}
      </div>
    </div>
    <Rail />
  </section>
);

export default Projects;
