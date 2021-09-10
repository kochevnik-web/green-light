import gsap from 'gsap';

window.onload = function() {
    const hamburger = document.querySelector('.hamburger');
    const duration = 1;

    const header = document.querySelector('header');
    const menuLinksList = document.querySelectorAll('.header-menu a');
    const servicesMenu = document.getElementById('services-menu');
    const servicesElems = Array.from(document.querySelectorAll('.services-page-elem'));
    const servicesIner = document.getElementById('services');

    function clearHeaderClasses(){
        header.classList.remove('white-menu');
        header.classList.remove('green-menu');
    }

    function clearServicesClasses(){
        servicesIner.classList.remove('services-menu-green');
        servicesIner.classList.remove('services-menu-green2');
        servicesIner.classList.remove('services-menu-grey');
    }

    function clearActiveMenuItem(){
        Array.from(document.querySelectorAll('.header a')).forEach(a => {
            a.classList.remove('bottom-line');
        });
    }

    function clearActiveMenuItemServices(){
        Array.from(document.querySelectorAll('#services-menu li')).forEach(a => {
            a.classList.remove('active');
        });
    }

    Array.from(document.querySelectorAll('.page-item')).forEach(section => {

        gsap.to(section, {
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: 'top-=10px top',
                end: 'bottom-=10px top',
                onEnter: () => {
                    clearActiveMenuItem();
                    // console.log('onEnter');
                    document.querySelector('.header-menu a[href="#' + section.id + '"]').classList.add('bottom-line');
                },
                onEnterBack: () => {
                    clearActiveMenuItem();
                    // console.log('onEnterBack');
                    document.querySelector('.header-menu a[href="#' + section.id + '"]').classList.add('bottom-line');
                },
                onLeave: () => {
                    clearActiveMenuItem();
                    //console.log('onLeave');
                },
                onLeaveBack: () => {
                    // console.log('onLeaveBack');
                    clearActiveMenuItem();
                },
                // markers: true
            },
        });
    });

    Array.from(document.querySelectorAll('.change-color')).forEach(section => {

        gsap.to(section, {
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: 'top-=50px top',
                end: 'bottom-=50px top',
                onEnter: () => {
                    if(section.hasAttribute('data-color-menu')){
                        clearHeaderClasses();
                        const attr = section.getAttribute('data-color-menu');
                        header.classList.add(attr);
                    }
                },
                onEnterBack: () => {
                    if(section.hasAttribute('data-color-menu')){
                        clearHeaderClasses();
                        const attr = section.getAttribute('data-color-menu');
                        header.classList.add(attr);
                    }
                },
                onLeave: () => {
                    clearHeaderClasses()
                },
                onLeaveBack: () => {
                    clearHeaderClasses()
                },
                // markers: true
            }
        });
    });

    servicesElems.forEach(elem => {
        gsap.to(elem, {
            ease: "none",
            scrollTrigger: {
                trigger: elem,
                start: 'top-=10px top',
                end: 'bottom-=10px top',
                onEnter: () => {
                    console.log('onEnter');
                    clearActiveMenuItemServices();
                    // console.log('onEnter');
                    document.querySelector('#services-menu a[href="#' + elem.id + '"]').parentElement.classList.add('active');
                },
                onEnterBack: () => {
                    console.log('onEnterBack');
                    clearActiveMenuItemServices();
                    // console.log('onEnter');
                    document.querySelector('#services-menu a[href="#' + elem.id + '"]').parentElement.classList.add('active');
                },
                onLeave: () => {
                    clearActiveMenuItemServices();
                    console.log('onLeave');
                },
                onLeaveBack: () => {
                    clearActiveMenuItemServices();
                    console.log('onLeaveBack');
                },
                // markers: true
            },
        });
    });

    Array.from(document.querySelectorAll('.change-color-services')).forEach(section => {

        gsap.to(section, {
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: 'top-=50px top',
                end: 'bottom-=50px top',
                onEnter: () => {
                    if(section.hasAttribute('data-color-services')){
                        servicesIner.style.backgroundColor = '#505050';
                        const attr = section.getAttribute('data-color-services');
                        servicesIner.style.backgroundColor = attr;
                    }
                    if(section.hasAttribute('data-color-services-menu')){
                        clearServicesClasses();
                        const attr = section.getAttribute('data-color-services-menu');
                        servicesIner.classList.add(attr);
                    }
                },
                onEnterBack: () => {
                    if(section.hasAttribute('data-color-services')){
                        servicesIner.style.backgroundColor = '#505050';
                        const attr = section.getAttribute('data-color-services');
                        servicesIner.style.backgroundColor = attr;
                    }
                    if(section.hasAttribute('data-color-services-menu')){
                        clearServicesClasses();
                        const attr = section.getAttribute('data-color-services-menu');
                        servicesIner.classList.add(attr);
                    }
                },
                onLeave: () => {
                    servicesIner.style.backgroundColor = '#505050';
                    clearServicesClasses();
                },
                onLeaveBack: () => {
                    servicesIner.style.backgroundColor = '#505050';
                    clearServicesClasses();
                },
                // markers: true
            }
        });
    });

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