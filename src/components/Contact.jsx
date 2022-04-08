import React from "react";
import Navbar from "./Navbar";
import "./contact.css";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contact-left">
        <div>
          <h1>
            Fill the Form.
            <br /> Its Easy
          </h1>
          <form>
              
          </form>
        </div>
      </div>
      <div className="contact-right"></div>
      <Footer />
    </div>
  );
}
