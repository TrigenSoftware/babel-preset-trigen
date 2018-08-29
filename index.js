module.exports = (_, options) => {

	const {
		commonjs,
		transformRuntime
	} = Object.assign({
		commonjs:         false,
		transformRuntime: true
	}, options);
	const presets = [
		['@babel/preset-env', { useBuiltIns: 'usage' }]
	];
	const plugins = [
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-syntax-import-meta',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-json-strings',
		['@babel/plugin-proposal-decorators', { legacy: true }],
		'@babel/plugin-proposal-function-sent',
		'@babel/plugin-proposal-export-namespace-from',
		'@babel/plugin-proposal-numeric-separator',
		'@babel/plugin-proposal-throw-expressions',
		'@babel/plugin-proposal-export-default-from',
		'@babel/plugin-proposal-async-generator-functions'
	];

	if (!commonjs) {
		presets[0][0].modules = false;
	}

	if (transformRuntime) {
		plugins.unshift('@babel/plugin-transform-runtime');
	}

	return {
		presets,
		plugins
	};
};
