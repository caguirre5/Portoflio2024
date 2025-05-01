import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  faCode,
  faMobileScreenButton,
  faPencil,
  faStar,
  faBrain,
  faMusic,
  faBasketballBall,
  faPalette,
  faPersonHiking,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import content from "../PageContent.json"; // Ajusta la ruta según tu estructura

const Facts = () => {
  const [selectedId, setSelectedId] = useState(null);

  const factEntries = Object.entries(content.about.facts);

  const factCards = factEntries.map(([key, value], index) => {
    const icons = [faCode, faMobileScreenButton, faPencil, faBrain];
    const gradients = [
      
      "from-[#0a90bc] to-cyan-500",
      "from-[#0a90bc] to-cyan-500",
      "from-[#0a90bc] to-cyan-500",
      "from-[#0a90bc] to-cyan-500",
    ];
  
    return {
      id: key,
      title: value.title,
      text: value.text,
      icon: icons[index],
      gradient: gradients[index],
      clickable: true,
    };
  });
  
  const interestCard = {
    id: "interests",
    title: "My interests",
    icon: faStar,
    gradient: 
    "from-[#214367] to-[#3771ac]",
    colSpan: "lg:col-span-2",
    clickable: false,
  };
  
  const cards = [...factCards, interestCard];
  

  return (
    <div className="w-full py-16 bg-[#03223d] flex justify-center relative z-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 max-w-screen-lg z-10">
      {cards.map((card) => (
        <motion.div
          layoutId={card.clickable ? card.id : undefined}
          key={card.id}
          onClick={card.clickable ? () => setSelectedId(card.id) : undefined}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className={`cursor-pointer relative h-60 p-5 rounded-xl shadow-md text-white overflow-hidden bg-gradient-to-br ${card.gradient} ${card.colSpan ?? ""}`}
        >
          {card.id === "interests" ? (
            <>
              <h3 className="text-3xl font-bold z-10 text-white mb-6">{card.title}</h3>
              <div className="flex flex-wrap justify-center items-center gap-6 z-10">
                {[faMusic, faBasketballBall, faPalette, faPersonHiking, faGamepad].map(
                  (icon, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={icon}
                      className="text-white text-5xl mt-6 sm:text-6xl md:text-6xl"
                    />
                  )
                )}
              </div>
            </>
          ) : (
            <>
              <h3 className="text-4xl font-bold z-10 relative">{card.title}</h3>
              <FontAwesomeIcon
                icon={card.icon}
                className="absolute text-white/20 text-[8rem] bottom-[-2rem] right-[-2rem] pointer-events-none"
              />
            </>
          )}

          <div className="absolute top-3 right-4 w-1 h-1 bg-white/30 rounded-full" />
          <div className="absolute top-4 left-4 w-1 h-1 bg-white/20 rounded-full" />
        </motion.div>
      ))}

      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center "
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId={selectedId}
              onClick={(e) => e.stopPropagation()}
              className="w-11/12 max-w-2xl h-96 bg-gradient-to-br from-white to-gray-100 rounded-xl p-8 text-gray-900  flex flex-col justify-between shadow-lg border border-gray-200"

            >
              <h2 className="text-3xl font-bold">
                {cards.find((c) => c.id === selectedId)?.title}
              </h2>
              <p className="mt-4 text-gray-900">
                {cards.find((c) => c.id === selectedId)?.text}
              </p>
              <button
                onClick={() => setSelectedId(null)}
                className="mt-auto bg-[#397ec3] text-white border border-white rounded-md px-4 py-2 self-end"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Facts;
