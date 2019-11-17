import {
	watch,
	series,
	parallel
} from "gulp"
import bSync from "browser-sync";
import jsCore from "./core-js"
import jsTask from "./script"
import pugTask from "./html"
import cssCore from "./core-css"
import cssTask from "./css"
import {
	copyAsset
} from "./copy";
import {
	cleanAsset
} from "./clean";

export const server = () => {
	bSync.init({
		notify: false,
		server: {
			baseDir: "_dist",
		},
		port: 8000
	})

	watch([
		"src/js/*.js"
	], {
		delay: 750
	}, series(jsTask));

	watch([
		"src/**.pug",
		"src/_components/**/**.pug"
	], {
		delay: 750
	}, series(pugTask));

	watch([
		"src/css/**/**.scss"
	], {
		delay: 750
	}, series(cssTask));

	watch([
		"src/asset/**/**.{svg,png,jpg,speg,gif,mp4,flv,avi}"
	], {
		delay: 750
	}, series(cleanAsset, copyAsset));


	watch([
		".vendors/**/**.css",
		".vendors/**/**.js",
		"config.json"
	], {
		delay: 750
	}, parallel(jsCore, cssCore));

	watch([
		"_dist"
	]).on("change", bSync.reload);
}

module.exports = server;