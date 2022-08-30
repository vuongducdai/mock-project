/** @type {import('next').NextConfig} */
const nextConfig = {
      reactStrictMode: true,
      swcMinify: true,
      images: {
            domains: [
                  "www.adidas.com.vn",
                  "picsum.photos",
                  "loremflickr.com",
                  "assets.adidas.com",
                  "brand.assets.adidas.com",
                  'thumbs.dreamstime.com',
                  'ecommercevoyager.herokuapp.com',
                  'go.labhok.com'
            ],
      },
};

module.exports = nextConfig;
