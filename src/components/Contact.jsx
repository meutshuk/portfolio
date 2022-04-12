import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import "./contact.css";
import "./contact-button.css";
import Footer from "./Footer";
import Email from "../images/newsletter.png";
import Phone from "../images/phone.png";
import Address from "../images/address.png";

import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b0c8i9z",
        "template_4yhxd1d",
        formRef.current,
        "WIkaAMFla5LllXJdH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById("myForm").reset();
  };
  return (
    <div>
      <Navbar />
      <img className="img" src="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/151.0475,-33.9137,10.38,339,6/1280x900?access_token=pk.eyJ1IjoidXRzaHVrcmFqIiwiYSI6ImNsMXU5bnFidzBuNjYzYnF2d3hjYWoyaHkifQ.PA6KrC-v7bSI5z37uFcmyQ" alt="" />
      <div className="container">
        <div className="contact">
          <div className="contact-left">
            {/* <h1 className="c-title">
                Fill the Form.
                <br /> Its Easy
              </h1> */}
            <form id="myForm" ref={formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder="First Name" name="user-first" />
              <input type="text" placeholder="Last Name" name="user-last" />
              <input type="text" placeholder="Subject" name="user-subject" />
              <input type="text" placeholder="Email" name="user-email" />
              <textarea rows="5" placeholder="" name="message" />
              <button className="btn"> Submit</button>
              {done && "Thankyou!!!"}
            </form>
          </div>
          
          <div className="contact-right">
              
            <div className="card">
                <div className="contact-description">
                  <b>Whats your story? </b>Get in touch. Always there for
                  opportunities.
                </div>
                <div className="c-info">
                  <div className="c-info-item">
                    <img src={Phone} alt="" className="c-icon" />
                    <b>0415977112</b>
                  </div>
                  <div className="c-info-item">
                    <img src={Address} alt="" className="c-icon" />
                    <b>Wollongong, NSW</b>
                  </div>
                  <div className="c-info-item">
                    <img src={Email} alt="" className="c-icon" />
                    <b>me.utshuk1001@gmail.com</b>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
