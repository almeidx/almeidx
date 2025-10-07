import type { NextConfig } from "next";

export default {
	experimental: {
		viewTransition: true,
	},
	reactCompiler: true,
} satisfies NextConfig;
