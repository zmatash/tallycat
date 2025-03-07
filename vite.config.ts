import VitePluginSvgSpritemap from "@spiriit/vite-plugin-svg-spritemap";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		sveltekit(),
		[
			VitePluginSvgSpritemap("./assets/icons/*.svg", {
				styles: "./src/lib/styles/spritemap.css",
				prefix: "icon-"
			})
		]
	]
});
