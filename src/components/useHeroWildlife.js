import { useEffect, useRef, useState } from 'react';
import { hasDaylightForFlock, isDaylight, prepareFlock, prepareQuetzal, QUETZAL_FLIGHT_MS, wildlifeLayout } from '../heroWildlife';

const randomWait = (min, max) => min + Math.random() * (max - min);

export default function useHeroWildlife({ heroRef, solarAnimationRef, active, reducedMotion }) {
  const flockRef = useRef(null);
  const birdRef = useRef(null);
  const flightRef = useRef(null);
  const controllerRef = useRef(null);
  const cooldownUntil = useRef(0);
  const [layout, setLayout] = useState(null);
  const [birdState, setBirdState] = useState('loading');
  const [flockVisible, setFlockVisible] = useState(false);

  useEffect(() => {
    if (!active) return;
    let disposed = false;
    let flock;
    let bird;
    let flight;
    let flockPlaying = false;
    let quetzalFlying = false;
    let tickId;
    let ready = false;
    let rebuildFlock;
    let currentLayout = null;
    let nextFlockAt = performance.now() + randomWait(2000, 5000);
    const foreground = heroRef.current;
    const updateLayout = () => {
      if (disposed) return;
      const bounds = foreground.getBoundingClientRect();
      currentLayout = wildlifeLayout(bounds);
      setLayout(currentLayout);
      rebuildFlock?.();
    };
    const observer = new ResizeObserver(updateLayout);
    observer.observe(foreground);
    updateLayout();

    const stopFlock = () => {
      if (disposed) return;
      flockPlaying = false;
      flock?.stop();
      setFlockVisible(false);
      nextFlockAt = performance.now() + randomWait(7000, 16000);
    };
    const finishFlight = () => {
      if (disposed || !quetzalFlying) return;
      quetzalFlying = false;
      bird?.stop();
      cooldownUntil.current = Date.now() + randomWait(10000, 16000);
      setBirdState('cooldown');
    };
    const tick = () => {
      if (disposed || !ready) return;
      const clock = solarAnimationRef.current;
      const elapsed = Number(clock?.currentTime ?? 0);
      const visible = !document.hidden;
      if (flockPlaying && (!visible || reducedMotion || !isDaylight(elapsed))) stopFlock();
      if (!flockPlaying && visible && !reducedMotion && clock && performance.now() >= nextFlockAt && hasDaylightForFlock(elapsed)) {
        flockPlaying = true;
        setFlockVisible(true);
        flock.goToAndPlay(0, true);
      }
      if (quetzalFlying) {
        if (visible) { flight?.play(); if (!reducedMotion) bird?.play(); }
        else { flight?.pause(); bird?.pause(); }
      } else if (Date.now() >= cooldownUntil.current) {
        setBirdState('ready');
      }
    };

    Promise.all([
      import('lottie-web/build/player/lottie_light'),
      import('../assets/animations/Birds.json'),
      import('../assets/animations/Quetzal.json'),
    ]).then(([module, flockData, birdData]) => {
      if (disposed) return;
      const lottie = module.default;
      rebuildFlock = () => {
        if (disposed) return;
        flockPlaying = false;
        setFlockVisible(false);
        flock?.destroy();
        flock = lottie.loadAnimation({ container: flockRef.current, renderer: 'svg', autoplay: false, loop: false, animationData: prepareFlock(flockData.default, currentLayout), rendererSettings: { preserveAspectRatio: 'xMidYMax slice', progressiveLoad: false } });
        flock.addEventListener('complete', stopFlock);
        nextFlockAt = performance.now() + randomWait(2000, 5000);
      };
      rebuildFlock();
      bird = lottie.loadAnimation({ container: birdRef.current, renderer: 'svg', autoplay: false, loop: true, animationData: prepareQuetzal(birdData.default), rendererSettings: { preserveAspectRatio: 'xMidYMid meet', progressiveLoad: false } });
      bird.addEventListener('DOMLoaded', () => {
        if (disposed) return;
        // Remove the animation's empty canvas while retaining all wing/tail
        // positions, so the visible bird has a predictable responsive size.
        const svg = birdRef.current.querySelector('svg');
        let left = Infinity, top = Infinity, right = -Infinity, bottom = -Infinity;
        for (let frame = 0; frame < bird.totalFrames; frame += 2) {
          bird.goToAndStop(frame, true);
          const box = svg.getBBox();
          left = Math.min(left, box.x); top = Math.min(top, box.y);
          right = Math.max(right, box.x + box.width); bottom = Math.max(bottom, box.y + box.height);
        }
        if ([left, top, right, bottom].every(Number.isFinite)) svg.setAttribute('viewBox', `${left - 15} ${top - 15} ${right - left + 30} ${bottom - top + 30}`);
        bird.goToAndStop(0, true);
        ready = true;
        setBirdState(Date.now() >= cooldownUntil.current ? 'ready' : 'cooldown');
      });
      controllerRef.current = () => {
        if (!ready || disposed || quetzalFlying || document.hidden || Date.now() < cooldownUntil.current) return;
        quetzalFlying = true;
        cooldownUntil.current = Infinity;
        setBirdState('flying');
        const { x, y, size, width, height } = currentLayout;
        const startX = x - size / 2;
        const startY = y - size / 2;
        const finishX = width + size;
        const cruiseY = Math.max(35, Math.min(height * .22, startY - height * .15));
        const keyframes = reducedMotion ? [
          { opacity: 0, transform: `translate3d(${startX}px, ${startY - 25}px, 0)` },
          { opacity: 1, offset: .2, transform: `translate3d(${startX}px, ${startY - 25}px, 0)` },
          { opacity: 1, offset: .7, transform: `translate3d(${startX}px, ${startY - 25}px, 0)` },
          { opacity: 0, transform: `translate3d(${startX}px, ${startY - 25}px, 0)` },
        ] : [
          { offset: 0, opacity: 0, transform: `translate3d(${startX}px, ${startY}px, 0) rotate(-12deg)` },
          { offset: .08, opacity: 1, transform: `translate3d(${startX + (finishX - startX) * .06}px, ${startY - height * .09}px, 0) rotate(-12deg)` },
          { offset: .4, opacity: 1, transform: `translate3d(${startX + (finishX - startX) * .38}px, ${cruiseY}px, 0) rotate(-5deg)` },
          { offset: .75, opacity: 1, transform: `translate3d(${startX + (finishX - startX) * .76}px, ${cruiseY + height * .05}px, 0) rotate(3deg)` },
          { offset: 1, opacity: 1, transform: `translate3d(${finishX}px, ${cruiseY - height * .03}px, 0) rotate(-5deg)` },
        ];
        flight?.cancel();
        bird.goToAndStop(0, true);
        if (!reducedMotion) bird.play();
        flight = flightRef.current.animate(keyframes, { duration: reducedMotion ? 1600 : QUETZAL_FLIGHT_MS, easing: 'linear', fill: 'none' });
        flight.finished.then(finishFlight).catch(() => {});
      };
      tickId = window.setInterval(tick, 250);
      document.addEventListener('visibilitychange', tick);
    }).catch(() => {
      if (!disposed) setBirdState('unavailable');
    });

    return () => {
      disposed = true;
      controllerRef.current = null;
      if (quetzalFlying) cooldownUntil.current = Date.now() + 12000;
      observer.disconnect();
      window.clearInterval(tickId);
      document.removeEventListener('visibilitychange', tick);
      flight?.cancel();
      flock?.destroy();
      bird?.destroy();
      setFlockVisible(false);
    };
  }, [active, reducedMotion, heroRef, solarAnimationRef]);

  return { flockRef, birdRef, flightRef, layout, birdState, flockVisible, releaseQuetzal: () => controllerRef.current?.() };
}
