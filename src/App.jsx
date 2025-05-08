import { useEffect, useState } from "react";
import { Menu } from "./components/Menu";

import { motion } from "framer-motion";
import Parallax from "./components/Parallax";
import About from "./components/About";
import Skills from "./components/Skills";
import Facts from "./components/Facts";
// import Work from "./components/Work";
import Contact from "./components/Contact";


function App() {
  const [section, setSection] = useState("home")
  const [menuOpened, setMenuOpened] = useState(false)
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setMenuOpened(false)
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [section])

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {!loaded ? (
         <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-[#03223d] to-[#023053]">
         <motion.div
           className="w-16 h-16 border-4 border-t-transparent border-white rounded-full"
           animate={{ rotate: 360 }}
           transition={{
             repeat: Infinity,
             ease: "linear",
             duration: 1.2,
           }}
         />
       </div>
      ) : (
        <>
          <Parallax/>
          <About/>
          <Facts/>
          <Skills/>
          {/* <Work/> */}
          <Contact/>
          <Menu onSectionChange = {setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
        </>
      )}
      
    </div>
  );
}

export default App;
