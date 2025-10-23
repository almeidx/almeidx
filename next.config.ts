import type { NextConfig } from "next";

export default {
	cacheComponents: true,
	experimental: {
		turbopackFileSystemCacheForDev: true,
		viewTransition: true,
	},
	reactCompiler: true,
} satisfies NextConfig;
