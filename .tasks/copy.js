import {
	src,
	dest
} from "gulp";
import {
	readFileSync
} from "graceful-fs";

export const copyAsset = () => {
	return src("./src/asset/**/**.{svg,png,jpg,jpeg,gif,mp4,flv,avi}")
		.pipe(dest("./_dist/asset"))
};

export const copyFont = () => {
	let glob = JSON.parse(readFileSync("config.json"));
	let fontList = glob.vendor.font;
	return src(fontList, {
			allowEmpty: true
		})
		.pipe(dest("./_dist/fonts"));
};

export const copyFavicon = () => {
	return src("src/asset/favicon.ico", {
			allowEmpty: true
		})
		.pipe(dest("./_dist"));
};

module.exports = {
	copyAsset,
	copyFont,
	copyFavicon,
};