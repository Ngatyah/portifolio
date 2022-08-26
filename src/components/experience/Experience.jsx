import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container container__experience">
        <div className="experience__category">
          <h3>Frontend Development</h3>
          <div className="skills">
            <article className="skill">
              <BsFillPatchCheckFill className="skill__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="skill">
              <BsFillPatchCheckFill className="skill__icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="skill">
              <BsFillPatchCheckFill className="skill__icon" />

              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="skill">
              <BsFillPatchCheckFill className="skill__icon" />
              <div>
                <h4>TAILWIND</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="skill">
              <BsFillPatchCheckFill className="skill__icon" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="skill">
              <BsFillPatchCheckFill className="skill__icon" />
              <div>
                <h4>REACT</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__category">
          <h3>Backend Development</h3>
          <div className="skills">
            <article className="skill">
              <BsFillPatchCheckFill className="skill__icon" />

              <div>
                <h4>NODEJS</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>

            <article className="skill">
              <BsFillPatchCheckFill className="skill__icon" />
              <div>
                <h4>DART</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="skill">
              <BsFillPatchCheckFill className="skill__icon" />

              <div>
                <h4>SQL</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="skill">
              <BsFillPatchCheckFill className="skill__icon" />
              <div>
                <h4>FIREBASE</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
            <article className="skill">
              <BsFillPatchCheckFill className="skill__icon" />

              <div>
                <h4>PYTHON</h4>
                <small className="text-light"> Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
