/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: { serverActions: true },
	images: {
		domains: ["missdolkapots.files.wordpress.com"],
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	}
};

module.exports = nextConfig;
