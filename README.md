# path-replace [![NPM version][npm-image]][npm-url]  [![Dependency Status][daviddm-image]][daviddm-url]
> replace path string to valid path, escaping all spacial characters and spaces to underscore(`_`), which will be useful generating urls.

## Installation

```sh
$ npm install --save path-replace
```

## Usage

```js
const str = `test~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\  \\/test2`;

assert.equal(pathReplace(str), 'test_test2');
```

## License

Apache-2.0 © [chilijung]()


[npm-image]: https://badge.fury.io/js/path-replace.svg
[npm-url]: https://npmjs.org/package/path-replace
[travis-image]: https://travis-ci.org/Canner/path-replace.svg?branch=master
[travis-url]: https://travis-ci.org/Canner/path-replace
[daviddm-image]: https://david-dm.org/Canner/path-replace.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Canner/path-replace
