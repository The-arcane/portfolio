import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Reveal";
import { PROJECTS } from "@/data/projects";
import { PROFILE } from "@/data/content";

const ProjectLinks = ({ project, compact = false }) => (
  <div className={`flex flex-wrap gap-2 ${compact ? "" : "mt-6"}`}>
    {project.links.github.enabled && <a href={project.links.github.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 px-3 py-2 font-mono text-[10px] tracking-widest hover:border-acid hover:text-acid"><Github size={13} /> GITHUB</a>}
    {project.links.demo.enabled && <a href={project.links.demo.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-acid text-void px-3 py-2 font-mono text-[10px] font-bold tracking-widest hover:bg-bone"><ExternalLink size={13} /> LIVE DEMO</a>}
  </div>
);

const Card = ({ project, index, rail = false }) => {
  const ref = useRef(null);
  const onMove = (event) => {
    const box = ref.current?.getBoundingClientRect();
    if (!box) return;
    ref.current.style.setProperty("--mx", `${event.clientX - box.left}px`);
    ref.current.style.setProperty("--my", `${event.clientY - box.top}px`);
  };
  return (
    <article ref={ref} onMouseMove={onMove} data-testid={`project-card-${index}`} data-hover className={`group relative shrink-0 overflow-hidden border border-white/10 bg-ink ${rail ? "w-[82vw] sm:w-[58vw] lg:w-[43vw]" : "w-full"}`}>
      <div className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgba(200,255,46,0.10), transparent 65%)" }} />
      <Link to={`/projects/${project.slug}`} className="block relative overflow-hidden border-b border-white/10 aspect-[16/9]">
        <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover object-top grayscale-[0.55] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-[time:900ms] ease-out" />
        <span className="absolute top-3 left-3 z-10 font-mono text-[10px] bg-void/80 px-2 py-1 text-acid border border-white/10">{project.id}</span>
        <span className="absolute right-3 bottom-3 z-10 inline-flex items-center gap-1 bg-void/85 border border-white/15 px-2.5 py-1 font-mono text-[10px] text-bone">CASE STUDY <ArrowUpRight size={11} /></span>
      </Link>
      <div className="relative z-10 p-5 md:p-6">
        <Link to={`/projects/${project.slug}`} className="font-display font-bold text-base md:text-lg text-bone group-hover:text-acid transition-colors leading-snug">{project.title}</Link>
        <p className="font-mono text-[11px] md:text-xs text-dim leading-relaxed mt-3 line-clamp-3">{project.summary}</p>
        <div className="flex flex-wrap gap-2 mt-4">{project.tags.map((tag) => <span key={tag} className="font-mono text-[9px] md:text-[10px] tracking-widest border border-white/15 text-bone/60 px-2 py-1">{tag}</span>)}</div>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
};

const Rail = () => {
  const targetRef = useRef(null); const trackRef = useRef(null); const [range, setRange] = useState(1200);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], [10, -range]);
  useEffect(() => { const measure = () => setRange(Math.max(0, (trackRef.current?.scrollWidth || 0) - window.innerWidth + 40)); measure(); window.addEventListener("resize", measure); return () => window.removeEventListener("resize", measure); }, []);
  return <div ref={targetRef} className="relative hidden md:block" style={{ height: "430vh" }}>
    <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
      <div className="relative z-10 flex items-end justify-between px-10 mb-8"><div><span className="font-mono text-xs text-acid">03</span><h2 className="font-display font-extrabold text-4xl lg:text-5xl tracking-tight">SELECTED WORK</h2></div><span className="font-mono text-[10px] lg:text-xs text-dim tracking-[0.15em]">SCROLL TO DRIVE · 08 SHIPPED</span></div>
      <motion.div ref={trackRef} style={{ x }} className="relative z-10 flex gap-8 pl-10 pr-10 will-change-transform">{PROJECTS.map((project, index) => <Card key={project.id} project={project} index={index} rail />)}<a href={PROFILE.socials[1].href} target="_blank" rel="noopener noreferrer" className="group shrink-0 w-[30vw] border border-white/10 hover:border-acid/60 bg-ink flex flex-col items-center justify-center gap-4"><span className="font-display font-extrabold text-2xl text-stroke group-hover:text-acid text-center px-6">MORE ON GITHUB</span><ArrowRight className="text-acid" size={28} /></a></motion.div>
      <div className="absolute bottom-8 left-10 right-10 h-px bg-white/10"><motion.div style={{ scaleX: scrollYProgress }} className="h-full bg-acid origin-left" /></div>
    </div>
  </div>;
};

const Projects = () => <section id="work" data-testid="projects-section" className="py-24 md:py-0"><div className="md:hidden px-6"><SectionHead index="03" title="SELECTED WORK" hint="08 SHIPPED" /><div className="flex flex-col gap-6">{PROJECTS.map((project, index) => <Reveal key={project.id} delay={0.04}><Card project={project} index={index} /></Reveal>)}</div></div><Rail /></section>;
export default Projects;
