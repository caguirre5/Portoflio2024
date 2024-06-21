import React, { useRef } from 'react'
import L1 from '../assets/background/layer1-D.png'
import L2 from '../assets/background/layer2-D.png'
import L3 from '../assets/background/layer3-D.png'
import L4 from '../assets/background/layer4-D.png'
import L5 from '../assets/background/layer5-D.png'
import L6 from '../assets/background/layer6-D.png'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Parallax() {
  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end start"],
  });

  const backgroundY1 = useTransform(scrollYProgress, [0, 1], ["0%", "97%"]);
  const backgroundY2 = useTransform(scrollYProgress, [0, 1], ["0%", "95%"]);
  const backgroundY3 = useTransform(scrollYProgress, [0, 1], ["0%", "93%"]);
  const backgroundY4 = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const backgroundY5 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const backgroundY6 = useTransform(scrollYProgress, [0, 1], ["0%", "50%%"]);
  const textXR = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const textXL = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);

  return (
    <div 
      ref={ref}
      id="home"
      className="w-full h-screen overflow-hidden relative grid place-items-center bg-[#77CFF2]"
    >
        <div
          className='relative z-[1] flex flex-col items-center'
        >
          <motion.h1 
            style={{
              x:textXL
            }}
            className="font-bold text-white text-7xl md:text-9xl my-2 text-center"
          >
              Cristian Aguirre
          </motion.h1>
          
          <motion.h3 
            className='font-bold text-white text-3xl md:text-5xl my-2'
            style={{
              x:textXR
            }}
          >
            Software Developer
          </motion.h3>
        </div>

        <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:`url(${L1})`,
              backgroundPosition:'bottom',
              backgroundSize:'cover',
              y: backgroundY1
            }}
        />

        <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:`url(${L2})`,
              backgroundPosition:'bottom',
              backgroundSize:'cover',
              y: backgroundY2
            }}
        />

        <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:`url(${L3})`,
              backgroundPosition:'bottom',
              backgroundSize:'cover',
              y: backgroundY3
            }}
        />

        <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:`url(${L4})`,
              backgroundPosition:'bottom',
              backgroundSize:'cover',
              y: backgroundY4
            }}
        />

        <motion.div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:`url(${L5})`,
              backgroundPosition:'bottom',
              backgroundSize:'cover',
              y: backgroundY5
            }}
        />

        <motion.div
            className="absolute inset-0 z-[2]"
            style={{
              backgroundImage:`url(${L6})`,
              backgroundPosition:'bottom',
              backgroundSize:'cover',
              y: backgroundY6
            }}
        />
    </div>
  )
}
