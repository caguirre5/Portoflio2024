import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCloud, faDatabase, faGamepad, faCodeBranch, faFire, faPlug, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faJsSquare, faReact, faAws, faPython, faUnity, faFigma, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion, useReducedMotion } from 'framer-motion';
import { skillGroups } from '../data/skills';
import './Skills.css';

const icons = { code: faCode, cloud: faCloud, data: faDatabase, game: faGamepad, branch: faCodeBranch };

const technologyIcons = { JavaScript: faJsSquare, React: faReact, 'React Native': faReact, Firebase: faFire, AWS: faAws, 'REST APIs': faPlug, SQL: faDatabase, 'Apache Impala': faDatabase, Python: faPython, Unity: faUnity, Figma: faFigma, Git: faGitAlt, GitHub: faGithub, 'Intelligent Process Automation': faRobot };
const technologyMarks = { TypeScript: 'TS', 'Next.js': 'N', 'Tailwind CSS': '≈', PostgreSQL: 'Pg', MySQL: 'My', 'C#': 'C#' };
const technologyColors = { JavaScript: '#f7df1e', TypeScript: '#80baff', 'Next.js': '#f1f5f9', React: '#61dafb', 'React Native': '#61dafb', 'Tailwind CSS': '#38d5ed', Firebase: '#ffca52', AWS: '#ffbd69', 'REST APIs': '#f8cb7c', SQL: '#c4b5fd', 'Apache Impala': '#c4b5fd', PostgreSQL: '#9dc5ed', MySQL: '#edbd85', Unity: '#f1f5f9', 'C#': '#c4a1ff', Git: '#ff927c', GitHub: '#f1f5f9', 'Intelligent Process Automation': '#d3bcff' };
const linework = {
  frontend: 'M210 25L170 65L210 105M290 25L330 65L290 105M268 5L232 125',
  backend: 'M160 30H225V85H295V140H355M225 85H150V145M295 85V30H350',
  data: 'M150 35H200V85H250V135H300V85H365M200 85H150V135',
  design: 'M190 35L245 5L300 35V100L245 130L190 100ZM190 35L245 65L300 35M245 65V130',
  tools: 'M160 65H245Q275 65 275 35V15M245 65Q275 65 275 105H355',
};

export default function Skills() {
  const reducedMotion = useReducedMotion();
  return (
    <section id="skills" aria-labelledby="skills-title" className="skills-section section-skills-background">
      <svg aria-hidden="true" className="skills-color-definitions" width="0" height="0"><defs><linearGradient id="skills-python-colors" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#78b8e8" /><stop offset="48%" stopColor="#78b8e8" /><stop offset="52%" stopColor="#ffdc73" /><stop offset="100%" stopColor="#ffdc73" /></linearGradient></defs></svg>
      <div aria-hidden="true" className="skills-backdrop">SKILLS</div>
      <div className="skills-inner">
        <header className="skills-heading">
          <p className="skills-eyebrow">My toolkit</p>
          <h2 id="skills-title">Skills & technologies</h2>
          <p className="skills-introduction">A practical toolkit for building interfaces, connecting services, and working with data.</p>
        </header>
        <div className="skills-composition">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.id}
              aria-labelledby={`skills-${group.id}-title`}
              className={`skills-group skills-group--${group.id}`}
              style={{ '--skill-accent': group.accent }}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: reducedMotion ? 0 : 0.4, delay: reducedMotion ? 0 : index * 0.05 }}
            >
              <svg aria-hidden="true" className="skills-linework" viewBox="0 0 400 170" fill="none"><path d={linework[group.id]} /><circle cx="150" cy="35" r="4" /><circle cx="355" cy="140" r="4" /></svg>
              <div className="skills-group-header">
                <span aria-hidden="true" className="skills-category-icon"><FontAwesomeIcon icon={icons[group.icon]} /></span>
                <div className="skills-group-titles">
                  <p className="skills-category-caption">{group.caption}</p>
                  <h3 id={`skills-${group.id}-title`}>{group.title}</h3>
                </div>
                <span aria-hidden="true" className="skills-index">0{index + 1}</span>
              </div>
              <ul className="skills-technologies" aria-label={group.title}>
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span aria-hidden="true" className={`skills-technology-mark ${skill === 'Python' ? 'skills-technology-mark--python' : ''}`} style={{ '--technology-color': technologyColors[skill] || group.accent }}>
                      {skill === 'Figma' ? (
                        <svg viewBox="0 0 38 57" fill="none"><path d="M9.5 0H19V19H9.5A9.5 9.5 0 0 1 9.5 0Z" fill="#ff8b7e" /><path d="M19 0H28.5A9.5 9.5 0 0 1 28.5 19H19Z" fill="#ffb4a7" /><path d="M9.5 19H19V38H9.5A9.5 9.5 0 0 1 9.5 19Z" fill="#c4a1ff" /><circle cx="28.5" cy="28.5" r="9.5" fill="#64d5ff" /><path d="M9.5 38H19V47.5A9.5 9.5 0 1 1 9.5 38Z" fill="#72e5b2" /></svg>
                      ) : technologyIcons[skill] ? <FontAwesomeIcon icon={technologyIcons[skill]} /> : technologyMarks[skill]}
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
