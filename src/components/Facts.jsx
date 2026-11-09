import { useEffect, useRef, useState } from "react";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { expertise } from "../data/expertise";
import { ExpertiseCard, ExpertiseDetail } from "./ExpertiseParts";
import "./Facts.css";

export default function Facts() {
  const [selectedId, setSelectedId] = useState(null);
  const headingRef = useRef(null);
  const previousSelection = useRef(null);
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const selected = expertise.find((category) => category.id === selectedId);
  const transition = { duration: reducedMotion ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] };

  useEffect(() => {
    if (selectedId) {
      headingRef.current?.focus({ preventScroll: true });
      // A lower stacked card can collapse above the current mobile scroll
      // position. Bring the section back into view only for that first open.
      if (!previousSelection.current && sectionRef.current?.getBoundingClientRect().top < -240) {
        sectionRef.current.scrollIntoView({ block: 'start', behavior: reducedMotion ? 'instant' : 'smooth' });
      }
    }
    else if (previousSelection.current) {
      sectionRef.current?.querySelector(`#expertise-trigger-${previousSelection.current}`)?.focus({ preventScroll: true });
    }
    previousSelection.current = selectedId;
  }, [selectedId, reducedMotion]);

  return (
    <section ref={sectionRef} id="expertise" aria-labelledby="expertise-title" className="expertise-section section-facts-background" onKeyDown={(event) => {
      if (event.key === 'Escape' && selectedId) { event.preventDefault(); setSelectedId(null); }
    }}>
      <div className="expertise-inner">
        <header className="expertise-header"><div><p className="expertise-eyebrow">WHAT I DO</p><h2 id="expertise-title">Where Technology<br className="hidden sm:block" /> Meets Ideas</h2></div><p className="expertise-introduction">I explore how software, data, and product thinking come together to solve real problems.</p></header>
        <LayoutGroup id="expertise-showcase">
          <motion.div layout={!reducedMotion} transition={transition} className={`expertise-layout ${selected ? 'expertise-layout--expanded' : ''}`}>
            <div className="expertise-cards" aria-label={selected ? 'Explore another area' : 'Professional areas'}>
              {expertise.filter((category) => category.id !== selectedId).map((category) => (
                <ExpertiseCard key={category.id} category={category} index={expertise.indexOf(category)} compact={Boolean(selected)} onSelect={setSelectedId} reducedMotion={reducedMotion} transition={transition} />
              ))}
            </div>
            {selected && <ExpertiseDetail key={selected.id} category={selected} onClose={() => setSelectedId(null)} headingRef={headingRef} reducedMotion={reducedMotion} transition={transition} />}
          </motion.div>
        </LayoutGroup>
        <p className="expertise-footnote">{selected ? 'Explore another area, or return to the overview.' : 'Four perspectives. One curiosity for building things that matter.'}</p>
      </div>
    </section>
  );
}
