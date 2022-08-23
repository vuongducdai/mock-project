/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['localhost', 'loremflickr.com'],
	},
};

module.exports = nextConfig;
