import { Button } from '../ui/button';

function Offers() {
  return (
    <div className="container mx-auto mt-6 mb-10 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
      {/* Offer 1 */}
      <div
        className="relative flex min-h-[280px] items-center justify-end overflow-hidden rounded-xl bg-center bg-cover shadow-sm"
        style={{ backgroundImage: 'url(/images/2.jpg)' }}
      >
        {/* Overlay for readability */}
        <div className="relative z-10 flex h-full max-w-[60%] flex-col items-end p-8 text-right">
          <span className="mb-4 w-max rounded-md bg-gray-200 px-3 py-1 font-semibold text-gray-700 text-xs shadow">
            70% Off
          </span>
          <h2 className="mb-2 font-bold text-3xl text-gray-800 leading-tight">
            Tasty Snack
            <br />& Fastfood
          </h2>
          <p className="mb-4 text-gray-500">
            The Flavor Of
            <br />
            Something Special
          </p>
          <Button className="rounded bg-green-600 px-6 py-2 font-semibold text-sm text-white shadow hover:bg-green-700">
            Shop Now
          </Button>
        </div>
      </div>
      {/* Offer 2 */}
      <div
        className="relative flex min-h-[280px] items-center justify-end overflow-hidden rounded-xl bg-center bg-cover shadow-sm"
        style={{ backgroundImage: 'url(/images/3.jpg)' }}
      >
        {/* Overlay for readability */}
        <div className="relative z-10 flex h-full max-w-[60%] flex-col items-end p-8 text-right">
          <span className="mb-4 w-max rounded-md bg-gray-200 px-3 py-1 font-semibold text-gray-700 text-xs shadow">
            50% Off
          </span>
          <h2 className="mb-2 font-bold text-3xl text-gray-800 leading-tight">
            Fresh Fruits
            <br />& Veggies
          </h2>
          <p className="mb-4 text-gray-500">
            A Healthy Meal For
            <br />
            Every One
          </p>
          <Button className="rounded bg-green-600 px-6 py-2 font-semibold text-sm text-white shadow hover:bg-green-700">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export { Offers };
