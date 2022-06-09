# Pluralize

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
![File Size][filesize-url]
[![CDNJS][cdnjs-image]][cdnjs-url]

> Pluralize and singularize any word.
> A fork of [pluralize]

## Installation

```
npm install pluralize-esm
```

### Node

```javascript
var pluralize = require('pluralize-esm')
```

### ESM

```javascript
import pluralize from 'pluralize-esm'
```

## Why?

This module uses a pre-defined list of rules, applied in order, to singularize or pluralize a given word. There are many cases where this is useful, such as any automation based on user input. For applications where the word(s) are known ahead of time, you can use a simple ternary (or function) which would be a much lighter alternative.

## Usage

- `word: string` The word to pluralize
- `count: number` How many of the word exist
- `inclusive: boolean` Whether to prefix with the number (e.g. 3 ducks)

Examples:

```javascript
pluralize('test') //=> "tests"
pluralize('test', 0) //=> "tests"
pluralize('test', 1) //=> "test"
pluralize('test', 5) //=> "tests"
pluralize('test', 1, true) //=> "1 test"
pluralize('test', 5, true) //=> "5 tests"
pluralize('蘋果', 2, true) //=> "2 蘋果"

// Example of new plural rule:
pluralize.plural('regex') //=> "regexes"
pluralize.addPluralRule(/gex$/i, 'gexii')
pluralize.plural('regex') //=> "regexii"

// Example of new singular rule:
pluralize.singular('singles') //=> "single"
pluralize.addSingularRule(/singles$/i, 'singular')
pluralize.singular('singles') //=> "singular"

// Example of new irregular rule, e.g. "I" -> "we":
pluralize.plural('irregular') //=> "irregulars"
pluralize.addIrregularRule('irregular', 'regular')
pluralize.plural('irregular') //=> "regular"

// Example of uncountable rule (rules without singular/plural in context):
pluralize.plural('paper') //=> "papers"
pluralize.addUncountableRule('paper')
pluralize.plural('paper') //=> "paper"

// Example of asking whether a word looks singular or plural:
pluralize.isPlural('test') //=> false
pluralize.isSingular('test') //=> true
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/pluralize-esm.svg?style=flat
[npm-url]: https://npmjs.org/package/pluralize-esm
[downloads-image]: https://img.shields.io/npm/dm/pluralize-esm.svg?style=flat
[downloads-url]: https://npmjs.org/package/pluralize-esm
[travis-image]: https://img.shields.io/travis/stipsan/pluralize-esm.svg?style=flat
[travis-url]: https://travis-ci.org/stipsan/pluralize-esm
[coveralls-image]: https://img.shields.io/coveralls/stipsan/pluralize-esm.svg?style=flat
[coveralls-url]: https://coveralls.io/r/stipsan/pluralize-esm?branch=master
[filesize-url]: https://img.shields.io/github/size/stipsan/pluralize-esm/dist/module.js.svg?style=flat
[cdnjs-image]: https://img.shields.io/cdnjs/v/pluralize-esm.svg
[cdnjs-url]: https://cdnjs.com/libraries/pluralize-esm
[pluralize]: https://npmjs.org/package/pluralize
