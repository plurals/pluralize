# Pluralize

Return a pluralized or singularized word based on the input string.

## Installation

```javascript
npm install pluralize --save
bower install pluralize --save
```

## Usage

```javascript
var pluralize = require('pluralize');
```

* `pluralize(word, count, includeCount)`
* `pluralize.plural(word)`
* `pluralize.singular(word)`
* `pluralize.addPluralRule(rule, replacement)`
* `pluralize.addSingularRule(rule, replacement)`
* `pluralize.addUncountableRule(word)`
* `pluralize.addIrregularRule(singular, plural)`

```javascript
pluralize('test') // "tests"
pluralize('test', 1) // "test"
pluralize('test', 5) // "tests"
pluralize('test', 1, true) // "1 test"
pluralize('test', 5, true) // "5 tests"

pluralize.plural('regex') // "regexes"
pluralize.addPluralRule(/gex$/i, 'gexii')
pluralize.plural('regex') // "regexii"

pluralize.plural('singles', 1) // "single"
pluralize.addSingularRule(/singles$/i, 'singular')
pluralize.plural('singles', 1) // "singular"

pluralize.plural('irregular') // "irregulars"
pluralize.addIrregularRule('irregular', 'regular')
pluralize.plural('irregular') // "regular"

pluralize.plural('paper') // "papers"
pluralize.addUncountableRule('paper');
pluralize.plural('paper') // "paper"
```

## License

MIT
