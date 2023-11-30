/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: { serverActions: true },
	images: {
		domains: ["missdolkapots.files.wordpress.com"],
	},
};

module.exports = nextConfig;
