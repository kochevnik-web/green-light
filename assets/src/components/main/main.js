import Swiper from 'swiper';

jQuery(document).ready(function( $ ) {

    new Swiper('.swiper', {

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

});