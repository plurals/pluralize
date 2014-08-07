/* global describe, it */
var expect    = require('chai').expect;
var pluralize = require('./');

/**
 * Standard singular/plural matches.
 *
 * @type {Array}
 */
var BASIC_TESTS = [
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
  ['smallpox', 'smallpox'],
  ['chickenpox', 'chickenpox'],
  ['shambles', 'shambles'],
  // Latin.
  ['veniam', 'veniam'],
  // Pluralization.
  ['this', 'these'],
  ['that', 'those'],
  ['man', 'men'],
  ['superman', 'supermen'],
  ['ox', 'oxen'],
  ['bus', 'buses'],
  ['airbus', 'airbuses'],
  ['railbus', 'railbuses'],
  ['wife', 'wives'],
  ['guest', 'guests'],
  ['thing', 'things'],
  ['mess', 'messes'],
  ['guess', 'guesses'],
  ['person', 'people'],
  ['meteor', 'meteors'],
  ['chateau', 'chateaux'],
  ['lap', 'laps'],
  ['cough', 'coughs'],
  ['death', 'deaths'],
  ['coach', 'coaches'],
  ['boy', 'boys'],
  ['toy', 'toys'],
  ['guy', 'guys'],
  ['girl', 'girls'],
  ['chair', 'chairs'],
  ['toe', 'toes'],
  ['tiptoe', 'tiptoes'],
  ['tomato', 'tomatoes'],
  ['potato', 'potatoes'],
  ['tornado', 'tornadoes'],
  ['torpedo', 'torpedoes'],
  ['hero', 'heroes'],
  ['superhero', 'superheroes'],
  ['volcano', 'volcanoes'],
  ['canto', 'cantos'],
  ['hetero', 'heteros'],
  ['photo', 'photos'],
  ['portico', 'porticos'],
  ['quarto', 'quartos'],
  ['kimono', 'kimonos'],
  ['albino', 'albinos'],
  ['cherry', 'cherries'],
  ['piano', 'pianos'],
  ['pro', 'pros'],
  ['combo', 'combos'],
  ['turbo', 'turbos'],
  ['bar', 'bars'],
  ['crowbar', 'crowbars'],
  ['van', 'vans'],
  ['tobacco', 'tobaccos'],
  ['afficionado', 'afficionados'],
  ['monkey', 'monkeys'],
  ['neutrino', 'neutrinos'],
  ['rhino', 'rhinos'],
  ['steno', 'stenos'],
  ['latino', 'latinos'],
  ['casino', 'casinos'],
  ['avocado', 'avocados'],
  ['commando', 'commandos'],
  ['tuxedo', 'tuxedos'],
  ['speedo', 'speedos'],
  ['dingo', 'dingos'],
  ['echo', 'echos'],
  ['motto', 'mottos'],
  ['pass', 'passes'],
  ['ghetto', 'ghettos'],
  ['mango', 'mangos'],
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
  ['axe', 'axes'], // Could also be plural of "ax".
  ['pickaxe', 'pickaxes'],
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
  ['tooth', 'teeth'],
  ['thief', 'thieves'],
  ['day', 'days'],
  ['loaf', 'loaves'],
  ['fix', 'fixes'],
  ['spy', 'spies'],
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
  ['virus', 'viri'],
  ['iris', 'irises'],
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
  ['grow', 'grows'],
  ['flow', 'flows'],
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
  ['reflex', 'reflexes'],
  ['heat', 'heats'],
  ['train', 'trains'],
  ['test', 'tests'],
  ['pie', 'pies'],
  ['fly', 'flies'],
  ['eye', 'eyes'],
  ['lie', 'lies'],
  ['node', 'nodes'],
  ['trade', 'trades'],
  ['chinese', 'chinese'],
  ['please', 'pleases'],
  ['japanese', 'japanese'],
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
  ['cover', 'covers'],
  ['tie', 'ties'],
  ['groove', 'grooves'],
  ['bee', 'bees'],
  ['ave', 'aves'],
  ['wave', 'waves'],
  ['wolf', 'wolves'],
  ['airwave', 'airwaves'],
  ['archive', 'archives'],
  ['arch', 'arches'],
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
  ['analysis', 'analyses'],
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
  ['city', 'cities'],
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
  ['family', 'families'],
  ['tally', 'tallies'],
  ['ally', 'allies'],
  ['alley', 'alleys'],
  ['valley', 'valleys'],
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
  ['circus', 'circuses'],
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
  ['copy', 'copies'],
  ['spy', 'spies'],
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
  ['cheer', 'cheers'],
  ['litre', 'litres'],
  ['money', 'monies'],
  ['attorney', 'attorneys'],
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
  ['abyss', 'abysses'],
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
  ['foam', 'foams'],
  ['callus', 'calluses'],
  ['use', 'uses'],
  ['beau', 'beaus'],
  ['fetus', 'fetuses'],
  ['luau', 'luaus'],
  ['pilau', 'pilaus'],
  ['shoe', 'shoes'],
  ['sandshoe', 'sandshoes'],
  ['zeus', 'zeuses'],
  ['nucleus', 'nuclei'],
  ['sky', 'skies'],
  ['beach', 'beaches'],
  ['brush', 'brushes'],
  ['hoax', 'hoaxes'],
  ['scratch', 'scratches'],
  ['nanny', 'nannies']
];

