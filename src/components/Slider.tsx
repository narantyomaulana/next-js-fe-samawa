"use client";

import React, { ReactNode, Children } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, A11y } from "swiper/modules";

import "swiper/css";

type Props = {
  children: ReactNode;
  swiperClassName?: string;
  swiperSliderClassName?: string;
};

function Slider({ children, swiperClassName, swiperSliderClassName }: Props) {
  return (
    <Swiper
      loop={true}
      centeredSlides={true}
      slidesPerView="auto"
      modules={[Navigation, A11y]}
      className={swiperClassName}
    >
      {Children.toArray(children).map((item) => {
        if (React.isValidElement(item)) {
          return (
            <SwiperSlide className={swiperSliderClassName} key={item.key}>
              {item}
            </SwiperSlide>
          );
        }
        return null;
      })}
      {Children.toArray(children).map((item) => {
        if (React.isValidElement(item)) {
          return (
            <SwiperSlide className={swiperSliderClassName} key={item.key}>
              {item}
            </SwiperSlide>
          );
        }
        return null;
      })}
      {Children.toArray(children).map((item) => {
        if (React.isValidElement(item)) {
          return (
            <SwiperSlide className={swiperSliderClassName} key={item.key}>
              {item}
            </SwiperSlide>
          );
        }
        return null;
      })}
    </Swiper>
  );
}

export default Slider;