# Pluralize

Return a pluralized or singularized word based on the input string.

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Gittip][gittip-image]][gittip-url]

## Installation

```javascript
npm install pluralize --save
bower install pluralize --save
```

### Node

```javascript
var pluralize = require('pluralize');
```

### AMD

```javascript
define(function (require, exports, module) {
  var pluralize = require('pluralize');
});
```

### `<script>` tag

```html
<script src="pluralize.js"></script>
```

## Usage

```javascript
pluralize('test'); //=> "tests"
pluralize('test', 1); //=> "test"
pluralize('test', 5); //=> "tests"
pluralize('test', 1, true); //=> "1 test"
pluralize('test', 5, true); //=> "5 tests"

pluralize.plural('regex'); //=> "regexes"
pluralize.addPluralRule(/gex$/i, 'gexii');
pluralize.plural('regex'); //=> "regexii"

pluralize.plural('singles', 1); //=> "single"
pluralize.addSingularRule(/singles$/i, 'singular');
pluralize.plural('singles', 1); //=> "singular"

pluralize.plural('irregular'); //=> "irregulars"
pluralize.addIrregularRule('irregular', 'regular');
pluralize.plural('irregular'); //=> "regular"

pluralize.plural('paper'); //=> "papers"
pluralize.addUncountableRule('paper');
pluralize.plural('paper'); //=> "paper"
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/pluralize.svg?style=flat
[npm-url]: https://npmjs.org/package/pluralize
[travis-image]: https://img.shields.io/travis/blakeembrey/pluralize.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/pluralize
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/pluralize.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/pluralize?branch=master
[gittip-image]: https://img.shields.io/gittip/blakeembrey.svg?style=flat
[gittip-url]: https://www.gittip.com/blakeembrey
