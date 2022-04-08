import React from "react";
import Git from "../images/git.png";
import facebook from "../images/facebook.png";
import linkedin from "../images/linked.png";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="social-links">
        <li className="social-link-item">
          <a
            href="https://github.com/meutshuk"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Git} alt="" height="40px" width="40px" />
          </a>
        </li>
        <li className="social-link-item">
          <a
            href="https://www.linkedin.com/in/utshuk-dhamala-08125118b/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="" height="40px" width="40px" />
          </a>
        </li>
        <li className="social-link-item">
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
  );
}
