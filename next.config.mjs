/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.devdojo.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
