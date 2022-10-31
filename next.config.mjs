/* eslint-disable tsdoc/syntax */

/**
 * @type {import('next').NextConfig}
 */
export default {
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		appDir: true,
		fallbackNodePolyfills: false,
	},
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
