/* global describe, it */
var assert    = require('assert');
var pluralize = require('./');

var tests = [
  // Uncountables.
  ['fish', 'fish'],
  ['media', 'media'],
  ['moose', 'moose'],
  ['sheep', 'sheep'],
  ['series', 'series'],
  ['species', 'species'],
  ['agenda', 'agenda'],
  ['news', 'news'],
  ['reindeer', 'reindeer'],
  ['starfish', 'starfish'],
  ['chickenpox', 'chickenpox'],
  // Latin.
  ['veniam', 'veniam'],
  // Pluralization.
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
  ['dwarf', 'dwarves'], // Proper spelling is "dwarfs".
  ['encyclopedia', 'encyclopedias'],
  ['louse', 'lice'],
  ['roof', 'rooves'],
  ['woman', 'women'],
  ['formula', 'formulas'],
  ['polyhedron', 'polyhedra'],
  ['index', 'indices'], // Maybe "indexes".
  ['matrix', 'matrices'],
  ['vertex', 'vertices'],
  ['ax', 'axes'], // Could also be plural of "axe".
  ['crisis', 'crises'],
  ['criterion', 'criteria'],
  ['phenomenon', 'phenomena'],
  ['addendum', 'addenda'],
  ['datum', 'data'],
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
  ['octopus', 'octopi'],
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
  ['virus', 'viri'],
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
  ['flyer', 'flyers'],
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
  ['diploma', 'diplomas'],
  ['no', 'nos'],
  ['yes', 'yeses'],
  ['employ', 'employs'],
  ['employee', 'employees'],
  ['history', 'histories'],
  ['story', 'stories'],
  ['purchase', 'purchases'],
  ['order', 'orders'],
  ['key', 'keys'],
  ['bomb', 'bombs'],
  ['sanity', 'sanities'],
  ['ability', 'abilities'],
  ['activity', 'activities'],
  ['cutie', 'cuties'],
  ['validation', 'validations'],
  ['floatie', 'floaties'],
  ['goalie', 'goalies'],
  ['crawly', 'crawlies'],
  ['duty', 'duties'],
  ['scrutiny', 'scrutinies'],
  ['deputy', 'deputies'],
  ['beauty', 'beauties'],
  ['bank', 'banks'],
  ['tally', 'tallies'],
  ['ally', 'allies'], // Could also be plural of "alley".
  ['valley', 'vallies'],
  ['medley', 'medleys'],
  ['melody', 'melodies'],
  ['trolly', 'trollies'],
  ['thunk', 'thunks'],
  ['koala', 'koalas'],
  ['special', 'specials'],
  ['book', 'books'],
  ['knob', 'knobs'],
  ['crab', 'crabs'],
  ['plough', 'ploughs'],
  ['high', 'highs'],
  ['low', 'lows'],
  ['hiccup', 'hiccups'],
  ['bonus', 'bonuses'],
  ['abacus', 'abacuses'],
  ['phobia', 'phobias'],
  ['case', 'cases'],
  ['lace', 'laces'],
  ['trace', 'traces'],
  ['mage', 'mages'],
  ['lotus', 'lotuses'],
  ['motorbus', 'motorbuses'],
  ['cutlas', 'cutlases'],
  ['tequila', 'tequilas'],
  ['liar', 'liars'],
  ['delta', 'deltas'],
  ['visa', 'visas'],
  ['flea', 'fleas'],
  ['favela', 'favelas'],
  ['cobra', 'cobras'],
  ['finish', 'finishes'],
  ['gorilla', 'gorillas'],
  ['mass', 'masses'],
  ['face', 'faces'],
  ['rabbit', 'rabbits'],
  ['adventure', 'adventures'],
  ['breeze', 'breezes'],
  ['brew', 'brews'],
  ['canopy', 'canopies'],
  ['cave', 'caves'],
  ['charge', 'charges'],
  ['cinema', 'cinemas'],
  ['coffee', 'coffees'],
  ['favourite', 'favourites'],
  ['themself', 'themselves'],
  ['country', 'countries'],
  ['issue', 'issues'],
  ['authority', 'authorities'],
  ['force', 'forces'],
  ['objective', 'objectives'],
  ['present', 'presents'],
  ['industry', 'industries'],
  ['believe', 'believes'],
  ['century', 'centuries'],
  ['category', 'categories'],
  ['eve', 'eves'],
  ['fee', 'fees'],
  ['gene', 'genes'],
  ['try', 'tries'],
  ['currency', 'currencies'],
  ['pose', 'poses'],
  ['cheese', 'cheeses'],
  ['clue', 'clues'],
  ['litre', 'litres'],
  ['money', 'monies'],
  ['attorney', 'attornies'],
  ['balcony', 'balconies'],
  ['cockney', 'cockneys'],
  ['donkey', 'donkeys'],
  ['honey', 'honeys'],
  ['smiley', 'smilies'],
  ['survey', 'surveys'],
  ['whiskey', 'whiskies'],
  ['volley', 'volleys'],
  ['tongue', 'tongues'],
  ['suit', 'suits'],
  ['suite', 'suites'],
  ['cruise', 'cruises'],
  ['eave', 'eaves'],
  ['consultancy', 'consultancies'],
  ['pouch', 'pouches'],
  ['wallaby', 'wallabies'],
  ['weekly', 'weeklies'],
  ['whistle', 'whistles'],
  ['utilise', 'utilises'],
  ['utilize', 'utilizes'],
  ['mercy', 'mercies'],
  ['mercenary', 'mercenaries'],
  ['take', 'takes'],
  ['flush', 'flushes'],
  ['gate', 'gates'],
  ['evolve', 'evolves'],
  ['slave', 'slaves'],
  ['native', 'natives'],
  ['revolve', 'revolves'],
  ['twelve', 'twelves'],
  ['sleeve', 'sleeves'],
  ['subjective', 'subjectives'],
  ['stream', 'streams'],
  ['beam', 'beams'],
  ['foam', 'foams']
];

