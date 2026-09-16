import { useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import Scramble from "@/components/Scramble";

const LINKS = [
  { label: "MANIFESTO", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "CAREER LOG", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

export const scrollTo = (e, href, after) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) {
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -20 });
    else el.scrollIntoView({ behavior: "smooth" });
  }
  if (after) after();
};

const Navbar = ({ ready }) => {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <>
      <motion.header
        data-testid="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-[70] px-6 md:px-10 py-5 flex items-center justify-between mix-blend-difference"
      >
        <a
          data-testid="nav-logo"
          href="#top"
          onClick={(e) => scrollTo(e, "#top")}
          className="font-display font-extrabold text-lg tracking-tight text-bone"
        >
          R<span className="text-acid">//</span>A
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              className="link-underline font-mono text-[11px] tracking-[0.2em] text-bone/80 hover:text-bone transition-colors"
            >
              <Scramble text={l.label} />
            </a>
          ))}
        </nav>

        <button
          data-testid="nav-menu-button"
          onClick={() => setOpen(true)}
          className="md:hidden text-bone"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </motion.header>

      <motion.div className="fixed top-0 inset-x-0 h-[2px] bg-acid origin-left z-[75]" style={{ scaleX }} />

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[85] bg-void flex flex-col p-6"
          >
            <div className="flex justify-between items-center">
              <span className="font-display font-extrabold text-lg">R<span className="text-acid">//</span>A</span>
              <button data-testid="mobile-menu-close" onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={24} className="text-bone" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-2">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                  href={l.href}
                  onClick={(e) => scrollTo(e, l.href, () => setOpen(false))}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-extrabold text-4xl text-bone hover:text-acid transition-colors"
                >
                  <span className="font-mono text-xs text-acid mr-3">0{i + 1}</span>
                  {l.label}
                </motion.a>
              ))}
            </div>
            <span className="font-mono text-[10px] text-dim">NEW DELHI — © 2026</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
