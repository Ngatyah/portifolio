import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocial;
