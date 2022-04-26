import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Calculator from "../images/calculator.png";
import Etch from "../images/etch-a-sletch.png";
import MemoryCard from "../images/memory-card.png";
import Chatbot from "../images/chatbot.png";
import Weather from "../images/weather-app.png";
import Shopping from "../images/shopping-cart.png";
import Cards from "./Cards";
import Nav from "../Nav";

export default function Projects() {
  const projectsObj = [
    {
      name: "Chatbot",
      image: Chatbot,
      gitLink: "https://github.com/meutshuk/utshukAppliedProject",
      link: "",
    },
    {
      name: "Calculator",
      image: Calculator,
      gitLink: "https://github.com/meutshuk/calculator",
      link: "",
    },
    {
      name: "Etch-a-Sketch",
      image: Etch,
      gitLink: "https://github.com/meutshuk/etch-a-sketch",
      link: "",
    },
    {
      name: "Memory Card",
      image: MemoryCard,
      gitLink: "https://github.com/meutshuk/memory-card",
      link: "",
    },
    {
      name: "Weather App",
      image: Weather,
      gitLink: "https://github.com/meutshuk/weather-app",
      link: "",
    },
    {
      name: "Shopping App",
      image: Shopping,
      gitLink: "https://github.com/meutshuk/shopping-cart",
      link: "",
    },
  ];

  const card = projectsObj.map((item) => {
    return (
      <Cards
        key={item.name}
        name={item.name}
        image={item.image}
        gitLink={item.gitLink}
        link={item.link}
      />
    );
  });

  // console.log(card);

  return (
    <div className="xl:h-screen h-full bg-purple-300">
      <Nav />

      <div className=" py-20 px-10 grid xl:grid-cols-3 grid-cols-1 auto-rows-auto gap-x-4 gap-y-8 items-stretch md:grid-cols-2 justify-evenly content-evenly justify-items-center">
        {card}
      </div>
    </div>
  );
}
