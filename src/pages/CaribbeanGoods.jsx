import { useLayoutEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import screenshot from '../assets/projects/WEB_Caribbean.png';
import { caribbeanGoods } from '../data/projectStories';
import './CaribbeanGoods.css';

export default function CaribbeanGoods() {
  const headingRef = useRef(null);
  const reducedMotion = useReducedMotion();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    headingRef.current?.focus({ preventScroll: true });
  }, []);
  const reveal = {
    initial: reducedMotion ? false : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: reducedMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] },
  };
  return (
    <main className="caribbean-story" id="project-main" aria-labelledby="caribbean-title">
      <nav className="cg-navigation" aria-label="Project navigation">
        <a href="#work" className="cg-back"><span aria-hidden="true">←</span> Back to projects</a>
        <a href="#home" className="cg-signature">Cristian Aguirre <span>/ Portfolio</span></a>
      </nav>
      <header className="cg-hero cg-container">
        <p className="cg-eyebrow"><span /> PROJECT JOURNAL <span className="cg-hero-index">01 / FULL-STACK WEB PLATFORM</span></p>
        <h1 ref={headingRef} tabIndex={-1} id="caribbean-title">Caribbean<br /><span>Goods.</span></h1>
        <div className="cg-hero-bottom"><p>{caribbeanGoods.introduction}</p><a href="#cg-interface" className="cg-explore" onClick={(event) => { event.preventDefault(); document.getElementById('cg-interface')?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' }); }}>Explore the interface <span aria-hidden="true">↓</span></a></div>
        <ul className="cg-platform-labels" aria-label="Platform experiences"><li>Web development</li><li>User experience</li><li>Full stack</li></ul>
        <span aria-hidden="true" className="cg-orbit cg-orbit-one" /><span aria-hidden="true" className="cg-orbit cg-orbit-two" />
      </header>
      <motion.figure {...reveal} className="cg-showcase cg-container" id="cg-interface">
        <div className="cg-browser-bar"><span className="cg-browser-dots" aria-hidden="true"><i /><i /><i /></span><span>Caribbean Goods / Corporate website</span><span aria-hidden="true">↗</span></div>
        <img src={screenshot} alt="Caribbean Goods homepage with coffee illustrations, importer introduction, and navigation for roasters" width="1920" height="1080" loading="eager" />
        <figcaption><span>01 — Corporate homepage</span><span>Actual project screenshot</span></figcaption>
      </motion.figure>
      <section className="cg-context cg-container" aria-labelledby="cg-overview-title">
        <motion.div {...reveal}><p className="cg-eyebrow">THE PROJECT</p><h2 id="cg-overview-title">Specialty coffee.<br />Digital experiences.</h2></motion.div>
        <motion.div {...reveal} className="cg-context-copy"><p>{caribbeanGoods.overview}</p><p className="cg-objective">{caribbeanGoods.objective}</p><dl><div><dt>My role</dt><dd>Full-stack development</dd></div><div><dt>Scope</dt><dd>Interfaces · Application development</dd></div><div><dt>Core stack</dt><dd>React · TypeScript · Node.js · Firebase · AWS</dd></div></dl></motion.div>
      </section>
      <section className="cg-chapter cg-container" aria-labelledby="cg-role-title">
        <motion.div {...reveal} className="cg-chapter-heading"><p className="cg-eyebrow">MY CONTRIBUTION</p><h2 id="cg-role-title">From requirements<br />to working software.</h2></motion.div>
        <motion.div {...reveal} className="cg-contribution-copy">{caribbeanGoods.contribution.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</motion.div>
      </section>
      <section className="cg-chapter cg-container" aria-labelledby="cg-platform-title">
        <motion.div {...reveal} className="cg-chapter-heading"><p className="cg-eyebrow">WHAT I BUILT</p><h2 id="cg-platform-title">Three perspectives.<br />One connected experience.</h2></motion.div>
        <div className="cg-modules">{caribbeanGoods.modules.map((module, index) => <motion.article key={module.title} {...reveal}><div className="cg-module-label"><span>0{index + 1}</span><span>{module.label}</span></div><h3>{module.title}</h3><p>{module.text}</p></motion.article>)}</div>
      </section>
      <section className="cg-details cg-container" aria-labelledby="cg-details-title">
        <motion.div {...reveal} className="cg-section-heading"><p className="cg-eyebrow">A CLOSER LOOK</p><h2 id="cg-details-title">The details tell the story.</h2><p>The public-facing side of the platform, viewed up close.</p></motion.div>
        <div className="cg-detail-grid">
          <motion.figure {...reveal} className="cg-crop cg-crop-art"><div><img src={screenshot} alt="Close-up of the homepage's hand-drawn coffee illustration and green grid" width="1920" height="1080" loading="lazy" /></div><figcaption><span>01 / Illustration & identity</span><p>Organic shapes and coffee-inspired artwork give the interface its distinctive character.</p></figcaption></motion.figure>
          <motion.figure {...reveal} className="cg-crop cg-crop-navigation"><div><img src={screenshot} alt="Close-up of the actual homepage navigation: Ethos, About Us, Roasters, Contact, Subscribe, and ICX" width="1920" height="1080" loading="lazy" /></div><figcaption><span>02 / Navigation & hierarchy</span><p>The header brings the brand, information, and paths for visitors together.</p></figcaption></motion.figure>
        </div>
        <p className="cg-image-note">These detail views are crops of the public-facing corporate homepage.</p>
      </section>
      <section className="cg-chapter cg-container" aria-labelledby="cg-challenges-title">
        <motion.div {...reveal} className="cg-chapter-heading"><p className="cg-eyebrow">DEVELOPMENT APPROACH</p><h2 id="cg-challenges-title">Thoughtful implementation.</h2></motion.div>
        <div className="cg-challenges">{caribbeanGoods.challenges.map((challenge) => <motion.article key={challenge.title} {...reveal}><h3>{challenge.title}</h3><p>{challenge.text}</p></motion.article>)}</div>
      </section>
      <section className="cg-chapter cg-container" aria-labelledby="cg-stack-title">
        <motion.div {...reveal} className="cg-chapter-heading"><p className="cg-eyebrow">BUILT WITH</p><h2 id="cg-stack-title">The technical toolkit.</h2></motion.div>
        <div className="cg-stack">{caribbeanGoods.stack.map((group) => <motion.div key={group.label} {...reveal}><h3>{group.label}</h3><ul>{group.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></motion.div>)}</div>
      </section>
      <motion.section {...reveal} className="cg-result cg-container" aria-labelledby="cg-result-title"><p className="cg-eyebrow">THE RESULT</p><h2 id="cg-result-title">Business needs,<br />working software.</h2><div><p>{caribbeanGoods.outcome}</p><p>{caribbeanGoods.reflection}</p></div></motion.section>
      <motion.section {...reveal} className="cg-closing cg-container" aria-labelledby="cg-closing-title"><p className="cg-eyebrow">KEEP EXPLORING</p><h2 id="cg-closing-title">More ideas.<br />Different perspectives.</h2><div><a href="#work" className="cg-primary-link"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> Back to all projects</a>{caribbeanGoods.liveUrl && <a href={caribbeanGoods.liveUrl} target="_blank" rel="noreferrer" className="cg-live-link">Visit live website <span aria-hidden="true">↗</span></a>}</div></motion.section>
      <footer className="cg-footer cg-container"><span>Cristian Aguirre</span><a href="#contact">Let’s start a conversation ↗</a></footer>
    </main>
  );
}

