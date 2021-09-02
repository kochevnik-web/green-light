import Swiper from 'swiper/bundle';

jQuery(document).ready(function( $ ) {

    const globalObj = {
        isMobile: false
    }

    new Swiper('.main-swiper', {
        loop: true,

        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },

        navigation: {
            nextEl: '.main-swiper-buttons .swiper-button-next',
            prevEl: '.main-swiper-buttons .swiper-button-prev',
        },
    });

    function render(){
        autoHeightSlider();
        setIsMobile();
    }

    function autoHeightSlider(){
        $('#main').css({fontSize: globalObj.isMobile ? '10px' : window.innerWidth / 192});
    }

    function setIsMobile(){
        globalObj.isMobile = window.innerWidth < window.innerHeight && window.innerWidth < 768 ? true : false;
    }

    window.addEventListener('resize', function(){
        render();
    });

    render();

});