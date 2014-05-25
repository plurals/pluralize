# Pluralize

Return a pluralized or singularized word based on the input string.

[![Build Status](https://img.shields.io/travis/blakeembrey/pluralize/master.svg)](https://travis-ci.org/blakeembrey/pluralize)
[![NPM version](https://img.shields.io/npm/v/pluralize.svg)](https://www.npmjs.org/package/path-to-regexp)

## Installation

```javascript
npm install pluralize --save
bower install pluralize --save
```

## Usage

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

### API

* `pluralize(word, count, includeCount)`
* `pluralize.plural(word)`
* `pluralize.singular(word)`
* `pluralize.addPluralRule(rule, replacement)`
* `pluralize.addSingularRule(rule, replacement)`
* `pluralize.addUncountableRule(word)`
* `pluralize.addIrregularRule(singular, plural)`

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
