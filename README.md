# egg-redlock

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-redlock.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-redlock
[travis-image]: https://img.shields.io/travis/eggjs/egg-redlock.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-redlock
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-redlock.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-redlock?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-redlock.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-redlock
[snyk-image]: https://snyk.io/test/npm/egg-redlock/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-redlock
[download-image]: https://img.shields.io/npm/dm/egg-redlock.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-redlock

<!--
Description here.
-->

## Install

```bash
$ npm i egg-redlock --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.redlock = {
  enable: true,
  package: 'egg-redlock',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.redlock = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
