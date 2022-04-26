import React from "react";
import "./resume-button.css";
import Footer from "./Footer";
import TagSphere from "./TagSphere.tsx";

import Particles from "react-tsparticles";
import config from "./config/particleConfig";
import Nav from "../Nav";

export default function Home() {
  return (
    <div className="">
      <Nav />
      <Particles params={config} />
      <div className="container mx-auto h-screen overflow-hidden ">
        <div className="flex-2 flex flex-col lg:flex-row ">
          {/* <div className="flex-1 flex w-auto h-fit"> */}
          <div className="flex-1 flex flex-col mt-48 max-h-fit ">
            <h2 className="text-2xl font-bold">Hello, My name is</h2>
            <h1 className="gradient-text font-extrabold text-8xl">
              Utshuk Raj Dhamala
            </h1>
            <div className="itruncate h-14 overflow-hidden">
              <div className="h-[168px] animate-move overflow-visible">
                <div className="h-14 text-3xl font-bold flex items-center text-[#FF6B6B]">
                  Web Developer
                </div>
                <div className="h-14 text-3xl font-bold flex items-center text-[#FF6B6B]">
                  Photographer
                </div>
                <div className="h-14 text-3xl font-bold flex items-center text-[#FF6B6B]">
                  Designer
                </div>
              </div>
            </div>
            <div className="max-w-2xl h-screen font-medium text-xl mt-1 leading-relaxed">
              A self-taught{" "}
              <span className="text-[#CE49BF] font-bold">
                Full-stack developer
              </span>{" "}
              located in Sydney, Australia with strong growth and learning
              mindset, looking for a opportunity to kickstart my career in Web
              development.
            </div>
          </div>
          {/* </div> */}
          <div className="flex-1 ">
            <TagSphere />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}
