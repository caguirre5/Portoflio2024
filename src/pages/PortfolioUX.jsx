import { useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faArrowDown, faAsterisk, faLayerGroup, faCode, faPenRuler } from '@fortawesome/free-solid-svg-icons';
import design from '../assets/projects/UX_Portfolio.png';
import firstBuild from '../assets/projects/WEB_Portfolio.png';
import figmaBoard from '../assets/projects/Portfolio_FigmaBoard.jpg';
import './PortfolioUX.css';

const figmaUrl = 'https://www.figma.com/design/MR4Bj1bxgSFeSEGqbcgC3D/WebPortfolio?node-id=3-3';
const studies = [
  { id: 'design', label: 'The Figma design', image: design, alt: 'Early Figma portfolio design with a mountain landscape, a large name and role, top navigation and a light-theme control', caption: '01 / The initial visual direction', note: 'Original design image' },
  { id: 'build', label: 'The first web version', image: firstBuild, alt: 'The first implemented portfolio website with the mountain hero, navigation, large name and frontend developer title', caption: '02 / The design becomes a website', note: 'Screenshot of the first web implementation' },
];
const decisions = [
  { number: '01', title: 'Give the first screen a point of view.', text: 'The mountain landscape, oversized name and role establish a personal identity before visitors reach the rest of the content.', tag: 'Visual identity' },
  { number: '02', title: 'Make the structure easy to recognize.', text: 'About, Skills, Work and Contact divide the page into familiar destinations. Large background labels and repeated section patterns explore how to guide the eye.', tag: 'Hierarchy & navigation' },
  { number: '03', title: 'Try variations before settling.', text: 'The Figma file includes light and dark directions, revised desktop layouts and a narrow-screen proposal. It records an early attempt to compare visual possibilities.', tag: 'Layout exploration' },
];

