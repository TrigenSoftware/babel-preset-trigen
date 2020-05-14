const plugin = require('./plugin');

module.exports = (_, options) => plugin({
	targets:                { node: 'current' },
	commonjs:               true,
	transformDynamicImport: true,
	transformRuntime:       false
}, options);
