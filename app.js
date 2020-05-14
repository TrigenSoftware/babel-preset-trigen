const plugin = require('./plugin');

module.exports = (_, options) => plugin({
	transformRuntime: false
}, options);
