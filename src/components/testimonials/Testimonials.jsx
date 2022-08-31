import React from "react";
import "./testimonials.css";
import man from "./../../assets/happy.png";
import male from "../../assets/male.jpg";
import hot from "../../assets/hot.jpg";
import black from "../../assets/black.jpg";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Here what our Clients say</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container container__testimonials"
        modules={[Pagination, Scrollbar]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {/* create a single avatar  */}
        <SwiperSlide>
          <div className="testimony">
            <div className="avatar">
              <img src={man} alt="" />
            </div>
            <h5 className="client__name">Eric Wainaina</h5>
            <small className="testimony__review">
              <RiDoubleQuotesL className="testimony__icons" />
              Excellent work, David stays consistent with the good quality of
              his deliveries. Will definitely continue to work with him.
              <RiDoubleQuotesR className="testimony__icons" />
            </small>
          </div>
        </SwiperSlide>

        {/* end of single avatar */}
        {/* create a single avatar  */}
        <SwiperSlide>
          <div className="testimony">
            <div className="avatar">
              <img src={male} alt="" />
            </div>
            <h5 className="client__name">Timothy</h5>
            <small className="testimony__review">
              <RiDoubleQuotesL className="testimony__icons" />
              Best developer. Very trustworthy.. Will get the work done fast and
              best efficient way possible
              <RiDoubleQuotesR className="testimony__icons" />
            </small>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* create a single avatar  */}
          <div className="testimony">
            <div className="avatar">
              <img src={hot} alt="" />
            </div>
            <h5 className="client__name">Charity</h5>
            <small className="testimony__review">
              <RiDoubleQuotesL className="testimony__icons" />
              fast response, good work in general, although had to teach seller
              use new npm packages instead of legacy ones, but that's acceptable
              <RiDoubleQuotesR className="testimony__icons" />
            </small>
          </div>
        </SwiperSlide>
        {/* create a single avatar  */}
        <SwiperSlide>
          <div className="testimony">
            <div className="avatar">
              <img src={black} alt="" />
            </div>
            <h5 className="client__name">Doris Ruth</h5>
            <small className="testimony__review">
              <RiDoubleQuotesL className="testimony__icons" />
              Amazing experience very impressed of the awesome work 5 star
              communication with a lot of passion pay attention to detail will
              come back soon
              <RiDoubleQuotesR className="testimony__icons" />
            </small>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
