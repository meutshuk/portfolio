import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Calculator from "../images/calculator.png";
import Etch from "../images/etch-a-sletch.png";
import MemoryCard from "../images/memory-card.png";
import Chatbot from "../images/chatbot.png";
import Weather from "../images/weather-app.png";
import Shpping from "../images/shopping-cart.png";
import Link from "./Link";
import Github from "./Github";

export default function Projects() {
  return (
    <div className="">
      <Navbar />

      <div className="h-screen gradient-css py-10 p-0 grid xl:grid-cols-3 grid-cols-1 auto-rows-auto gap-x-4 gap-y-8 items-stretch md:grid-cols-2 justify-evenly content-evenly justify-items-center">
        <div>
          <div className="flex items-center flex-col h-full">
            <img
              src={Chatbot}
              alt="Chatbot"
              className="h-[17rem] w-[27rem] rounded-md border-4 border-white"
            />
            <div>ChatBot</div>
            <Github />
            <Link />
          </div>
        </div>
        <div className="flex items-center flex-col">
          <img
            src={Calculator}
            alt="calculator"
            className="h-[17rem] w-[27rem] rounded-md border-4 border-white"
          />
          <div>Calculator</div>
          <Github />
          <Link />
        </div>

        <div className="flex items-center flex-col">
          <img
            src={Etch}
            alt="Etch-a-Sketch"
            className="h-[17rem] w-[27rem] rounded-md border-4 border-white"
          />
          <div>Etch-a-Sketch</div>
          <Github />
          <Link />
        </div>

        <div className="flex items-center flex-col">
          <img
            src={MemoryCard}
            alt="Memory Card"
            className="h-[17rem] w-[27rem] rounded-md border-4 border-white"
          />
          <div>Memory Card</div>
          <Github />
          <Link />
        </div>

        <div className="flex items-center flex-col">
          <img
            src={Weather}
            alt="Weather"
            className="h-[17rem] w-[27rem] rounded-md border-4 border-white"
          />
          <div>Weather</div>
          <Github />
          <Link />
        </div>

        <div className="flex items-center flex-col">
          <img
            src={Shpping}
            alt="Resume Builder"
            className="h-[17rem] w-[27rem] rounded-md border-4 border-white"
          />
          <div className="flex mt-4">
            <div>Shopping Cart</div>
            <div className="pl-5 ">
              <Github />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
