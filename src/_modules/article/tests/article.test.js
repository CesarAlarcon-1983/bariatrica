'use strict';

var Article = require('../article');

describe('Article View', function() {

  beforeEach(function() {
    this.article = new Article();
  });

  it('Should run a few assertions', function() {
    expect(this.article);
  });

});
