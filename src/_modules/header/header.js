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

    //switcher
    var targets = $('[data-target]');
    var contents = $('[data-content]');
    var container = $('.-js-container');

    function switcherInit() {
        $(targets[0]).addClass('-active');
        $(contents[0]).addClass('-active');
        container.height($(contents[0]).height());  
    }

    targets.on('click', function() {
        targets.removeClass('-active');
        contents.removeClass('-active');

        var targettedContent = $(this).data('target');
        var content = contents.filter('[data-content=' +  targettedContent + ']');

        $(this).addClass('-active');
        content.addClass('-active');

        var wrapperHeight = content.height();

        container.height(wrapperHeight);
    })

    switcherInit();
    // Menu icons selection
    var url = window.location.pathname;

    var urlRegExp = new RegExp(url == '/' ? window.location.origin + '/?$' : url.replace(/\/$/,'') + '$');

    $('.header__list li a').each(function(){
        if(urlRegExp.test(this.href.replace(/\/$/,''))){
            $(this).addClass('-active');

            return;
        }
    });
    //faq
    var questions = $('.faq__question');
    var answers = $('.faq__answer');

    questions.on('click', function() {
        if(questions.length === answers.length) {

            var questionIndex = questions.index($(this));

            $(this).toggleClass('-open');
            $(answers[questionIndex]).toggleClass('-open');

            var wrapperHeight = $(contents[1]).height();
            container.height(wrapperHeight);

        }
    })

    //calculo IMC
    var calcularButton = $('.por-donde-empiezo__options__button');
    var resultadoImc = $('.por-donde-empiezo__options__resultado-imc');
    var estatura = $('.-estatura');
    var peso = $('.-peso');

    peso.on('change', function() {
        if(estatura.val() != '' && peso.val() != '') {
            calcularButton.removeAttr('disabled');
        }
    })

    estatura.on('change', function() {
        if(estatura.val() != '' && peso.val() != '') {
            calcularButton.removeAttr('disabled');
        }
    })

    calcularButton.on('click', function() {
        var selectedEstatura = $('.-estatura').val();
        var selectedPeso = $('.-peso').val();
        
        
        var imc = (selectedPeso / ((selectedEstatura/100)*(selectedEstatura/100))).toFixed(2);

        resultadoImc.html(imc);
    });

    var viewport = 0;
    var scroll = 0;

    if($(window).width() < 640) {
        viewport = 110;
        scroll = 100;
    } else {
        viewport = 400;
        scroll = 400;
    }

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();

                $('html, body').animate({
                    scrollTop: target.offset().top - viewport
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                    var $target = $(target);
                    $target.focus();
                });
            }
        }
    });
};

module.exports = Header;
