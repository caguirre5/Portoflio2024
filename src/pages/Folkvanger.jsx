import { useLayoutEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUpRightFromSquare, faExpand, faGamepad, faPlay, faXmark } from '@fortawesome/free-solid-svg-icons';
import cover from '../assets/projects/folkvanger/cover.webp';
import sea from '../assets/projects/folkvanger/sea.webp';
import island from '../assets/projects/folkvanger/island.webp';
import tower from '../assets/projects/folkvanger/tower.webp';
import tree from '../assets/projects/folkvanger/tree.webp';
import knight from '../assets/projects/folkvanger/knight.webp';
import gameplay from '../assets/projects/folkvanger/gameplay.webp';
import './Folkvanger.css';

const itchUrl = 'https://caguirre5.itch.io/folkvanger';
const gameEmbed = 'https://itch.io/embed-upload/20589433?color=102b35';
const steps = [
  { image: tree, title: 'Gather', text: 'Manage your resources and decide which part of the island needs help first.' },
  { image: tower, title: 'Rebuild', text: 'Restore the kingdom’s defenses and choose where each upgrade will do the most good.' },
  { image: knight, title: 'Defend', text: 'Hold off the goblins as each wave puts more pressure on the defenses you’ve built.' },
];

export default function Folkvanger() {
  const heading = useRef(null);
  const game = useRef(null);
  const dialog = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [fullscreenError, setFullscreenError] = useState(false);
  const reducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    heading.current?.focus({ preventScroll: true });
  }, []);

  function goToGame() {
    game.current?.focus({ preventScroll: true });
    game.current?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' });
  }

  function launchGame() {
    dialog.current.showModal();
    setFullscreenError(false);
    setPlaying(true);
  }

  async function toggleFullscreen() {
    setFullscreenError(false);
    try {
      if (document.fullscreenElement === dialog.current) await document.exitFullscreen();
      else await dialog.current.requestFullscreen();
    } catch {
      setFullscreenError(true);
    }
  }

  const reveal = reducedMotion ? {} : {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: .12 },
    transition: { duration: .45 },
  };

  return (
    <main className="folkvanger">
      <header className="folk-hero" style={{ '--folk-sea': `url("${sea}")` }}>
        <div className="folk-frame">
          <a className="folk-back" href="#work"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> All projects</a>
          <div className="folk-hero-grid">
            <motion.div {...reveal}>
              <p className="folk-kicker">2D strategy · Local game jam winner</p>
              <h1 ref={heading} tabIndex={-1}>Folkvanger</h1>
              <p className="folk-tagline">Rebuild the island.<br />Hold back the goblins.</p>
              <p>A goblin raid left the kingdom in ruins. Spend your resources wisely, rebuild its defenses, and get ready for the next wave.</p>
              <button className="folk-button" type="button" onClick={goToGame}><FontAwesomeIcon icon={faGamepad} aria-hidden="true" /> See the game</button>
            </motion.div>
            <figure className="folk-cover">
              <img src={cover} alt="Folkvanger’s knight crest above a turquoise sea dotted with pixel-art clouds" width="1141" height="642" fetchPriority="high" />
            </figure>
          </div>
        </div>
      </header>

      <motion.section className="folk-frame folk-section" aria-labelledby="folk-island" {...reveal}>
        <div className="folk-section-heading">
          <p className="folk-kicker">The campaign</p>
          <h2 id="folk-island">Every wave starts with a choice.</h2>
        </div>
        <figure className="folk-island">
          <img src={island} alt="Pixel-art illustration of the island, with forts, bridges, and wooded high ground" width="1350" height="900" loading="lazy" />
          <figcaption>Island illustration</figcaption>
        </figure>
        <ol className="folk-loop">
          {steps.map(({ image, title, text }) => <li key={title}><img src={image} alt="" loading="lazy" /><div><h3>{title}</h3><p>{text}</p></div></li>)}
        </ol>
      </motion.section>

      <motion.section className="folk-play folk-section" aria-labelledby="folk-play" {...reveal}>
        <div className="folk-frame">
          <div className="folk-play-heading">
            <div><p className="folk-kicker">Gameplay</p><h2 ref={game} id="folk-play" tabIndex={-1}>Take command of the island.</h2></div>
            <a className="folk-button" href={itchUrl} target="_blank" rel="noreferrer">Play on itch.io <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
          <figure className="folk-gameplay">
            <img src={gameplay} alt="In-game view of a knight on a stone path, with resource counters and a bridge to another part of the island" width="955" height="538" loading="lazy" />
            <button className="folk-launch" type="button" onClick={launchGame} aria-haspopup="dialog"><FontAwesomeIcon icon={faPlay} aria-hidden="true" /> Play Folkvanger</button>
          </figure>
        </div>
      </motion.section>

      <motion.section className="folk-frame folk-section folk-project" aria-labelledby="folk-team" {...reveal}>
        <div>
          <p className="folk-kicker">Behind the game</p>
          <h2 id="folk-team">Built together, one map at a time.</h2>
          <p>Juan Diego Ávila and I built Folkvanger over a couple of months for a class in our game development specialization. We shared responsibility for the game and built it together as it took shape.</p>
          <p>I worked across development, with a focus on implementing gameplay mechanics and designing and building maps. The project went on to win a local game jam.</p>
        </div>
        <dl className="folk-field-notes">
          <div><dt>Developed by</dt><dd>Cristian Aguirre &amp; Juan Diego Ávila</dd></div>
          <div><dt>Development status</dt><dd><span className="folk-status">Paused</span><p>We plan to return to development in the future.</p></dd></div>
        </dl>
      </motion.section>
      <footer className="folk-frame folk-footer"><a className="folk-back" href="#work"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /> All projects</a></footer>
      <dialog ref={dialog} className="folk-dialog" aria-labelledby="folk-dialog-title" onClose={() => setPlaying(false)}>
        <div className="folk-dialog-bar">
          <h2 id="folk-dialog-title">Folkvanger</h2>
          <div className="folk-dialog-actions">
            <button type="button" className="folk-back" onClick={toggleFullscreen}><FontAwesomeIcon icon={faExpand} aria-hidden="true" /> Fullscreen</button>
            <form method="dialog"><button className="folk-back" type="submit"><FontAwesomeIcon icon={faXmark} aria-hidden="true" /> Close</button></form>
          </div>
        </div>
        {playing && <iframe src={gameEmbed} title="Play Folkvanger, hosted by itch.io" allow="autoplay; fullscreen; gamepad" allowFullScreen />}
        <div className="folk-dialog-bar">
          <p>{fullscreenError ? 'Fullscreen is unavailable here.' : 'Click inside the game to give it keyboard focus.'}</p>
          <a href={itchUrl} target="_blank" rel="noreferrer">Open on itch.io <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
      </dialog>
    </main>
  );
}
