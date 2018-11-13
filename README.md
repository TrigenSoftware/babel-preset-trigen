# babel-preset-trigen

[![NPM version][npm]][npm-url]

[npm]: https://img.shields.io/npm/v/babel-preset-trigen.svg
[npm-url]: https://npmjs.com/package/babel-preset-trigen

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

- `targets = false`
- `commonjs = false`
- `react = false`
- `transformRuntime = true`
- [`reactConstantElements`](https://babeljs.io/docs/en/next/babel-plugin-transform-react-constant-elements.html#options)
- [`reactRemovePropTypes`](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types#options)

If `NODE_ENV === 'development' && react === true` and `react-hot-loader` is installed - `react-hot-loader/babel` will be added to plugins.

If `NODE_ENV === 'production' && react === true` - `babel-plugin-transform-react-*` will be added to plugins. 

---
[![NPM](https://nodei.co/npm/babel-preset-trigen.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/babel-preset-trigen/)
