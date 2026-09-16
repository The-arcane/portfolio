import { BadgeCheck, Trophy } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Reveal";
import { ACHIEVEMENTS, CERTS } from "@/data/content";

const Credentials = () => (
  <section id="proof" data-testid="credentials-section" className="px-6 md:px-10 py-24 md:py-36">
    <SectionHead index="05" title="PROOF OF WORK" hint="RECEIPTS, NOT CLAIMS" />

    <div className="grid md:grid-cols-2 gap-12 md:gap-16">
      <div>
        <Reveal>
          <span className="font-mono text-[10px] tracking-[0.25em] text-acid flex items-center gap-2 mb-6">
            <Trophy size={12} /> ACHIEVEMENTS
          </span>
        </Reveal>
        {ACHIEVEMENTS.map((a, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div data-testid={`achievement-${i}`} data-hover className="group flex gap-4 border-t border-white/10 last:border-b py-5 hover:pl-3 transition-all duration-400">
              <span className="font-mono text-xs text-acid pt-0.5">{String(i + 1).padStart(2, "0")}</span>
              <p className="font-mono text-[11px] md:text-xs text-bone/70 leading-relaxed group-hover:text-bone transition-colors">{a}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div>
        <Reveal>
          <span className="font-mono text-[10px] tracking-[0.25em] text-acid flex items-center gap-2 mb-6">
            <BadgeCheck size={12} /> CERTIFICATIONS — GOOGLE CLOUD
          </span>
        </Reveal>
        <div className="border border-white/10 bg-ink p-6 md:p-8">
          {CERTS.map((c, i) => (
            <Reveal key={c} delay={i * 0.05}>
              <div data-testid={`cert-${i}`} data-hover className="group flex items-start justify-between gap-4 border-t border-white/10 first:border-0 py-4">
                <p className="font-mono text-[11px] md:text-xs text-bone/70 leading-relaxed group-hover:text-acid transition-colors">{c}</p>
                <span className="font-mono text-[9px] text-dim shrink-0 border border-white/15 px-2 py-0.5">GCP</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="font-mono text-[10px] text-dim mt-5 leading-relaxed">
            // plus hands-on production experience with Vertex AI, Gemini API & LLM-powered systems
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Credentials;
