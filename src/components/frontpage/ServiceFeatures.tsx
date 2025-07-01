import { Truck, Sprout, BadgePercent, DollarSign } from "lucide-react";

function ServiceFeatures() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto mb-10">
      {/* Free Shipping */}
      <div className="bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-8 text-center min-h-[180px]">
        <Truck size={40} strokeWidth={1} className="text-emerald-500 mb-4" />
        <h3 className="font-semibold text-lg text-gray-800 mb-2">
          Free Shipping
        </h3>
        <p className="text-gray-500 text-sm">
          Free shipping on all US order or order above $200
        </p>
      </div>
      {/* 24x7 Support */}
      <div className="bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-8 text-center min-h-[180px]">
        <Sprout size={40} strokeWidth={1} className="text-emerald-500 mb-4" />
        <h3 className="font-semibold text-lg text-gray-800 mb-2">
          24X7 Support
        </h3>
        <p className="text-gray-500 text-sm">
          Contact us 24 hours a day, 7 days a week
        </p>
      </div>
      {/* 30 Days Return */}
      <div className="bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-8 text-center min-h-[180px]">
        <BadgePercent
          size={40}
          strokeWidth={1}
          className="text-emerald-500 mb-4"
        />
        <h3 className="font-semibold text-lg text-gray-800 mb-2">
          30 Days Return
        </h3>
        <p className="text-gray-500 text-sm">
          Simply return it within 30 days for an exchange
        </p>
      </div>
      {/* Payment Secure */}
      <div className="bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center p-8 text-center min-h-[180px]">
        <DollarSign
          size={40}
          strokeWidth={1}
          className="text-emerald-500 mb-4"
        />
        <h3 className="font-semibold text-lg text-gray-800 mb-2">
          Payment Secure
        </h3>
        <p className="text-gray-500 text-sm">
          Contact us 24 hours a day, 7 days a week
        </p>
      </div>
    </div>
  );
}

export { ServiceFeatures };
