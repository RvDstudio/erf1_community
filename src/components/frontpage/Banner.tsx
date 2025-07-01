"use client";

import Image from "next/image";

function Banner() {
  return (
    <section className="container relative mx-auto mb-10 flex h-[40vw] max-h-[400px] min-h-[300px] items-center justify-end overflow-hidden rounded-xl shadow-lg">
      {/* Banner Image */}
      <Image
        alt="Banner"
        className="z-0 object-cover object-center"
        fill
        priority
        sizes="100vw"
        src="/images/banner.jpg"
      />
      {/* Content */}
      <div className="relative z-20 flex w-full max-w-2xl flex-col items-end justify-center px-4 pr-0 text-right md:pr-16">
        <h1 className="mb-4 font-bold text-3xl text-[#4b5966] drop-shadow-lg md:text-5xl">
          Fresh Fruits & Vegetables
        </h1>
        <p className="mb-6 max-w-2xl text-[#4b5966] text-lg md:text-2xl">
          Discover exclusive deals, connect with others, and enjoy a better
          shopping experience
        </p>
        <button
          className="rounded-full bg-[#689BCD] px-6 py-3 font-semibold text-white shadow transition hover:bg-gray-200"
          type="button"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}

export { Banner };
