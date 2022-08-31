import React from "react";
import "./about.css";
import man from "../../assets/ting.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFolderSpecial } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container container__about">
        <div className="about__me">
          <div className="about__me-img">
            <img src={man} alt="man" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <div className="about__icon">
                <FaAward />
              </div>

              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <div className="about__icon">
                <FiUsers />
              </div>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className="about__card">
              <div className="about__icon">
                <MdOutlineFolderSpecial />
              </div>
              <h5>Projects</h5>
              <small>+10 completed</small>
            </article>
          </div>
          <p>
            I have more than 3 years experience in developing web applications
            and websites. I can build full stack as well and frontend
            development for you. For full stack development I use MERN stack.
            I'll use VS code for developing your application. I develop apps
            with latest technology including Html, CSS, Bootstrap, Reactjs,
            Nodejs, JavaScript
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
