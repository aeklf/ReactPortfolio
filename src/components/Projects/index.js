import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { SlideFade } from "@chakra-ui/react";
import LgScreenCarousel from "../LgScreenCarousel";

function Projects({ name }) {
  const paw = (
    <FontAwesomeIcon
      icon={faPaw}
      className="px-1 text-violet-400"
    ></FontAwesomeIcon>
  );

  const [smShowDescription, toggleSmShowDescription] = useState(null);

  const [projects] = useState([
    {
        name: <>First Bootcamp Project</>,
        description: (
            <>
            Collaborative project based on creating a Web Application with the tools we'd learned so far, including HTML, CSS, and Tailwind. We focused on creating a Weather Dashboard Application with a pleasant UI/UX and functional JS architecture.
            </>
        ),
        githubRepo: "https://github.com/aeklf/BootcampProject01",
        deployedUrl: "https://aeklf.github.io/BootcampProject01/",
    },
    {
        name: <>NurseXpress</>,
        description: (
            <>
            Second collaborative project in the Bootcamp; we created a platform with JS, CSS and HTML which serves to connect users to experienced medical practitioners and nurses seeking freelance work to patients who need home assistance.
            </>
        ),
        githubRepo: "https://github.com/aeklf/NurseXpress",
        deployedUrl: "https://aeklf.github.io/NurseXpress/",
    },
    {
        name:<>Weather Dashboard</>,
        description: (
            <>
            This application was Homework for the Bootcamp, based on using existing APIs to create an application where users can see the weather on locations of their choice.
            </>
        ),
        githubRepo: "https://github.com/aeklf/WeatherDashboard",
        deployedUrl: "https://aeklf.github.io/WeatherDashboard/",
    },
    {
        name: <>Portfolio</>,
        description: (
            <>
            This was the Portfolio created within the Bootcamp without using React. It is mostly raw CSS, structured with HTML and containing JS functions for the Contact Form and other specifications. You can view and compare it to the React based portfolio seen here!
            </>
        ),
        githubRepo: "https://github.com/aeklf/Portfolio",
        deployedUrl: "https://aeklf.github.io/Portfolio/",
    },
]);

return (
    <SlideFade in={name === "projects"} offsetX={50} offsetY={0}>
      <section className="no-scrollbar 2xl:container 2xl:mx-auto 2xl:px-0 py-3 lg:px-10 md:px-5 px-2">
        <div className="lg:hidden block flex justify-center text-lg text-sky-400 mb-3">
          <p className="animate-swipe-me">
            <i className="fa-solid fa-arrow-left pr-3"></i>
            <span className="text-sky-200">Swipe</span>
            <i className="fa-solid fa-arrow-right pl-3"></i>
          </p>
        </div>
        <span className="lg:block md:hidden hidden">
          <LgScreenCarousel />
        </span>
        <ul className="lg:hidden block flex overflow-scroll scroll-smooth gap-3 snap-x snap-mandatory touch-pan-x z-0 before:shrink-0 before:w-[10vw] after:shrink-0 after:w-[10vw] no-scrollbar shadow-lg">
          {projects.map((project, index) => (
            <li
              className="shrink-0 snap-center w-full h-full"
              key={`project-card-${index}`}
            >
              <div className="relative">
                <img
                src={require(`../../assets/img/carousel/small/${0}.jpeg`)}
                className="md:block hidden rounded-t-lg lg:rounded-lg"
                alt={project.name}
                />
                <img
                src={require(`../../assets/img/carousel/small/${1}.jpeg`)}
                  className="block md:hidden rounded-t-lg lg:rounded-lg"
                  alt={project.name}
                />

                <div className="px-6 py-4 rounded-b-lg block lg:hidden bg-gradient-to-b from-slate-700 to-slate-600">
                  <div className={`font-bold mb-2 flex justify-between`}>
                    <h3 className="text-xl">{project.name}</h3>
                    <div className="pl-1 text-lg">
                      {smShowDescription === index ? (
                        <button
                          className="text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300"
                          onClick={() => toggleSmShowDescription(null)}
                        >
                          Less
                        </button>
                      ) : (
                        <button
                          className="text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300"
                          onClick={() => toggleSmShowDescription(index)}
                        >
                          More...
                        </button>
                      )}
                    </div>
                  </div>
                  {smShowDescription === index && (
                    <p className="text-lg transition-all ease-in-out duration-300">
                      {project.description}
                    </p>
                  )}
                  <div className="flex justify-center pt-6">
                    <div className="grid grid-cols-2 md:gap-10 gap-2">
                      <div>
                        <a
                          className="bg-sky-50 hover:bg-slate-900 text-slate-900 hover:text-sky-50 py-2 px-3 md:text-lg text-md rounded transition-all ease-in-out duration-300"
                          href={project.githubRepo}
                        >
                          Github
                        </a>
                      </div>
                      <div>
                        {index !== 3 &&
                        index !== 4 &&
                        index !== 8 &&
                        index !== 9 &&
                        index !== 10 ? (
                          <a
                            className="bg-sky-50 hover:bg-slate-900 text-slate-900 hover:text-sky-50 py-2 px-3 md:text-lg text-md rounded transition-all ease-in-out duration-300"
                            href={project.deployedUrl}
                          >
                            Demo
                          </a>
                        ) : (
                          <a
                            className="bg-sky-50 hover:bg-slate-900 text-slate-900 hover:text-sky-50 py-2 px-3 md:text-lg text-md rounded transition-all ease-in-out duration-300"
                            href={project.deployedUrl}
                          >
                            Tutorial
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </SlideFade>
  );
}

export default Projects;