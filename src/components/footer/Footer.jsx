import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaGitlab
} from "react-icons/fa";

import { IoMdMail } from "react-icons/io";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Designed and Developed by Swapnil Kharat Copyright © 2024
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a href="mailto:swapnil200229@gmail.com" target="blank">
              <IoMdMail />
            </a>
          </span>
          <span className="icon">
            <a href="https://github.com/DrDoooooom" target="blank">
              <FaGithub />
            </a>
          </span>
          <span className="icon">
            <a href="https://gitlab.com/DrDoooooom" target="blank">
              <FaGitlab />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://www.linkedin.com/in/swapnil-kharat-29300a181/"
              target="blank"
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
