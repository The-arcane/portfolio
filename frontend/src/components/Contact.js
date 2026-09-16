import { ArrowUpRight, Download, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PROFILE } from "@/data/content";

const Contact = () => (
  <section id="contact" data-testid="contact-section" className="relative min-h-[92svh] md:min-h-[92vh] flex flex-col justify-between px-5 sm:px-6 md:px-10 pt-24 md:pt-32 pb-6 overflow-hidden">
    <div className="glow-orb" style={{ top: "auto", bottom: "-20%", right: "20%" }} />

    <div className="relative z-10">
      <Reveal>
        <span className="font-mono text-xs text-acid tracking-[0.25em]">06 — TRANSMISSION OPEN</span>
      </Reveal>

      <h2 className="font-display font-black tracking-tight leading-[0.92] mt-6">
        <Reveal delay={0.05}>
          <span className="block text-[10.5vw] sm:text-[11.5vw] md:text-[8.5vw] text-bone">LET'S BUILD</span>
        </Reveal>
        <Reveal delay={0.12}>
          <span className="block text-[10.5vw] sm:text-[11.5vw] md:text-[8.5vw] text-stroke hover:text-acid transition-colors duration-500" data-hover>
            SOMETHING INSANE
          </span>
        </Reveal>
      </h2>

      <Reveal delay={0.2}>
        <a
          data-testid="contact-email-link"
          href={`mailto:${PROFILE.email}`}
          className="link-underline inline-block font-mono text-sm md:text-2xl text-bone mt-8 md:mt-10 break-all"
        >
          {PROFILE.email}
        </a>
      </Reveal>

      <Reveal delay={0.28}>
        <div className="flex flex-wrap gap-4 mt-8 md:mt-10">
          <a
            data-testid="contact-resume-button"
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-acid text-void font-mono text-xs font-bold tracking-widest px-6 py-3 hover:bg-bone transition-colors"
          >
            <Download size={14} /> DOWNLOAD RESUME
          </a>
          <a
            data-testid="contact-phone-button"
            href={PROFILE.phoneHref}
            className="inline-flex items-center gap-2 border border-white/25 text-bone font-mono text-xs tracking-widest px-6 py-3 hover:border-acid hover:text-acid transition-colors"
          >
            <Phone size={14} /> {PROFILE.phone}
          </a>
        </div>
      </Reveal>
    </div>

    <div className="relative z-10 mt-16">
      <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6">
        {PROFILE.socials.map((s) => (
          <a
            key={s.label}
            data-testid={`social-${s.label.toLowerCase()}`}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.2em] text-bone/70 hover:text-acid transition-colors"
          >
            {s.label}
            <ArrowUpRight size={12} className="group-hover:rotate-45 transition-transform duration-300" />
          </a>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-2 border-t border-white/10 mt-6 pt-5 font-mono text-[10px] text-dim">
        <span>© 2026 RAUNAQ ADLAKHA — ALL SYSTEMS OPERATIONAL</span>
        <span>{PROFILE.location}</span>
        <span className="text-acid">DESIGNED TO BE REMEMBERED.</span>
      </div>
    </div>
  </section>
);

export default Contact;
