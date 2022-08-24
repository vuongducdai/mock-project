/** @type {import('next').NextConfig} */
const nextConfig = {
      reactStrictMode: true,
      swcMinify: true,
      images: {
            domains: ['picsum.photos', 'loremflickr.com', "www.adidas.com.vn"]
      }
}

module.exports = nextConfig;
