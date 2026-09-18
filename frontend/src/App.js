import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lenis from "lenis";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import BigStatement from "@/components/BigStatement";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import ProjectDetail from "@/components/ProjectDetail";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="bg-void text-bone font-mono min-h-screen">
      <div className="noise" />
      <AnimatePresence>
        {loading && <Preloader onDone={() => setLoading(false)} />}
      </AnimatePresence>
      <Navbar ready={!loading} />
      <main>
        <Hero ready={!loading} />
        <Marquee />
        <Manifesto />
        <BigStatement />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Contact />
      </main>
    </div>
  );
}

function App() {
  return <BrowserRouter><Cursor /><Routes><Route path="/" element={<Home />} /><Route path="/projects/:slug" element={<ProjectDetail />} /></Routes></BrowserRouter>;
}

export default App;
