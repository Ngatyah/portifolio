import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>My Services </h2>
      <div className="container container__services">
        <div className="services">
          <div className="service__head">
            <h4>Mobile Development</h4>
          </div>
          <div className="service__body">
            <ul>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Beautiful Design And Solid User Experience</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Beautiful Design And Solid User Experience</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Ads & monetization</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Mimic the performance of a native app.</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Create a complex, custom UI with ease.</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Add Firebase and Firestore services to your App. </p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p> e-commerce Flutter application.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="services">
          <div className="service__head">
            <h4>Frontend Development</h4>
          </div>
          <div className="service__body">
            <ul>
              <li>
                <BiCheck className="service__body-icon" />
                <p>
                  Frontend web development using modern techniques and
                  frameworks.
                </p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>JavaScript development using modern standards,</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>
                  Using and working in team environments that use agile
                  methodologies (e.g., Scrum, Lean).
                </p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Use React and Vue Js Frameworks</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>
                  Creating mobile-responsive apps that will work well on mobile
                  devices
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="services">
          <div className="service__head">
            <h4>Backend Development</h4>
          </div>
          <div className="service__body">
            <ul>
              <li>
                <BiCheck className="service__body-icon" />
                <p> SQL, MariaDB and many relational databases.</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Heroku services.</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>AWS services.</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Payment gateway integrations.</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>API integration </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
