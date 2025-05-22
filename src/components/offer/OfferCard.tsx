import { FC } from "react";
import { Ticket } from "lucide-react";

interface OfferCardProps {
  title: string;
  discount: string;
  description: string;
  code: string;
  bgColor: string;
  bgImage: string;
}

const OfferCard: FC<OfferCardProps> = ({
  title,
  discount,
  description,
  code,
  bgColor,
  bgImage,
}) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-md flex flex-col transform transition duration-700 hover:scale-[0.98] hover:shadow-2xl group ${bgColor} text-white`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 rounded-2xl" />

      <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
        HOT DEAL
      </div>

      <div className="relative flex flex-col md:flex-row h-50 md:h-full p-4 md:p-6 z-10 rounded-2xl transform transition-all duration-700 group-hover:-translate-y-2">
        <div className="flex flex-col justify-between md:w-1/2 space-y-2">
          <p className="text-sm">{title}</p>
          <h2 className="text-3xl font-bold">{discount}</h2>
          <p className="text-sm">{description}</p>

          <div className="relative w-fit mt-4">
            <div className="absolute inset-0 rounded-full bg-white blur-md opacity-0 group-hover:opacity-70 transition-all duration-700 scale-110" />
            <button className="relative px-4 py-2 bg-white text-black rounded-full flex items-center gap-2 text-sm font-semibold z-10">
              <Ticket size={16} />
              {code}
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-40 md:h-auto"></div>
      </div>
    </div>
  );
};

export default OfferCard;
