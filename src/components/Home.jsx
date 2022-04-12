import React from "react";
import Navbar from "./Navbar";
import "./home.css";
import resume from "../Utshuk's Resume.pdf";
import Footer from "./Footer";
import TagSphere from "./TagSphere.tsx";

import Particles from "react-tsparticles";
import config from "./config/particleConfig";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Particles params={config} />
      <div className="container">
        <div className="intro">
          <div className="i-left">
            <div className="i-left-wrapper">
              <h2 className="i-intro">Hello, My name is</h2>
              <h1 className="i-name">Utshuk Raj Dhamala</h1>
              <div className="i-title">
                <div className="i-title-wrapper">
                  <div className="i-title-item">Web Developer</div>
                  <div className="i-title-item">Photographer</div>
                  <div className="i-title-item">Designer</div>
                </div>
              </div>
              <div className="i-description">
                A self-taught Full-stack developer located in Sydney, Australia
                with strong growth and learning mindset, looking for a
                opportunity to kickstart my career in Web development.
              </div>
            </div>
          </div>
          <div className="i-right">
            <div className="i-right-wrapper">
              <TagSphere />
            </div>
          </div>
        </div>
        <div className="button-links">
          <a className="fancy" href={resume} target="_blank" rel="noreferrer">
            <span className="top-key"></span>
            <span className="text">Resume</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </a>
          <Footer />
        </div>
      </div>
    </div>
  );
}
