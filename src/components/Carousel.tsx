import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "https://i.ibb.co/93qVSJBX/471397630-1196091902142174-2287633075556592578-n.jpg",
  "https://i.ibb.co/mFyNT4S4/468480175-1170521104699254-5675664647145369198-n.jpg",
  "https://i.ibb.co/mVWq3VWp/480246332-1235756141509083-8645131866822188831-n.jpg",
];

export const CarouselComponent = () => {
  return (
    <div className="relative w-full mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-56 sm:h-72 md:h-96 lg:h-112 rounded-lg bg-[#fef2f3]"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
