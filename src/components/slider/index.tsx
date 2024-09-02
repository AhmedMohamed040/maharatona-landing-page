import styles from "./styles.module.css";
import "./styles.css";

import { Swiper, SwiperClass, SwiperProps, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React from "react";

const BULLET_CLASS = ["hidden", "sm", "md", "lg"];

function onChangeSlide(swiper: SwiperClass) {
  const length = swiper.pagination.bullets.length;
  swiper.pagination.bullets.forEach((bullet, index) => {
    bullet.classList.remove(...BULLET_CLASS);
    if (
      (swiper.activeIndex === length - 1 && index >= swiper.activeIndex - 5) ||
      (swiper.activeIndex <= 2 && index <= 2) ||
      index === swiper.activeIndex ||
      index === swiper.activeIndex - 1
    ) {
      bullet.classList.add("lg");
    } else if (
      (swiper.activeIndex <= 2 && index === 3) ||
      index === swiper.activeIndex - 2 ||
      index === swiper.activeIndex + 1
    ) {
      bullet.classList.add("md");
    } else if (
      (swiper.activeIndex <= 2 && index === 4) ||
      index === swiper.activeIndex - 3 ||
      index === swiper.activeIndex + 2
    ) {
      bullet.classList.add("sm");
    } else {
      bullet.classList.add("hidden");
    }
  });
}

export default function Slider({
  slides,
  style,
  ...others
}: { slides: React.ReactNode[] } & SwiperProps) {
  return (
    <section className={styles.all_wrapper}>
      <div className={styles.swiper_container}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={onChangeSlide}
          onSwiper={onChangeSlide}
          breakpoints={{
            545: {
              slidesPerView: 3,
            },
          }}
          style={{ position: "static", ...style }}
          {...others}
        >
          {slides?.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
