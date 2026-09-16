import { Reveal, SectionHead } from "@/components/Reveal";
import { SKILLS } from "@/data/content";

const Skills = () => (
  <section id="skills" data-testid="skills-section" className="py-24 md:py-36">
    <div className="px-6 md:px-10">
      <SectionHead index="04" title="THE TOOLBELT" hint="HOVER A ROW — IT BITES BACK" />
    </div>

    <div>
      {SKILLS.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.04}>
          <div
            data-testid={`skill-row-${i}`}
            data-hover
            className="group border-t border-white/10 last:border-b px-6 md:px-10 py-6 md:py-8 grid md:grid-cols-[220px_1fr] gap-2 md:gap-8 items-baseline hover:bg-acid transition-colors duration-300"
          >
            <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-acid group-hover:text-void transition-colors">
              {s.label}
            </span>
            <p className="font-display font-bold text-lg md:text-3xl text-bone/85 group-hover:text-void transition-colors leading-snug">
              {s.items.map((it, j) => (
                <span key={it}>
                  {it}
                  {j < s.items.length - 1 && <span className="text-dim group-hover:text-void/50 font-mono text-sm md:text-xl mx-2 md:mx-3">/</span>}
                </span>
              ))}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Skills;
