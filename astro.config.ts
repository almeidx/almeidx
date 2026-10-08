import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	build: {
		format: "file",
	},
	trailingSlash: "never",
	vite: {
		plugins: [tailwindcss()],
	},
});
