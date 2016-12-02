describe('inflector', function() {
  /**
   * Test macro for pluralize & singularize tests
   */
  function example(method, from, to) {
    it(method + 's "' + from + '" to "' + to + '"', function() {
      expect(_[method](from)).to.equal(to);
    });
  }

  var combinations = [
      ['rose', 'roses'],
      ['tomato', 'tomatoes'],
      ['datum', 'data'],
      ['boss', 'bosses'],
      ['soliloquy', 'soliloquies'],
      ['wish', 'wishes'],
      ['parenthesis', 'parentheses'],
      ['thesis', 'theses'],
      ['analysis', 'analyses'],
      ['life', 'lives'],
      ['hive', 'hives'],
      ['tive', 'tives'],
      ['leaf', 'leaves'],
      ['loaf', 'loaves'],
      ['elf', 'elves'],
      ['thief', 'thieves'],
      ['series', 'series'],
      ['movie', 'movies'],
      ['x', 'xes'],
      ['mouse', 'mice'],
      ['louse', 'lice'],
      ['bus', 'buses'],
      ['shoe', 'shoes'],
      ['crisis', 'crises'],
      ['axis', 'axes'],
      ['octopus', 'octopi'],
      ['virus', 'viri'],
      ['status', 'statuses'],
      ['alias', 'aliases'],
      ['ox', 'oxen'],
      ['vertex', 'vertices'],
      ['index', 'indices'],
      ['matrix', 'matrices'],
      ['quiz', 'quizzes'],
      ['database', 'databases']
  ];

  describe('plurals from singular', function() {
      combinations.forEach(function(word) {
      example('pluralize', word[0], word[1]);
    });
  });
  describe('plurals from plural', function() {
      combinations.forEach(function(word) {
      example('pluralize', word[1], word[1]);
    });
  });
  describe('singulars from plural', function() {
      combinations.forEach(function(word) {
      example('singularize', word[1], word[0]);
    });
  });
  describe('singulars from single', function() {
      combinations.forEach(function(word) {
      example('singularize', word[0], word[0]);
    });
  });
  describe('irregulars', function() {
    [
      ['person', 'people'],
      ['man', 'men'],
      ['child', 'children'],
      ['sex', 'sexes'],
      ['move', 'moves'],
      ['cow', 'kine'],
      ['zombie', 'zombies']
    ].forEach(function(word) {
      example('pluralize', word[0], word[1]);
      example('singularize', word[1], word[0]);
    });
  });
  describe('uncountables', function() {
    [
      'equipment',
      'information',
      'rice',
      'money',
      'species',
      'series',
      'fish',
      'sheep',
      'jeans',
      'moose',
      'deer',
      'news',
      'music'
    ].forEach(function(word) {
      example('pluralize', word, word);
      example('singularize', word, word);
    });
  });
  describe('#resetInflections', function() {
    it('resets the default inflections', function() {
      _.plural('haxor', 'hax0rs!');
      expect(_.pluralize('haxor')).to.equal('hax0rs!');
      _.resetInflections();
      expect(_.pluralize('haxor')).to.equal('haxors');
    });
  });
});