/**
 * Odd plural to singular tests.
 *
 * @type {Array}
 */
var SINGULAR_TESTS = [
  ['dingo', 'dingoes'],
  ['mango', 'mangoes'],
  ['echo', 'echoes'],
  ['ghetto', 'ghettoes'],
  ['nucleus', 'nucleuses']
];

/**
 * Odd singular to plural tests.
 *
 * @type {Array}
 */
var PLURAL_TESTS = [
  ['whisky',  'whiskies']
];

/**
 * Test suite.
 */
describe('pluralize', function () {
  describe('methods', function () {
    describe('plural', function () {
      BASIC_TESTS.concat(PLURAL_TESTS).forEach(function (test) {
        it(test[0] + ' -> ' + test[1], function () {
          expect(pluralize.plural(test[0])).to.equal(test[1]);
        });
      });
    });

    describe('singular', function () {
      BASIC_TESTS.concat(SINGULAR_TESTS).forEach(function (test) {
        it(test[1] + ' -> ' + test[0], function () {
          expect(pluralize.singular(test[1])).to.equal(test[0]);
        });
      });
    });
  });

  describe('automatically convert', function () {
    describe('plural', function () {
      BASIC_TESTS.concat(PLURAL_TESTS).forEach(function (test) {
        // Make sure the word stays pluralized.
        it('5 ' + test[1] + ' -> ' + test[1], function () {
          expect(pluralize(test[1], 5)).to.equal(test[1]);
        });

        // Make sure the word becomes a plural.
        if (test[0] !== test[1]) {
          it('5 ' + test[0] + ' -> ' + test[1], function () {
            expect(pluralize(test[0], 5)).to.equal(test[1]);
          });
        }
      });
    });

    describe('singular', function () {
      BASIC_TESTS.concat(SINGULAR_TESTS).forEach(function (test) {
        // Make sure the word stays singular.
        it('1 ' + test[0] + ' -> ' + test[0], function () {
          expect(pluralize(test[0], 1)).to.equal(test[0]);
        });

        // Make sure the word becomes singular.
        if (test[0] !== test[1]) {
          it('1 ' + test[1] + ' -> ' + test[0], function () {
            expect(pluralize(test[1], 1)).to.equal(test[0]);
          });
        }
      });
    });
  });

  describe('prepend count', function () {
    it('plural words', function () {
      expect(pluralize('test', 5, true)).to.equal('5 tests');
    });

    it('singular words', function () {
      expect(pluralize('test', 1, true)).to.equal('1 test');
    });
  });

  describe('detect case', function () {
    it('upper case', function () {
      expect(pluralize('Test')).to.equal('Tests');
    });

    it('title case', function () {
      expect(pluralize('TEST')).to.equal('TESTS');
    });
  });

  describe('adding new rules', function () {
    it('uncountable rules', function () {
      expect(pluralize('paper')).to.equal('papers');

      pluralize.addUncountableRule('paper');

      expect(pluralize('paper')).to.equal('paper');
    });

    it('should allow new irregular words', function () {
      expect(pluralize('irregular')).to.equal('irregulars');

      pluralize.addIrregularRule('irregular', 'regular');

      expect(pluralize('irregular')).to.equal('regular');
    });

    it('should allow new plural matching rules', function () {
      expect(pluralize.plural('regex')).to.equal('regexes');

      pluralize.addPluralRule(/gex$/i, 'gexii');

      expect(pluralize.plural('regex')).to.equal('regexii');
    });

    it('should allow new singular matching rules', function () {
      expect(pluralize.singular('singles')).to.equal('single');

      pluralize.addSingularRule(/singles$/, 'singular');

      expect(pluralize.singular('singles')).to.equal('singular');
    });

    it('should allow new plural matching rules to be strings', function () {
      expect(pluralize.plural('person')).to.equal('people');

      pluralize.addPluralRule('person', 'peeps');

      expect(pluralize.plural('person')).to.equal('peeps');
    });

    it('should allow new singular matching rules to be strings', function () {
      expect(pluralize.singular('mornings')).to.equal('morning');

      pluralize.addSingularRule('mornings', 'suck');

      expect(pluralize.singular('mornings')).to.equal('suck');
    });
  });
});
