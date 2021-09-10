import gsap from 'gsap';

window.onload = function() {
    const hamburger = document.querySelector('.hamburger');
    const duration = 1;

    const header = document.querySelector('header');
    const menuLinksList = document.querySelectorAll('.header-menu a');

    function goOnserver(entries, color = false) {
        let isLeaving = false;
        return new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if(color){
                        if(entry.target.hasAttribute('data-color-menu')){
                            const attr = entry.target.getAttribute('data-color-menu');
                            header.classList.add(attr);
                        }
                    }else{
                        if(entry.target.hasAttribute('id')){
                            const id = entry.target.id;
                            document.querySelector('.header-menu a[href="#' + id + '"]').classList.add('bottom-line');
                        }
                    }
                    isLeaving = true;
                } else if (isLeaving) {
                    if(color){
                        if(entry.target.hasAttribute('data-color-menu')){
                            const attr = entry.target.getAttribute('data-color-menu');
                            header.classList.remove(attr);
                        }
                    }else{
                        if(entry.target.hasAttribute('id')){
                            const id = entry.target.id;
                            document.querySelector('.header-menu a[href="#' + id + '"]').classList.remove('bottom-line');
                        }
                    }
                    isLeaving = false;
                }
            });
        }, {
          rootMargin: '-50px 0px -' + (window.innerHeight - 50) + 'px',
        });
    }

    Array.from(document.querySelectorAll('section.page-item')).forEach(section => goOnserver(section).observe(section))
    Array.from(document.querySelectorAll('.change-color')).forEach(elem => goOnserver(elem, true).observe(elem))

    Array.from(menuLinksList).forEach(elem => {
        elem.addEventListener('click', e => {
            showHideMenu();
        })
    });

    function showHideMenu(){
        if (window.innerWidth > 1020) return;
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
    }

    hamburger.addEventListener('click', (e) => {
        showHideMenu()
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

        const servicesElems = Array.from(document.querySelectorAll('.services-page-elem'));
        const servicesMenu = document.getElementById('services-menu');
        const trophy = document.getElementById('trophy');

        gsap.to('.services-menu-iner', {
            ease: "none",
            scrollTrigger: {
                trigger: '#services-menu',
                endTrigger: servicesElems[servicesElems.length - 1],
                start: 'top ' + servicesMenu.offsetTop + 'px',
                end: 'top top',
                pin: true,
                scrub: 1,
                // markers: true
            }
        });

        gsap.to('#trophy-img', {
            ease: "none",
            rotate: (20 * (servicesElems.length - 1)) + 'deg',
            scrollTrigger: {
                trigger: '#trophy',
                endTrigger: servicesElems[servicesElems.length - 1],
                start: 'top ' + trophy.offsetTop + 'px',
                end: 'top top',
                pin: true,
                scrub: true,
                // markers: true
            }
        });
    }
}