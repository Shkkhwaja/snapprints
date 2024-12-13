import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import banner1 from "../../Images/Banner/banner1.png"
import banner2 from "../../Images/Banner/banner2.png"
import banner3 from "../../Images/Banner/banner3.png"
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function MainSlider() {


    const banner = [
        
        {
            id: "01",
            link: "/collection",
            img: banner1
        },
        {
            id: "02",
            link: "/collection",
            img: banner2
        },
        {
            id: "03",
            link: "/collection",
            img: banner3
        },
        
    ]


  return (
    <div>
      <Swiper
        // Install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
      >
        {
            banner.map((item,index) => (
            <SwiperSlide key={index}>
          <Link to={item.link}>
            <img src={item.img} className="md:h-[90vh] md:mt-[5em] mt-[4em] w-full" alt="Slide 1" />
          </Link>
        </SwiperSlide>
        ))
        }
        
      </Swiper>
    </div>
  );
}
