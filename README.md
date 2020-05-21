# babel-preset-trigen

[![NPM version][npm]][npm-url]
[![Node version][node]][node-url]
[![Peer dependencies status][peer-deps]][peer-deps-url]
[![Dependencies status][deps]][deps-url]
[![Build status][build]][build-url]
[![Dependabot badge][dependabot]][dependabot-url]

[npm]: https://img.shields.io/npm/v/babel-preset-trigen.svg
[npm-url]: https://npmjs.com/package/babel-preset-trigen

[node]: https://img.shields.io/node/v/babel-preset-trigen.svg
[node-url]: https://nodejs.org

[peer-deps]: https://david-dm.org/TrigenSoftware/babel-preset-trigen/peer-status.svg
[peer-deps-url]: https://david-dm.org/TrigenSoftware/babel-preset-trigen?type=peer

[deps]: https://david-dm.org/TrigenSoftware/babel-preset-trigen.svg
[deps-url]: https://david-dm.org/TrigenSoftware/babel-preset-trigen

[build]: http://img.shields.io/travis/com/TrigenSoftware/babel-preset-trigen.svg
[build-url]: https://travis-ci.com/TrigenSoftware/babel-preset-trigen

[dependabot]: https://api.dependabot.com/badges/status?host=github&repo=TrigenSoftware/babel-preset-trigen
[dependabot-url]: https://dependabot.com/

Trigen's Babel preset.

## Install

```bash
npm i -D babel-preset-trigen
# or
yarn add -D babel-preset-trigen
```

## Configure

Add `babel-preset-trigen` to your presets in `.babelrc`.

## Options

### Common

- `env`
    - "app"
    - "lib"
    - "jest"
- `targets = false`
- `useBuiltIns = 'usage'`
- `corejs = 3`
- `commonjs = false`
- `typescript = false`
- `react = false`
- `transformDynamicImport = false`
- `transformRuntime = false`
- `requireContextHook = false`
- [`reactConstantElements`](https://babeljs.io/docs/en/next/babel-plugin-transform-react-constant-elements.html#options)
- [`reactRemovePropTypes`](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types#options)

If `NODE_ENV === 'development' && react === true` and `react-hot-loader` is installed - `react-hot-loader/babel` will be added to plugins.

If `NODE_ENV === 'production' && react === true` - `babel-plugin-transform-react-*` will be added to plugins.

### `lib` environment

- `transformRuntime = true`
- `reactRemovePropTypes = { mode: 'unsafe-wrap' }`

### `jest` environment

- `targets = { node: 'current' }`
- `commonjs = true`
- `transformDynamicImport = true`
- `transformRuntime = false`
- `requireContextHook = true`