export default function PortfolioUX() {
  const heading = useRef(null);
  const [studyId, setStudyId] = useState('design');
  const reducedMotion = useReducedMotion();
  const selected = studies.find((study) => study.id === studyId);
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    heading.current?.focus({ preventScroll: true });
  }, []);
  const reveal = { initial: reducedMotion ? false : { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .12 }, transition: { duration: reducedMotion ? 0 : .55, ease: [.22, 1, .36, 1] } };
  const explore = (event) => {
    event.preventDefault();
    document.getElementById('ux-origin')?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' });
  };
  return <main className="portfolio-ux-story" aria-labelledby="ux-title">
    <nav className="ux-navigation" aria-label="Project navigation">
      <a href="#work"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> Back to projects</a>
      <span>THE DESIGN ARCHIVE / 01</span>
      <a href={figmaUrl} target="_blank" rel="noreferrer">View Figma <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
    </nav>
    <header className="ux-hero ux-container">
      <div className="ux-hero-top"><p className="ux-eyebrow">PERSONAL PORTFOLIO / FIRST UX EXPLORATION</p><span className="ux-archive-label">EARLY WORK · A LOOK BACK</span></div>
      <div className="ux-hero-grid">
        <div><h1 id="ux-title" ref={heading} tabIndex={-1}>Before<br />the <em>build.</em></h1><p className="ux-hero-subtitle">My first steps in UX.<br />The beginning of this portfolio.</p><a href="#ux-origin" className="ux-hero-link" onClick={explore}>Start at the beginning <FontAwesomeIcon icon={faArrowDown} aria-hidden="true" /></a></div>
        <div className="ux-hero-board"><div className="ux-board-label"><span><i /><i /><i /></span><span>PORTFOLIO — FIRST PASS</span></div><img src={design} alt="The initial mountain-inspired portfolio hero designed in Figma" width="1667" height="941" /><div className="ux-hero-annotation"><FontAwesomeIcon icon={faAsterisk} aria-hidden="true" /><span>Same mountains.<br /><strong>A different starting point.</strong></span></div><span className="ux-file-stamp">.FIG<br /><small>IDEA → INTERFACE</small></span></div>
      </div>
      <div className="ux-hero-bottom"><p>An early Figma exploration that became a first website — and was later rethought into the portfolio you’re browsing now.</p><span>FIGMA / VISUAL DESIGN / LEARNING BY MAKING</span></div>
    </header>

    <section className="ux-origin" id="ux-origin" aria-labelledby="ux-origin-title"><div className="ux-container ux-origin-grid"><motion.div {...reveal}><p className="ux-eyebrow">THE STARTING POINT</p><h2 id="ux-origin-title">A first attempt.<br /><em>A useful beginning.</em></h2></motion.div><motion.div {...reveal} className="ux-prose"><p>I created this design quite some time ago as one of my first approaches to UX. It was a way to work out how I wanted to introduce myself, organize my skills and present my projects before building the website.</p><p>The design reached an initial web implementation. Since then, the portfolio has been substantially redesigned. This case looks back at that early version as a learning milestone, rather than presenting it as the current interface.</p><dl className="ux-facts"><div><dt>Project</dt><dd>Personal portfolio</dd></div><div><dt>My work</dt><dd>Initial UX/UI design & first web implementation</dd></div><div><dt>Context</dt><dd>Early exploration · Self-directed learning</dd></div><div><dt>Today</dt><dd>Redesigned and evolved</dd></div></dl></motion.div></div></section>

    <section className="ux-canvas-section" aria-labelledby="ux-canvas-title"><div className="ux-container"><motion.header {...reveal} className="ux-section-heading ux-heading-row"><div><p className="ux-eyebrow">ON THE FIGMA CANVAS</p><h2 id="ux-canvas-title">One idea.<br /><em>Room to explore.</em></h2></div><p>The original file keeps several directions side by side: Web-Light, Web-Dark and their revised versions, alongside a mobile proposal.</p></motion.header><motion.figure {...reveal} className="ux-canvas"><div className="ux-canvas-bar"><span><FontAwesomeIcon icon={faLayerGroup} aria-hidden="true" /> WebPortfolio / Original design file</span><a href={figmaUrl} target="_blank" rel="noreferrer">Open the canvas <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></div><img src={figmaBoard} alt="Overview of the original Figma canvas showing a mobile proposal and four tall portfolio layouts labeled Web-Light, Web-Dark, Web-Light-v2 and Web-Dark-v2" width="800" height="610" loading="lazy" /><figcaption><span>Actual Figma canvas overview</span><span>Early explorations, preserved as they were.</span></figcaption></motion.figure><p className="ux-canvas-note">A visual design study focused on layout, hierarchy and presentation, preserved from the original Figma file.</p></div></section>

    <section className="ux-decisions ux-container" aria-labelledby="ux-decisions-title"><motion.header {...reveal} className="ux-section-heading"><p className="ux-eyebrow">WHAT I WAS FIGURING OUT</p><h2 id="ux-decisions-title">Learning to make<br /><em>intentional choices.</em></h2></motion.header><div className="ux-decision-list">{decisions.map((item) => <motion.article key={item.number} {...reveal}><span className="ux-decision-number">{item.number}</span><div><span className="ux-decision-tag">{item.tag}</span><h3>{item.title}</h3></div><p>{item.text}</p></motion.article>)}</div></section>

    <section className="ux-translation" aria-labelledby="ux-translation-title"><div className="ux-container"><motion.header {...reveal} className="ux-section-heading ux-heading-row"><div><p className="ux-eyebrow">FROM FRAME TO BROWSER</p><h2 id="ux-translation-title">It didn’t stay<br /><em>on the canvas.</em></h2></div><p>The initial design became an early web version. Switch between the two to see how the visual direction carried into the implementation.</p></motion.header><div className="ux-study-controls" role="group" aria-label="Compare the initial design and first web implementation">{studies.map((study, index) => <button type="button" key={study.id} aria-pressed={studyId === study.id} aria-controls="ux-study-screen" onClick={() => setStudyId(study.id)}><FontAwesomeIcon icon={index === 0 ? faPenRuler : faCode} aria-hidden="true" />{study.label}</button>)}</div><div className="ux-study-screen" id="ux-study-screen"><AnimatePresence mode="wait" initial={false}><motion.img key={selected.id} src={selected.image} alt={selected.alt} width={selected.id === 'design' ? '1667' : '1918'} height={selected.id === 'design' ? '941' : '1042'} initial={{ opacity: reducedMotion ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: reducedMotion ? 1 : 0 }} transition={{ duration: reducedMotion ? 0 : .2 }} /></AnimatePresence></div><div className="ux-study-caption" aria-live="polite"><span>{selected.caption}</span><span>{selected.note}</span></div></div></section>

    <section className="ux-evolution ux-container" aria-labelledby="ux-evolution-title"><motion.header {...reveal} className="ux-section-heading"><p className="ux-eyebrow">THE THROUGH LINE</p><h2 id="ux-evolution-title">Not the final answer.<br /><em>The first chapter.</em></h2></motion.header><div className="ux-timeline"><motion.article {...reveal}><span>01 / EXPLORE</span><h3>The Figma study</h3><p>A first approach to UX/UI, exploring the hierarchy, content structure and visual identity of a personal portfolio.</p><small>Designing a direction</small></motion.article><motion.article {...reveal}><span>02 / BUILD</span><h3>The initial website</h3><p>The early design moved into a web implementation, bringing the mountain scene and the page structure into the browser.</p><small>Turning ideas into an interface</small></motion.article><motion.article {...reveal}><span>03 / REVISIT</span><h3>The current portfolio</h3><p>A later redesign reworked the presentation, content and interactions. The original landscape remains part of the portfolio’s visual identity.</p><a href="#home">See the current version <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a></motion.article></div></section>

    <motion.section {...reveal} className="ux-reflection ux-container" aria-labelledby="ux-reflection-title"><FontAwesomeIcon icon={faAsterisk} aria-hidden="true" /><div><p className="ux-eyebrow">LOOKING BACK</p><h2 id="ux-reflection-title">A starting point<br />worth keeping.</h2><p>This project marks the point where I began thinking beyond implementing a screen: how the content is organized, what draws attention and how the interface tells a story.</p><p>Its value is in that first step — and in being able to revisit it, recognize its limits and keep improving the work.</p></div></motion.section>
    <section className="ux-closing ux-container"><p className="ux-eyebrow">THE NEXT CHAPTER</p><h2>More practice.<br /><em>New perspectives.</em></h2><div><a href="#work" className="ux-primary"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> Back to all projects</a><a href={figmaUrl} target="_blank" rel="noreferrer" className="ux-secondary">Explore the original Figma file <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></div></section>
    <footer className="ux-footer ux-container"><span>Cristian Aguirre / The design archive</span><a href="#contact">Let’s start a conversation <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a></footer>
  </main>;
}
