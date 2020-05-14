module.exports = (envOptions, options) => {

	const {
		targets,
		corejs,
		commonjs,
		typescript,
		react,
		transformDynamicImport,
		transformRuntime,
		reactConstantElements,
		reactRemovePropTypes: inputReactRemovePropTypes
	} = Object.assign({
		targets:                false,
		corejs:                 3,
		commonjs:               false,
		typescript:             false,
		react:                  false,
		transformDynamicImport: false,
		transformRuntime:       false,
		reactConstantElements:  {},
		reactRemovePropTypes:   {}
	}, envOptions, options);
	const reactRemovePropTypes = Object.assign({
		removeImport:    typeof inputReactRemovePropTypes.mode === 'undefined',
		ignoreFilenames: ['node_modules']
	}, inputReactRemovePropTypes);
	const presetEnvOptions = {};
	const transformRuntimeOptions = {
		useESModules: !commonjs
	};
	const presets = [
		['@babel/preset-env', presetEnvOptions]
	];
	const plugins = [
		'@babel/plugin-syntax-dynamic-import',
		'@babel/plugin-syntax-import-meta',
		['@babel/plugin-proposal-decorators', { legacy: true }],
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-json-strings',
		'@babel/plugin-proposal-function-sent',
		'@babel/plugin-proposal-export-namespace-from',
		'@babel/plugin-proposal-numeric-separator',
		'@babel/plugin-proposal-throw-expressions',
		'@babel/plugin-proposal-export-default-from',
		'@babel/plugin-proposal-async-generator-functions',
		['@babel/plugin-transform-runtime', transformRuntimeOptions]
	];

	if (transformRuntime) {
		transformRuntimeOptions.corejs = corejs;
	} else {
		presetEnvOptions.useBuiltIns = 'usage';
		presetEnvOptions.corejs = corejs;
		transformRuntimeOptions.regenerator = false;
	}

	if (targets) {
		presetEnvOptions.targets = targets;
	}

	if (!commonjs) {
		presetEnvOptions.modules = false;
	}

	if (typescript) {
		presets.push('@babel/preset-typescript');
	}

	if (react) {

		switch (process.env.NODE_ENV) {

			case 'production':
				presets.push('@babel/preset-react');
				plugins.push(
					'babel-plugin-react-local',
					['@babel/plugin-transform-react-constant-elements', reactConstantElements],
					['babel-plugin-transform-react-remove-prop-types', reactRemovePropTypes],
					'babel-plugin-transform-react-class-to-function'
				);
				break;

			case 'development':
				presets.push('@babel/preset-react');

				try {
					require.resolve('react-hot-loader/babel');
					plugins.push('react-hot-loader/babel');
				} catch (err) {
					/* Ingore */
				}

				break;

			default:
				presets.push('@babel/preset-react');
				break;
		}
	}

	if (transformDynamicImport) {
		plugins.push('babel-plugin-dynamic-import-node');
	}

	return {
		presets,
		plugins
	};
};
