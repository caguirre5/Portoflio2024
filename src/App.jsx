import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import PortfolioHome from "./components/PortfolioHome";
import CaribbeanGoods from "./pages/CaribbeanGoods";
import Symma from "./pages/Symma";
import OpekaPro from "./pages/OpekaPro";
import PolloSopero from "./pages/PolloSopero";
import PortfolioUX from "./pages/PortfolioUX";
import Loom from "./pages/Loom";

const projectPages = { '/projects/caribbean-goods': CaribbeanGoods, '/projects/symma': Symma, '/projects/opeka-pro': OpekaPro, '/projects/pollo-sopero': PolloSopero, '/projects/portfolio-ux': PortfolioUX, '/projects/loom': Loom };
const projectNames = { '/projects/caribbean-goods': 'Caribbean Goods', '/projects/symma': 'Symma', '/projects/opeka-pro': 'Opeka Pro', '/projects/pollo-sopero': 'Pollo Sopero', '/projects/portfolio-ux': 'Portfolio — First UX Exploration', '/projects/loom': 'Loom Coffeehouse' };
const projectThemes = { '/projects/caribbean-goods': 'caribbean', '/projects/symma': 'symma', '/projects/opeka-pro': 'opeka', '/projects/pollo-sopero': 'pollo', '/projects/portfolio-ux': 'portfolio-ux', '/projects/loom': 'loom' };
const readRoute = () => window.location.hash.startsWith('#/') ? window.location.hash.slice(1) : '/';

export default function App() {
  const [route, setRoute] = useState(readRoute);
  const [loaded, setLoaded] = useState(false);
  const reducedMotion = useReducedMotion();
  const ProjectPage = projectPages[route];

  useLayoutEffect(() => {
    document.documentElement.dataset.pageTheme = projectThemes[route] || 'portfolio';
    return () => { delete document.documentElement.dataset.pageTheme; };
  }, [route]);

  useEffect(() => {
    const onHashChange = () => setRoute(readRoute());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    document.title = route === '/' ? "Cristian's World" : ProjectPage ? `${projectNames[route]} — Cristian Aguirre` : "Project not found — Cristian Aguirre";
  }, [route, ProjectPage]);

  return <div className="overflow-x-hidden bg-[#03223d]">
    {!loaded ? <div className="flex h-screen w-full items-center justify-center bg-gradient-to-b from-[#03223d] to-[#023053]" role="status" aria-label="Loading portfolio">
      <motion.div className="h-16 w-16 rounded-full border-4 border-white border-t-transparent" animate={reducedMotion ? undefined : { rotate: 360 }} transition={{ repeat: Infinity, ease: 'linear', duration: 1.2 }} />
    </div> : <AnimatePresence mode="wait" initial={false}>
      <motion.div key={route} initial={{ opacity: 0, y: reducedMotion ? 0 : 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reducedMotion ? 0 : -10 }} transition={{ duration: reducedMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}>
        {route === '/' ? <PortfolioHome /> : ProjectPage ? <ProjectPage /> : <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 text-center text-white"><h1 className="text-4xl font-bold">Project not found</h1><a href="#work" className="text-cyan-200 underline">Back to projects</a></main>}
      </motion.div>
    </AnimatePresence>}
  </div>;
}
