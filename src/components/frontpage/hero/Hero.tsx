"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    title: "Explore fresh & juicy fruits",
    subtitle: "Starting at $ 29.99",
    image: "/images/hero1.jpg",
    cta: "Shop Now",
  },
  {
    title: "Delicious homemade pies",
    subtitle: "From $ 19.99",
    image: "/images/hero2.jpg",
    cta: "Order Now",
  },
  {
    title: "Organic berries & more",
    subtitle: "Fresh deals every day",
    image: "/images/hero1.jpg",
    cta: "See Offers",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  adaptiveHeight: true,
  beforeChange: (oldIndex: number, newIndex: number, setCurrent: (idx: number) => void) => {
    setCurrent(newIndex);
  },
};

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Custom settings to inject setCurrent into beforeChange
  const sliderSettings = {
    ...settings,
    beforeChange: (_: number, next: number) => setCurrent(next),
  };

  return (
    <section
      className="container mx-auto rounded-2xl shadow-sm p-0 md:p-0 mb-8 relative overflow-hidden min-h-[600px] flex items-center"
      style={{
        backgroundImage: `url(${slides[current].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <Slider {...sliderSettings} className="w-full">
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div className="flex flex-col md:flex-row items-center min-h-[350px]">
              {/* Left: Text with slide-in animation */}
              <div
                className={`flex-1 max-w-xl p-6 md:p-12 transition-all duration-700 ease-out
                  ${current === idx ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}
                `}
              >
                <div className="text-green-600 font-semibold text-lg mb-2">
                  {slide.subtitle}
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#374c69] mb-6 leading-tight drop-shadow">
                  {slide.title}
                </h1>
                <button className="bg-[#374c69] hover:bg-[#2c3a50] text-white font-semibold px-6 py-3 rounded-md text-lg flex items-center gap-2 transition">
                  {slide.cta} <span aria-hidden>»</span>
                </button>
              </div>
              {/* Right: Spacer for layout on large screens */}
              <div className="flex-1 hidden md:block" />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
