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


}