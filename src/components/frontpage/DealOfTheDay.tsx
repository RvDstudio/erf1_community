'use client';
import React, { useEffect, useState } from 'react';
import ShopCard from '../shop/ShopCard';
import { getDealOfTheDayProducts } from '@/server/products';

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
      setTimeLeft(
        targetDate.getTime() - Date.now() > 0
          ? targetDate.getTime() - Date.now()
          : 0
      );
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
  const [deals, setDeals] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const countdown = useCountdown(getTargetDate());

  useEffect(() => {
    async function fetchDeals() {
      try {
        const dealProducts = await getDealOfTheDayProducts();
        setDeals(dealProducts);
      } catch (error) {
        console.error('Error fetching deal of the day products:', error);
        setDeals([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDeals();
  }, []);

  if (isLoading) {
    return (
      <section className="container mx-auto my-12">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-bold text-2xl text-[#374c69] md:text-3xl">
              Deal of the <span className="text-[#6699CC]">Day</span>
            </h2>
            <p className="mt-1 text-base text-gray-400">
              Don`t wait. The time will never be just right.
            </p>
          </div>
          <div className="flex w-fit items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 font-semibold text-[#374c69] text-lg">
            <span>
              {countdown.days} <span className="font-normal text-sm">Days</span>
            </span>
            <span> {String(countdown.hours).padStart(2, '0')} </span>:
            <span> {String(countdown.minutes).padStart(2, '0')} </span>:
            <span> {String(countdown.seconds).padStart(2, '0')} </span>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className="h-64 animate-pulse bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto my-12">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-bold text-2xl text-[#374c69] md:text-3xl">
            Deal of the <span className="text-[#6699CC]">Day</span>
          </h2>
          <p className="mt-1 text-base text-gray-400">
            Don`t wait. The time will never be just right.
          </p>
        </div>
        <div className="flex w-fit items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 font-semibold text-[#374c69] text-lg">
          <span>
            {countdown.days} <span className="font-normal text-sm">Days</span>
          </span>
          <span> {String(countdown.hours).padStart(2, '0')} </span>:
          <span> {String(countdown.minutes).padStart(2, '0')} </span>:
          <span> {String(countdown.seconds).padStart(2, '0')} </span>
        </div>
      </div>
      {/* Product Cards */}
      <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {deals.map((deal, idx) => (
          <ShopCard key={deal.id || idx} {...deal} onAddToCart={() => {}} />
        ))}
      </div>
    </section>
  );
}
