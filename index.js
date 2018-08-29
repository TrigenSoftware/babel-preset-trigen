const noRuntime = require('./no-runtime');

module.exports = () => ({
	plugins: [
		['@babel/plugin-transform-runtime', { corejs: 2 }],
		noRuntime().plugins
	]
});
