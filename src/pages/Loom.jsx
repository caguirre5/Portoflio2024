import { useLayoutEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import cherries from '../assets/projects/loom/coffee-cherries.png';
import handloom from '../assets/projects/loom/handloom.png';
import harvest from '../assets/projects/loom/harvest.png';
import logo from '../assets/projects/loom/logo.png';
import mark from '../assets/projects/loom/mark.png';
import autonomy from '../assets/projects/loom/autonomy.png';
import mastery from '../assets/projects/loom/mastery.png';
import purpose from '../assets/projects/loom/purpose.png';
import homeScreen from '../assets/projects/loom/site-home.png';
import valuesScreen from '../assets/projects/loom/site-values.png';
import storyScreen from '../assets/projects/loom/site-story.png';
import './Loom.css';

const views = [
  { id: 'welcome', label: 'First impression', image: homeScreen, alt: 'Actual Loom homepage with an olive navigation bar, coffee-cherry photography and a central Loom Coffeehouse identity panel', title: 'A welcome rooted in the coffee.', text: 'An immersive opening pairs coffee-origin photography with the brand’s identity.' },
  { id: 'values', label: 'Brand values', image: valuesScreen, alt: 'Actual Loom values section with diamond-shaped photographs for Autonomy, Mastery and Purpose on a warm neutral background', title: 'Values, given a visual rhythm.', text: 'Three diamond-shaped images connect the site’s content to the geometric language of the brand.' },
  { id: 'story', label: 'People & origin', image: storyScreen, alt: 'Actual Loom storytelling section showing hands holding coffee cherries above a woven burlap texture', title: 'A closer connection to the story.', text: 'Photography, space and short passages of copy bring the people behind the coffee into focus.' },
];
const pillars = [
  { name: 'Autonomy', image: autonomy, text: 'Room for people to grow and work at their own pace.' },
  { name: 'Mastery', image: mastery, text: 'Care, craft and the pursuit of doing things well.' },
  { name: 'Purpose', image: purpose, text: 'The shared thread that brings people together.' },
];
const colors = [
  { name: 'Olive', hex: '#575F3D', light: true },
  { name: 'Roasted caramel', hex: '#A76734', light: true },
  { name: 'Warm stone', hex: '#DEDBD6', light: false },
  { name: 'Soft slate', hex: '#8292A7', light: false },
];

export default function Loom() {
  const heading = useRef(null);
  const [viewId, setViewId] = useState('welcome');
  const reducedMotion = useReducedMotion();
  const selected = views.find((view) => view.id === viewId);
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    heading.current?.focus({ preventScroll: true });
  }, []);
  const reveal = { initial: reducedMotion ? false : { opacity: 0, y: 22 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .1 }, transition: { duration: reducedMotion ? 0 : .65, ease: [.22, 1, .36, 1] } };
  const explore = (event) => {
    event.preventDefault();
    document.getElementById('loom-interface')?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' });
  };

  return <main className="loom-story" aria-labelledby="loom-title">
    <nav className="lm-navigation" aria-label="Project navigation"><a href="#work"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> Back to projects</a><span>PROJECT JOURNAL / LOOM COFFEEHOUSE</span><a href="#home">Cristian Aguirre <span>/ Portfolio</span></a></nav>
    <header className="lm-hero"><div className="lm-container lm-hero-grid"><div className="lm-hero-copy"><p className="lm-eyebrow">COFFEE, CRAFT & CONNECTION</p><h1 id="loom-title" ref={heading} tabIndex={-1}>Loom<span>Coffeehouse.</span></h1><p className="lm-hero-line">A place to pause.<br /><em>A story to discover.</em></p><p className="lm-hero-description">A story-led web experience for a coffeehouse, weaving its identity, people and purpose into a warm digital introduction.</p><a href="#loom-interface" onClick={explore} className="lm-hero-link">Explore the website <FontAwesomeIcon icon={faArrowDown} aria-hidden="true" /></a><div className="lm-hero-meta"><span>Frontend development</span><span>Landing page & brand storytelling</span></div></div><div className="lm-hero-visual"><div className="lm-photo-arch"><img src={cherries} alt="Coffee cherries growing on a branch, from the original Loom website photography" width="1920" height="1080" /></div><div className="lm-brand-card"><img src={logo} alt="Loom Coffeehouse logo with three interlocking diamond motifs" width="576" height="532" /><span>COFFEE / PEOPLE / PURPOSE</span></div><span className="lm-photo-caption">A thread from origin to experience.</span></div></div></header>
    <div className="lm-thread-strip"><span>Rooted in coffee.</span><img src={mark} alt="" width="475" height="232" /><span>Woven around people.</span></div>

    <section className="lm-context lm-container" aria-labelledby="lm-context-title"><motion.div {...reveal}><p className="lm-eyebrow">THE PROJECT</p><h2 id="lm-context-title">More than a cup.<br /><em>A sense of place.</em></h2></motion.div><motion.div {...reveal} className="lm-prose"><p>Loom Coffeehouse is a café brand with its own character. This project focuses on its web presence: a landing-page-led experience that introduces the coffeehouse through imagery, storytelling and clear sections.</p><p>The site moves from a visual welcome into the brand’s story, its values and ways to connect. The emphasis is on atmosphere and identity, giving visitors a feel for Loom before they ever step inside.</p><dl className="lm-facts"><div><dt>Project type</dt><dd>Brand website / Landing page</dd></div><div><dt>My work</dt><dd>Frontend development</dd></div><div><dt>Focus</dt><dd>Visual presentation · Content · Responsive layouts</dd></div><div><dt>Core stack</dt><dd>React · Vite · Tailwind CSS</dd></div></dl></motion.div></section>

    <section className="lm-weaving" aria-labelledby="lm-weaving-title"><div className="lm-container lm-weaving-grid"><motion.figure {...reveal}><img src={handloom} alt="Close-up of a handloom with warm brown, cream and green threads, from the original brand imagery" width="645" height="1080" loading="lazy" /><figcaption>01 / The visual story behind the name</figcaption></motion.figure><motion.div {...reveal} className="lm-weaving-copy"><p className="lm-eyebrow">THE THREAD THAT CONNECTS IT ALL</p><h2 id="lm-weaving-title">People.<br />Moments.<br /><em>Memories.</em></h2><p>The original website tells Loom’s story through weaving, drawing on the image of the Guatemalan handloom. Threads become a way to talk about people, shared moments and the connections that grow around coffee.</p><p>I carried that story into a visual web experience, using generous imagery, changing backgrounds and a measured rhythm between photographs and text.</p><img src={mark} alt="" width="475" height="232" /></motion.div></div></section>

    <section className="lm-showcase lm-container" id="loom-interface" aria-labelledby="lm-interface-title"><motion.header {...reveal} className="lm-section-heading lm-heading-row"><div><p className="lm-eyebrow">A WALK THROUGH THE WEBSITE</p><h2 id="lm-interface-title">Let the story<br /><em>unfold.</em></h2></div><p>Three actual views from the project, from the opening impression to the values and stories behind the brand.</p></motion.header><div className="lm-view-controls" role="group" aria-label="Explore Loom website screenshots">{views.map((view, index) => <button type="button" key={view.id} aria-pressed={viewId === view.id} aria-controls="lm-current-screen" onClick={() => setViewId(view.id)}><span aria-hidden="true">0{index + 1}</span>{view.label}</button>)}</div><div className="lm-browser"><div className="lm-browser-bar" aria-hidden="true"><span><i /><i /><i /></span><span>LOOM COFFEEHOUSE / WEBSITE</span><img src={mark} alt="" width="475" height="232" /></div><div className="lm-screen" id="lm-current-screen"><AnimatePresence mode="wait" initial={false}><motion.img key={selected.id} src={selected.image} alt={selected.alt} width="1918" height="997" initial={{ opacity: reducedMotion ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: reducedMotion ? 1 : 0 }} transition={{ duration: reducedMotion ? 0 : .22 }} /></AnimatePresence></div></div><div className="lm-screen-caption" aria-live="polite"><div><h3>{selected.title}</h3><p>{selected.text}</p></div><span>Actual project screenshots</span></div></section>

    <section className="lm-values" aria-labelledby="lm-values-title"><div className="lm-container"><motion.header {...reveal} className="lm-section-heading"><p className="lm-eyebrow">THE BRAND’S THREE THREADS</p><h2 id="lm-values-title">A shared language<br /><em>of values.</em></h2><p>Autonomy, Mastery and Purpose shape the original site’s content. Their imagery echoes the diamonds in the logo, creating a recognizable link between the identity and the page.</p></motion.header><div className="lm-pillars">{pillars.map((pillar, index) => <motion.article {...reveal} key={pillar.name}><div className="lm-pillar-photo"><img src={pillar.image} alt={`${pillar.name} coffee imagery in a diamond shape, from the original Loom website`} width="518" height="814" loading="lazy" /></div><span>0{index + 1}</span><h3>{pillar.name}</h3><p>{pillar.text}</p></motion.article>)}</div></div></section>

    <section className="lm-brand-section lm-container" aria-labelledby="lm-brand-title"><motion.header {...reveal} className="lm-section-heading lm-heading-row"><div><p className="lm-eyebrow">A PALETTE WITH CHARACTER</p><h2 id="lm-brand-title">Earthy tones.<br /><em>Room to breathe.</em></h2></div><p>The original palette balances olive and roasted caramel with warm neutrals and a softer slate accent. Alternating light and dark surfaces gives the imagery contrast.</p></motion.header><motion.div {...reveal} className="lm-palette">{colors.map((color) => <div key={color.hex} className={color.light ? 'lm-color-light' : ''} style={{ backgroundColor: color.hex }}><span>{color.name}</span><code>{color.hex}</code></div>)}</motion.div><div className="lm-type-grid"><motion.div {...reveal} className="lm-type-sample"><span>THE ORIGINAL HEADING TYPEFACE</span><p>Lustria.</p><small>A serif voice for a warm, editorial feel.</small></motion.div><motion.div {...reveal} className="lm-brand-copy"><h3>Let the brand do the talking.</h3><p>The project combines expressive serif headings with straightforward body text, photography and repeated geometric motifs. The visual assets and identity belong to Loom; my work brings them together in the frontend.</p><p>The result is a website that introduces the coffeehouse through the feel of its content as much as through the words.</p></motion.div></div></section>

    <motion.figure {...reveal} className="lm-harvest"><img src={harvest} alt="Hands holding freshly harvested red coffee cherries, from Loom’s original website imagery" width="1920" height="737" loading="lazy" /><figcaption><span>FROM THE ORIGIN</span><p>Coffee has a story.<br /><em>The website makes space for it.</em></p></figcaption></motion.figure>

    <section className="lm-build lm-container" aria-labelledby="lm-build-title"><motion.header {...reveal} className="lm-section-heading"><p className="lm-eyebrow">MY CONTRIBUTION</p><h2 id="lm-build-title">The craft behind<br /><em>the experience.</em></h2></motion.header><div className="lm-build-details"><motion.article {...reveal}><span>01 / STRUCTURE</span><h3>Content with a rhythm</h3><p>Built the frontend around distinct sections, combining photography, brand copy, values and contact information into a coherent browsing experience.</p></motion.article><motion.article {...reveal}><span>02 / PRESENTATION</span><h3>Identity across screens</h3><p>Used responsive layouts, reusable presentation patterns and the supplied visual assets to carry the brand’s character across different screen sizes.</p></motion.article><motion.article {...reveal}><span>03 / INTERACTION</span><h3>Movement with restraint</h3><p>The source uses React, Vite and Tailwind CSS, with Framer Motion for transitions and a shared navigation structure for the content areas.</p></motion.article></div><motion.div {...reveal} className="lm-toolkit"><span>BUILT WITH</span><ul>{['React', 'Vite', 'Tailwind CSS', 'Framer Motion'].map((tool) => <li key={tool}>{tool}</li>)}</ul></motion.div></section>

    <section className="lm-closing"><div className="lm-container"><p className="lm-eyebrow">A DISTINCT IDENTITY. A DIGITAL INTRODUCTION.</p><h2>A little atmosphere.<br /><em>A lasting impression.</em></h2><p>Loom’s case is about bringing a coffeehouse’s identity into a story-led web experience — with space for the people, craft and connections behind it.</p><a href="#work" className="lm-primary"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> Back to all projects</a></div><img src={mark} alt="" width="475" height="232" /></section>
    <footer className="lm-footer lm-container"><span>Cristian Aguirre / Loom Coffeehouse</span><a href="#contact">Let’s start a conversation <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a></footer>
  </main>;
}
