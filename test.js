/*global describe,it*/
var assert = require('assert'),
    plural = require('./'),
    tests;

tests = [
  // Uncountables
  ['fish', 'fish'],
  ['media', 'media'],
  ['moose', 'moose'],
  ['money', 'money'],
  ['sheep', 'sheep'],
  ['series', 'series'],
  ['species', 'species'],
  ['agenda', 'agenda'],
  ['news', 'news'],
  ['reindeer', 'reindeer'],
  ['starfish', 'starfish'],
  ['chickenpox', 'chickenpox'],
  // Pluralization
  ['man', 'men'],
  ['superman', 'supermen'],
  ['ox', 'oxen'],
  ['bus', 'buses'],
  ['airbus', 'airbuses'],
  ['railbus', 'railbuses'],
  ['wife', 'wives'],
  ['guest', 'guests'],
  ['thing', 'things'],
  ['guess', 'guesses'],
  ['person', 'people'],
  ['meteor', 'meteors'],
  ['chateau', 'chateaux'],
  ['lap', 'laps'],
  ['cough', 'coughs'],
  ['death', 'deaths'],
  ['coach', 'coaches'],
  ['boy', 'boys'],
  ['guy', 'guys'],
  ['girl', 'girls'],
  ['chair', 'chairs'],
  ['tomato', 'tomatoes'],
  ['potato', 'potatoes'],
  ['hero', 'heroes'],
  ['volcano', 'volcanoes'],
  ['cherry', 'cherries'],
  ['piano', 'pianos'],
  ['monkey', 'monkeys'],
  ['day', 'days'],
  ['lady', 'ladies'],
  ['bath', 'baths'],
  ['professional', 'professionals'],
  ['dwarf', 'dwarves'], // `dwarfs`
  ['plural', 'plurals'],
  ['encyclopedia', 'encyclopedias'],
  ['louse', 'lice'],
  ['roof', 'rooves'],
  ['woman', 'women'],
  ['formula', 'formulas'],
  ['polyhedron', 'polyhedra'],
  ['index', 'indices'], // Maybe `indexes`
  ['matrix', 'matrices'],
  ['vertex', 'vertices'],
  ['ax', 'axes'], // How to go back to `axis` v `axe`, or is it `ax`?
  ['crisis', 'crises'],
  ['criterion', 'criteria'], // Should this just go one way, no one says `criterion`
  ['phenomenon', 'phenomena'],
  ['addendum', 'addenda'],
  ['datum', 'data'], // Another which really only goes one way
  ['forum', 'forums'],
  ['millennium', 'millennia'],
  ['alumnus', 'alumni'],
  ['medium', 'mediums'],
  ['census', 'censuses'],
  ['genus', 'genera'],
  ['dogma', 'dogmata'],
  ['life', 'lives'],
  ['hive', 'hives'],
  ['kiss', 'kisses'],
  ['dish', 'dishes'],
  ['human', 'humans'],
  ['knife', 'knives'],
  ['phase', 'phases'],
  ['judge', 'judges'],
  ['class', 'classes'],
  ['witch', 'witches'],
  ['church', 'churches'],
  ['massage', 'massages'],
  ['prospectus', 'prospectuses'],
  ['syllabus', 'syllabi'],
  ['viscus', 'viscera'],
  ['cactus', 'cacti'],
  ['hippopotamus', 'hippopotamuses'],
  ['octopus', 'octopi'], // `octopuses`, `octopodes`
  ['platypus', 'platypuses'],
  ['kangaroo', 'kangaroos'],
  ['atlas', 'atlases'],
  ['stigma', 'stigmata'],
  ['schema', 'schemata'],
  ['phenomenon', 'phenomena'],
  ['diagnosis', 'diagnoses'],
  ['mongoose', 'mongooses'],
  ['mouse', 'mice'],
  ['liturgist', 'liturgists'],
  ['box', 'boxes'],
  ['gas', 'gases'],
  ['self', 'selves'],
  ['chief', 'chiefs'],
  ['quiz', 'quizzes'],
  ['cherry', 'cherries'],
  ['child', 'children'],
  ['syllabus', 'syllabi'],
  ['shelf', 'shelves'],
  ['fizz', 'fizzes'],
  ['thief', 'thieves'],
  ['day', 'days'],
  ['loaf', 'loaves'],
  ['mango', 'mangoes'],
  ['fix', 'fixes'],
  ['spy', 'spies'],
  ['day', 'days'],
  ['vertebra', 'vertebrae'],
  ['clock', 'clocks'],
  ['lap', 'laps'],
  ['cuff', 'cuffs'],
  ['leaf', 'leaves'],
  ['calf', 'calves'],
  ['moth', 'moths'],
  ['mouth', 'mouths'],
  ['house', 'houses'],
  ['proof', 'proofs'],
  ['hoof', 'hooves'],
  ['elf', 'elves'],
  ['turf', 'turfs'],
  ['craft', 'crafts'],
  ['die', 'dice'],
  ['penny', 'pennies'],
  ['campus', 'campuses'],
  ['platypus', 'platypuses'],
  ['virus', 'viri'], // `viruses`
  ['bureau', 'bureaux'],
  ['kiwi', 'kiwis'],
  ['wiki', 'wikis'],
  ['igloo', 'igloos'],
  ['ninja', 'ninjas'],
  ['pizza', 'pizzas'],
  ['kayak', 'kayaks'],
  ['canoe', 'canoes'],
  ['tiding', 'tidings'],
  ['pea', 'peas'],
  ['drive', 'drives'],
  ['nose', 'noses'],
  ['movie', 'movies'],
  ['status', 'statuses'],
  ['alias', 'aliases'],
  ['memorandum', 'memorandums'],
  ['language', 'languages'],
  ['plural', 'plurals'],
  ['word', 'words'],
  ['multiple', 'multiples'],
  ['reward', 'rewards'],
  ['sandwich', 'sandwiches'],
  ['subway', 'subways'],
  ['direction', 'directions'],
  ['land', 'lands'],
  ['row', 'rows'],
  ['rose', 'roses'],
  ['raise', 'raises'],
  ['friend', 'friends'],
  ['follower', 'followers'],
  ['male', 'males'],
  ['nail', 'nails'],
  ['sex', 'sexes'],
  ['tape', 'tapes'],
  ['ruler', 'rulers'],
  ['king', 'kings'],
  ['queen', 'queens'],
  ['zero', 'zeros'],
  ['quest', 'quests'],
  ['goose', 'geese'],
  ['foot', 'feet'],
  ['ex', 'exes'],
  ['heat', 'heats'],
  ['train', 'trains'],
  ['test', 'tests'],
  ['pie', 'pies'],
  ['fly', 'flies'],
  ['eye', 'eyes'],
  ['lie', 'lies'],
  ['node', 'nodes'],
  ['chinese', 'chinese'],
  ['regex', 'regexes'],
  ['license', 'licenses'],
  ['zebra', 'zebras'],
  ['general', 'generals'],
  ['corps', 'corps'],
  ['pliers', 'pliers'],
  ['scissors', 'scissors'],
  ['fireman', 'firemen'],
  ['chirp', 'chirps'],
  ['harp', 'harps'],
  ['corpse', 'corpses'],
  ['dye', 'dyes'],
  ['move', 'moves'],
  ['zombie', 'zombies'],
  ['tie', 'ties'],
  ['groove', 'grooves'],
  ['bee', 'bees'],
  ['ave', 'aves'],
  ['wave', 'waves'],
  ['wolf', 'wolves'],
  ['airwave', 'airwaves'],
  ['archive', 'archives'],
  ['dive', 'dives'],
  ['aftershave', 'aftershaves'],
  ['cave', 'caves'],
  ['grave', 'graves'],
  ['gift', 'gifts'],
  ['nerve', 'nerves'],
  ['nerd', 'nerds'],
  ['carve', 'carves'],
  ['rave', 'raves'],
  ['scarf', 'scarves'],
  ['sale', 'sales'],
  ['sail', 'sails'],
  ['swerve', 'swerves'],
  ['love', 'loves'],
  ['dove', 'doves'],
  ['glove', 'gloves'],
  ['wharf', 'wharves'],
  ['valve', 'valves'],
  ['werewolf', 'werewolves'],
  ['view', 'views'],
  ['emu', 'emus'],
  ['menu', 'menus'],
  ['wax', 'waxes'],
  ['fax', 'faxes'],
  ['nut', 'nuts'],
  ['crust', 'crusts'],
  ['stigma', 'stigmata'],
  ['lemma', 'lemmata'],
  ['anathema', 'anathemata'],
  ['locus', 'loci'],
  ['uterus', 'uteri'],
  ['automatum', 'automata'],
  ['curriculum', 'curricula'],
  ['quorum', 'quora'],
  ['genie', 'genies'],
  ['genius', 'geniuses'],
  ['flower', 'flowers'],
  ['crash', 'crashes'],
  ['soul', 'souls'],
  ['career', 'careers'],
  ['planet', 'planets'],
  ['son', 'sons'],
  ['sun', 'suns'],
  ['drink', 'drinks'],
  ['diploma', 'diplomas']
];

