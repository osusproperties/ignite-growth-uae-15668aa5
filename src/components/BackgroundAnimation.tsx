import { useEffect, useRef, useCallback } from "react";

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });
  const animationRef = useRef<number>();

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    let time = 0;

    // Smoke particles that follow cursor
    const smokeColors = [
      { r: 0, g: 255, b: 240 },     // electric-cyan
      { r: 79, g: 195, b: 247 },    // sky-blue
      { r: 0, g: 255, b: 200 },     // cyan-green
      { r: 0, g: 255, b: 136 },     // neon-green
      { r: 100, g: 220, b: 255 },   // light-blue
    ];

    interface SmokeTrail {
      x: number;
      y: number;
      radius: number;
      color: typeof smokeColors[0];
      alpha: number;
      decay: number;
      vx: number;
      vy: number;
    }

    const trails: SmokeTrail[] = [];
    const maxTrails = 50;

    const render = () => {
      time += 0.01;
      
      // Clear canvas completely each frame for clean look
      ctx.clearRect(0, 0, width, height);

      // Add new smoke trails when mouse is active
      if (mouseRef.current.active && trails.length < maxTrails) {
        const color = smokeColors[Math.floor(Math.random() * smokeColors.length)];
        trails.push({
          x: mouseRef.current.x + (Math.random() - 0.5) * 100,
          y: mouseRef.current.y + (Math.random() - 0.5) * 100,
          radius: 80 + Math.random() * 150,
          color,
          alpha: 0.4 + Math.random() * 0.3,
          decay: 0.008 + Math.random() * 0.008,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 1, // Slight upward drift
        });
      }

      // Update and draw trails
      for (let i = trails.length - 1; i >= 0; i--) {
        const trail = trails[i];
        
        // Update position with organic movement
        trail.x += trail.vx + Math.sin(time + i) * 0.5;
        trail.y += trail.vy + Math.cos(time + i * 0.7) * 0.3;
        trail.alpha -= trail.decay;
        trail.radius += 0.5; // Expand slowly

        // Remove faded trails
        if (trail.alpha <= 0) {
          trails.splice(i, 1);
          continue;
        }

        // Draw smoke blob
        const gradient = ctx.createRadialGradient(
          trail.x, trail.y, 0,
          trail.x, trail.y, trail.radius
        );
        
        const { r, g, b } = trail.color;
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${trail.alpha * 0.8})`);
        gradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${trail.alpha * 0.5})`);
        gradient.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${trail.alpha * 0.2})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(trail.x, trail.y, trail.radius, 0, Math.PI * 2);
        ctx.fill();

        // Inner glow core
        if (trail.alpha > 0.2) {
          const coreGradient = ctx.createRadialGradient(
            trail.x, trail.y, 0,
            trail.x, trail.y, trail.radius * 0.2
          );
          coreGradient.addColorStop(0, `rgba(255, 255, 255, ${trail.alpha * 0.4})`);
          coreGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          
          ctx.fillStyle = coreGradient;
          ctx.beginPath();
          ctx.arc(trail.x, trail.y, trail.radius * 0.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw cursor glow when active
      if (mouseRef.current.active) {
        const cursorGlow = ctx.createRadialGradient(
          mouseRef.current.x, mouseRef.current.y, 0,
          mouseRef.current.x, mouseRef.current.y, 200
        );
        cursorGlow.addColorStop(0, "rgba(0, 255, 240, 0.15)");
        cursorGlow.addColorStop(0.5, "rgba(79, 195, 247, 0.08)");
        cursorGlow.addColorStop(1, "rgba(0, 255, 240, 0)");
        
        ctx.fillStyle = cursorGlow;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 200, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";

      animationRef.current = requestAnimationFrame(render);
    };

    render();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleMouseEnter = () => {
      mouseRef.current.active = true;
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    if (!prefersReducedMotion) {
      animate();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 9999 }}
      aria-hidden="true"
    />
  );
};

export default BackgroundAnimation;
