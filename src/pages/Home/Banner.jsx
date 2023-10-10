import React from 'react'
import './Banner.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
function Banner() {
  const images = [
    "https://i.ibb.co/B61g1wf/wedding-banner-1.jpg",
    "https://i.ibb.co/bHSpwkG/wedding-banner-3.jpg",
    "https://i.ibb.co/hyJD30f/wedding-banner-2.jpg",
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mb-5"
      >
        <SwiperSlide><figure><img src={images[0]} alt="" /></figure></SwiperSlide>
        <SwiperSlide><figure><img src={images[1]} alt="" /></figure></SwiperSlide>
        <SwiperSlide><figure><img src={images[2]} alt="" /></figure></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner