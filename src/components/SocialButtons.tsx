import { FaXTwitter } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function SocialButtons() {
  return (
    <div className="flex gap-4 justify-center mb-4">
      <button className="border border-orange-500 px-4 py-2 rounded-lg">
        <FaFacebook className="text-2xl text-blue" />
      </button>
      <button className="border border-orange-500 px-4 py-2 rounded-lg">
        <FcGoogle className="text-xl" />
      </button>
      <button className="border border-orange-500 px-4 py-2 rounded-lg">
        <FaXTwitter className="text-xl" />
      </button>
    </div>
  );
}
