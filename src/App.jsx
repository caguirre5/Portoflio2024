import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Environment, Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { useEffect, useState, Suspense } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";

import { OrbitControls } from "@react-three/drei";
import Island from '../public/GuatemalanIsland'
import Parallax from "./components/Parallax";
import About from "./components/About";


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
      {/* // <Canvas shadows camera={{ position: [10, 3, 2], fov: 50}}>
      //   <color attach="background" args={["#ececec"]} />
      //   <ScrollControls pages={5} damping={0.1}>
      //     <ScrollManager section={section} onSectionChange ={setSection}/>
      //     <Suspense fallback={null}>
      //       <ambientLight intensity={0.5}/>
      //       <OrbitControls enableZoom={false}/>
      //       <Island/>
      //     </Suspense>
      //     <Environment preset="sunset"/>
      //     <Scroll html>
      //       <Interface/>
      //     </Scroll>
      //   </ScrollControls>
      // </Canvas> */}
      {!loaded ? (
         <div>cargando</div>
      ) : (
        <>
          <Parallax/>
          <About/>
          <div className="w-full h-screen bg-[#0c1926]">
            
          </div>
          <div className="w-full h-screen bg-[#0c1926]">
            
          </div>
          <div className="w-full h-screen bg-[#0c1926]">
            
          </div>
          <div className="w-full h-screen bg-[#0c1926]">
            
          </div>
          <Menu onSectionChange = {setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
        </>
      )}
      
    </div>
  );
}

export default App;
