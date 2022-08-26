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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </li>
              <li>
                <BiCheck className="service__body-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
