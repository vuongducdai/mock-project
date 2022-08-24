/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.adidas.com.vn", "picsum.photos", "loremflickr.com"],
  },
};

module.exports = nextConfig;
