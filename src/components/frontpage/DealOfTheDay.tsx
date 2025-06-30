"use client"
import React, { useEffect, useState } from "react";
import ShopCard from "../shop/ShopCard";

const deals = [
  {
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_1.jpg",
    hoverImage:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_2.jpg",
    category: "Dried Fruit",
    title: "Mixed Nuts Berries Pack",
    link: "/product-left-sidebar/1",
    weight: "2kg",
    price: "$45.00",
    oldPrice: "$55.00",
    isOnSale: true,
    rating: 3,
  },
  {
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/7_1.jpg",
    hoverImage:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/7_2.jpg",
    category: "Snacks",
    title: "Organic Trail Mix",
    link: "/product-left-sidebar/2",
    weight: "1kg",
    price: "$30.00",
    oldPrice: "$40.00",
    isOnSale: false,
    rating: 4,
  },
  {
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/8_1.jpg",
    hoverImage:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/8_2.jpg",
    category: "Nuts",
    title: "Roasted Almonds",
    link: "/product-left-sidebar/3",
    weight: "500g",
    price: "$20.00",
    oldPrice: "$25.00",
    isOnSale: true,
    rating: 5,
  },
  {
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_1.jpg",
    hoverImage:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_2.jpg",
    category: "Seeds",
    title: "Chia Seeds Pack",
    link: "/product-left-sidebar/4",
    weight: "250g",
    price: "$10.00",
    oldPrice: "$12.00",
    isOnSale: false,
    rating: 2,
  },
  {
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_1.jpg",
    hoverImage:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_2.jpg",
    category: "Dried Fruit",
    title: "Mixed Nuts Berries Pack",
    link: "/product-left-sidebar/1",
    weight: "2kg",
    price: "$45.00",
    oldPrice: "$55.00",
    isOnSale: true,
    rating: 3,
  },
];

const getTargetDate = () => {
  const now = new Date();
  now.setDate(now.getDate() + 25);
  return now;
};

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = targetDate.getTime() - Date.now();
    return diff > 0 ? diff : 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate.getTime() - Date.now() > 0 ? targetDate.getTime() - Date.now() : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function DealOfTheDay() {
  const countdown = useCountdown(getTargetDate());

  return (
    <section className="my-12 container mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#374c69]">
            Deal of the <span className="text-[#6699CC]">Day</span>
          </h2>
          <p className="text-gray-400 mt-1 text-base">Don`t wait. The time will never be just right.</p>
        </div>
        <div className="bg-gray-100 rounded-lg px-4 py-2 text-[#374c69] font-semibold text-lg flex items-center gap-2 w-fit">
          <span>{countdown.days} <span className="font-normal text-sm">Days</span></span>
          <span> {String(countdown.hours).padStart(2, "0")} </span>:
          <span> {String(countdown.minutes).padStart(2, "0")} </span>:
          <span> {String(countdown.seconds).padStart(2, "0")} </span>
        </div>
      </div>
      {/* Product Cards */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {deals.map((deal, idx) => (
          <ShopCard key={idx} {...deal} onAddToCart={() => {}} />
        ))}
      </div>
    </section>
  );
} 