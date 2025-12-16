import { useEffect, useRef, useCallback } from "react";

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const animationRef = useRef<number>();

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    let time = 0;

    // Vibrant brand colors - MUCH MORE INTENSE
    const smokeColors = [
      { r: 0, g: 255, b: 240, a: 0.6 },     // electric-cyan - VERY INTENSE
      { r: 79, g: 195, b: 247, a: 0.5 },    // sky-blue
      { r: 0, g: 255, b: 200, a: 0.45 },    // cyan-green
      { r: 30, g: 150, b: 255, a: 0.4 },    // bright ocean-blue
      { r: 0, g: 255, b: 136, a: 0.45 },    // neon-green
      { r: 100, g: 220, b: 255, a: 0.4 },   // light-blue
      { r: 180, g: 100, b: 255, a: 0.35 },  // purple accent
    ];

    interface SmokeParticle {
      x: number;
      y: number;
      radius: number;
      color: typeof smokeColors[0];
      speedX: number;
      speedY: number;
      noiseOffsetX: number;
      noiseOffsetY: number;
      pulse: number;
      pulseSpeed: number;
    }

    const particles: SmokeParticle[] = [];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 250 + Math.random() * 450,
        color: smokeColors[i % smokeColors.length],
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        noiseOffsetX: Math.random() * 1000,
        noiseOffsetY: Math.random() * 1000,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      });
    }

    const noise = (x: number, y: number, t: number) => {
      return Math.sin(x * 0.01 + t) * Math.cos(y * 0.01 + t * 0.7) * 
             Math.sin((x + y) * 0.005 + t * 0.5);
    };

    const render = () => {
      time += 0.012;
      
      // Very slow fade for maximum trails visibility
      ctx.fillStyle = "rgba(12, 30, 52, 0.03)";
      ctx.fillRect(0, 0, width, height);

      particles.forEach((particle) => {
        const noiseX = noise(particle.noiseOffsetX, particle.noiseOffsetY, time);
        const noiseY = noise(particle.noiseOffsetY, particle.noiseOffsetX, time * 1.1);
        
        particle.x += particle.speedX + noiseX * 4;
        particle.y += particle.speedY + noiseY * 4;

        const dx = mouseRef.current.x * width - particle.x;
        const dy = mouseRef.current.y * height - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 600) {
          const force = (600 - dist) / 600;
          particle.x -= dx * force * 0.04;
          particle.y -= dy * force * 0.04;
        }

        if (particle.x < -particle.radius) particle.x = width + particle.radius;
        if (particle.x > width + particle.radius) particle.x = -particle.radius;
        if (particle.y < -particle.radius) particle.y = height + particle.radius;
        if (particle.y > height + particle.radius) particle.y = -particle.radius;

        particle.pulse += particle.pulseSpeed;
        const pulseScale = 1 + Math.sin(particle.pulse) * 0.35;
        const currentRadius = particle.radius * pulseScale;

        // Draw main smoke blob
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, currentRadius
        );
        
        const { r, g, b, a } = particle.color;
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${a})`);
        gradient.addColorStop(0.2, `rgba(${r}, ${g}, ${b}, ${a * 0.8})`);
        gradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${a * 0.5})`);
        gradient.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${a * 0.2})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        // Bright inner core
        const coreGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, currentRadius * 0.25
        );
        coreGradient.addColorStop(0, `rgba(255, 255, 255, ${a * 0.6})`);
        coreGradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${a * 0.7})`);
        coreGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        
        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentRadius * 0.25, 0, Math.PI * 2);
        ctx.fill();
      });

      // Large flowing light waves
      ctx.globalCompositeOperation = "screen";
      for (let i = 0; i < 8; i++) {
        const streakX = width * 0.5 + Math.sin(time * 0.3 + i * 0.8) * width * 0.6;
        const streakY = height * 0.5 + Math.cos(time * 0.2 + i * 1.2) * height * 0.5;
        
        const streakGradient = ctx.createRadialGradient(
          streakX, streakY, 0,
          streakX, streakY, 400
        );
        streakGradient.addColorStop(0, "rgba(0, 255, 240, 0.35)");
        streakGradient.addColorStop(0.3, "rgba(79, 195, 247, 0.2)");
        streakGradient.addColorStop(0.6, "rgba(0, 255, 200, 0.1)");
        streakGradient.addColorStop(1, "rgba(0, 255, 240, 0)");
        
        ctx.fillStyle = streakGradient;
        ctx.beginPath();
        ctx.arc(streakX, streakY, 400, 0, Math.PI * 2);
        ctx.fill();
      }

      // Bright highlight spots
      for (let i = 0; i < 5; i++) {
        const spotX = width * (0.1 + i * 0.2) + Math.sin(time * 0.5 + i * 1.5) * 150;
        const spotY = height * 0.4 + Math.cos(time * 0.35 + i * 2) * 200;
        
        const spotGradient = ctx.createRadialGradient(
          spotX, spotY, 0,
          spotX, spotY, 200
        );
        spotGradient.addColorStop(0, "rgba(255, 255, 255, 0.25)");
        spotGradient.addColorStop(0.3, "rgba(0, 255, 240, 0.3)");
        spotGradient.addColorStop(1, "rgba(0, 255, 240, 0)");
        
        ctx.fillStyle = spotGradient;
        ctx.beginPath();
        ctx.arc(spotX, spotY, 200, 0, Math.PI * 2);
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
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    if (!prefersReducedMotion) {
      animate();
    } else {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "rgb(12, 30, 52)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -10, background: "rgb(12, 30, 52)" }}
      aria-hidden="true"
    />
  );
};

export default BackgroundAnimation;
