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
    var container = $('.por-donde-empiezo__options__container');

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

    //faq
    var questions = $('.faq__question');
    var answers = $('.faq__answer');

    questions.on('click', function() {
        if(questions.length === answers.length) {

            var questionIndex = questions.index($(this));

            $(this).toggleClass('-open');
            $(answers[questionIndex]).toggleClass('-open');

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
        
        
        var imc = (selectedPeso / (selectedEstatura/100)).toFixed(2);

        resultadoImc.html(imc)
                
    })
};

module.exports = Header;
