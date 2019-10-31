'use strict';

// Constructor
var Article = function() {
  this.name = 'article';
  console.log('%s module', this.name.toLowerCase());
};

module.exports = Article;
