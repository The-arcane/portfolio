import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/data/content";
import { scrollTo } from "@/components/Navbar";
import Magnetic from "@/components/Magnetic";
import ParticleField from "@/components/ParticleField";

const letterVar = {
  hidden: { y: "115%", rotate: 5 },
  show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 + i * 0.1 },
  }),
};

const BOOT = "> boot raunaq.exe --stack=full --mode=founder --ai=enabled";

const Typing = () => {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let id;
    const start = setTimeout(() => {
      id = setInterval(() => {
        i += 1;
        setOut(BOOT.slice(0, i));
        if (i >= BOOT.length) clearInterval(id);
      }, 26);
    }, 1400);
    return () => { clearTimeout(start); if (id) clearInterval(id); };
  }, []);
  return (
    <span className="font-mono text-[11px] md:text-xs text-acid">
      {out}
      <span className="blink">▌</span>
    </span>
  );
};

const OrbitBadge = () => (
  <div data-hover className="relative w-28 h-28 md:w-36 md:h-36">
    <svg viewBox="0 0 100 100" className="w-full h-full spin-slow">
      <defs>
        <path id="circ" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
      </defs>
      <text className="fill-acid" style={{ fontSize: "7.6px", fontFamily: "JetBrains Mono", letterSpacing: "0.16em" }}>
        <textPath href="#circ">OPEN TO WORK • FOUNDER • AI BUILDER • SHIPS FAST •</textPath>
      </text>
    </svg>
    <ArrowDown className="absolute inset-0 m-auto w-5 h-5 text-bone" />
  </div>
);

const KineticLine = ({ text, anim, delay = 0, className = "", glitch = false }) => (
  <span
    className={`block overflow-hidden pb-1 relative text-[12.5vw] sm:text-[13.5vw] md:text-[11.5vw] ${glitch ? "glitch" : ""} ${className}`}
    data-text={glitch ? text : undefined}
    data-hover
  >
    <motion.span
      className="flex will-change-transform"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: delay } } }}
      initial="hidden"
      animate={anim}
    >
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          variants={letterVar}
          whileHover={{ y: "-12%", transition: { duration: 0.25, ease: "easeOut" } }}
          className="inline-block will-change-transform"
        >
          {c}
        </motion.span>
      ))}
    </motion.span>
  </span>
);

const Hero = ({ ready }) => {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const floorX = useTransform(sx, [0, 1], [30, -30]);
  const orbX = useTransform(sx, [0, 1], [-60, 60]);
  const orbY = useTransform(sy, [0, 1], [-30, 30]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  const anim = ready ? "show" : "hidden";

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      data-testid="hero-section"
      className="relative min-h-[100svh] md:min-h-screen overflow-hidden flex flex-col justify-between px-5 sm:px-6 md:px-10 pt-24 md:pt-28 pb-8"
    >
      <motion.div className="grid-floor" style={{ x: floorX }} />
      <motion.div className="glow-orb" style={{ x: orbX, y: orbY }} />
      <ParticleField />
      <div className="scanlines" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 flex flex-col flex-1">
        <div className="flex justify-between font-mono text-[10px] md:text-xs text-dim">
          <motion.span variants={fade} custom={0} initial="hidden" animate={anim}>PORTFOLIO — V2.0</motion.span>
          <motion.span variants={fade} custom={1} initial="hidden" animate={anim} className="hidden sm:block">{PROFILE.location}</motion.span>
          <motion.span variants={fade} custom={2} initial="hidden" animate={anim} className="text-acid">STATUS: ONLINE ●</motion.span>
        </div>

        <div className="flex-1 flex flex-col justify-center py-10">
          <motion.p variants={fade} custom={1} initial="hidden" animate={anim} className="font-mono text-xs md:text-sm text-dim mb-4 md:mb-6">
            {PROFILE.role}
          </motion.p>

          <h1 className="font-display font-black tracking-tight leading-[0.88]">
            <KineticLine text={PROFILE.first} anim={anim} delay={0.1} className="text-bone" glitch />
            <KineticLine text={PROFILE.last} anim={anim} delay={0.4} className="text-stroke-acid fill-hover" />
          </h1>

          <div className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div variants={fade} custom={3} initial="hidden" animate={anim} className="max-w-md">
              <p className="font-mono text-xs md:text-sm text-bone/70 leading-relaxed">
                Founder of SparkEdge Innovations. I turn ambitious ideas into scalable products — AI systems, automation pipelines and full-stack platforms that ship.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Magnetic>
                  <a
                    data-testid="hero-cta-work"
                    href="#work"
                    onClick={(e) => scrollTo(e, "#work")}
                    className="group inline-flex items-center gap-2 bg-acid text-void font-mono text-xs font-bold tracking-widest px-6 py-3 hover:bg-bone transition-colors"
                  >
                    SEE THE WORK
                    <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    data-testid="hero-cta-resume"
                    href={PROFILE.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/25 text-bone font-mono text-xs tracking-widest px-6 py-3 hover:border-acid hover:text-acid transition-colors"
                  >
                    RESUME.PDF
                  </a>
                </Magnetic>
              </div>
            </motion.div>

            <motion.div variants={fade} custom={4} initial="hidden" animate={anim} className="hidden md:block">
              <Magnetic strength={0.5}>
                <OrbitBadge />
              </Magnetic>
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-6">
          <Typing />
          <motion.span variants={fade} custom={5} initial="hidden" animate={anim} className="hidden lg:block font-mono text-[10px] text-dim tracking-[0.18em]">
            REACT · NEXT.JS · NODE · TYPESCRIPT · POSTGRESQL · GEMINI · N8N
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
