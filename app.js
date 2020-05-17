const {
	declare
} = require('@babel/helper-plugin-utils');
const plugin = require('./plugin');

module.exports = declare((api, options) => plugin(api, {
	transformRuntime: false
}, options));
