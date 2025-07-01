"use client";

import Image from "next/image";

function Banner() {
  return (
    <section className="relative container mx-auto h-[40vw] min-h-[300px] max-h-[500px] flex items-center justify-end overflow-hidden rounded-xl shadow-lg  mb-10">
      {/* Banner Image */}
      <Image
        src="/images/banner.jpg"
        alt="Banner"
        fill
        priority
        className="object-cover object-center z-0"
        sizes="100vw"
      />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-end justify-center text-right px-4 pr-0 md:pr-16 w-full max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold text-[#4b5966] drop-shadow-lg mb-4">
          Fresh Fruits & Vegetables
        </h1>
        <p className="text-lg md:text-2xl text-[#4b5966] mb-6 max-w-2xl">
          Discover exclusive deals, connect with others, and enjoy a better
          shopping experience
        </p>
        <button className="bg-[#689BCD] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}

export { Banner };
