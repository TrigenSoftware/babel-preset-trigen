const plugin = require('./plugin');

module.exports = (_, options) => plugin({
	transformRuntime: true
}, options);
