import { useEffect, useRef } from "react";

const ParticleField = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let dots = [];
    let raf;
    let w = 0;
    let h = 0;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      const gap = w < 768 ? 72 : 96;
      for (let gx = gap / 2; gx < w; gx += gap) {
        for (let gy = gap / 2; gy < h; gy += gap) {
          dots.push({ ox: gx, oy: gy, x: gx, y: gy });
        }
      }
    };

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onOut = () => { mouse.x = -9999; mouse.y = -9999; };

    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (canvas.getBoundingClientRect().bottom < -50) return;
      ctx.clearRect(0, 0, w, h);
      const R = 150;

      for (const d of dots) {
        const dx = mouse.x - d.ox;
        const dy = mouse.y - d.oy;
        const dist = Math.hypot(dx, dy);
        let tx = d.ox;
        let ty = d.oy;
        let a = 0.2;
        if (dist < R) {
          const f = 1 - dist / R;
          tx = d.ox - dx * f * 0.55;
          ty = d.oy - dy * f * 0.55;
          a = 0.2 + f * 0.8;
        }
        d.x += (tx - d.x) * 0.12;
        d.y += (ty - d.y) * 0.12;
        ctx.beginPath();
        ctx.arc(d.x, d.y, a > 0.3 ? 1.7 : 1.1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,255,46,${a})`;
        ctx.fill();
      }

      ctx.lineWidth = 0.5;
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        if (Math.hypot(mouse.x - a.ox, mouse.y - a.oy) > 230) continue;
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 122) {
            ctx.strokeStyle = `rgba(200,255,46,${(1 - d / 122) * 0.16})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onOut);
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      data-testid="particle-field"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
    />
  );
};

export default ParticleField;
