import { useEffect, useState } from "react";
import { Menu } from "./components/Menu";

import Parallax from "./components/Parallax";
import About from "./components/About";
import Skills from "./components/Skills";
import Facts from "./components/Facts";
import Work from "./components/Work";


function App() {
  const [section, setSection] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setMenuOpened(false)
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
         <div>cargando</div>
      ) : (
        <>
          <Parallax/>
          <About/>
          <Facts/>
          <Skills/>
          <Work/>
          <div className="w-full h-screen bg-[#0c1926]">
            
          </div>
          <Menu onSectionChange = {setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
        </>
      )}
      
    </div>
  );
}

export default App;
