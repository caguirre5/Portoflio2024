import BackgroundParticles from "./BackgroundParticles";
import { useEffect, useRef } from 'react'
import { solarPosition, sunsetAmount } from '../solarCycle'
import L1 from '../assets/background/layer1-D.png'
import L2 from '../assets/background/layer2-D.png'
import L3 from '../assets/background/layer3-D.png'
import L4 from '../assets/background/layer4-D.png'
import L5 from '../assets/background/layer5-D.png'
import L6 from '../assets/background/layer6-D.png'
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import './Parallax.css'

const nativeParallax = typeof CSS !== 'undefined' && CSS.supports('animation-timeline', 'scroll(root block)') && CSS.supports('animation-range', '0px 100vh');

export default function Parallax() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const reducedMotion = useReducedMotion();
  const sunRef = useRef(null);
  const skyRef = useRef(null);
  const cycleTime = useRef(0);

  useEffect(() => {
    let animations = [];
    let disposed = false;
    const update = () => {
      if (disposed || !ref.current || !sunRef.current || !skyRef.current) return;
      cycleTime.current = Number(animations[0]?.currentTime ?? cycleTime.current);
      animations.forEach((animation) => animation.cancel());
      const { width, height } = ref.current.getBoundingClientRect();
      const size = { width, height };
      const diameter = solarPosition(0, size).diameter;
      sunRef.current.style.width = `${diameter}px`;
      sunRef.current.style.height = `${diameter}px`;
      // The reset has two adjacent keyframes so the hidden sun teleports
      // without interpolating back across the visible sky.
      const phases = [...Array.from({ length: 193 }, (_, index) => index / 192), 0.749999].sort((a, b) => a - b);
      const sunFrames = phases.map((phase) => {
        const { x, y } = solarPosition(phase, size);
        return { offset: phase, transform: `translate3d(${x}px, ${y}px, 0)` };
      });
      const skyFrames = phases.map((phase) => ({ offset: phase, opacity: sunsetAmount(phase) }));
      const landscapeFrames = phases.map((phase) => {
        const amount = sunsetAmount(phase);
        return { offset: phase, filter: `sepia(${amount * 0.55}) saturate(${1 - amount * 0.15}) hue-rotate(${-25 * amount}deg) brightness(${1 - amount * 0.22})` };
      });
      const timing = { duration: 48000, iterations: Infinity, fill: 'both' };
      animations = [
        sunRef.current.animate(sunFrames, timing),
        skyRef.current.animate(skyFrames, timing),
        ...Array.from(ref.current.querySelectorAll('[data-landscape-layer]'), (layer) => layer.animate(landscapeFrames, timing)),
      ];
      animations.forEach((animation) => {
        animation.currentTime = reducedMotion ? 0 : cycleTime.current;
        if (!inView || reducedMotion || document.hidden) animation.pause();
      });
    };
    const visibilityChange = () => animations.forEach((animation) => {
      if (inView && !reducedMotion && !document.hidden) animation.play();
      else animation.pause();
    });
    const observer = new ResizeObserver(update);
    observer.observe(ref.current);
    document.addEventListener('visibilitychange', visibilityChange);
    return () => {
      disposed = true;
      cycleTime.current = Number(animations[0]?.currentTime ?? cycleTime.current);
      animations.forEach((animation) => animation.cancel());
      observer.disconnect();
      document.removeEventListener('visibilitychange', visibilityChange);
    };
  }, [inView, reducedMotion]);

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end start"],
  });

  const backgroundY1 = useTransform(scrollYProgress, [0, 1], ["0%", "97%"]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "95%"]);
  const backgroundY3 = useTransform(scrollYProgress, [0, 1], ["0%", "93%"]);
  const backgroundY4 = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const backgroundY5 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const textXR = useTransform(scrollYProgress, [0, 1], ["0vw", "45vw"]);
  const descriptionXR = useTransform(scrollYProgress, [0, 1], ["0vw", "65vw"]);
  const buttonXR = useTransform(scrollYProgress, [0, 1], ["0vw", "90vw"]);
  const textXL = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);

  return (
    <div 
      ref={ref}
      id="home"
      className="w-full h-screen overflow-hidden relative grid place-items-center bg-[#77CFF2]"
    >
        <div ref={skyRef} aria-hidden="true" className="parallax-sunset pointer-events-none absolute inset-0" />
        <motion.div aria-hidden="true" className="hero-scroll-layer pointer-events-none absolute inset-0" style={{ y: nativeParallax || reducedMotion ? undefined : backgroundY1, '--parallax-y': '97%' }}>
          <div ref={sunRef} className="parallax-sun absolute left-0 top-0 rounded-full" />
        </motion.div>
        <div
          className='relative z-[1] flex w-full max-w-7xl flex-col items-center px-6 text-center text-white [text-shadow:0_2px_24px_rgba(3,22,38,0.35)]'
        >
          <motion.p style={{ x: nativeParallax || reducedMotion ? undefined : textXL, '--parallax-x': '-150%' }} className="hero-scroll-copy mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/90 sm:text-xs">
            From Guatemala <span className="px-2" aria-hidden="true">·</span> Based in Taiwan
          </motion.p>
          <motion.h1 
            style={{
              x: nativeParallax || reducedMotion ? undefined : textXL,
              '--parallax-x': '-150%'
            }}
            className="hero-scroll-copy my-2 text-[clamp(3.25rem,8vw,8rem)] font-bold leading-[1.05] tracking-tight"
          >
              Cristian Aguirre
          </motion.h1>
          
          <div className='mt-4 flex max-w-xl flex-col items-center'>
            <motion.p className="hero-scroll-copy text-2xl font-medium tracking-tight md:text-4xl" style={{ x: nativeParallax || reducedMotion ? undefined : textXR, '--parallax-x': '45vw' }}>Software Developer</motion.p>
            <motion.p className="hero-scroll-copy mt-5 max-w-md text-base leading-relaxed text-white/95 sm:text-lg" style={{ x: nativeParallax || reducedMotion ? undefined : descriptionXR, '--parallax-x': '65vw' }}>
              Building digital experiences where software, data, and product thinking come together.
            </motion.p>
            <motion.a href="#work" style={{ x: nativeParallax || reducedMotion ? undefined : buttonXR, '--parallax-x': '90vw' }} onClick={(event) => {
              const work = document.getElementById('work');
              if (work) {
                event.preventDefault();
                work.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' });
              }
            }} className="hero-scroll-copy mt-7 inline-flex items-center gap-4 rounded-full border border-white/40 bg-[#03223d]/25 px-6 py-3 text-sm font-medium shadow-sm backdrop-blur-sm transition-colors hover:border-white/70 hover:bg-[#03223d]/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Explore my work <span aria-hidden="true">↓</span>
            </motion.a>
          </div>
        </div>

        <motion.div
            data-landscape-layer
            className="hero-scroll-layer absolute inset-0 z-0"
            style={{
              backgroundImage:`url(${L1})`,
              backgroundPosition:'bottom',
              backgroundSize:'cover',
              '--parallax-y': '97%',
              y: nativeParallax || reducedMotion ? undefined : backgroundY1
            }}
        />

        <motion.div
            data-landscape-layer
            className="hero-scroll-layer absolute inset-0 z-0"
            style={{
              backgroundImage:`url(${L2})`,
              backgroundPosition:'bottom',
              backgroundSize:'cover',
              '--parallax-y': '95%',
              y: nativeParallax || reducedMotion ? undefined : backgroundY2
            }}
        />

        <motion.div
            data-landscape-layer
            className="hero-scroll-layer absolute inset-0 z-0"
            style={{
              backgroundImage:`url(${L3})`,
              backgroundPosition:'bottom',
              backgroundSize:'cover',
              '--parallax-y': '93%',
              y: nativeParallax || reducedMotion ? undefined : backgroundY3
            }}
        />

        <motion.div
            data-landscape-layer
            className="hero-scroll-layer absolute inset-0 z-0"
            style={{
              backgroundImage:`url(${L4})`,
              backgroundPosition:'bottom',
              backgroundSize:'cover',
              '--parallax-y': '70%',
              y: nativeParallax || reducedMotion ? undefined : backgroundY4
            }}
        />

        <motion.div
            data-landscape-layer
            className="hero-scroll-layer absolute inset-0 z-0"
            style={{
              backgroundImage:`url(${L5})`,
              backgroundPosition:'bottom',
              backgroundSize:'cover',
              '--parallax-y': '60%',
              y: nativeParallax || reducedMotion ? undefined : backgroundY5
            }}
        />

        <BackgroundParticles />

        {/* Keep the foreground attached to the section boundary as the page scrolls. */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[2]"
            style={{
              backgroundImage:`url(${L6})`,
              backgroundPosition:'bottom',
              backgroundSize:'cover',
            }}
        />
    </div>
  )
}
