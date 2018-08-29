module.exports = (_, options) => {

	const {
		commonjs,
		transformRuntime
	} = Object.assign({}, options, {
		commonjs:         false,
		transformRuntime: true
	});
	const presets = [
		['@babel/preset-env']
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
		presets[0].push({ modules: false });
	}

	if (transformRuntime) {
		plugins.unshift(['@babel/plugin-transform-runtime', { corejs: 2 }]);
	}

	return {
		presets,
		plugins
	};
};
