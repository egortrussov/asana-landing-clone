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

    $(".item").on("click", function() {
        $(".hint").css("display", "none");
    })
})
