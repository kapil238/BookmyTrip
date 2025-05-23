import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-100 text-orange-600 py-12 px-6 md:px-20 border-t-8 border-b-8 border-orange-600">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="col-span-1 lg:col-span-1">
          <h2 className="text-3xl font-bold mb-4">BookMyTrip</h2>
          <p className="text-sm text-black">
            Explore the world with BookMyTrip – your trusted travel companion
            for flights, hotels, and unforgettable experiences.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-black text-sm">
            {["about", "destinations", "contact", "faq"].map((link, i) => (
              <li key={i} className="hover:underline">
                <Link href={`/${link}`}>
                  {link.replace(/^\w/, (c) => c.toUpperCase())}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-black text-sm">
            {["flights", "hotels", "tours", "car-rentals"].map((service, i) => (
              <li key={i} className="hover:underline">
                <Link href={`/${service}`}>
                  {service
                    .replace(/-/g, " ")
                    .replace(/^\w/, (c) => c.toUpperCase())}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <div className="flex items-center space-x-4 mb-4">
            <a
              href="#"
              className="bg-white shadow p-2 rounded-full hover:bg-blue-100 transition"
            >
              <FaFacebookF className="text-blue-600" />
            </a>
            <a
              href="#"
              className="bg-white shadow p-2 rounded-full hover:bg-blue-50 transition"
            >
              <FaTwitter className="text-blue-400" />
            </a>
            <a
              href="#"
              className="bg-white shadow p-2 rounded-full hover:bg-pink-100 transition"
            >
              <FaInstagram className="text-pink-500" />
            </a>
          </div>
          <p className="text-sm text-black">
            Email:{" "}
            <a href="mailto:support@bookmytrip.com" className="hover:underline">
              support@bookmytrip.com
            </a>
            <br />
            Phone: +1 (800) 123-4567
          </p>
        </div>

        <div className="sm:col-span-2 lg:col-span-4 flex justify-center pt-10">
          <div className="max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
            <p className="text-sm text-black mb-2">
              Subscribe for updates and offers
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md shadow text-black text-sm border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white text-sm py-2 rounded-md transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <hr className="my-10 border-orange-300" />

      <div className="text-center text-orange-600 text-xs">
        © {new Date().getFullYear()} BookMyTrip Travel Singapore Pte. Ltd. All
        rights reserved. <br />
        Site Operator: BookMyTrip Travel Singapore Pte. Ltd.
      </div>
    </footer>
  );
};

export default Footer;
