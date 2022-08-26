import React from "react";
import "./portfolio.css";
import mobile from "../../assets/mobile.png";
import dark from "../../assets/dash-dark.png";

import dash1 from "../../assets/dash1.jpg";
import dash2 from "../../assets/dash3.jpg";
import dash3 from "../../assets/dash2.jpg";
import dash4 from "../../assets/dash4.png";
import dash5 from "../../assets/dash5.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container container__portfolio">
        {/* single portfolio item */}

        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={mobile} alt="mobile" />
          </div>
          <div className="portfolio__body">
            <h3>Portfolio title</h3>
            <a href="#r" className="btn">
              Github
            </a>
            <a href="#t" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </div>
        {/* end of portfolio item */}
        {/* single portfolio item */}

        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={dash1} alt="mobile" />
          </div>
          <div className="portfolio__body">
            <h3>Portfolio title</h3>
            <a href="#r" className="btn">
              Github
            </a>
            <a href="#t" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </div>
        {/* end of portfolio item */}
        {/* single portfolio item */}

        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={dash2} alt="mobile" />
          </div>
          <div className="portfolio__body">
            <h3>Portfolio title</h3>
            <a href="#r" className="btn">
              Github
            </a>
            <a href="#t" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </div>
        {/* end of portfolio item */}
        {/* single portfolio item */}

        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={dash3} alt="mobile" />
          </div>
          <div className="portfolio__body">
            <h3>Portfolio title</h3>
            <a href="#r" className="btn">
              Github
            </a>
            <a href="#t" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </div>
        {/* end of portfolio item */}
        {/* single portfolio item */}

        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={dash4} alt="mobile" />
          </div>
          <div className="portfolio__body">
            <h3>Portfolio title</h3>
            <a href="#r" className="btn">
              Github
            </a>
            <a href="#t" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </div>
        {/* end of portfolio item */}
        {/* single portfolio item */}

        <div className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={dash5} alt="mobile" />
          </div>
          <div className="portfolio__body">
            <h3>Portfolio title</h3>
            <a href="#r" className="btn">
              Github
            </a>
            <a href="#t" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </div>
        {/* end of portfolio item */}
      </div>
    </section>
  );
};

export default Portfolio;
