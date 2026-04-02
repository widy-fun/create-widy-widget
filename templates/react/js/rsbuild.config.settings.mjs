import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [pluginReact()],
	html: {
		title: "Widget",
	},
	source: {
		entry: {
			index: "./settings/index.jsx",
		},
	},
	output: {
		cleanDistPath: false,
		filenameHash: false,
		distPath: {
			root: "dist/settings",
			js: "",
		},
		assetPrefix: "./",
		injectStyles: true,
		copy: [{ from: "manifest.json", to: "../manifest.json" }],
	},
	performance: {
		chunkSplit: {
			strategy: "all-in-one",
		},
	},
});
