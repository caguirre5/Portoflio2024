import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import "./BackgroundParticles.css";

// Independent low-discrepancy sequences spread every subset across the layer
// without repeating rows or changing positions when a section rerenders.
const createParticle = (index) => ({
  id: index,
  left: 3 + (((index + 0.5) * 0.754877666) % 1) * 90,
  top: 4 + (((index + 0.5) * 0.569840291) % 1) * 92,
  circle: index % 3 !== 2,
  size: index % 3 !== 2 ? 44 + (index % 5) * 14 : 8 + (index % 4) * 3,
  drift: (index % 2 ? 1 : -1) * (35 + (index % 5) * 15),
  rise: 60 + (index % 5) * 20,
  duration: 8 + (index % 5) * 2,
  delay: -(index % 8) * 2,
});

export default function BackgroundParticles() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const reducedMotion = useReducedMotion();
  const [bands, setBands] = useState(1);
  const [compact, setCompact] = useState(() => window.matchMedia("(max-width: 767px)").matches);

  useEffect(() => {
    // Keep lower bands mounted when a project filter shortens the page.
    const update = () => {
      const needed = Math.ceil(ref.current.clientHeight / window.innerHeight);
      setBands((previous) => Math.max(previous, needed));
    };
    const observer = new ResizeObserver(update);
    observer.observe(ref.current);
    window.addEventListener('resize', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  const density = compact ? 9 : 18;
  const count = bands * density;
  const layerParticles = Array.from({ length: count }, (_, index) => createParticle(index));

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setCompact(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="particle-background pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {!reducedMotion && layerParticles.map((particle, index) => (
        <span
          key={particle.id}
          data-particle-kind={particle.circle ? "circle" : "dot"}
          className="floating-particle absolute rounded-full"
          style={{
            '--particle-drift': `${particle.drift}px`,
            '--particle-rise': `${-particle.rise}px`,
            '--particle-low-opacity': particle.circle ? 0.18 : 0.25,
            '--particle-high-opacity': particle.circle ? 0.45 : 0.65,
            '--particle-low-scale': particle.circle ? 0.9 : 1,
            '--particle-high-scale': particle.circle ? 1.08 : 1,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            animationPlayState: inView ? 'running' : 'paused',
            left: `${particle.left}%`,
            top: `${Math.floor(index / density) * 100 + particle.top}vh`,
            width: particle.size * (compact ? 0.75 : 1),
            height: particle.size * (compact ? 0.75 : 1),
            background: particle.circle
              ? "radial-gradient(circle at 30% 30%, rgba(224, 250, 255, 0.55), rgba(103, 232, 249, 0.18))"
              : "#cffafe",
            border: particle.circle ? "1px solid rgba(165, 243, 252, 0.5)" : undefined,
            boxShadow: particle.circle
              ? "0 0 24px rgba(103, 232, 249, 0.12)"
              : "0 0 12px rgba(165, 243, 252, 0.4)",
          }}

        />
      ))}
    </div>
  );
}
