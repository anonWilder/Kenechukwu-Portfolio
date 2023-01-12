import React from 'react'
import './testimonials.css'
import AVTR1 from "../../assets/avatar (1).jpg";
import AVTR2 from "../../assets/avatar (2).jpg";
import AVTR3 from "../../assets/avatar (3).jpg";

// import Swiper core and required modules
import {Pagination} from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Godfrey odenigbo',
    review: 'He has the ability to capture readers attention and he at the same time delivers top quality technical contents in web development which i believe is best for beginners'
  },
  {
    avatar: AVTR2,
    name: 'Patrick Ugochukwu',
    review: 'I have been working with [Name] as our front-end developer for the past year and Im happy with his work. He has a great eye for design and is able to turn my ideas into beautiful and functional websites.'
  },
  {
    avatar: AVTR3,
    name: 'Miss Chibuzor',
    review: 'As an entrepreneuer, its been a pleasure working with Kenechukwu on my website project. His attention to detail and ability to deliver high-quality work on time is impressive. His front-end development skills are top-notch and he has been able to bring new ideas to the table that have helped improve my online presence.'
  }
]



const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar"/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials