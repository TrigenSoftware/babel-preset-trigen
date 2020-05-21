module.exports = {
	env:                    'jest',
	targets:                { node: 'current' },
	commonjs:               true,
	transformDynamicImport: true,
	transformRuntime:       true,
	requireContextHook:     true
};
