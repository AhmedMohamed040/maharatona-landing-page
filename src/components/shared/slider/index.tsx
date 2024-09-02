import styles from "./styles.module.css";
import "./styles.css";

import { Swiper, SwiperClass, SwiperProps, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { useRef } from "react";

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
  const swiperRef = useRef<SwiperClass | null>(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className={styles.all_wrapper}>
      <div className={styles.swiper_container}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          onSlideChange={onChangeSlide}
          centeredSlides={true}
          loop={true}
          speed={1000}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            onChangeSlide(swiper);
          }}
          breakpoints={{
            545: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          style={{ position: "static", ...style }}
          {...others}
        >
          {slides?.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
        </Swiper>
        <button
          className={`${styles.custom_button} ${styles.prev_button}`}
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          className={`${styles.custom_button} ${styles.next_button}`}
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
