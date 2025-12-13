import { useEffect, useRef, useCallback } from "react";

const BackgroundAnimation = () => {
  const gradientCanvasRef = useRef<HTMLCanvasElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  // Gradient blob animation
  const animateGradient = useCallback(() => {
    const canvas = gradientCanvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    let time = 0;

    const colors = [
      { r: 12, g: 30, b: 52 },   // deep-navy
      { r: 30, g: 58, b: 138 },  // ocean-blue
      { r: 79, g: 195, b: 247 }, // sky-blue
      { r: 0, g: 255, b: 240 },  // electric-cyan
    ];

    const blobs = colors.map((color, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 200 + Math.random() * 300,
      color,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      offset: i * Math.PI * 0.5,
    }));

    const render = () => {
      time += 0.005;
      
      // Clear with deep navy base
      ctx.fillStyle = "rgb(12, 30, 52)";
      ctx.fillRect(0, 0, width, height);

      blobs.forEach((blob) => {
        // Organic movement
        blob.x += Math.sin(time + blob.offset) * 0.5 + blob.vx;
        blob.y += Math.cos(time + blob.offset) * 0.5 + blob.vy;

        // Mouse interaction
        const dx = mouseRef.current.x * width - blob.x;
        const dy = mouseRef.current.y * height - blob.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 300) {
          blob.x -= dx * 0.01;
          blob.y -= dy * 0.01;
        }

        // Wrap around screen
        if (blob.x < -blob.radius) blob.x = width + blob.radius;
        if (blob.x > width + blob.radius) blob.x = -blob.radius;
        if (blob.y < -blob.radius) blob.y = height + blob.radius;
        if (blob.y > height + blob.radius) blob.y = -blob.radius;

        // Draw blob with radial gradient
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius
        );
        gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.4)`);
        gradient.addColorStop(0.5, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.15)`);
        gradient.addColorStop(1, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(render);
    };

    render();
  }, []);

  // Particle system animation
  const animateParticles = useCallback(() => {
    const canvas = particleCanvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 50;

    interface Particle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      opacity: number;
      color: string;
    }

    const particles: Particle[] = [];
    const colors = ["0, 255, 240", "79, 195, 247", "0, 255, 136"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Mouse attraction
        const dx = mouseRef.current.x * width - particle.x;
        const dy = mouseRef.current.y * height - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          particle.x += dx * 0.01;
          particle.y += dy * 0.01;
        }

        // Wrap around
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        if (!isMobile) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const distance = Math.sqrt(
              Math.pow(particle.x - p2.x, 2) + Math.pow(particle.y - p2.y, 2)
            );
            if (distance < 120) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(0, 255, 240, ${0.15 * (1 - distance / 120)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      });

      requestAnimationFrame(render);
    };

    render();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (gradientCanvasRef.current) {
        gradientCanvasRef.current.width = window.innerWidth;
        gradientCanvasRef.current.height = window.innerHeight;
      }
      if (particleCanvasRef.current) {
        particleCanvasRef.current.width = window.innerWidth;
        particleCanvasRef.current.height = window.innerHeight;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    if (!prefersReducedMotion) {
      animateGradient();
      animateParticles();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animateGradient, animateParticles]);

  return (
    <>
      <canvas
        ref={gradientCanvasRef}
        className="fixed inset-0 -z-30 pointer-events-none"
        aria-hidden="true"
      />
      <canvas
        ref={particleCanvasRef}
        className="fixed inset-0 -z-20 pointer-events-none"
        aria-hidden="true"
      />
    </>
  );
};

export default BackgroundAnimation;
