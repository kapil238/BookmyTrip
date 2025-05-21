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
      className={`rounded-2xl overflow-hidden shadow-md flex flex-col ${bgColor} text-white`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row h-full p-6 rounded-2xl">
        <div className="flex flex-col justify-between md:w-1/2 space-y-2">
          <p className="text-sm">{title}</p>
          <h2 className="text-3xl font-bold">{discount}</h2>
          <p className="text-sm">{description}</p>
          <button className="mt-4 px-4 py-2 bg-white text-black rounded-full flex items-center gap-2 text-sm font-semibold w-fit">
            <Ticket size={16} />
            {code}
          </button>
        </div>
        <div className="md:w-1/2 w-full h-40 md:h-auto"></div>
      </div>
    </div>
  );
};

export default OfferCard;
