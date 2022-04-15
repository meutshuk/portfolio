import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Navbar() {
  return (
    <div className=" h-[60px] bg-[#FF6B6B] flex flex-row justify-between text-xl items-center">
      <div className="flex mx-8 h-9 w-10 ">
        <img src={logo} alt="" height="50px" />
      </div>
      <ul className="flex flex-row mr-8">
        <li className="p-4 flex items-center list-none">
          <Link
            className="transition-all ease-in-out hover:scale-110 hover:text-[#FFD93D] w-fit "
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="p-4 flex items-center">
          <Link
            className="transition-all ease-in-out hover:scale-110 hover:text-[#FFD93D] w-fit"
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li className="p-4 flex items-center">
          <Link
            className="transition-all ease-in-out hover:scale-110 hover:text-[#FFD93D] w-fit"
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
