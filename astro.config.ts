import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	build: {
		format: "file",
	},
	trailingSlash: "never",
	vite: {
		plugins: [tailwindcss()],
	},
});
