import React from "react";
import Git from "../images/git.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linked.png";

import resume from "../Utshuk's Resume.pdf";

export default function Footer() {
  return (
    <div className="flex flex-col items-center bottom-6 m-auto absolute">
      <div className="mb-4">
        <a className="fancy" href={resume} target="_blank" rel="noreferrer">
          <span className="top-key"></span>
          <span className="text">Resume</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </a>
      </div>
      <div>
        <ul className="flex fle-row">
          <li className="m-4">
            <a
              href="https://github.com/meutshuk"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Git} alt="" height="40px" width="40px" />
            </a>
          </li>
          <li className="m-4">
            <a
              href="https://www.linkedin.com/in/utshuk-dhamala-08125118b/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="" height="40px" width="40px" />
            </a>
          </li>
          <li className="m-4">
            <a
              href="https://www.facebook.com/me.utshuk/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="" height="40px" width="40px" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
