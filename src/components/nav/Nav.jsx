import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser, AiOutlinePhone } from "react-icons/ai";
import { SiTestinglibrary } from "react-icons/si";
import { FaHeartbeat } from "react-icons/fa";
import { BsTools } from "react-icons/bs";

const Nav = () => {
  const [activeNav, setActiveNav] = useState();

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>

      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <SiTestinglibrary />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <FaHeartbeat />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActiveNav("#testimonials")}
        className={activeNav === "#testimonials" ? "active" : ""}
      >
        <BsTools />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlinePhone />
      </a>
    </nav>
  );
};

export default Nav;
