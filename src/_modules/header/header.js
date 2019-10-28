'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    //Nosotros More Button

    var moreButton = $('.nosotros__profile__more-button');
    var moreInfoContainer = $('.nosotros__profile__more-info');

    moreButton.on('click', function() {
        moreInfoContainer.toggleClass('-open');
        
        if(moreInfoContainer.hasClass('-open')) {
            moreButton.html('ver menos');
        } else {
            moreButton.html('ver más');
        }
    })
};

module.exports = Header;
