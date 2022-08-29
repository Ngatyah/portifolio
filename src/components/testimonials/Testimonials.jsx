import React from "react";
import "./testimonials.css";
import man from "./../../assets/happy.png";
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              repudiandae reprehenderit atque maxime assumenda dolor?
              <RiDoubleQuotesR className="testimony__icons" />
            </small>
          </div>
        </SwiperSlide>

        {/* end of single avatar */}
        {/* create a single avatar  */}
        <SwiperSlide>
          <div className="testimony">
            <div className="avatar">
              <img src={man} alt="" />
            </div>
            <h5 className="client__name">Eric Wainaina</h5>
            <small className="testimony__review">
              <RiDoubleQuotesL className="testimony__icons" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              repudiandae reprehenderit atque maxime assumenda dolor?
              <RiDoubleQuotesR className="testimony__icons" />
            </small>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* create a single avatar  */}
          <div className="testimony">
            <div className="avatar">
              <img src={man} alt="" />
            </div>
            <h5 className="client__name">Eric Wainaina</h5>
            <small className="testimony__review">
              <RiDoubleQuotesL className="testimony__icons" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              repudiandae reprehenderit atque maxime assumenda dolor?
              <RiDoubleQuotesR className="testimony__icons" />
            </small>
          </div>
        </SwiperSlide>
        {/* create a single avatar  */}
        <SwiperSlide>
          <div className="testimony">
            <div className="avatar">
              <img src={man} alt="" />
            </div>
            <h5 className="client__name">Eric Wainaina</h5>
            <small className="testimony__review">
              <RiDoubleQuotesL className="testimony__icons" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              repudiandae reprehenderit atque maxime assumenda dolor?
              <RiDoubleQuotesR className="testimony__icons" />
            </small>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
