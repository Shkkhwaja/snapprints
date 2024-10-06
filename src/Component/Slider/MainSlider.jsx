import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function MainSlider() {

    const imgurl = "https://static.vecteezy.com/system/resources/previews/005/675/477/non_2x/template-for-design-and-presentation-of-a-logo-or-print-on-a-black-t-shirt-your-logo-on-the-t-shirt-banner-illustration-vector.jpg"
    const banner = [
        
        {
            id: "01",
            link: "/collection",
            img: imgurl
        },
        {
            id: "02",
            link: "/collection",
            img: imgurl
        },
        {
            id: "03",
            link: "/collection",
            img: imgurl
        },
        {
            id: "04",
            link: "/collection",
            img: imgurl
        },
        {
            id: "05",
            link: "/collection",
            img: imgurl
        },
    ]


  return (
    <div>
      <Swiper
        // Install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
      >
        {
            banner.map((item,index) => (
            <SwiperSlide key={index}>
          <Link to={item.link}>
            <img src={item.img} className="h-screen w-full" alt="Slide 1" />
          </Link>
        </SwiperSlide>
        ))
        }
        
      </Swiper>
    </div>
  );
}
