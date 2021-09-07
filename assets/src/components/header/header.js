import gsap from 'gsap';

window.onload = function() {
    const hamburger = document.querySelector('.hamburger');
    const duration = 1;

    const header = document.querySelector('header');

    function goOnserver(entries) {
        let isLeaving = false;
        return new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if(entry.target.hasAttribute('data-color-menu')){
                        const attr = entry.target.getAttribute('data-color-menu');
                        header.classList.add(attr);
                    }
                    isLeaving = true;
                  } else if (isLeaving) {
                    if(entry.target.hasAttribute('data-color-menu')){
                        const attr = entry.target.getAttribute('data-color-menu');
                        header.classList.add(attr);
                        header.classList.remove(attr);
                    }
                    isLeaving = false;
                }
            });
        }, {
          rootMargin: '0px 0px -' + (window.innerHeight - 70) + 'px',
        });
    }

    Array.from(document.getElementsByTagName('section')).forEach(section => goOnserver(section).observe(section))


    hamburger.addEventListener('click', (e) => {

        hamburger.classList.toggle('is-active');
        document.querySelector('body').classList.toggle('show-menu');
        document.querySelector('.header-right').classList.toggle('menu-active');
        if(hamburger.classList.contains('is-active')){
            gsap.to('.menu-active', 0.8, {
                y: 0,
                ease: "power3.out",
            });
        }else{
            gsap.to('.header-right', 0.5, {
                y: '-100%',
                ease: "power3.in",
            });
        }
    });

    if(window.innerWidth >= 768) {
        gsap.from('#about-1-2', {
            duration: duration,
            y: '30em',
            ease: "power3.out",
            scrollTrigger: {
                trigger: '#about-1',
                start: 'top 35%',
                end: 'bottom 60%',
            }
        });
        gsap.from('#about-1-1', {
            duration: duration,
            rotate: 0,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '#about-1',
                start: 'top 35%',
                end: 'bottom 60%',
            }
        });
        gsap.from('#about-1 h2', {
            duration: duration,
            opacity: 0,
            scale: 2,
            x: '40em',
            y: '10em',
            ease: "power3.out",
            scrollTrigger: {
                trigger: '#about-1',
                start: 'top 35%',
                end: 'bottom 60%',
            }
        });
        gsap.from('#about-1 .about-subtitle', {
            duration: duration,
            y: '10em',
            ease: "power3.out",
            scrollTrigger: {
                trigger: '#about-1',
                start: 'top 35%',
                end: 'bottom 60%',
            }
        });

        gsap.from('#about-2 .about-logo img', {
            duration: duration,
            y: -700,
            opacity: 0,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '#about-2',
                start: 'top 35%',
                end: 'top 90%',
                // markers: true
            }
        });
    }
}