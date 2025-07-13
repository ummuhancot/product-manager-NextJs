"use client"; // client side component rendering
import React from "react";
import "swiper/css";
import slides from "@/helpers/data/slider.json";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

export const Slider = () => {
  return (
    <Carousel fade interval={3000} controls={false} indicators={true}>
      {slides.map((item) => (
        <Carousel.Item key={item.id}>
          <Image
            src={`/images/${item.image}`}
            width={1640}
            height={624}
            alt="carousel"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
