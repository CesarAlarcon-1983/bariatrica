'use strict';

var Faq = require('../faq');

describe('Faq View', function() {

  beforeEach(function() {
    this.faq = new Faq();
  });

  it('Should run a few assertions', function() {
    expect(this.faq);
  });

});
