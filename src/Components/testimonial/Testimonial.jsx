import React from "react";
import './testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
       avatar: AVTR1,
       name: 'Tina Snow',
       review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        avatar: AVTR2,
        name: 'Alexender',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
     },
     {
        avatar: AVTR3,
        name: 'Assam Ashraf',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
     },
     {
        avatar: AVTR4,
        name: 'Maggie Grace',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
     },  
]

const Testimonial = () =>
{
    return (
        <section id="testimonial">
            <h5>Review From Clients</h5>
            <h2>Testimonial</h2>
            <Swiper className="container testimonials__container"
            modules = {[Pagination]} 
            spaceBetween = {40}
            slidesPerView = {1}
            Pagination = {{ clickable : true}}>
              {
                data.map(({avatar, name, review}, index) => 
                {
                  return(
                    <SwiperSlide key={index} className="testimonial">
                     <div className="client__avatar">
                      <img src={avatar}/>
                     </div>
                     <h5 className="client__name">{name}</h5>
                     <small className="client__review">
                       {review}
                     </small>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          
        </section>       
    )
}

export default Testimonial;

