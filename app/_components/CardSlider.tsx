"use client";

import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import CardProject from "@/app/_components/CardProject";

import { Project } from "@/app/_types";

const CardSlider = ({ data }: { data: Project[] }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      grabCursor
      slidesPerView={1.2}
      spaceBetween={25}
      breakpoints={{
        480: { slidesPerView: 2.2 },
        740: { slidesPerView: 2.2 },
        1024: { slidesPerView: 2.2 },
      }}
    >
      {data
        .filter((item) => item.isFeatured)
        .map((item) => (
          <SwiperSlide key={item.id} className="">
            <div className="w-full h-full min-h-[300px]">
              <CardProject project={item} />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default CardSlider;
