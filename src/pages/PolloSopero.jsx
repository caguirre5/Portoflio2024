import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faPlay, faExpand, faCompress, faXmark, faGamepad, faCarrot, faFire, faBowlFood, faStar, faUsers, faClock, faCode } from '@fortawesome/free-solid-svg-icons';
import menu from '../assets/projects/Pollo_Menu.png';
import levels from '../assets/projects/Pollo_Levels.png';
import kitchen from '../assets/projects/Pollo_Kitchen.png';
import gameplay from '../assets/projects/Pollo_Gameplay.png';
import './PolloSopero.css';

const itchUrl = 'https://caguirre5.itch.io/pollosopero';
// The published WebGL upload, hosted by itch.io. Loaded only after Play.
const gameEmbed = 'https://itch.io/embed-upload/11397797?color=412c26';
const recipe = [
  { icon: faCarrot, title: 'Grab & prep', text: 'Pick up ingredients, carry them to a station and start chopping.' },
  { icon: faFire, title: 'Mind the stove', text: 'Combine ingredients and keep an eye on the cooking progress.' },
  { icon: faBowlFood, title: 'Keep it moving', text: 'Coordinate around the kitchen while orders and the clock keep the pressure on.' },
];
const systems = [
  { title: 'Movement & interaction', file: 'PlayerMovement / PlayerLogic', text: 'CharacterController movement, animation parameters and raycasts connect the player to nearby kitchen stations.' },
  { title: 'Objects with a common language', file: 'Pickable / Holder', text: 'Shared base classes support carrying, placing and transferring objects. Stations extend that foundation with their own behavior.' },
  { title: 'Preparation as a sequence of states', file: 'Veg / Chopper / Container / Stove', text: 'Ingredients and containers move through preparation and cooking states, using timers and visible progress feedback.' },
  { title: 'Rules separated from the action', file: 'ContainerValidation / ProgressBar', text: 'A ScriptableObject defines allowed ingredient combinations and limits, while progress bars communicate timed actions in the scene.' },
];

