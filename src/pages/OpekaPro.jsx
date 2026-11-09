import { useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faArrowDown, faBoxOpen, faBoxesStacked, faReceipt, faUsers, faCashRegister, faBuilding } from '@fortawesome/free-solid-svg-icons';
import workspace from '../assets/projects/Opeka_Workspace.png';
import admin from '../assets/projects/Opeka_Admin.png';
import login from '../assets/projects/Opeka_Login.png';
import { opekaModules, opekaDecisions, opekaStack } from '../data/opeka';
import './OpekaPro.css';

const icons = { products: faBoxOpen, inventory: faBoxesStacked, sales: faReceipt, customers: faUsers, cash: faCashRegister, organizations: faBuilding };
const views = [
  { id: 'workspace', label: 'Business workspace', image: workspace, alt: 'Opeka Pro development workspace with product and inventory navigation, an empty activity overview and operational shortcuts', title: 'The day-to-day workspace.', description: 'A single starting point for products, stock, sales, customers and cash activity.', trim: true },
  { id: 'administration', label: 'Platform administration', image: admin, alt: 'Opeka Pro platform administration dashboard with organization counts, a recent organization and administrative actions', title: 'A separate view of the platform.', description: 'Organization and user administration has its own experience, apart from everyday business operations.', trim: true },
  { id: 'access', label: 'Sign-in experience', image: login, alt: 'Opeka Pro sign-in screen with a deep teal introduction panel and a warm ivory email and password form', title: 'A focused point of entry.', description: 'A simple sign-in experience with session management through Firebase Authentication.', trim: false },
];