describe('pluralize', function () {
  it('should pluralize words', function () {
    tests.forEach(function (word) {
      assert.equal(plural.plural(word[0]), word[1]);
    });
  });

  it('should singilarize words', function () {
    tests.forEach(function (word) {
      assert.equal(plural.singular(word[1]), word[0]);
    });
  });

  it('should change depending on count', function () {
    tests.forEach(function (word) {
      assert.equal(plural(word[0], 1), word[0]);
      assert.equal(plural(word[0], 5), word[1]);
      assert.equal(plural(word[1], 1), word[0]);
      assert.equal(plural(word[1], 5), word[1]);
    });
  });

  it('should prepend the count to the word', function () {
    tests.forEach(function (word) {
      assert.equal(plural(word[0], 1, true), '1 ' + word[0]);
      assert.equal(plural(word[0], 5, true), '5 ' + word[1]);
      assert.equal(plural(word[1], 1, true), '1 ' + word[0]);
      assert.equal(plural(word[1], 5, true), '5 ' + word[1]);
    });
  });

  it('should work with capitalized words', function () {
    tests.forEach(function (word) {
      assert.equal(plural(word[0].toUpperCase()), word[1].toUpperCase());
    });
  });

  it('should work with title-cased words', function () {
    tests.forEach(function (word) {
      assert.equal(
        plural(word[0][0].toUpperCase() + word[0].substr(1)), // Title-case
        word[1][0].toUpperCase() + word[1].substr(1)
      );
    });
  });

  it('should allow new uncountable rules', function () {
    assert.equal(plural('paper'), 'papers');
    plural.addUncountableRule('paper');
    assert.equal(plural('paper'), 'paper');
  });

  it('should allow new irregular words', function () {
    assert.equal(plural('irregular'), 'irregulars');
    plural.addIrregularRule('irregular', 'regular');
    assert.equal(plural('irregular'), 'regular');
  });

  it('should allow new plural matching rules', function () {
    assert.equal(plural('regex'), 'regexes');
    plural.addPluralRule(/gex$/i, 'gexii');
    assert.equal(plural('regex'), 'regexii');
  });

  it('should allow new singular matching rules', function () {
    assert.equal(plural.singular('singles'), 'single');
    plural.addSingularRule(/singles$/, 'singular');
    assert.equal(plural.singular('singles'), 'singular');
  });
});
