import React from 'react'
import './testimonials.css'
import AVTR1 from "../../assets/avatar (1).jpg";
import AVTR2 from "../../assets/avatar (2).jpg";
import AVTR3 from "../../assets/avatar (3).jpg";
import AVTR4 from "../../assets/avatar (4).jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className='client__name'>Benjamin</h5>
            <small className="client__review">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate enim id rem similique corrupti atque at voluptatum accusantium nesciunt. Incidunt error nihil maxime earum nostrum unde repellendus esse quaerat nulla.
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="" />
          </div>
          <h5 className='client__name'>Benjamin</h5>
            <small className="client__review">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate enim id rem similique corrupti atque at voluptatum accusantium nesciunt. Incidunt error nihil maxime earum nostrum unde repellendus esse quaerat nulla.
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="" />
          </div>
          <h5 className='client__name'>Benjamin</h5>
            <small className="client__review">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate enim id rem similique corrupti atque at voluptatum accusantium nesciunt. Incidunt error nihil maxime earum nostrum unde repellendus esse quaerat nulla.
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="" />
          </div>
          <h5 className='client__name'>Benjamin</h5>
            <small className="client__review">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate enim id rem similique corrupti atque at voluptatum accusantium nesciunt. Incidunt error nihil maxime earum nostrum unde repellendus esse quaerat nulla.
            </small>
        </article>
      </div>
      </section>
  )
}

export default Testimonials