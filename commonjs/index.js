const noRuntime = require('./no-runtime');

module.exports = () => {

	const {
		presets,
		plugins
	} = noRuntime();

	plugins.unshift(['@babel/plugin-transform-runtime', { corejs: 2 }]);

	return {
		presets,
		plugins
	};
};