describe('pluralize', function () {
  it('should pluralize words', function () {
    tests.forEach(function (word) {
      assert.equal(pluralize.plural(word[0]), word[1]);
    });
  });

  it('should singilarize words', function () {
    tests.forEach(function (word) {
      assert.equal(pluralize.singular(word[1]), word[0]);
    });
  });

  describe('should change depending on count', function () {
    it('of singular words', function () {
      tests.forEach(function (word) {
        assert.equal(pluralize(word[0], 1), word[0]);
        assert.equal(pluralize(word[1], 1), word[0]);
      });
    });

    it('of plural words', function () {
      tests.forEach(function (word) {
        assert.equal(pluralize(word[0], 5), word[1]);
        assert.equal(pluralize(word[1], 5), word[1]);
      });
    });
  });

  describe('should prepend the count', function () {
    it('to singular words', function () {
      tests.forEach(function (word) {
        assert.equal(pluralize(word[0], 1, true), '1 ' + word[0]);
        assert.equal(pluralize(word[1], 1, true), '1 ' + word[0]);
      });
    });

    it('to plural words', function () {
      tests.forEach(function (word) {
        assert.equal(pluralize(word[0], 5, true), '5 ' + word[1]);
        assert.equal(pluralize(word[1], 5, true), '5 ' + word[1]);
      });
    });
  });

  it('should work with capitalized words', function () {
    tests.forEach(function (word) {
      assert.equal(pluralize(word[0].toUpperCase()), word[1].toUpperCase());
    });
  });

  it('should work with title-cased words', function () {
    tests.forEach(function (word) {
      assert.equal(
        pluralize(word[0][0].toUpperCase() + word[0].substr(1)),
        word[1][0].toUpperCase() + word[1].substr(1)
      );
    });
  });

  describe('adding new rules', function () {
    it('should allow new uncountable rules', function () {
      assert.equal(pluralize('paper'), 'papers');
      pluralize.addUncountableRule('paper');
      assert.equal(pluralize('paper'), 'paper');
    });

    it('should allow new irregular words', function () {
      assert.equal(pluralize('irregular'), 'irregulars');
      pluralize.addIrregularRule('irregular', 'regular');
      assert.equal(pluralize('irregular'), 'regular');
    });

    it('should allow new plural matching rules', function () {
      assert.equal(pluralize.plural('regex'), 'regexes');
      pluralize.addPluralRule(/gex$/i, 'gexii');
      assert.equal(pluralize.plural('regex'), 'regexii');
    });

    it('should allow new singular matching rules', function () {
      assert.equal(pluralize.singular('singles'), 'single');
      pluralize.addSingularRule(/singles$/, 'singular');
      assert.equal(pluralize.singular('singles'), 'singular');
    });

    it('should allow new plural matching rules to be strings', function () {
      assert.equal(pluralize.plural('person'), 'people');
      pluralize.addPluralRule('person', 'peeps');
      assert.equal(pluralize.plural('person'), 'peeps');
    });

    it('should allow new singular matching rules to be strings', function () {
      assert.equal(pluralize.singular('mornings'), 'morning');
      pluralize.addSingularRule('mornings', 'suck');
      assert.equal(pluralize.singular('mornings'), 'suck');
    });
  });
});
