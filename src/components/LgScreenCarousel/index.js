
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

function LgScreenCarousel() {
  const paw = (
    <FontAwesomeIcon
      icon={faPaw}
      className="px-1 text-violet-400"
    ></FontAwesomeIcon>
);

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

const [showDescription, toggleShowDescription] = useState(true);
return (
    <Carousel>
      <div className="relative">
        <img
          src={require(`../../assets/img/carousel/${0}.jpeg`)}
          className="block rounded-t-lg lg:rounded-lg"
          alt="project01"
        />
        <div className="legend lg-carousel">
          <div className="more-less">
            {showDescription ? (
              <button
                className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300 text-lg"
                onClick={() => toggleShowDescription(false)}
              >
                show less
              </button>
            ) : (
              <button
                className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300"
                onClick={() => toggleShowDescription(true)}
              >
                more...
              </button>
            )}
          </div>
          <h5 className="text-3xl text-center">{projects[0].name}</h5>
          <p
            className={`pt-2 text-center text-lg desc-align ${
              showDescription ? "block" : "hidden"
            }`}
          >
            {projects[0].description}
          </p>

          <div className="flex justify-center pt-3 pl-3 text-lg">
            <div className="grid grid-cols-2">
              <div>
                <a
                  className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded  transition-all ease-in-out duration-300"
                  href={projects[0].githubRepo}
                >
                  Github Repo
                </a>
              </div>
              <div>
                <a
                  className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded transition-all ease-in-out duration-300"
                  href={projects[0].deployedUrl}
                >
                  Check it out!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <img
          src={require(`../../assets/img/carousel/${1}.jpeg`)}
          className="block rounded-t-lg lg:rounded-lg"
          alt="Project02"
        />
        <div className="legend lg-carousel">
          <div className="more-less">
            {showDescription ? (
              <button
                className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300 text-lg"
                onClick={() => toggleShowDescription(false)}
              >
                show less
              </button>
            ) : (
              <button
                className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300"
                onClick={() => toggleShowDescription(true)}
              >
                more...
              </button>
            )}
          </div>
          <h5 className="text-3xl text-center">{projects[1].name}</h5>
          <p
            className={`pt-2 text-center text-lg desc-align ${
              showDescription ? "block" : "hidden"
            }`}
          >
            {projects[1].description}
          </p>

          <div className="flex justify-center pt-3 pl-3 text-lg">
            <div className="grid grid-cols-2">
              <div>
                <a
                  className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded  transition-all ease-in-out duration-300"
                  href={projects[1].githubRepo}
                >
                  Github Repo
                </a>
              </div>
              <div>
                <a
                  className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded transition-all ease-in-out duration-300"
                  href={projects[1].deployedUrl}
                >
                  Check it out!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <img
          src={require(`../../assets/img/carousel/${2}.jpeg`)}
          className="block rounded-t-lg lg:rounded-lg"
          alt="pet-fetcher"
        />
        <div className="legend lg-carousel">
          <div className="more-less">
            {showDescription ? (
              <button
                className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300 text-lg"
                onClick={() => toggleShowDescription(false)}
              >
                show less
              </button>
            ) : (
              <button
                className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300"
                onClick={() => toggleShowDescription(true)}
              >
                more...
              </button>
            )}
          </div>
          <h5 className="text-3xl text-center">{projects[2].name}</h5>
          <p
            className={`pt-2 text-center text-lg desc-align ${
              showDescription ? "block" : "hidden"
            }`}
          >
            {projects[2].description}
          </p>

          <div className="flex justify-center pt-3 pl-3 text-lg">
            <div className="grid grid-cols-2">
              <div>
                <a
                  className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded  transition-all ease-in-out duration-300"
                  href={projects[2].githubRepo}
                >
                  Github Repo
                </a>
              </div>
              <div>
                <a
                  className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded transition-all ease-in-out duration-300"
                  href={projects[2].deployedUrl}
                >
                  Check it out!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <img
          src={require(`../../assets/img/carousel/${3}.jpeg`)}
          className="block rounded-t-lg lg:rounded-lg"
          alt="pet-fetcher"
        />
        <div className="legend lg-carousel">
          <div className="more-less">
            {showDescription ? (
              <button
                className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300 text-lg"
                onClick={() => toggleShowDescription(false)}
              >
                show less
              </button>
            ) : (
              <button
                className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300"
                onClick={() => toggleShowDescription(true)}
              >
                more...
              </button>
            )}
          </div>
          <h5 className="text-3xl text-center">{projects[3].name}</h5>
          <p
            className={`pt-2 text-center text-lg desc-align ${
              showDescription ? "block" : "hidden"
            }`}
          >
            {projects[3].description}
          </p>

          <div className="flex justify-center pt-3 pl-3 text-lg">
            <div className="grid grid-cols-2">
              <div>
                <a
                  className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded  transition-all ease-in-out duration-300"
                  href={projects[3].githubRepo}
                >
                  Github Repo
                </a>
              </div>
              <div>
                <a
                  className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded transition-all ease-in-out duration-300"
                  href={projects[3].deployedUrl}
                >
                  Check it out!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Carousel>
  );
}

export default LgScreenCarousel;