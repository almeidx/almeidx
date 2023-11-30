/* eslint-disable tsdoc/syntax */

/**
 * @type {import('next').NextConfig}
 */
export default {
	eslint: {
		ignoreDuringBuilds: true,
	},
	redirects() {
		return [
			{
				destination: "https://lurkr.gg",
				permanent: true,
				source: "/lurkr",
			},
		];
	},
};
