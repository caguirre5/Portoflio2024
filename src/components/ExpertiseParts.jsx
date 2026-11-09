import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faWandMagicSparkles, faDatabase, faLayerGroup, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const icons = { code: faCode, spark: faWandMagicSparkles, database: faDatabase, layers: faLayerGroup };

// Lightweight runtime prop checks, using the existing ESLint convention
// without adding a validation dependency for this small component family.
const valueType = (test, expected) => (props, name, component) =>
  test(props[name]) ? null : new Error(`${component}: ${name} must be ${expected}.`);
const objectType = valueType((value) => value !== null && typeof value === 'object', 'an object');
const functionType = valueType((value) => typeof value === 'function', 'a function');
const booleanType = valueType((value) => value == null || typeof value === 'boolean', 'a boolean');
const numberType = valueType((value) => typeof value === 'number', 'a number');

export function ExpertiseCard({ category, index, compact, onSelect, reducedMotion, transition }) {
  return (
    <motion.article layoutId={`expertise-${category.id}`} layout={!reducedMotion} transition={transition} className={`expertise-card ${compact ? 'expertise-card--compact' : ''}`} style={{ '--expertise-accent': category.accent, background: category.gradient }}>
      <button type="button" id={`expertise-trigger-${category.id}`} className="expertise-card-button" onClick={() => onSelect(category.id)} aria-label={`Explore ${category.title}`} aria-expanded={false} aria-controls="expertise-detail">
        <span className="expertise-card-top"><span className="expertise-icon"><FontAwesomeIcon icon={icons[category.icon]} /></span><span className="expertise-number">0{index + 1}</span></span>
        <span className="expertise-card-watermark" aria-hidden="true"><FontAwesomeIcon icon={icons[category.icon]} /></span>
        <span className="expertise-card-title">{category.title}</span>
        <span className="expertise-card-copy">{category.preview}</span>
        <span className="expertise-card-action">{compact ? 'Explore area' : 'Take a closer look'}<FontAwesomeIcon icon={faArrowRight} /></span>
      </button>
    </motion.article>
  );
}

export function ExpertiseDetail({ category, onClose, headingRef, reducedMotion, transition }) {
  return (
    <motion.article id="expertise-detail" aria-labelledby="expertise-detail-title" layoutId={`expertise-${category.id}`} layout={!reducedMotion} transition={transition} className="expertise-detail" style={{ '--expertise-accent': category.accent }}>
      <div className="expertise-detail-top"><span className="expertise-selected-label"><FontAwesomeIcon icon={icons[category.icon]} />{category.title}</span><button type="button" onClick={onClose} className="expertise-back"><FontAwesomeIcon icon={faArrowLeft} /><span>All areas</span></button></div>
      <motion.div key={category.id} initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.35 }}>
        <h3 id="expertise-detail-title" ref={headingRef} tabIndex={-1} className="expertise-detail-heading">{category.heading}</h3>
        <div className="expertise-detail-grid">
          <div>
            <div className="expertise-description">{category.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="expertise-tags"><p className="expertise-meta-label">{category.tagsLabel}</p><ul>{category.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
          </div>
          <div className="expertise-visual-column">
            <figure className="expertise-visual"><div className="expertise-image-frame"><span aria-hidden="true" className="expertise-window-dots"><i /><i /><i /></span><img src={category.visual.src} alt={category.visual.alt} width="800" height="560" decoding="async" loading="lazy" /></div><figcaption><strong>{category.visual.caption}</strong><span>{category.visual.note}</span></figcaption></figure>
            <div className="expertise-related"><p className="expertise-meta-label">{category.relatedLabel}</p><ul>{category.related.map((item) => <li key={item}><span aria-hidden="true" className="expertise-related-dot" />{item}</li>)}</ul></div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

ExpertiseCard.propTypes = { category: objectType, index: numberType, compact: booleanType, onSelect: functionType, reducedMotion: booleanType, transition: objectType };
ExpertiseDetail.propTypes = { category: objectType, onClose: functionType, headingRef: objectType, reducedMotion: booleanType, transition: objectType };
