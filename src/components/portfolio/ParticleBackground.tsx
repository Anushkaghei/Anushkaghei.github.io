import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: {
      x: number; y: number; vx: number; vy: number;
      baseVx: number; baseVy: number;
      size: number; opacity: number; baseOpacity: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.min(120, Math.floor((canvas.width * canvas.height) / 10000));
      for (let i = 0; i < count; i++) {
        const vx = (Math.random() - 0.5) * 0.4;
        const vy = (Math.random() - 0.5) * 0.4;
        const opacity = Math.random() * 0.5 + 0.1;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx, vy,
          baseVx: vx, baseVy: vy,
          size: Math.random() * 2.5 + 0.5,
          opacity,
          baseOpacity: opacity,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;
      const mouseRadius = 200;
      const attractionStrength = 0.02;
      const repulsionRadius = 80;

      particles.forEach((p, i) => {
        // Mouse interaction
        const dxM = mouse.x - p.x;
        const dyM = mouse.y - p.y;
        const distM = Math.sqrt(dxM * dxM + dyM * dyM);

        if (distM < mouseRadius && distM > 0) {
          if (distM < repulsionRadius) {
            // Repel when very close
            const force = (repulsionRadius - distM) / repulsionRadius * 0.8;
            p.vx -= (dxM / distM) * force;
            p.vy -= (dyM / distM) * force;
          } else {
            // Gentle attraction
            p.vx += (dxM / distM) * attractionStrength;
            p.vy += (dyM / distM) * attractionStrength;
          }
          // Brighten near mouse
          p.opacity = Math.min(0.9, p.baseOpacity + (1 - distM / mouseRadius) * 0.5);
          p.size = Math.min(4, p.size + 0.02);
        } else {
          // Dampen back to base velocity
          p.vx += (p.baseVx - p.vx) * 0.02;
          p.vy += (p.baseVy - p.vy) * 0.02;
          p.opacity += (p.baseOpacity - p.opacity) * 0.02;
        }

        // Speed limiting
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 3) {
          p.vx = (p.vx / speed) * 3;
          p.vy = (p.vy / speed) * 3;
        }

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(185, 80%, 55%, ${p.opacity})`;
        ctx.shadowBlur = distM < mouseRadius ? 15 : 0;
        ctx.shadowColor = "hsla(185, 80%, 55%, 0.5)";
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections (enhanced near mouse)
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x;
          const dy = particles[j].y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = distM < mouseRadius ? 200 : 150;
          if (dist < maxDist) {
            const nearMouse = distM < mouseRadius && Math.sqrt((mouse.x - particles[j].x) ** 2 + (mouse.y - particles[j].y) ** 2) < mouseRadius;
            const alpha = nearMouse ? 0.2 * (1 - dist / maxDist) : 0.08 * (1 - dist / maxDist);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = nearMouse
              ? `hsla(185, 80%, 65%, ${alpha})`
              : `hsla(185, 80%, 55%, ${alpha})`;
            ctx.lineWidth = nearMouse ? 0.8 : 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", () => { resize(); createParticles(); });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ opacity: 0.7, pointerEvents: "auto" }}
    />
  );
};

export default ParticleBackground;
