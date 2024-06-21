import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faBasketball, faPalette, faPersonHiking, faGamepad } from '@fortawesome/free-solid-svg-icons';
import Data from '../PageContent.json'

const Facts = () => {
  return (
    <div className="relative w-full  bg-[#03223d] flex items-center justify-center text-[#FAFAFA]">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-6 w-11/12 max-w-screen-lg">
            {/* First Row */}
            <div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-none border-gray-100 p-4 lg:p-8">
                <h2 className="text-2xl font-bold pb-4">{Data.about.facts.fact_1.title}</h2>
                <p>{Data.about.facts.fact_1.text}</p>
            </div>
            <div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-none border-gray-100 p-4 lg:p-8">
                <h2 className="text-2xl font-bold pb-4">{Data.about.facts.fact_2.title}</h2>
                <p>{Data.about.facts.fact_2.text}</p>
            </div>
            <div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-none border-gray-100 p-4 lg:p-8">
                <h2 className="text-2xl font-bold pb-4">{Data.about.facts.fact_3.title}</h2>
                <p>{Data.about.facts.fact_3.text}</p>
            </div>

            {/* Second Row */}
            <div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-none border-gray-100 p-4 lg:p-8 py-12 lg:col-span-2 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold pb-4">My interests</h2>
                <div className="flex flex-wrap justify-evenly w-4/5">
                    <div className="p-4 flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faMusic} className="w-12 h-12 text-back" />
                        {/* <p className="mt-2">Music</p> */}
                    </div>
                    <div className="p-4 flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faPalette} className="w-12 h-12 text-blck" />
                        {/* <p className="mt-2">Arts</p> */}
                    </div>
                    <div className="p-4 flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faBasketball} className="w-12 h-12 text-back" />
                        {/* <p className="mt-2">Sports</p> */}
                    </div>
                    <div className="p-4 flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faPersonHiking} className="w-12 h-12 text-back" /> 
                        {/* <p className="mt-2">Outdoor</p> */}
                    </div>
                    <div className="p-4 flex flex-col items-center justify-center">
                        <FontAwesomeIcon icon={faGamepad} className="w-12 h-12 text-back" />  
                        {/* <p className="mt-2">Videogames</p> */}
                    </div>
                </div>
            </div>
            <div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-none border-gray-100 p-4 lg:p-8">
                <h2 className="text-2xl font-bold pb-4">{Data.about.facts.fact_4.title}</h2>
                <p>{Data.about.facts.fact_4.text}</p>
            </div>
        </div>
    </div>
  );
};

export default Facts;
