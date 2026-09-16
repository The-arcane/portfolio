import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/_#";

const Scramble = ({ text, className = "", auto = false }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [out, setOut] = useState(text);
  const raf = useRef(null);

  const run = useCallback(() => {
    cancelAnimationFrame(raf.current);
    let frame = 0;
    const step = () => {
      frame += 0.7;
      const done = Math.floor(frame);
      setOut(
        text
          .split("")
          .map((c, i) => {
            if (c === " ") return " ";
            return i < done ? c : CHARS[(Math.random() * CHARS.length) | 0];
          })
          .join("")
      );
      if (done < text.length) raf.current = requestAnimationFrame(step);
      else setOut(text);
    };
    raf.current = requestAnimationFrame(step);
  }, [text]);

  useEffect(() => {
    if (auto && inView) run();
    return () => cancelAnimationFrame(raf.current);
  }, [auto, inView, run]);

  return (
    <span ref={ref} className={className} onMouseEnter={run} data-hover>
      {out}
    </span>
  );
};

export default Scramble;