export default function OpekaPro() {
  const heading = useRef(null);
  const [viewId, setViewId] = useState('workspace');
  const selected = views.find((view) => view.id === viewId);
  const reducedMotion = useReducedMotion();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    heading.current?.focus({ preventScroll: true });
  }, []);
  const reveal = { initial: reducedMotion ? false : { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .12 }, transition: { duration: reducedMotion ? 0 : .55, ease: [.22, 1, .36, 1] } };
  const explore = (event) => {
    event.preventDefault();
    document.getElementById('opeka-interface')?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' });
  };

  return <main className="opeka-story" aria-labelledby="opeka-title">
    <nav className="op-navigation" aria-label="Project navigation"><a href="#work"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> Back to projects</a><a href="#home">Cristian Aguirre <span>/ Portfolio</span></a></nav>
    <header className="op-hero op-container">
      <div className="op-hero-top"><p className="op-eyebrow">PROJECT JOURNAL / BUSINESS SOFTWARE</p><span className="op-status"><i aria-hidden="true" /> In development</span></div>
      <div className="op-hero-grid"><div><h1 id="opeka-title" ref={heading} tabIndex={-1}>Opeka <span>Pro</span></h1><p className="op-hero-tagline">Everyday operations.<br /><em>A clearer perspective.</em></p></div><div className="op-hero-copy"><p>A web platform for small and medium-sized businesses, bringing products, inventory and commercial operations into one connected workspace.</p><a href="#opeka-interface" onClick={explore}>Explore the application <FontAwesomeIcon icon={faArrowDown} aria-hidden="true" /></a></div></div>
      <div className="op-hero-foot"><span>Concept → Design → Full-stack development</span><span>Next.js / TypeScript / Firebase</span><span>Product in active development</span></div>
    </header>

    <section className="op-showcase op-container" id="opeka-interface" aria-labelledby="op-showcase-title">
      <div className="op-view-switcher" role="group" aria-label="Application views">{views.map((view, index) => <button key={view.id} type="button" aria-pressed={viewId === view.id} aria-controls="op-current-view" onClick={() => setViewId(view.id)}><span aria-hidden="true">0{index + 1}</span>{view.label}</button>)}</div>
      <div className="op-screen-frame"><div className="op-screen-toolbar" aria-hidden="true"><span><i /><i /><i /></span><span>OPEKA PRO / DEVELOPMENT BUILD</span><span>OP</span></div><div className="op-screen-crop"><AnimatePresence mode="wait" initial={false}><motion.img key={selected.id} src={selected.image} alt={selected.alt} className={selected.trim ? 'op-screen-trimmed' : ''} width="1917" height={selected.id === 'access' ? '995' : '1033'} initial={{ opacity: reducedMotion ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: reducedMotion ? 1 : 0 }} transition={{ duration: reducedMotion ? 0 : .18 }} /></AnimatePresence></div></div>
      <div className="op-view-caption" id="op-current-view" aria-live="polite"><div><h2 id="op-showcase-title">{selected.title}</h2><p>{selected.description}</p></div><span>Actual project screenshots · Development state shown</span></div>
    </section>

    <div className="op-paper">
      <section className="op-context op-container" aria-labelledby="op-context-title"><motion.div {...reveal}><p className="op-eyebrow">THE PROJECT</p><h2 id="op-context-title">Many moving parts.<br /><em>One place to work.</em></h2></motion.div><motion.div {...reveal} className="op-prose"><p>Opeka Pro is an application I’m building for businesses that sell physical products. Its goal is to centralize the catalog, inventory, sales, purchases, customers and cash operations in a clear, accessible experience.</p><p>The project has implemented modules integrated with Firebase and continues to evolve. I’m responsible for the functional definition, interface design, architecture, frontend and backend service integrations.</p><dl className="op-facts"><div><dt>My role</dt><dd>End-to-end product development</dd></div><div><dt>Audience</dt><dd>Small & medium-sized businesses</dd></div><div><dt>Status</dt><dd>Implemented modules · Ongoing development</dd></div></dl></motion.div></section>

      <section className="op-chapter op-container" aria-labelledby="op-modules-title"><motion.header {...reveal} className="op-section-heading"><p className="op-eyebrow">IMPLEMENTED MODULES</p><h2 id="op-modules-title">Built around the business.</h2><p>Focused areas that share data and work together, from the first product record to day-to-day operations.</p></motion.header><div className="op-modules">{opekaModules.map((item, index) => <motion.article {...reveal} key={item.title}><div><FontAwesomeIcon icon={icons[item.icon]} aria-hidden="true" /><span>0{index + 1}</span></div><h3>{item.title}</h3><p>{item.text}</p></motion.article>)}</div></section>

      <section className="op-flow op-container" aria-labelledby="op-flow-title"><motion.div {...reveal} className="op-section-heading"><p className="op-eyebrow">THE CONNECTION THAT MATTERS</p><h2 id="op-flow-title">Every movement<br /><em>has a story.</em></h2><p>Connecting purchases, sales and inventory means keeping track of how stock changes, rather than treating each module as an isolated screen.</p></motion.div><motion.div {...reveal} className="op-flow-map"><article><span>01 / INCOMING</span><FontAwesomeIcon icon={faBoxOpen} aria-hidden="true" /><h3>Purchases</h3><p>Record incoming products.</p></article><span className="op-flow-arrow" aria-hidden="true"><FontAwesomeIcon icon={faArrowRight} /></span><article className="op-flow-center"><span>02 / CONNECTED RECORDS</span><FontAwesomeIcon icon={faBoxesStacked} aria-hidden="true" /><h3>Inventory</h3><p>Stock, adjustments & movement history.</p></article><span className="op-flow-arrow" aria-hidden="true"><FontAwesomeIcon icon={faArrowRight} /></span><article><span>03 / OUTGOING</span><FontAwesomeIcon icon={faReceipt} aria-hidden="true" /><h3>Sales</h3><p>Register products leaving stock.</p></article></motion.div><p className="op-note">Conceptual workflow. Grouped persistence operations and movement records support consistency and traceability.</p></section>

      <section className="op-contribution op-container" aria-labelledby="op-contribution-title"><motion.header {...reveal} className="op-section-heading"><p className="op-eyebrow">MY CONTRIBUTION</p><h2 id="op-contribution-title">From the first idea<br /><em>to connected modules.</em></h2></motion.header><motion.div {...reveal} className="op-contribution-copy"><p>I’m developing the product from end to end: deciding how features fit together, designing the experience, organizing the code and implementing the application.</p><p>That work also includes shared components and contexts, application states, validated forms, response messages and the integration between functional areas.</p></motion.div><div className="op-decisions">{opekaDecisions.map((item, index) => <motion.article {...reveal} key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></motion.article>)}</div></section>
    </div>

    <section className="op-architecture op-container" aria-labelledby="op-architecture-title"><motion.div {...reveal} className="op-section-heading"><p className="op-eyebrow">THE FOUNDATION</p><h2 id="op-architecture-title">Different workspaces.<br /><em>Clear responsibilities.</em></h2></motion.div><motion.div {...reveal} className="op-foundation"><div className="op-workspaces"><article><span>BUSINESS EXPERIENCE</span><h3>Organization workspace</h3><p>Products, stock, customers and commercial activity.</p></article><article><span>PLATFORM EXPERIENCE</span><h3>Administration</h3><p>Organizations, users and platform-level access.</p></article></div><div className="op-layers"><span>Interface & shared components</span><span>Typed contracts & data access</span><span>Authentication · Firestore · Cloud Functions</span></div></motion.div><p className="op-note">The multi-organization approach provides workspaces per organization and a differentiated platform administration experience.</p></section>

    <section className="op-technical op-container" aria-labelledby="op-stack-title"><motion.header {...reveal} className="op-section-heading"><p className="op-eyebrow">BUILT WITH</p><h2 id="op-stack-title">The technical toolkit.</h2></motion.header><div className="op-stack">{opekaStack.map((group) => <motion.div {...reveal} key={group.label}><h3>{group.label}</h3><ul>{group.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></motion.div>)}</div><motion.aside {...reveal} className="op-validation"><p className="op-eyebrow">VALIDATION & CURRENT STATE</p><h3>Progress, presented honestly.</h3><p>Input validation, form constraints and error messages support information entry. TypeScript helps detect incompatible contracts during development, alongside compilation and static analysis. Opeka Pro remains in development; this case study does not claim verified production results or documented comprehensive automated coverage.</p></motion.aside></section>

    <motion.section {...reveal} className="op-result op-container" aria-labelledby="op-result-title"><div><p className="op-eyebrow">THE VALUE SO FAR</p><h2 id="op-result-title">A business idea.<br />A working foundation.</h2></div><p>The project has grown into an application with connected modules and persistent data. It demonstrates my ability to bring product thinking, interface design and full-stack implementation together, with a codebase organized for continued evolution.</p></motion.section>
    <section className="op-closing op-container"><p className="op-eyebrow">KEEP EXPLORING</p><h2>Another challenge.<br /><em>Another perspective.</em></h2><div><a className="op-primary" href="#work"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> Back to all projects</a><a className="op-next" href="#/projects/symma">Explore Symma <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a></div></section>
    <footer className="op-footer op-container"><span>Cristian Aguirre / Opeka Pro</span><a href="#contact">Let’s start a conversation <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a></footer>
  </main>;
}
