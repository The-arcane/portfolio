import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProject } from "@/data/projects";

const Action = ({ enabled, href, icon, children, primary = false }) => !enabled ? null : <a href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-5 py-3 font-mono text-xs font-bold tracking-widest transition-colors ${primary ? "bg-acid text-void hover:bg-bone" : "border border-white/25 text-bone hover:border-acid hover:text-acid"}`}>{icon}{children}</a>;

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <Navigate to="/" replace />;
  return <main className="min-h-screen bg-void text-bone px-5 sm:px-6 md:px-10 py-7 md:py-10">
    <Link to="/#work" className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-dim hover:text-acid"><ArrowLeft size={15} /> BACK TO WORK</Link>
    <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 mt-12 md:mt-16 items-start">
      <div className="overflow-hidden border border-white/10 bg-ink"><img src={project.image} alt={project.title} className="w-full aspect-[16/10] object-cover object-top" /></div>
      <div>
        <span className="font-mono text-xs tracking-[0.25em] text-acid">{project.id} · CASE STUDY</span>
        <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl leading-[0.98] tracking-tight mt-5">{project.title}</h1>
        <div className="font-mono text-sm text-dim leading-relaxed mt-6 max-w-xl space-y-4">{project.description.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="flex flex-wrap gap-2 mt-7">{project.tags.map((tag) => <span key={tag} className="font-mono text-[10px] tracking-widest border border-white/15 px-2.5 py-1.5 text-bone/70">{tag}</span>)}</div>
        <div className="flex flex-wrap gap-3 mt-8"><Action enabled={project.links.github.enabled} href={project.links.github.url} icon={<Github size={15} />}>GITHUB</Action><Action enabled={project.links.demo.enabled} href={project.links.demo.url} icon={<ExternalLink size={15} />} primary>LIVE DEMO</Action></div>
      </div>
    </section>
    <section className="grid md:grid-cols-[0.3fr_0.7fr] gap-8 md:gap-12 border-t border-white/10 mt-16 md:mt-24 pt-8 md:pt-12 max-w-5xl">
      <span className="font-mono text-xs tracking-[0.25em] text-acid">WHAT SHIPPED</span>
      <ul className="space-y-4">{project.highlights.map((highlight, index) => <li key={highlight} className="flex gap-4 font-mono text-sm text-bone/75 leading-relaxed"><span className="text-acid">{String(index + 1).padStart(2, "0")}</span>{highlight}</li>)}</ul>
    </section>
  </main>;
};
export default ProjectDetail;
