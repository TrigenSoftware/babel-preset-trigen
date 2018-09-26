module.exports = (_, options) => {

	const {
		targets,
		commonjs,
		react,
		transformRuntime
	} = Object.assign({
		targets:          false,
		commonjs:         false,
		react:            false,
		transformRuntime: true
	}, options);
	const presetEnvOptions = {
		useBuiltIns: 'usage'
	};
	const presets = [
		['@babel/preset-env', presetEnvOptions]
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

	if (targets) {
		presetEnvOptions.targets = targets;
	}

	if (!commonjs) {
		presetEnvOptions.modules = false;
	}

	if (react) {
		presets.push('@babel/preset-react');

		if (process.env.NODE_ENV === 'development') {
			try {
				require.resolve('react-hot-loader/babel');
				plugins.push('react-hot-loader/babel');
			} catch (err) {}
		}
	}

	if (transformRuntime) {
		plugins.push('@babel/plugin-transform-runtime');
	}

	return {
		presets,
		plugins
	};
};
