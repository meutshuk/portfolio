import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./project.css";


export default function Projects() {
 

  return (
    <div>
      <Navbar />
      <div className="container project">
        <div className="project-title">
          <h1>Projects</h1>
          <div className="tagcloud">
           
          </div>
        </div>
        {/* <div className="project-container">
          <div className="cart">Speech Recognition</div>
          <div className="cart">Shopping cart</div>
          <div className="cart">Etch a Sketch</div>
          <div className="cart">Memory Card</div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
