/**
 * @type {import('next').NextConfig}
 */
export default {
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
