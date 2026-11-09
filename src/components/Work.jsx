import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { projectStoryLinks } from "../data/projectStories";
import content from "../PageContent.json";
import portfolioUX from "../assets/projects/UX_Portfolio.png";
import portfolioWeb from "../assets/projects/WEB_Portfolio.png";
import caribbean from "../assets/projects/WEB_Caribbean.png";
import ice from "../assets/projects/WEB_ICE.png";
import loom from "../assets/projects/loom/site-home.png";
import symma from "../assets/projects/Symma_Preview.svg";
import opeka from "../assets/projects/Opeka_Workspace.png";
import pollo from "../assets/projects/Pollo_Menu.png";
import './Work.css';

const images = { GAME_Pollo: pollo, WEB_Opeka: opeka, WEB_Symma: symma, WEB_Caribbean: caribbean, WEB_Portfolio_1: portfolioWeb, WEB_ICE: ice, WEB_Loom: loom, UX_Portfolio_1: portfolioUX };
const projects = content.work.filter((project) => !project.hidden && images[project.imagePortrait]);
const filters = ['All projects', 'WEB DEVELOPMENT', 'UX DESIGN', 'GAME DEVELOPMENT'];
const labels = { 'WEB DEVELOPMENT': 'Web development', 'UX DESIGN': 'UX design', 'GAME DEVELOPMENT': 'Game development' };
const accents = { 21: '#ffd45b', 20: '#edc487', 19: '#b6caff', 1: '#e9c184', 2: '#67e8f9', 3: '#9fd4b7', 4: '#d0c7a0', 7: '#c4b5fd' };

export default function Work() {
  const [filter, setFilter] = useState('All projects');
  const visible = projects.filter((project) => filter === 'All projects' || project.category === filter);
  return (
    <section id="work" aria-labelledby="work-title" className="work-section section-work-background">
      <div className="work-inner">
        <header className="work-heading">
          <p className="work-eyebrow">Selected work</p>
          <h2 id="work-title" tabIndex={-1}>Projects & explorations</h2>
          <p className="work-introduction">A selection of web projects and design explorations, reflecting my interest in how digital experiences look, feel, and work.</p>
        </header>
        <div className="work-filters" aria-label="Filter projects">
          {filters.map((item) => (
            <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)}>
              {labels[item] || item}<span className="work-filter-count" aria-hidden="true">{item === 'All projects' ? projects.length : projects.filter((project) => project.category === item).length}</span>
            </button>
          ))}
        </div>
        <div className="work-gallery">
          {visible.map((project) => {
            const story = projectStoryLinks[project.id];
            const href = story || project.url;
            const featured = project.id === 1;
            return (
              <article key={project.id} className={`work-project work-project--${project.id}${featured ? ' work-project--featured' : ''}`} style={{ '--project-accent': accents[project.id] || '#a5f3fc' }} aria-labelledby={`work-project-${project.id}-title`}>
                <div className="work-preview-stage">
                  <div className="work-browser">
                    <div className="work-browser-chrome" aria-hidden="true"><span className="work-browser-dots"><i /><i /><i /></span><span>{project.title}</span><span className="work-browser-line" /></div>
                    {href ? <a href={href} target={story ? undefined : '_blank'} rel={story ? undefined : 'noreferrer'} aria-label={`${story ? 'Explore' : 'Visit'} ${project.title}${story ? '' : ' (opens in a new tab)'}`} className="work-preview-link"><img src={images[project.imagePortrait]} alt={`${project.title} interface preview`} loading="lazy" width="1600" height="1000" /></a> : <img src={images[project.imagePortrait]} alt={`${project.title} interface preview`} loading="lazy" width="1600" height="1000" />}
                  </div>
                  <span className="work-preview-orbit" aria-hidden="true" />
                </div>
                <div className="work-project-content">
                  <div className="work-project-meta"><span>{project.status || (featured ? 'Featured project' : labels[project.category])}</span><span aria-hidden="true">{String(projects.indexOf(project) + 1).padStart(2, '0')}</span></div>
                  <h3 id={`work-project-${project.id}-title`}>{project.title}</h3>
                  <p className="work-project-description">{project.description}</p>
                  {href && <a href={href} target={story ? undefined : '_blank'} rel={story ? undefined : 'noreferrer'} className="work-project-action" aria-label={`${story ? 'Explore project' : 'Visit website'}: ${project.title}${story ? '' : ' (opens in a new tab)'}`}><span>{story ? 'Explore project' : 'Visit website'}</span><span className="work-action-icon" aria-hidden="true"><FontAwesomeIcon icon={story ? faArrowRight : faArrowUpRightFromSquare} /></span></a>}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
