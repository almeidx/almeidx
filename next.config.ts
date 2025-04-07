import type { NextConfig } from "next";

export default {
	experimental: {
		reactCompiler: true,
		viewTransition: true,
	},
} satisfies NextConfig;
