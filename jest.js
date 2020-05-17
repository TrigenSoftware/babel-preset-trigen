const {
	declare
} = require('@babel/helper-plugin-utils');
const plugin = require('./plugin');

module.exports = declare((api, options) => plugin(api, {
	targets:                { node: 'current' },
	commonjs:               true,
	transformDynamicImport: true,
	transformRuntime:       false,
	requireContextHook:     true
}, options));
