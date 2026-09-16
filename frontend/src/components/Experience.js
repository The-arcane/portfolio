import { Reveal } from "@/components/Reveal";
import { EXPERIENCE, EDUCATION } from "@/data/content";

const Experience = () => (
  <section id="experience" data-testid="experience-section" className="px-6 md:px-10 py-24 md:py-36">
    <div className="grid md:grid-cols-12 gap-10">
      <div className="md:col-span-4">
        <div className="md:sticky md:top-28">
          <Reveal>
            <span className="font-mono text-xs text-acid">02</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mt-3 leading-[1.02]">
              CAREER<br />LOG<span className="text-acid">.</span>
            </h2>
            <p className="font-mono text-xs text-dim mt-5 max-w-xs leading-relaxed">
              Founder, project lead, mentor, community builder — every entry shipped something real.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <div className="border border-white/10 p-5 bg-ink">
              <span className="font-mono text-[10px] tracking-[0.25em] text-acid">EDUCATION</span>
              {EDUCATION.map((e) => (
                <div key={e.title} className="mt-4 border-t border-white/10 pt-4 first:border-0 first:pt-0 first:mt-3">
                  <p className="font-display text-sm md:text-base text-bone">{e.title}</p>
                  <p className="font-mono text-[11px] text-dim mt-1">{e.org}</p>
                  <p className="font-mono text-[10px] text-acid mt-1">{e.period}</p>
                  {e.note && <p className="font-mono text-[11px] text-dim mt-2">{e.note}</p>}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="md:col-span-8">
        {EXPERIENCE.map((x, i) => (
          <Reveal key={x.role + x.org} delay={i * 0.05}>
            <article
              data-testid={`experience-item-${i}`}
              data-hover
              className="group border-t border-white/10 last:border-b py-7 md:py-9 px-2 md:px-4 grid grid-cols-[44px_1fr] md:grid-cols-[60px_1fr_auto] gap-4 hover:bg-white/[0.03] hover:pl-4 md:hover:pl-6 transition-all duration-500"
            >
              <span className="font-mono text-xs text-acid pt-1">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display font-bold text-lg md:text-2xl text-bone group-hover:text-acid transition-colors">
                  {x.role}
                </h3>
                <p className="font-mono text-[11px] md:text-xs text-dim mt-1">{x.org}</p>
                <ul className="mt-4 space-y-2">
                  {x.points.map((p, j) => (
                    <li key={j} className="font-mono text-[11px] md:text-xs text-bone/60 leading-relaxed flex gap-2">
                      <span className="text-acid shrink-0">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="col-start-2 md:col-start-auto font-mono text-[10px] md:text-xs text-dim whitespace-nowrap md:text-right">
                {x.period}
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
