'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    title: 'Explore fresh & juicy fruits',
    subtitle: 'Starting at $ 29.99',
    image: '/images/hero1.jpg',
    cta: 'Shop Now',
  },
  {
    title: 'Delicious homemade pies',
    subtitle: 'From $ 19.99',
    image: '/images/hero2.jpg',
    cta: 'Order Now',
  },
  {
    title: 'Organic berries & more',
    subtitle: 'Fresh deals every day',
    image: '/images/hero1.jpg',
    cta: 'See Offers',
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
  beforeChange: (
    oldIndex: number,
    newIndex: number,
    setCurrent: (idx: number) => void
  ) => {
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
      className="container relative mx-auto mb-8 flex min-h-[600px] items-center overflow-hidden rounded-2xl p-0 shadow-sm md:p-0"
      style={{
        backgroundImage: `url(${slides[current].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      <Slider {...sliderSettings} className="w-full">
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div className="flex min-h-[350px] flex-col items-center md:flex-row">
              {/* Left: Text with slide-in animation */}
              <div
                className={`max-w-xl flex-1 p-6 transition-all duration-700 ease-out md:p-12 ${current === idx ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'} `}
              >
                <div className="mb-2 font-semibold text-green-600 text-lg">
                  {slide.subtitle}
                </div>
                <h1 className="mb-6 font-extrabold text-4xl text-[#374c69] leading-tight drop-shadow md:text-5xl">
                  {slide.title}
                </h1>
                <button className="flex items-center gap-2 rounded-md bg-[#374c69] px-6 py-3 font-semibold text-lg text-white transition hover:bg-[#2c3a50]">
                  {slide.cta} <span aria-hidden>»</span>
                </button>
              </div>
              {/* Right: Spacer for layout on large screens */}
              <div className="hidden flex-1 md:block" />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
