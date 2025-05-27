import OfferCard from "./OfferCard";

const OfferSection = () => {
  return (
    <section className="py-14 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
        Exclusive Offers Just for You
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <OfferCard
          title="Up to"
          discount="50% Off"
          description="On domestic flights"
          code="DOMESTIC50"
          bgColor="bg-blue-600"
          bgImage="/images/1.png"
        />
        <OfferCard
          title="Cashback up to"
          discount="30% Off"
          description="On domestic flights"
          code="CASHBACK30"
          bgColor="bg-emerald-600"
          bgImage="/images/2.png"
        />
        <OfferCard
          title="Cashback up to"
          discount="30% Off"
          description="On car and travels"
          code="TRAVELBACK"
          bgColor="bg-pink-500"
          bgImage="/images/6.png"
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <OfferCard
          title="Cashback up to"
          discount="30% Off"
          description="On car and travels"
          code="TRAVELBACK"
          bgColor="bg-purple-600"
          bgImage="/images/3.png"
        />
      </div>
    </section>
  );
};

export default OfferSection;
