import OfferCard from "./OfferCard";

const OfferSection = () => {

  return (
    <section className="py-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-8">Offer For You</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <OfferCard
          title="up to"
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
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
        <OfferCard
          title="Cashback up to"
          discount="30% Off"
          description="On car and travels"
          code="TRAVELBACK"
          bgColor="bg-pink-500"
          bgImage="/images/3.png"
        />
      </div>
    </section>
  );
};

export default OfferSection;
