import React from "react";
import { Hero } from "./components/Hero";
import { Testimonial } from "./components/Testimonial";
import { Faq } from "./components/Faq";



export const Home = () => {
  return (
    <main className="ml-5 mr-5">
      <Hero />
      <Testimonial />
      <Faq/>
    </main>
  );
};
