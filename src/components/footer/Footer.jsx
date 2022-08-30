import React from "react";
import "./footer.css";

import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Ngatyah
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/david-ngatyah-83a794107/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/Ngatyah" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/David_Ngatyah"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Ngatyah Portfolio. All rights reserved </small>
      </div>
    </footer>
  );
};

export default Footer;
