import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDatabase, faPaw } from '@fortawesome/free-solid-svg-icons'
import { faSmile, faCalendarTimes } from '@fortawesome/free-regular-svg-icons'
import { Image, SlideFade } from '@chakra-ui/react'


function About({ aboutSelected }) {
    const [aboutListItems] = useState([
        {
            icon: faCoffee,
            point: 
            <>
                I am a Humanities major exploring full stack software development, soon to be finished with the <span className="text-sky-300 font-semibold">Coding Bootcamp</span> in <span className="text-teal-400 font-semibold">August 2022</span>. I am currently based out of <span className="text-sky-300 font-semibold">Berlin<span className="text-sky-50 font-normal">,</span>Germany</span>
            </>,
            transition: -20
        },
        {
            icon: faSmile,
            point: 
            <>
                My interest is in creating apps through a focus on <span className="text-sky-300 font-semibold">front-end development</span>.  I love exploring back-end logic users can easily interact with too. My favorite part about developing software is creating the <span className="text-sky-300 font-semibold">user experience</span>
            </>,
            transition: -40
        },
        {
            icon: faDatabase,
            point:
            <>
                I really enjoy working with <span className="text-sky-300 font-semibold">React</span>, and have experience with <span className="text-sky-300 font-semibold">CSS</span>, <span className="text-sky-300 font-semibold">MongoDB/Mongoose databases</span>, and <span className="text-sky-300 font-semibold">MySQL</span>. A well structured <span className="text-sky-300 font-semibold">web application</span> that is constructed with well structured database architecture and visual aesthetics on front-end is my main focus.
            </>,
            transition: -60
        },
        {
            icon: faCalendarTimes,
            point: 
            <>
              I <span className="text-sky-300 font-semibold">love</span> learning about new languages and technologies. After I am finished with my bootcamp I intend to learn <span className="text-sky-300 font-semibold">Python</span>, <span className="text-sky-300 font-semibold">C++</span>, <span className="text-sky-300 font-semibold">C#</span>, and <span className="text-sky-300 font-semibold">more about the React framework</span>.
            </>,
            transition: -80
        },
        {
            icon: faPaw,
            point:
            <>
               I am a huge fan of <span className="text-sky-300 font-semibold">Neuroscience, AI and Machine Learning</span>. It actually led me to this <span className="text-sky-300 font-semibold">Bootcamp</span> because of my interest in continued education in this field.
            </>,
            transition: -100
        }
    ]);

    return (
            <section className="grid lg:grid-cols-2 grid-row-2 justify-center justify-items-center">
                <SlideFade offsetX={-100} offsetY={0} in={aboutSelected} >
                    <Image 
                        src={require("../../assets/img/profile-pic/profile-pic.png")} 
                        alt="Profile Pic" 
                        className="float-left shadow-2xl shadow-slate-700 bg-transparent"  
                        boxSize={{ base: '300px', md: '350px', lg: '500px' }}
                        objectFit="cover"
                        borderRadius="full"
                    />
                </SlideFade>
                <ul className="lg:pl-0 lg:pr-10 px-5 bg-transparent">
                {aboutListItems.map((listItem, index) => (
                    <SlideFade key={`about-me-${index}`} in={aboutSelected} offsetX={0} offsetY={listItem.transition}>
                            <li className="py-6 pr-3 flex bg-transparent">
                                <div className="flex flex-col justify-center pr-6 text-3xl text-blue-300 bg-transparent">
                                    <FontAwesomeIcon icon={listItem.icon}></FontAwesomeIcon>
                                </div>
                                <p>{listItem.point}</p> 
                            </li>
                    </SlideFade>
                ))}
                </ul>
            </section>
    )
}

export default About;