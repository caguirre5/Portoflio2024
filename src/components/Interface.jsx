import {motion} from 'framer-motion'
import {useState, useEffect} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'

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
            <motion.div
                animate={animateCard}
                transition={{duration:0.5, delayChildren:0.5}}
                className='app__work-portfolio'
            >
                {data.map((project) => (
                    (project.category &&
                        <div id={project.id}>
                            <h2>{project.title}</h2>
                        </div>    
                    )
                ))}

            </motion.div>
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
    </Section>
    <SkillsSection/>
    <WorkSection/>
    <ContactSection/>
    </div>
  )
}
