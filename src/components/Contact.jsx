import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import "./contact-button.css";
import Footer from "./Footer";
import Email from "../images/newsletter.png";
import Phone from "../images/phone.png";
import Address from "../images/address.png";
import background from "../images/bg.jpg";

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
      <img
        className="w-full h-full fixed -z-50"
        src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/151.1941,-33.899,11.44,0/1280x909@2x?access_token=pk.eyJ1IjoidXRzaHVrcmFqIiwiYSI6ImNsMXhocHkyZTAyemUzbGxhbmNnNzdhZXEifQ.uKIe0hFC2tJPXcx3K6LVbw"
        // src={background}
        alt=""
      />
      <div className="flex flex-row justify-center">
        <div className="flex">
          <div className="flex-1 flex items-center flex-col mt-12">
            <form
              id="myForm"
              className="mt-5"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <input
                className="w-[50%] h-[50px] border-0 my-3 mx-40 text-sm pl-4 rounded-xl bg-lime-200 placeholder:text-purple-600"
                type="text"
                placeholder="First Name"
                name="user-first"
              />
              <input
                className="w-[50%] h-[50px] border-0 my-3 mx-40  text-sm pl-4 rounded-xl bg-lime-200 placeholder:text-purple-600"
                type="text"
                placeholder="Last Name"
                name="user-last"
              />
              <input
                className="w-[50%] h-[50px] border-0 my-3 mx-40  text-sm pl-4 rounded-xl bg-lime-200 placeholder:text-purple-600"
                type="text"
                placeholder="Subject"
                name="user-subject"
              />
              <input
                className="w-[50%] h-[50px] border-0 my-3 mx-40 text-sm pl-4 rounded-xl bg-lime-200 placeholder:text-purple-600"
                type="text"
                placeholder="Email"
                name="user-email"
              />
              <textarea
                className="w-[50%] h-[200px] my-3 mx-40 text-sm pl-4 rounded-xl bg-purple-200 placeholder:text-lime-600 p-2 placeholder:text-[16px]"
                rows="5"
                placeholder="Messages"
                name="message"
              />
              <button className="btn my-3 mx-40"> Submit</button>
              {done && "Thankyou!!!"}
            </form>
          </div>

          <div className="flex-1 mt-12">
            <div className="bg-stone-400 w-96 text-white p-4 rounded-lg">
              <div className="font-thin text-xl max-w-[300px] mb-4">
                <b className="text-[22px]">Whats your story? </b>Get in touch.
                Always there for opportunities.
              </div>
              <div className="c-info">
                <div className="flex items-center font-light w-[70%]">
                  <img src={Phone} alt="" className="w-8 h-8 mr-4" />
                  <b>0415977112</b>
                </div>
                <div className="flex items-center font-light w-[70%]">
                  <img src={Address} alt="" className="w-8 h-8 mr-4" />
                  <b>Wollongong, NSW</b>
                </div>
                <div className="flex items-center font-light w-[70%]">
                  <img src={Email} alt="" className="w-8 h-8 mr-4" />
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
