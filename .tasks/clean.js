import del from 'del';

export const cleanDist = () => {
	return del('./_dist')
};

export const cleanAsset = () => {
	return del('./_dist/asset')
};

module.exports = {
	cleanDist,
	cleanAsset,
};