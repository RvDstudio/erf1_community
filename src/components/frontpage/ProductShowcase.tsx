import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    name: "Healthy Nutmix, 200g Pack",
    category: "Driedfruit",
    price: "$42.00",
    oldPrice: "$45.00",
    image: "/images/2.jpg",
  },
  {
    name: "Organic Fresh Tomato",
    category: "Vegetables",
    price: "$25.00",
    oldPrice: "$30.00",
    image: "/images/3.jpg",
  },
  {
    name: "Coffee With Chocolate Cream Mix ...",
    category: "Coffee",
    price: "$62.00",
    oldPrice: "$65.00",
    image: "/images/4.jpg",
  },
  {
    name: "Ginger – Organic",
    category: "Vegetables",
    price: "$62.00",
    oldPrice: "$65.00",
    image: "/images/dd1.jpg",
  },
  {
    name: "Dates Value Pouch",
    category: "Driedfruit",
    price: "$56.00",
    oldPrice: "$78.00",
    image: "/images/dfdf2.jpg",
  },
  {
    name: "Blue Berry",
    category: "Fruits",
    price: "$25.00",
    oldPrice: "$30.00",
    image: "/images/dffdfwe.jpg",
  },
  {
    name: "Lemon – Seedless",
    category: "Vegetables",
    price: "$42.00",
    oldPrice: "$45.00",
    image: "/images/gfggg.jpg",
  },
  {
    name: "Mango – Kesar",
    category: "Fruits",
    price: "$62.00",
    oldPrice: "$65.00",
    image: "/images/hero1.jpg",
  },
  {
    name: "Mixed Nuts & Almonds Dry Fruits",
    category: "Driedfruit",
    price: "$10.00",
    oldPrice: "$11.00",
    image: "/images/hero2.jpg",
  },
];

const sections = [
  {
    title: "Trending Items",
    products: [products[0], products[1], products[2]],
  },
  {
    title: "Top Rated",
    products: [products[3], products[4], products[5]],
  },
  {
    title: "Top Selling",
    products: [products[6], products[7], products[8]],
  },
];

function ProductShowcase() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 container mx-auto mt-10 mb-10">
      {/* Promo Card */}
      <div
        className="relative rounded-xl shadow-sm min-w-[320px] max-w-sm w-full lg:w-1/4 aspect-square flex items-start justify-start overflow-hidden"
        style={{
          backgroundImage: "url(/images/4.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex flex-col items-start p-8 w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 leading-tight">
            Our Top Most Products
            <br />
            Check It Now
          </h2>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-2 rounded transition shadow">
            Shop Now
          </button>
        </div>
      </div>
      {/* Product Sections */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section, idx) => (
          <div key={section.title} className="bg-white p-4 flex flex-col">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                <span
                  className={
                    idx === 0
                      ? "text-emerald-600"
                      : idx === 1
                        ? "text-emerald-700"
                        : "text-emerald-500"
                  }
                >
                  {section.title.split(" ")[0]}
                </span>{" "}
                <span className="text-gray-700">
                  {section.title.split(" ").slice(1).join(" ")}
                </span>
              </h3>
              <div className="flex gap-2">
                <button className="p-1 rounded hover:bg-gray-100">
                  <ChevronLeft size={18} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            {/* Product List */}
            <div className="flex flex-col gap-6">
              {section.products.map((product, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 bg-white border border-[#eeeeee] rounded-xl py-6 px-6"
                >
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain rounded"
                    />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="font-semibold text-lg text-gray-800 mb-1 truncate">
                      {product.name}
                    </div>
                    <div className="text-sm text-gray-500 mb-2">
                      {product.category}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-800 text-base">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        {product.oldPrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { ProductShowcase };
