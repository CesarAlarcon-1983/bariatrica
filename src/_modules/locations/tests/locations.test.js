'use strict';

var Locations = require('../locations');

describe('Locations View', function() {

  beforeEach(function() {
    this.locations = new Locations();
  });

  it('Should run a few assertions', function() {
    expect(this.locations);
  });

});
