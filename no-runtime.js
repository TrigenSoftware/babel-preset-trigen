const noRuntime = require('./commonjs/no-runtime');

module.exports = () => {

	const {
		presets,
		plugins
	} = noRuntime();

	presets[0].push({ modules: false });

	return {
		presets,
		plugins
	};
};
