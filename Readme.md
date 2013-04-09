# Pluralize

Return a pluralized or singularized word based on the input string.

## Installation

```javascript
npm install pluralize --save
bower install pluralize
```

## API

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
pluralize('test') // tests
pluralize('test', 1) // test
pluralize('test', 5) // tests
pluralize('test', 1, true) // 1 test
pluralize('test', 5, true) // 5 tests

// pluralize.plural() and pluralize.singular() are pretty self explanatory

plural('regex') // regexes
pluralize.addPluralRule(/gex$/i, 'gexii')
plural('regex') // regexii

plural('singles', 1) // single
pluralize.addSingularRule(/singles$/i, 'singular')
plural('singles', 1) // singular

plural('irregular') // irregulars
plural.addIrregularRule('irregular', 'regular')
plural('irregular') // regular

plural('paper') // papers
plural.addUncountableRule('paper');
plural('paper') // paper
```
