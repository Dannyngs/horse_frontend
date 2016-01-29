// JavaScript Document


// flexSlider
$(window).load(function() {
    "use strict";
    $('#slider-left').flexslider({
        animation: 'slide',
        slideshowSpeed: 6000,
        initDelay: 1000,
    });
    $('#slider-right').flexslider({
        animation: 'slide',
        slideshowSpeed: 6000,
        initDelay: 1000,
    });
});