import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "fortunetours.in",
      "encrypted-tbn0.gstatic.com",
      "www.flamingotravels.co.in",  
      "imgcdn.flamingotravels.co.in",
    ],
  },
};

export default nextConfig;
