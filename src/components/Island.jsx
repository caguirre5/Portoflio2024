import { OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
import {Island} from '../../public/GuatemalanIsland'

export const Experience = () => {
  return (
    <>
      <Suspense fallback={null}>
          <ambientLight/>
          <Island/>
      </Suspense>
      <Environment preset="sunset"/>
    </>
  );
};