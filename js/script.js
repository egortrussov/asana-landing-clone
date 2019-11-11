$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items:2,
        loop:true,
        center:true,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });

    let isMenuShown = false;

    window.addEventListener('scroll', (e) => {
        if (window.pageYOffset >= window.innerHeight && !isMenuShown) {
            let menu = document.querySelector('#header');
            menu.classList.add('fixed');
            isMenuShown = true;
        } else if (window.pageYOffset < window.innerHeight && isMenuShown) {
            let menu = document.querySelector('#header');
            menu.classList.remove('fixed');
            isMenuShown = false;
        }
    })

})
