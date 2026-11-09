import { useLayoutEffect, useState } from "react";
import { Menu } from "./Menu";
import Parallax from "./Parallax";
import About from "./About";
import Skills from "./Skills";
import Facts from "./Facts";
import Work from "./Work";
import Contact from "./Contact";
import BackgroundParticles from "./BackgroundParticles";

let lastScroll = 0;

export default function PortfolioHome() {
  const [menuOpened, setMenuOpened] = useState(false);
  useLayoutEffect(() => {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: 'instant' });
      target.querySelector('[tabindex="-1"]')?.focus({ preventScroll: true });
    }
    else window.scrollTo({ top: lastScroll, behavior: 'instant' });
    return () => { lastScroll = window.scrollY; };
  }, []);

  const navigateToSection = (section) => {
    setMenuOpened(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return <>
    <Parallax />
    <div className="shared-particle-sections relative isolate">
      <BackgroundParticles />
      <About /><Facts /><Skills /><Work /><Contact />
    </div>
    <Menu onSectionChange={navigateToSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
  </>;
}
