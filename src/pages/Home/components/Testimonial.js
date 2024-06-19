import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderCard } from "./SliderCard";


const testimonial = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    author: "John Doe",
    company: "LMN.Inc",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    author: "Jane Doe",
    company: "PQR.Inc",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    author: "William Doe",
    company: "ABC.Inc",
  },
];
export const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mb-12">
      <h2 className="text-3xl text-center font-semibold dark:text-slate-100 mb-5 section-title">
        Pure Reviews
      </h2>
      <p></p>
      <Slider {...settings}>
        {testimonial.map((testimonial) => (
          <SliderCard testimonial={testimonial} />
        ))}
      </Slider>
    </div>
  );
};
