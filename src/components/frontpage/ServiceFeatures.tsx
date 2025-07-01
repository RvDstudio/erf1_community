import { BadgePercent, DollarSign, Sprout, Truck } from 'lucide-react';

function ServiceFeatures() {
  return (
    <div className="container mx-auto mb-10 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* Free Shipping */}
      <div className="flex min-h-[180px] flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-8 text-center">
        <Truck className="mb-4 text-emerald-500" size={40} strokeWidth={1} />
        <h3 className="mb-2 font-semibold text-gray-800 text-lg">
          Free Shipping
        </h3>
        <p className="text-gray-500 text-sm">
          Free shipping on all US order or order above $200
        </p>
      </div>
      {/* 24x7 Support */}
      <div className="flex min-h-[180px] flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-8 text-center">
        <Sprout className="mb-4 text-emerald-500" size={40} strokeWidth={1} />
        <h3 className="mb-2 font-semibold text-gray-800 text-lg">
          24X7 Support
        </h3>
        <p className="text-gray-500 text-sm">
          Contact us 24 hours a day, 7 days a week
        </p>
      </div>
      {/* 30 Days Return */}
      <div className="flex min-h-[180px] flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-8 text-center">
        <BadgePercent
          className="mb-4 text-emerald-500"
          size={40}
          strokeWidth={1}
        />
        <h3 className="mb-2 font-semibold text-gray-800 text-lg">
          30 Days Return
        </h3>
        <p className="text-gray-500 text-sm">
          Simply return it within 30 days for an exchange
        </p>
      </div>
      {/* Payment Secure */}
      <div className="flex min-h-[180px] flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-8 text-center">
        <DollarSign
          className="mb-4 text-emerald-500"
          size={40}
          strokeWidth={1}
        />
        <h3 className="mb-2 font-semibold text-gray-800 text-lg">
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
