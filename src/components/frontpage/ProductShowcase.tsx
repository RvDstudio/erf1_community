import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const products = [
  {
    name: 'Healthy Nutmix, 200g Pack',
    category: 'Driedfruit',
    price: '$42.00',
    oldPrice: '$45.00',
    image: '/images/2.jpg',
  },
  {
    name: 'Organic Fresh Tomato',
    category: 'Vegetables',
    price: '$25.00',
    oldPrice: '$30.00',
    image: '/images/3.jpg',
  },
  {
    name: 'Coffee With Chocolate Cream Mix ...',
    category: 'Coffee',
    price: '$62.00',
    oldPrice: '$65.00',
    image: '/images/4.jpg',
  },
  {
    name: 'Ginger – Organic',
    category: 'Vegetables',
    price: '$62.00',
    oldPrice: '$65.00',
    image: '/images/dd1.jpg',
  },
  {
    name: 'Dates Value Pouch',
    category: 'Driedfruit',
    price: '$56.00',
    oldPrice: '$78.00',
    image: '/images/dfdf2.jpg',
  },
  {
    name: 'Blue Berry',
    category: 'Fruits',
    price: '$25.00',
    oldPrice: '$30.00',
    image: '/images/dffdfwe.jpg',
  },
  {
    name: 'Lemon – Seedless',
    category: 'Vegetables',
    price: '$42.00',
    oldPrice: '$45.00',
    image: '/images/gfggg.jpg',
  },
  {
    name: 'Mango – Kesar',
    category: 'Fruits',
    price: '$62.00',
    oldPrice: '$65.00',
    image: '/images/hero1.jpg',
  },
  {
    name: 'Mixed Nuts & Almonds Dry Fruits',
    category: 'Driedfruit',
    price: '$10.00',
    oldPrice: '$11.00',
    image: '/images/hero2.jpg',
  },
];

const sections = [
  {
    title: 'Trending Items',
    products: [products[0], products[1], products[2]],
  },
  {
    title: 'Top Rated',
    products: [products[3], products[4], products[5]],
  },
  {
    title: 'Top Selling',
    products: [products[6], products[7], products[8]],
  },
];

function ProductShowcase() {
  return (
    <div className="container mx-auto mt-10 mb-10 flex w-full flex-col gap-6 lg:flex-row">
      {/* Promo Card */}
      <div
        className="relative flex aspect-square w-full min-w-[320px] max-w-sm items-start justify-start overflow-hidden rounded-xl shadow-sm lg:w-1/4"
        style={{
          backgroundImage: 'url(/images/4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 flex w-full flex-col items-start p-8">
          <h2 className="mb-4 font-semibold text-2xl text-gray-800 leading-tight">
            Our Top Most Products
            <br />
            Check It Now
          </h2>
          <button className="rounded bg-emerald-500 px-6 py-2 font-bold text-white shadow transition hover:bg-emerald-600">
            Shop Now
          </button>
        </div>
      </div>
      {/* Product Sections */}
      <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
        {sections.map((section, idx) => (
          <div className="flex flex-col bg-white p-4" key={section.title}>
            {/* Section Header */}
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-2xl text-gray-800">
                <span
                  className={
                    idx === 0
                      ? 'text-emerald-600'
                      : idx === 1
                        ? 'text-emerald-700'
                        : 'text-emerald-500'
                  }
                >
                  {section.title.split(' ')[0]}
                </span>{' '}
                <span className="text-gray-700">
                  {section.title.split(' ').slice(1).join(' ')}
                </span>
              </h3>
              <div className="flex gap-2">
                <button className="rounded p-1 hover:bg-gray-100">
                  <ChevronLeft size={18} />
                </button>
                <button className="rounded p-1 hover:bg-gray-100">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            {/* Product List */}
            <div className="flex flex-col gap-6">
              {section.products.map((product, i) => (
                <div
                  className="flex items-center gap-6 rounded-xl border border-[#eeeeee] bg-white px-6 py-6"
                  key={i}
                >
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <Image
                      alt={product.name}
                      className="rounded object-contain"
                      fill
                      src={product.image}
                    />
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <div className="mb-1 truncate font-semibold text-gray-800 text-lg">
                      {product.name}
                    </div>
                    <div className="mb-2 text-gray-500 text-sm">
                      {product.category}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-base text-gray-800">
                        {product.price}
                      </span>
                      <span className="text-gray-400 text-sm line-through">
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
