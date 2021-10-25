import gsap from 'gsap';
import InputMask from 'inputmask';

window.onload = function() {
    InputMask({"mask": "+7 (999) 999-99-99", showMaskOnHover: false}).mask('input[name="phone"');

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
                        if(servicesIner.contains(section) && window.innerWidth <= 768){
                            header.classList.add('green-menu');
                        }else{
                            const attr = section.getAttribute('data-color-menu');
                            header.classList.add(attr);
                        }
                    }
                },
                onEnterBack: () => {
                    if(section.hasAttribute('data-color-menu')){
                        clearHeaderClasses();
                        if(servicesIner.contains(section) && window.innerWidth <= 768){
                            header.classList.add('green-menu');
                        }else{
                            const attr = section.getAttribute('data-color-menu');
                            header.classList.add(attr);
                        }
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
                    clearActiveMenuItemServices();
                    // console.log('onEnter');
                    document.querySelector('#services-menu a[href="#' + elem.id + '"]').parentElement.classList.add('active');
                },
                onEnterBack: () => {
                    clearActiveMenuItemServices();
                    // console.log('onEnter');
                    document.querySelector('#services-menu a[href="#' + elem.id + '"]').parentElement.classList.add('active');
                },
                onLeave: () => {
                    clearActiveMenuItemServices();
                    // console.log('onLeave');
                },
                onLeaveBack: () => {
                    clearActiveMenuItemServices();
                    // console.log('onLeaveBack');
                },
                // markers: true
            },
        });
    });

    Array.from(menuLinksList).forEach(elem => {
        elem.addEventListener('click', e => {
            showHideMenu();
        })
    });

    function scrollGalary() {
        const screenWidth = window.innerWidth;
        const elem = document.querySelector('.project-line-images');
        const container = document.querySelector('.project-container');
        if(elem && container){
            elem.style.transform = 'translateX(' + ((container.getBoundingClientRect().x - 15) * -1) + 'px)';
            elem.style.width = (screenWidth - 50) + 'px';
        }
    }

    document.addEventListener('resize', scrollGalary());

    scrollGalary();

    let container = document.getElementById("container");

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    let globalCountTree = 246.1;
    let globalCountY = 11030971;
    let globalCountV = 46;

    gsap.from('#count-tree span', {
        textContent: 0,
        duration: 1,
        ease: "power1.in",
        snap: { textContent: 1 },
        scrollTrigger: {
            trigger: '.location-footer',
            start: 'top bottom',
            end: 'bottom top',
            // markers: true
        }
    });

    gsap.from('#count-y', {
        textContent: 0,
        duration: 1,
        ease: "power1.in",
        snap: { textContent: 1 },
        onUpdate: function() {
            this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent))
        },
        scrollTrigger: {
            trigger: '.location-footer',
            start: 'top bottom',
            end: 'bottom top',
        }
    });

    gsap.from('#count-v', {
        textContent: 0,
        duration: 1,
        ease: "power1.in",
        snap: { textContent: 1 },
        scrollTrigger: {
            trigger: '.location-footer',
            start: 'top bottom',
            end: 'bottom top',
        }
    });

    $(document).on('click', '#location-map [fill="#6D9773"]', function(e) {
        $('.location-modal').fadeOut(333);
        const modal = $('.location-modal[data-location="' + $(this).attr('id') + '"]');
        const countTree = modal.data('count-tree');
        const countY = modal.data('count-y');
        const countV = modal.data('count-v');

        $('#count-tree span').text(countTree);
        $('#count-y').text(countY);
        $('#count-v').text(countV);

        gsap.from('#count-tree span', {
            textContent: globalCountTree,
            duration: 1,
            ease: "power1.in",
            snap: { textContent: 1 },
            onComplete: () => globalCountTree = Math.ceil(parseFloat(countTree.replace(',', '.')))
        });

        gsap.from('#count-y', {
            textContent: globalCountY,
            duration: 1,
            ease: "power1.in",
            snap: { textContent: 1 },
            onComplete: () => globalCountY = countY,
            onUpdate: function() {
                this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent))
            }
        });

        gsap.from('#count-v', {
            textContent: globalCountV,
            duration: 1,
            ease: "power1.in",
            snap: { textContent: 1 },
            onComplete: () => globalCountV = countV
        });

        const t = $(this);
        const parent = t.parent().parent();
        const left = window.innerWidth <= 768 ? '50%' : t.offset().left - parent.offset().left;
        const top = window.innerWidth <= 768 ? 0 : t.offset().top - parent.offset().top - modal.height() - 15;
        const transform = window.innerWidth <= 768 ? 'translate(-50%, 0);' : null;
        modal.css({left, top, transform}).fadeIn(333);
    });

    $(document).on('click', '.location-modal button[type="close"]', function(e) {
        $('.location-modal').fadeOut(333);
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

        Array.from(document.querySelectorAll('.change-color-services')).forEach(section => {

            gsap.to(section, {
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: 'top-=50px top',
                    end: 'bottom-=50px top',
                    onEnter: () => {
                        if(section.hasAttribute('data-color-services')){
                            servicesIner.style.backgroundColor = '#f2f2f2';
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
                            servicesIner.style.backgroundColor = '#f2f2f2';
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
                        servicesIner.style.backgroundColor = '#f2f2f2';
                        clearServicesClasses();
                    },
                    onLeaveBack: () => {
                        servicesIner.style.backgroundColor = '#f2f2f2';
                        clearServicesClasses();
                    },
                    // markers: true
                }
            });
        });

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