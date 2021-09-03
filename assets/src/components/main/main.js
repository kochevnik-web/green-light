import Swiper from 'swiper/bundle';

import gsap from 'gsap';

jQuery(document).ready(function( $ ) {

    const globalObj = {
        isMobile: false,
        animate: true
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

    mainslider.on('activeIndexChange', function () {
        const count = $('.main-swiper-fractions span').text().split('/');
        $('.main-swiper-fractions span').html(this.realIndex + 1 + '/' + count[1]);
        $('.main-text-block').each(function(){
            $(this).stop().hide();
        });
        $('#main-text-' + (this.realIndex + 1)).stop().fadeIn(800);
    });

    function render(){
        setIsMobile();
        autoHeightSlider();
    }

    function autoHeightSlider(){
        $('#main').css({fontSize: globalObj.isMobile ? window.innerWidth / 32 : window.innerWidth / 192});
        if(globalObj.isMobile){
            $('body').addClass('is-mobile');
        }else{
            $('body').removeClass('is-mobile');
        }
    }

    function setIsMobile(){
        globalObj.isMobile = window.innerWidth < window.innerHeight && window.innerWidth < 768 ? true : false;
    }

    window.addEventListener('resize', function(){
        render();
    });

    if(globalObj.animate){
        gsap.from('.arrow-scroll', {
            y: -30,
            opacity: 0,
            duration: 2,
            ease: "linear",
            repeat: -1
        });

        setTimeout(() => {
            gsap.to('body', {
                opacity: 1,
                duration: 0.3,
                ease: "power3.in",
            });
        }, 30);
    }

    render();

});