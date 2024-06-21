import React from 'react'

import image from "../assets/Avatar.jpg"
import image2 from "../assets/Avatar2.jpg"

const About = () => {
  return (
    <div id="about" className="relative w-full min-h-screen bg-gradient-to-b from-[#0c1926] to-[#03223d] flex flex-col items-center justify-center">
        {/* Background Text */}
        <div className="hidden absolute inset-0 lg:flex items-center justify-center z-0 lg:mb-[15%]">
          <h1 className="text-[20rem] font-bold text-white opacity-10 select-none">ABOUT</h1>
        </div>
        
        <div className='flex flex-col lg:flex-row items-center justify-center z-10 px-[18%] my-20 lg:my-0 lg:mt-[5%]'>
          {/* Main Content */}  
          <section className="w-full order-2 lg:order-1 flex-1 lg:pr-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-center my-10 lg:mb-10 lg:mt-0">Hi, I'm Cristian</h2>
            <p className="text-white ">
              I am a passionate software developer from Guatemala, specializing in frontend development for web and mobile applications. 
              My career has focused on creating high-quality user experiences and I am currently delving into the world of Data Science.
              Additionally, I have explored game development and augmented reality, further expanding my skill set.
            </p>
            <br/>
            <p className="text-white ">
              In my personal life, I have a deep appreciation for the arts and music, and I enjoy staying active through various physical activities. 
              My creative pursuits and love for the outdoors inspire my approach to innovative and dedicated work in all my projects.
            </p>
          </section>
        
          {/* Circle Element */}
          <div className="w-80 h-80 bg-gray-300 rounded-full order-1 lg:order-2 bg-cover bg-center border-8" style={{ backgroundImage: `url(${image})`}}></div>
        </div>
    </div>
  )
}

export default About;
