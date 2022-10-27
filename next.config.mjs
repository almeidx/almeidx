/* eslint-disable tsdoc/syntax */

/**
 * @type {import('next').NextConfig}
 */
export default {
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		fallbackNodePolyfills: false,
	},
	reactStrictMode: true,
	redirects() {
		return [
			{
				destination: "https://pepemanager.com",
				permanent: true,
				source: "/bot",
			},
		];
	},
};
