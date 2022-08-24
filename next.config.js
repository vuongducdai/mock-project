/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			'www.adidas.com.vn',
			'picsum.photos',
			'loremflickr.com',
			'assets.adidas.com',
			'brand.assets.adidas.com',
		],
	},
};

module.exports = nextConfig;
