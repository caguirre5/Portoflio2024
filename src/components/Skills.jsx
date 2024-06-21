import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faGitAlt, faGithub, faAws, faPython, faUnity, faFigma, faJava } from '@fortawesome/free-brands-svg-icons';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

import faCSharp from '../assets/logos/icons8-c-sharp-logo.svg'
import faCPP from '../assets/logos/icons8-c++.svg'
import faMysql from '../assets/logos/icons8-mysql.svg'
import faPhotoshop from '../assets/logos/icons8-photoshop.svg'
import faIllustrator from '../assets/logos/icons8-illustrator.svg'
import faTypescript from '../assets/logos/icons8-typescript.svg'
import faTailwind from '../assets/logos/icons8-tailwind-css.svg'
import faPostgresql from '../assets/logos/icons8-postgresql.svg'
import faPowerbi from '../assets/logos/icons8-power-bi.svg'
import faTableau from '../assets/logos/icons8-tableau-software.svg'

const Skills = () => {
  return (
    <div id="skills" className="relative w-full min-h-screen bg-gradient-to-b from-[#03223d] to-[#023053] flex items-center justify-center text-white">
      {/* Background Text */}
        <div className="hidden absolute inset-0 lg:flex items-center justify-center z-0 lg:mb-[15%]">
          <h1 className="text-[20rem] font-bold text-white opacity-5 select-none">SKILLS</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-10 lg:mt-[5%]">
        {/* Front End */}
        <div className="flex flex-col items-center">
          <h2 className="text-white font-bold text-2xl mb-4">Front End</h2>
          <div className="flex flex-wrap justify-center">
            <div className="p-4 flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faJsSquare} className="w-12 h-12" />
                <p className="mt-2">JavaScript</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faReact} className="w-12 h-12" />
                <p className="mt-2">React</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
                <img src={faTypescript} alt="C#" className="w-12 h-12" />
                <p className="mt-2">Typescript</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faReact} className="w-12 h-12" />
                <p className="mt-2">React Native</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
                <img src={faTailwind} alt="C#" className="w-12 h-12" />
                <p className="mt-2">Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/*  Data Science */}
        <div className="flex flex-col items-center">
          <h2 className="text-white font-bold text-2xl mb-4">Data Science</h2>
          <div className="flex flex-wrap justify-center">
            <div className="p-4 flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faPython} className="w-12 h-12" />
                <p className="mt-2">Python</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
              <img src={faPostgresql} alt="PostgreSQL" className="w-12 h-12" />
              <p className="mt-2">PostgreSQL</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
              <img src={faMysql} alt="MySQL" className="w-12 h-12" />
              <p className="mt-2">MySQL</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
              <img src={faPowerbi} alt="PowerBI" className="w-12 h-12" />
              <p className="mt-2">Power BI</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
              <img src={faTableau} alt="Tableau" className="w-12 h-12" />
              <p className="mt-2">Tableau</p>
            </div>
          </div>
        </div>

        {/* Others */}
        <div className="flex flex-col items-center">
          <h2 className="text-white font-bold text-2xl mb-4">Basic Knowledge</h2>
          <div className="flex flex-wrap justify-center">
            <div className="p-4 flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faGithub} className="w-12 h-12" />
                <p className="mt-2">GitHub</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faGitAlt} className="w-12 h-12" />
                <p className="mt-2">Git</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
                <FontAwesomeIcon icon={faJava} className="w-12 h-12" />
                <p className="mt-2">Java</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
                <img src={faCPP} alt="C#" className="w-12 h-12" />
                <p className="mt-2">C++</p>
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
                <img src={faCSharp} alt="C#" className="w-12 h-12" />
                <p className="mt-2">C#</p>
            </div>
          </div>
        </div>

        {/* Diseño */}
        <div className="flex flex-col items-center">
            <h2 className="text-white font-bold text-2xl mb-4">Others</h2>
            <div className="flex flex-wrap justify-center">
                <div className="p-4 flex flex-col items-center justify-center">
                    <FontAwesomeIcon icon={faRobot} className="w-12 h-12" />
                    <p className="mt-2">IPA</p>
                </div>
                <div className="p-4 flex flex-col items-center justify-center">
                    <FontAwesomeIcon icon={faAws} className="w-12 h-12" />
                    <p className="mt-2">AWS</p>
                </div>
                <div className="p-4 flex flex-col items-center justify-center">
                    <FontAwesomeIcon icon={faUnity} className="w-12 h-12" />
                    <p className="mt-2">Unity</p>
                </div>
                <div className="p-4 flex flex-col items-center justify-center">
                    <img src={faPhotoshop} alt="Photoshop" className="w-12 h-12" />   
                <p className="mt-2">Photoshop</p>
                </div>
                <div className="p-4 flex flex-col items-center justify-center">
                    <img src={faIllustrator} alt="Illustrator" className="w-12 h-12" />
                <p className="mt-2">Illustrator</p>
                </div>
                <div className="p-4 flex flex-col items-center justify-center">
                    <FontAwesomeIcon icon={faFigma} className="w-12 h-12" />
                    <p className="mt-2">Figma</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
