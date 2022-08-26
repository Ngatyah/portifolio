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
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <div className="about__icon">
                <MdOutlineFolderSpecial />
              </div>
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text,
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
