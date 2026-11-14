import { useLayoutEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowUpRightFromSquare, faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import valley from '../assets/projects/kantera/valley.webp';
import maze from '../assets/projects/kantera/maze.webp';
import forest from '../assets/projects/kantera/forest.webp';
import dialogue from '../assets/projects/kantera/dialogue.webp';
import gameplay from '../assets/projects/kantera/gameplay.webp';
import rogue from '../assets/projects/kantera/rogue.webp';
import knight from '../assets/projects/kantera/knight.webp';
import treeRound from '../assets/projects/kantera/treeHighRound.png';
import treeCrooked from '../assets/projects/kantera/treeCrooked.png';
import treeHigh from '../assets/projects/kantera/treeHigh.png';
import './Kantera.css';

const locations = [
  { title: 'Valle Sereno', image: valley, alt: 'Isometric village with coral roofs and winding paths', text: 'The handcrafted village gives each run a familiar starting point. Talk to its residents, piece together what happened, and find out what you need to brew the potion.' },
  { title: 'The maze', image: maze, alt: 'Overhead view of the maze built from dark walls', text: 'A Random Walk carves connected passages through the maze grid. A different route makes the maze a navigation challenge each time.' },
  { title: 'The forest', image: forest, alt: 'Low-poly forest clearing with spaced trees and scattered rocks', text: 'A variation on Random Walk shapes the terrain. Poisson Disk Sampling helps space environmental objects so the forest feels varied without crowding the player.' },
];

const videoId = 'GZCEuE_XdGk';
const youtube = `https://youtu.be/${videoId}`;

export default function Kantera() {
  const heading = useRef(null);
  const footage = useRef(null);
  const player = useRef(null);
  const [location, setLocation] = useState(0);
  const [playing, setPlaying] = useState(false);
  const reducedMotion = useReducedMotion();
  const selected = locations[location];
  const reveal = {
    initial: reducedMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: reducedMotion ? 0 : 0.55 },
  };

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    heading.current?.focus({ preventScroll: true });
  }, []);

  useLayoutEffect(() => {
    if (playing) player.current?.focus({ preventScroll: true });
  }, [playing]);

  function goToFootage() {
    footage.current?.focus({ preventScroll: true });
    footage.current?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' });
  }

  return (
    <main className="kantera">
      <header className="kantera-hero">
        <div className="kantera-frame kantera-hero-inner">
          <a className="kantera-back" href="#work"><FontAwesomeIcon icon={faArrowLeft} /> All projects</a>
          <motion.div className="kantera-hero-copy" initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.6 }}>
            <p className="kantera-label">Graduation project · Isometric action RPG</p>
            <h1 ref={heading} tabIndex={-1}>Kantera</h1>
            <p className="kantera-pitch">The village stays.<br />The story changes.</p>
            <p className="kantera-premise">A darkness has settled over Valle Sereno. Follow the villagers’ clues, venture into unfamiliar paths, and gather the ingredients for a potion that might save it.</p>
            <button className="kantera-button" type="button" onClick={goToFootage}><FontAwesomeIcon icon={faPlay} /> Watch gameplay</button>
          </motion.div>
          <div className="kantera-hero-stage">
            <figure className="kantera-hero-scene">
              <img src={valley} alt="Isometric view of Valle Sereno with coral rooftops and paths winding between trees" width="1222" height="644" fetchPriority="high" />
              <figcaption>Valle Sereno</figcaption>
            </figure>
            <img className="kantera-rogue" src={rogue} alt="" width="451" height="520" />
            <img className="kantera-knight" src={knight} alt="" width="434" height="520" />
          </div>
        </div>
        <section className="kantera-frame kantera-thesis" aria-labelledby="kantera-thesis">
          <div className="kantera-thesis-heading">
            <p className="kantera-label">Computer Science thesis · Universidad del Valle de Guatemala</p>
            <h2 id="kantera-thesis">Can the same game tell a different story each time?</h2>
          </div>
          <div className="kantera-thesis-copy">
            <p>I began Kantera in 2024, when game developers were starting to explore how generative AI could shape what happens during play. For my graduation thesis, I wanted to see what that could mean for a small action RPG. Could players uncover a mystery by asking their own questions and get answers that made sense in their version of the world?</p>
            <p>I built a Unity prototype around a handcrafted village. Procedural algorithms varied the maze and forest between runs, while the language model used the current story, quest details, and each villager’s personality to generate dialogue. The same village could lead players down different paths and give them different clues to follow.</p>
            <p>I playtested the prototype to see how players responded to the conversations, visual design, and core mechanics, then used their feedback to refine the game.</p>
          </div>
        </section>
      </header>

      <motion.section className="kantera-frame kantera-section kantera-world" aria-labelledby="kantera-world" {...reveal}>
        <div>
          <p className="kantera-label">World & game design</p>
          <h2 id="kantera-world">Curiosity leads the way.</h2>
          <p>I wanted players to learn the story by asking questions and exploring. A top-down camera keeps routes legible, while the colorful low-poly art gives the medieval mystery a welcoming starting point.</p>
          <div className="kantera-locations" role="group" aria-label="Explore locations">
            {locations.map(({ title }, index) => (
              <button type="button" key={title} aria-pressed={index === location} onClick={() => setLocation(index)}>
                <span>{title}</span><FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
        <div className="kantera-map-stage">
          <figure className="kantera-map" aria-live="polite">
            <img src={selected.image} alt={selected.alt} loading="lazy" />
            <figcaption><h3>{selected.title}</h3><p>{selected.text}</p></figcaption>
          </figure>
          <div className="kantera-grove" aria-hidden="true">
            <img src={treeRound} alt="" width="64" height="64" loading="lazy" />
            <img src={treeHigh} alt="" width="64" height="64" loading="lazy" />
            <img src={treeCrooked} alt="" width="64" height="64" loading="lazy" />
          </div>
        </div>
      </motion.section>

      <motion.section className="kantera-gameplay kantera-section" aria-labelledby="kantera-footage" {...reveal}>
        <div className="kantera-frame kantera-screening">
          <div className="kantera-screening-heading">
            <h2 id="kantera-footage" ref={footage} tabIndex={-1}>Inside the prototype</h2>
            <a className="kantera-text-link" href={youtube} target="_blank" rel="noreferrer">Open on YouTube <FontAwesomeIcon icon={faArrowUpRightFromSquare} /><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
          <div className="kantera-player">
            {playing ? (
              <iframe ref={player} src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`} title="Kantera gameplay on YouTube" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
            ) : (
              <button type="button" aria-label="Play Kantera gameplay" onClick={() => setPlaying(true)}>
                <img src={gameplay} alt="" loading="lazy" />
                <span aria-hidden="true"><FontAwesomeIcon icon={faPlay} /></span>
              </button>
            )}
          </div>
        </div>
      </motion.section>

      <motion.section className="kantera-frame kantera-section kantera-build" aria-labelledby="kantera-build" {...reveal}>
        <div className="kantera-build-copy">
          <p className="kantera-label">Implementation</p>
          <h2 id="kantera-build">How the world and its characters fit together.</h2>
          <dl>
            <div><dt>Build a world worth exploring</dt><dd>I built the village in layers in Unity, then implemented the movement, interaction, combat, and ingredient collection that connect it to the generated areas.</dd></div>
            <div><dt>Give villagers something to say</dt><dd>The game passes world context, quest details, and each character’s role and personality to the OpenAI API. Players can type their own questions, and the villagers reply in character with clues grounded in that run.</dd></div>
            <div><dt>Playtest the experience</dt><dd>I observed players and collected feedback on NPC conversations, the visual style, and the core mechanics, then returned to development to address the issues they found.</dd></div>
          </dl>
          <ul className="kantera-stack" aria-label="Technologies"><li>Unity</li><li>C#</li><li>OpenAI API</li></ul>
        </div>
        <figure className="kantera-map"><img src={dialogue} alt="In-game dialogue window with a text field for the player's own question" loading="lazy" /><figcaption>Players can ask their own questions in the NPC dialogue interface.</figcaption></figure>
      </motion.section>

      <footer className="kantera-frame kantera-footer">
        <p>Game design and development by Cristian Aguirre · Universidad del Valle de Guatemala<br />Game asset sources include Kenney and KayKit.</p>
        <a className="kantera-back" href="#work"><FontAwesomeIcon icon={faArrowLeft} /> All projects</a>
      </footer>
    </main>
  );
}
