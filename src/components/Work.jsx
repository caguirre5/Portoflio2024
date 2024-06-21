import React, { useState } from 'react';

import UX_Portfolio_1 from "../assets/projects/UX_Portfolio.png"
import WEB_Portfolio_1 from "../assets/projects/WEB_Portfolio.png"
import WEB_Caribbean from "../assets/projects/WEB_Caribbean.png"
import WEB_ICE from "../assets/projects/WEB_ICE.png"
import WEB_Tesla from "../assets/projects/WEB_Tesla.png"

import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardComponent = ({ title, description, category, image, icon, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden relative"
      style={{ minHeight: '180px', width: '320px' }}
      onClick={onClick}
    >
      <div className="relative h-60 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      <FontAwesomeIcon icon={icon} className="w-12 h-12" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-base mb-4">{description}</p>
          <button className="bg-white text-black py-2 px-4 rounded-lg font-semibold mt-4" onClick={onClick}>See More</button>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const [filter, setFilter] = useState('WEB DEVELOPMENT');

  const cards = [
    { id: 1, category: 'WEB DEVELOPMENT', description:"algo", title: 'Caribbean Goods', imagePortrait: WEB_Caribbean, url: "", icon: faRobot },
    { id: 2, category: 'WEB DEVELOPMENT', description:"algo", title: 'Old Portfolio', imagePortrait:  WEB_Portfolio_1, url: "https://caguirre5.github.io/PortfolioProject/"  },
    { id: 3, category: 'WEB DEVELOPMENT', description:"algo", title: 'ICE Project', imagePortrait: WEB_ICE, url: "" },
    { id: 4, category: 'WEB DEVELOPMENT', description:"algo", title: 'Tesla Clone', imagePortrait: WEB_Tesla },
    { id: 5, category: 'WEB DEVELOPMENT', description:"algo", title: 'Simulator', imagePortrait: "https://cdn.prod.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png", url: "" },
    { id: 6, category: 'WEB DEVELOPMENT', description:"algo", title: 'Course', imagePortrait: "https://cdn.prod.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png", url: "" },
    { id: 7, category: 'UX DESIGN', description:"algo", title: 'Portfolio', imagePortrait: UX_Portfolio_1 },
    { id: 8, category: 'UX DESIGN', description:"algo", title: 'Pedidotes Ya', imagePortrait: "https://cdn.prod.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png" },
    { id: 9, category: 'UX DESIGN', description:"algo", title: 'Movies App', imagePortrait: "https://cdn.prod.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png" },
    { id: 10, category: 'UX DESIGN', description:"algo", title: 'Steam for Moms', imagePortrait: "https://cdn.prod.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png" },
    { id: 11, category: 'UX DESIGN', description:"algo", title: 'Traveling App', imagePortrait: "https://cdn.prod.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png" },
    { id: 12, category: 'UX DESIGN', description:"algo", title: 'Whatsapp Pay', imagePortrait: "https://cdn.prod.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png" },
    { id: 13, category: 'DATA SCIENCE', description:"algo", title: 'Card 13', imagePortrait: "https://cdn.prod.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png" },
    { id: 14, category: 'DATA SCIENCE', description:"algo", title: 'Card 14', imagePortrait: "https://cdn.prod.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png" },
    { id: 15, category: 'DATA SCIENCE', description:"algo", title: 'Card 15', imagePortrait: "https://cdn.prod.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png" },
    { id: 16, category: 'DATA SCIENCE', description:"algo", title: 'Card 16', imagePortrait: "https://cdn.prod.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png" },
    { id: 17, category: 'DATA SCIENCE', description:"algo", title: 'Card 17', imagePortrait: "https://cdn.prod.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png" },
    { id: 18, category: 'DATA SCIENCE', description:"algo", title: 'Card 18', imagePortrait: "https://cdn.prod.website-files.com/5b5729421aca332c60585f78/63f5fa23da820b87c87958be_61ba503872080311dde1ea56_long-form-landing-page-examples.png" },
  ];

  const filteredCards = filter === 'ALL' ? cards : cards.filter(card => card.category === filter);

  return (
    <div id="work" className="relative w-full bg-gradient-to-b from-[#023053] to-[#03223d] flex flex-col items-center justify-center text-[#FAFAFA] p-5 min-h-screen">
      {/* Background Text */}
      <div className="hidden absolute inset-0 lg:flex items-start justify-center z-0 lg:mt-[-5%]">
          <h1 className="text-[20rem] font-bold text-white opacity-10 select-none">WORK</h1>
      </div>
      {/* Navigation Buttons */}
      <div className="flex space-x-4 mb-8 z-10">
        <button 
          className={`px-4 py-2 rounded-full ${filter === 'WEB DEVELOPMENT' ? 'bg-[#397ec3] border-[#397ec3] text-white' : 'text-white border-white'} hover:bg-[#3c70a4] hover:border-[#3c70a4] focus:outline-none border-2`} 
          onClick={() => setFilter('WEB DEVELOPMENT')}
        >
          WEB DEVELOPMENT
        </button>
        <button 
          className={`px-4 py-2 rounded-full ${filter === 'UX DESIGN' ? 'bg-[#397ec3] border-[#397ec3] text-white' : 'text-white border-white'} hover:bg-[#3c70a4] hover:border-[#3c70a4] focus:outline-none border-2`} 
          onClick={() => setFilter('UX DESIGN')}
        >
          UX DESIGN
        </button>
        <button 
          className={`px-4 py-2 rounded-full ${filter === 'DATA SCIENCE' ? 'bg-[#397ec3] border-[#397ec3] text-white' : 'text-white border-white'} hover:bg-[#3c70a4] hover:border-[#3c70a4] focus:outline-none border-2`} 
          onClick={() => setFilter('DATA SCIENCE')}
        >
          DATA SCIENCE
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 w-full max-w-screen-lg">
        {filteredCards.map(card => (
          <CardComponent key={card.id} title={card.title} description={card.description} category={card.category} image={card.imagePortrait} icon={card.icon}/>
        ))}
      </div>
    </div>
  );
};

export default Work;
