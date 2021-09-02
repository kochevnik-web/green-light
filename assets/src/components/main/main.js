import Swiper from 'swiper/bundle';

jQuery(document).ready(function( $ ) {

    const globalObj = {
        isMobile: false
    }

    const mainslider = new Swiper('.main-swiper', {
        loop: true,
        touchRatio: globalObj.isMobile,

        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },

        navigation: {
            nextEl: '.main-swiper-buttons .swiper-button-next',
            prevEl: '.main-swiper-buttons .swiper-button-prev',
        },
    });

    mainslider.on('transitionStart', function () {
        const count = $('.main-swiper-fractions span').text().split('/');
        $('.main-swiper-fractions span').html(this.realIndex + 1 + '/' + count[1]);
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