import { Button } from "../ui/button";

function Offers() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 container mx-auto mb-10">
      {/* Offer 1 */}
      <div
        className="relative rounded-xl overflow-hidden min-h-[280px] flex justify-end items-center bg-cover bg-center shadow-sm"
        style={{ backgroundImage: "url(/images/2.jpg)" }}
      >
        {/* Overlay for readability */}
        <div className="relative z-10 flex flex-col items-end h-full p-8 max-w-[60%] text-right">
          <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-md shadow mb-4 w-max">
            70% Off
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2 leading-tight">
            Tasty Snack
            <br />& Fastfood
          </h2>
          <p className="text-gray-500 mb-4">
            The Flavor Of
            <br />
            Something Special
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold text-sm shadow">
            Shop Now
          </Button>
        </div>
      </div>
      {/* Offer 2 */}
      <div
        className="relative rounded-xl overflow-hidden min-h-[280px] flex justify-end items-center bg-cover bg-center shadow-sm"
        style={{ backgroundImage: "url(/images/3.jpg)" }}
      >
        {/* Overlay for readability */}
        <div className="relative z-10 flex flex-col items-end h-full p-8 max-w-[60%] text-right">
          <span className="bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1 rounded-md shadow mb-4 w-max">
            50% Off
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-2 leading-tight">
            Fresh Fruits
            <br />& Veggies
          </h2>
          <p className="text-gray-500 mb-4">
            A Healthy Meal For
            <br />
            Every One
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold text-sm shadow">
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export { Offers };