export default function PolloSopero() {
  const titleRef = useRef(null);
  const dialogRef = useRef(null);
  const shellRef = useRef(null);
  const viewportRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [fullscreenError, setFullscreenError] = useState('');
  const [gameScale, setGameScale] = useState(1);
  const reducedMotion = useReducedMotion();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    titleRef.current?.focus({ preventScroll: true });
  }, []);
  useEffect(() => {
    if (!playing) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    let disposed = false;
    const viewport = viewportRef.current;
    const fitGame = () => {
      if (disposed) return;
      const bounds = viewport.getBoundingClientRect();
      setGameScale(Math.min(bounds.width / 960, bounds.height / 680));
    };
    const observer = new ResizeObserver(fitGame);
    observer.observe(viewport);
    fitGame();
    const onFullscreen = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onFullscreen);
    return () => {
      disposed = true;
      observer.disconnect();
      if (document.fullscreenElement && dialog.contains(document.fullscreenElement)) document.exitFullscreen().catch(() => {});
      dialog.close();
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('fullscreenchange', onFullscreen);
    };
  }, [playing]);
  const toggleFullscreen = async () => {
    setFullscreenError('');
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await shellRef.current.requestFullscreen();
    } catch {
      setFullscreenError('Fullscreen is unavailable here. You can keep playing in this window or open itch.io.');
    }
  };
  const goToGame = (event) => {
    event.preventDefault();
    const screen = document.getElementById('ps-play-screen');
    screen?.focus({ preventScroll: true });
    screen?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'center' });
  };
  const launch = () => { setFullscreenError(''); setFullscreen(false); setPlaying(true); };
  const reveal = { initial: reducedMotion ? false : { opacity: 0, y: 24, rotate: -1 }, whileInView: { opacity: 1, y: 0, rotate: 0 }, viewport: { once: true, amount: .12 }, transition: { duration: reducedMotion ? 0 : .5, ease: [.22, 1, .36, 1] } };

  return <main className="pollo-story" aria-labelledby="pollo-title">
    <nav className="ps-navigation" aria-label="Project navigation"><a href="#work"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> Back to projects</a><span><FontAwesomeIcon icon={faGamepad} aria-hidden="true" /> PLAYER SELECT / CRISTIAN AGUIRRE</span><a href={itchUrl} target="_blank" rel="noreferrer">itch.io <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></nav>
    <header className="ps-hero">
      <div className="ps-doodle ps-doodle-carrot" aria-hidden="true"><FontAwesomeIcon icon={faCarrot} /></div><div className="ps-doodle ps-doodle-star" aria-hidden="true"><FontAwesomeIcon icon={faStar} /></div>
      <div className="ps-container ps-hero-grid"><div className="ps-hero-copy"><p className="ps-kicker"><span /> A UNITY COOKING ADVENTURE</p><h1 ref={titleRef} tabIndex={-1} id="pollo-title">Pollo<br /><span>Sopero!</span></h1><p className="ps-tagline">A little soup.<br />A lot of <em>chaos.</em></p><p className="ps-hero-description">Two chefs. One kitchen. A deliciously hectic way to learn game programming.</p><p className="ps-hero-origin">An educational Overcooked clone, with a visual identity inspired by Pollo Campero of Guatemala.</p><div className="ps-hero-actions"><a className="ps-button" href="#ps-play-screen" onClick={goToGame}><FontAwesomeIcon icon={faGamepad} aria-hidden="true" /> EXPLORE THE DEMO</a><a className="ps-text-link" href={itchUrl} target="_blank" rel="noreferrer">View on itch.io <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></div><p className="ps-mobile-note"><FontAwesomeIcon icon={faGamepad} aria-hidden="true" /> Bring a keyboard! Play the demo on a desktop computer.</p><div className="ps-hero-tags"><span>Unity + C#</span><span>Local co-op</span><span>Learning project</span></div></div>
      <div className="ps-hero-art"><div className="ps-sticker"><FontAwesomeIcon icon={faUsers} aria-hidden="true" /><strong>2</strong><span>CHEFS<br />ONE KEYBOARD</span></div><figure className="ps-menu-shot"><img src={menu} alt="Pollo Sopero title screen with a cartoon chicken mascot and yellow start and credits buttons" width="953" height="591" /><figcaption>AN EDUCATIONAL OVERCOOKED CLONE. <span>Made to learn.</span></figcaption></figure><div className="ps-order-stub"><span>ORDER #001</span><strong>Have fun.<br />Don’t burn dinner.</strong><span><FontAwesomeIcon icon={faClock} aria-hidden="true" /> THE KITCHEN IS OPEN</span></div></div></div>
    </header>
    <div className="ps-checker" aria-hidden="true" />
    <div className="ps-order-strip"><span>GRAB.</span><FontAwesomeIcon icon={faStar} aria-hidden="true" /><span>CHOP.</span><FontAwesomeIcon icon={faStar} aria-hidden="true" /><span>COOK.</span><FontAwesomeIcon icon={faStar} aria-hidden="true" /><span>REPEAT.</span></div>

    <section className="ps-recipe ps-container" aria-labelledby="ps-recipe-title"><motion.div {...reveal} className="ps-section-heading"><p className="ps-kicker">TODAY’S SPECIAL</p><h2 id="ps-recipe-title">Learning, served<br /><em>with a side of chaos.</em></h2><p>Pollo Sopero is a clone inspired by Overcooked, developed exclusively for educational purposes: learning programming, C# and game development in Unity through hands-on practice.</p><p>Its visual identity is based on Pollo Campero, the Guatemalan restaurant brand. The kitchen, characters and presentation give this learning recreation a playful local reference.</p><p className="ps-attribution">This is an independent educational recreation, not an official Overcooked or Pollo Campero product.</p></motion.div><motion.aside {...reveal} className="ps-recipe-ticket"><div className="ps-ticket-pin" aria-hidden="true" /><p className="ps-ticket-label">THE RECIPE</p><h3>Ingredients for a<br />playable kitchen</h3><ul><li><span>01</span> Unity & C#</li><li><span>02</span> Characters & interactions</li><li><span>03</span> Ingredients & cooking states</li><li><span>04</span> A generous pinch of teamwork</li></ul><p>Made for learning.<br /><strong>Best enjoyed together.</strong></p></motion.aside></section>

    <section className="ps-kitchen-section" aria-labelledby="ps-kitchen-title"><div className="ps-container"><motion.header {...reveal} className="ps-section-heading ps-heading-row"><div><p className="ps-kicker">CLOCK IN, CHEF</p><h2 id="ps-kitchen-title">Welcome to<br /><em>the kitchen.</em></h2></div><p>Countertops, ingredients, pots and two very busy chefs. Here’s what the world looks like in action.</p></motion.header><motion.figure {...reveal} className="ps-kitchen-frame" id="ps-play-screen" tabIndex={-1}><div className="ps-screen-label"><span><i /> IN-GAME / UNITY WEBGL</span><span>ACTUAL GAMEPLAY</span></div><img src={kitchen} alt="Top-down 3D kitchen with two chefs, counters, ingredients, a soup order and a countdown timer" width="957" height="596" loading="lazy" /><button type="button" className="ps-kitchen-play ps-desktop-launch" onClick={launch} aria-label="Play Pollo Sopero demo"><FontAwesomeIcon icon={faPlay} aria-hidden="true" /></button><figcaption>YOUR NEXT SHIFT STARTS HERE. <span>No download needed on desktop.</span></figcaption></motion.figure><div className="ps-game-loop">{recipe.map((step, index) => <motion.article {...reveal} key={step.title}><span className="ps-loop-number">0{index + 1}</span><FontAwesomeIcon icon={step.icon} aria-hidden="true" /><h3>{step.title}</h3><p>{step.text}</p></motion.article>)}</div></div></section>

    <section className="ps-scrapbook ps-container" aria-labelledby="ps-world-title"><motion.header {...reveal} className="ps-section-heading"><p className="ps-kicker">A PEEK BEHIND THE COUNTER</p><h2 id="ps-world-title">Big chef energy.<br /><em>Small kitchen problems.</em></h2></motion.header><div className="ps-scrapbook-grid"><motion.figure {...reveal} className="ps-photo ps-photo-action"><span className="ps-tape" aria-hidden="true" /><img src={gameplay} alt="A chef chops a tomato while soup orders wait above the kitchen and the timer counts down" width="957" height="603" loading="lazy" /><figcaption><strong>01 / All hands on deck.</strong><span>Preparation, movement and timing share the same space.</span></figcaption></motion.figure><motion.figure {...reveal} className="ps-photo ps-photo-levels"><span className="ps-tape" aria-hidden="true" /><img src={levels} alt="Level selection menu showing Autoservicio, Luces Sopero and an unavailable third option" width="957" height="593" loading="lazy" /><figcaption><strong>02 / Pick your shift.</strong><span>The published game includes a themed level selection screen.</span></figcaption></motion.figure></div></section>

    <section className="ps-code-section" aria-labelledby="ps-code-title"><div className="ps-container"><motion.header {...reveal} className="ps-section-heading ps-heading-row"><div><p className="ps-kicker"><FontAwesomeIcon icon={faCode} aria-hidden="true" /> UNDER THE CHEF’S HAT</p><h2 id="ps-code-title">The real recipe?<br /><em>Small systems working together.</em></h2></div><p>Beyond the playful surface, the source code explores reusable behaviors, interaction rules and state-driven gameplay.</p></motion.header><div className="ps-systems">{systems.map((system, index) => <motion.article {...reveal} key={system.title}><div className="ps-system-index">0{index + 1}</div><div><h3>{system.title}</h3><p>{system.text}</p><code>{system.file}</code></div></motion.article>)}</div><p className="ps-source-note">Technical notes describe the supplied Unity source snapshot. Screenshots and the playable demo show the published version, which includes additional presentation and gameplay features.</p><motion.div {...reveal} className="ps-learning"><span><FontAwesomeIcon icon={faStar} aria-hidden="true" /> XP GAINED</span><p>Turning programming fundamentals into visible, playable feedback — from a character’s first step to an ingredient’s next state.</p><div><span>Object-oriented C#</span><span>Unity components</span><span>State & timing</span><span>Gameplay feedback</span></div></motion.div></div></section>

    <section className="ps-controls ps-container" aria-labelledby="ps-controls-title"><motion.header {...reveal} className="ps-section-heading"><p className="ps-kicker">BRING A FRIEND. SHARE A KEYBOARD.</p><h2 id="ps-controls-title">Know your station.</h2><p>Controls for the published itch.io demo. Click inside the game to give it keyboard focus.</p></motion.header><div className="ps-control-grid"><article><span className="ps-player-badge">P1</span><h3>Chef one</h3><dl><div><dt>Move</dt><dd><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></dd></div><div><dt>Pick up / place</dt><dd><kbd>Space</kbd></dd></div><div><dt>Action</dt><dd><kbd>Left Shift</kbd></dd></div></dl></article><article><span className="ps-player-badge">P2</span><h3>Chef two</h3><dl><div><dt>Move</dt><dd><kbd>↑</kbd><kbd>←</kbd><kbd>↓</kbd><kbd>→</kbd></dd></div><div><dt>Pick up / place</dt><dd><kbd>Numpad 0</kbd></dd></div><div><dt>Action</dt><dd><kbd>Right Shift</kbd></dd></div></dl></article></div></section>

    <section className="ps-final-shift"><div className="ps-container"><p className="ps-kicker">ORDER UP!</p><h2>Ready to make<br /><em>a little mess?</em></h2><div><a className="ps-button" href="#ps-play-screen" onClick={goToGame}><FontAwesomeIcon icon={faGamepad} aria-hidden="true" /> BACK TO THE KITCHEN</a><a href={itchUrl} target="_blank" rel="noreferrer" className="ps-text-link">Open on itch.io <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></div><p className="ps-mobile-note">The kitchen needs a keyboard. Come back on desktop to play!</p><p className="ps-credit">An Overcooked-inspired clone created exclusively for educational purposes. Visual identity based on Pollo Campero of Guatemala. An independent learning project, not an official product of either brand.</p></div></section>
    <footer className="ps-footer ps-container"><a href="#work"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> Back to all projects</a><span>CRISTIAN AGUIRRE / GAME DEVELOPMENT</span><a href="#contact">Say hello <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a></footer>

    <dialog ref={dialogRef} className="ps-game-dialog" aria-labelledby="ps-game-title" onCancel={(event) => { event.preventDefault(); setPlaying(false); }} onClose={() => setPlaying(false)} onClick={(event) => { if (event.target === event.currentTarget) setPlaying(false); }}>
      <div ref={shellRef} className="ps-game-shell"><div className="ps-game-top"><div><span className="ps-kicker">YOU’RE ON SHIFT</span><h2 id="ps-game-title">Pollo Sopero</h2></div><div><button type="button" onClick={toggleFullscreen} aria-label={fullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}><FontAwesomeIcon icon={fullscreen ? faCompress : faExpand} aria-hidden="true" /></button><button type="button" onClick={() => setPlaying(false)} aria-label="Close game" autoFocus><FontAwesomeIcon icon={faXmark} aria-hidden="true" /></button></div></div>
      <div ref={viewportRef} className="ps-game-viewport" style={{ '--game-scale': gameScale }}>{playing && <iframe src={gameEmbed} title="Pollo Sopero playable Unity WebGL demo hosted on itch.io" allow="autoplay; fullscreen; gamepad" allowFullScreen />}</div><div className="ps-game-bottom"><p><strong>P1</strong> WASD · Space · Left Shift<br /><strong>P2</strong> Arrows · Numpad 0 · Right Shift</p><p>Click “Run game” if prompted, then click inside to play.<br /><a href={itchUrl} target="_blank" rel="noreferrer">Open on itch.io <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a></p></div>{fullscreenError && <p className="ps-fullscreen-message" role="status">{fullscreenError}</p>}</div>
    </dialog>
  </main>;
}
