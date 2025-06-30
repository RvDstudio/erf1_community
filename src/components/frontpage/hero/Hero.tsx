"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    title: "Explore fresh & juicy fruits",
    subtitle: "Starting at $ 29.99",
    image: "/images/hero-pies.jpg", // Place your image here
    cta: "Shop Now",
  },
  {
    title: "Delicious homemade pies",
    subtitle: "From $ 19.99",
    image: "/images/hero-pies.jpg", // Use another image if available
    cta: "Order Now",
  },
  {
    title: "Organic berries & more",
    subtitle: "Fresh deals every day",
    image: "/images/hero-pies.jpg", // Use another image if available
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
};

export default function Hero() {
  return (
    <section className="container mx-auto bg-[#f5f5f5] rounded-2xl shadow-sm p-4 md:p-8 mb-8 relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div className="flex flex-col md:flex-row items-center justify-between min-h-[350px]">
              {/* Left: Text */}
              <div className="flex-1 max-w-xl p-6 md:p-12">
                <div className="text-green-600 font-semibold text-lg mb-2">
                  {slide.subtitle}
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#374c69] mb-6 leading-tight">
                  {slide.title}
                </h1>
                <button className="bg-[#374c69] hover:bg-[#2c3a50] text-white font-semibold px-6 py-3 rounded-md text-lg flex items-center gap-2 transition">
                  {slide.cta} <span aria-hidden>»</span>
                </button>
              </div>
              {/* Right: Image */}
              <div className="flex-1 flex justify-center items-center p-4">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={500}
                  height={350}
                  className="rounded-xl object-cover shadow max-h-[350px]"
                  priority={idx === 0}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
