import { withContentlayer } from "next-contentlayer";

/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/scharde/**",
      },
    ],
  },
  reactStrictMode: true,
};

export default withContentlayer(nextConfig);
