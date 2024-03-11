import {motion} from 'framer-motion'
import {useState, useEffect} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from '../worl.json'

const Section = (props) => {
    const {children} = props;

    return (
        <motion.section className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto
        flex flex-col items-start justify-center
        `}
            initial={{
                opacity: 0,
                y: 50,
            }}

            whileInView={{
                opacity:1,
                y:0,
                
            }}
            transition = {{
                duration: 1,
                delay: 0.5,
            }}
        >
            {children}
        </motion.section>
    )
}

const WelcomeSection = () => {
    return (
        <Section>
            <h1 className="text-6xl font-extrabold leading-snug">
                Hi, I'm
                <br/>
                <span className="bg-white px-1 italic">Cristian Aguirre</span>
            </h1>
            <motion.p className="text-lg text-gray-600 mt-4"
                initial={{
                    opacity: 0,
                    y: 50,
                }}
    
                whileInView={{
                    opacity:1,
                    y:0,
                    
                }}
                transition = {{
                    duration: 1,
                    delay: 0.9,
                }}
            >
                Passionate Front-End Developer and UX Designer
                <br/>
                looking to apply extensive skills
            </motion.p>
            <motion.button 
            className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16"
            initial={{
                opacity: 0,
                y: 50,
            }}

            whileInView={{
                opacity:1,
                y:0,
                
            }}
            transition = {{
                duration: 1,
                delay: 0.9,
            }}
            >
                Contact me
            </motion.button>
        </Section>
    )
}



const SkillsSection = () => {
    return (
        <Section>
            <motion.div whileInView={"visible"}> 
                <h2 className="text-5xl font-bold">Skills</h2>
                <div className="mt-8 space-y-4">
                    {skills.map((skill, index) => (
                        <div className="w-64" key={index}>
                            <motion.h3 
                                className="text-xl font-bold text-gray-800"
                                initial={{
                                    opacity: 0,
                                }}
                                variants = {{
                                    visible: {
                                        opacity: 1,
                                        transition : {
                                            duration: 1,
                                            delay: 1 + index * 0.2,
                                        }
                                    }
                                }}
                            >
                                {skill.title}
                            </motion.h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                <motion.div 
                                    className="h-full bg-indigo-500 rounded-full" style={{width: `${skill.level}%`}}
                                    initial={{
                                        scaleX:0,
                                        originX: 0,
                                    }}
                                    variants = {{
                                        visible: {
                                            scaleX: 1,
                                            transition : {
                                                duration: 1,
                                                delay: 1 + index * 0.2,
                                            }
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </Section>
    )
}

const WorkSection = () => {
    const [activeFilter, setActiveFilter] = useState('All')

    const [animateCard, setAnimateCard] = useState({y:0, opacity:1})

    const handleWorkFilter = (item) => {

    }

    const settings = {
        dots : true,
        infinite : true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll:3
    }

    return (
        <Section>
            <h2 className='head-text'>My Creative <span>Portfolio</span></h2>
            <div className='flex justify-center space-x-4'>
                {['UI/UX', 'Web App', 'Mobile App'].map((item, index) => (
                    <div 
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active':''}`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* Carousel div */}
            <Slider {...settings}
                animate={animateCard}
                transition={{duration:0.5, delayChildren:0.5}}
                className='flex flex-row w-full bg-slate-400 justify-center'
            >
                
                {data.map((project) => (
                    (project.category &&
                        <div id={project.id} className="m-3 w-96 bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-56 p-3">
                                <img
                                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                alt="card-image"
                                className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="p-4">
                                <h5 className="text-lg font-semibold text-blue-gray mb-2">{project.title}</h5>
                                <p className="text-sm text-blue-gray">
                                {project.description}
                                </p>
                            </div>
                            <div className="p-4 pt-0">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-200">Read More</button>
                            </div>
                        </div>
                    )
                ))}
                </Slider>
        </Section>
    )
}

const ContactSection = () => {
    return (
        <Section>
            <h2 className="text-5xl font-bold">Contact me</h2>
            <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
                <form>
                    <label htmlFor="name" className="font-medium text-gray-900 block mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                    />
                    <label
                        htmlFor="email"
                        className="font-medium text-gray-900 block mb-1 mt-8"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                    />
                    <label
                        htmlFor="email"
                        className="font-medium text-gray-900 block mb-1 mt-8"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                    />
                    <button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ">
                        Submit
                    </button>
                </form>
            </div>
        </Section>
    )
}

const skills = [
    {
        title: "React JS",
        level: 90,
    },
    {
        title: "Python",
        level: 80,
    },
    {
        title: "NextJS",
        level: 80,
    },
    {
        title: "SQL", 
        level: 60,
    },
    {
        title: "MongoDB",
        level: 40,
    },
    {
        title: "Java",
        level: 20,
    },
    {
        title: "C++",
        level: 40,
    },
    {
        title: "Unity",
        level: 40,
    },
]

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
    <WelcomeSection/>
    <Section>
        <h1>About</h1>
        <p>Most of the projects I have carried out, have gone through a design process in which I apply the most efficient UX/UI concepts and tools to build projects with modern web technologies that intends to have a positive impact on users.</p>
    </Section>
    <SkillsSection/>
    <WorkSection/>
    <ContactSection/>
    </div>
  )
}
