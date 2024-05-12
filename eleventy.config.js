// import pluginWebc from "@11ty/eleventy-plugin-webc";
// import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
 import { eleventyImagePlugin } from "@11ty/eleventy-img";
// const eleventyWebcPlugin = require("@11ty/eleventy-plugin-webc");
// const { eleventyImagePlugin } = require("@11ty/eleventy-img");
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";


/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
export default function(eleventyConfig) {
	eleventyConfig.ignores.add("README.md");

	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// which file extensions to process
		extensions: "html",

		// Add any other Image utility options here:

		// optional, output image formats
		formats: ["avif", "webp", "jpeg"],
		// formats: ["auto"],

		// optional, output image widths
		// widths: ["auto"],

		// optional, attributes assigned on <img> override these values.
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		},
	});

		// Image plugin
		eleventyConfig.addPlugin(eleventyImagePlugin, {
			// Set global default options
			formats: ["avif", "webp", "jpeg"],
			urlPath: "./img/",

			// Notably `outputDir` is resolved automatically
			// to the project output directory

			defaultAttributes: {
				loading: "lazy",
				decoding: "async",
			},
		});
	eleventyConfig.setServerOptions({
		domDiff: false
	});

	return {
		dir: {
			input: "content", // default: "."
			includes: "../_includes", // default: "_includes"
			data: "../_data", // default: "_data"
		},
	}
};
