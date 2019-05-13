# css-triangle

[![npm version](https://badge.fury.io/js/css-triangle.svg)](https://badge.fury.io/js/css-triangle)
[![Build Status](https://travis-ci.org/kimulaco/css-triangle.svg)](https://travis-ci.org/kimulaco/css-triangle)
[![Coverage Status](https://coveralls.io/repos/github/kimulaco/css-triangle/badge.svg)](https://coveralls.io/github/kimulaco/css-triangle)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Install

```shell
npm install --save css-triangle
```

## Use

```js
const cssTriangle = require('css-triangle');

cssTriangle.generate({
  width: 100,
  height: 100,
  color: '#ccc',
  direction: 'top'
});
/*
{
  'width': 0,
  'height': 0,
  'border-style': 'solid',
  'border-width': '0 50px 100px 50px',
  'border-color': 'transparent',
  'border-bottom-color': '#999'
}
*/
```

## ToDos

- Update Documents
- Create demo page

## License

[MIT License](https://github.com/kimulaco/css-triangle/blob/master/LICENSE)
