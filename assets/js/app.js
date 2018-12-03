// The jQuery script that makes the Arrows for quantity work.
// jQuery(document).ready(function($) {



// });

$(document).foundation();

// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items: 1,
//     loop: true,
//     dots: false,
//     nav: false,
//     autoplay: false,
//     autoplayTimeout: 6000,
//     slideSpeed: 3000,
//     // animateOut: 'fadeOut',
//     autoplayHoverPause: true
// });

// $('.owl-next').click(function () {
//     owl.trigger('next.owl.carousel', [1000]);
// })
// // Go to the previous item
// $('.owl-prev').click(function () {
//     // With optional speed parameter
//     // Parameters has to be in square bracket '[]'
//     owl.trigger('prev.owl.carousel', [1000]);
// })




$(".navButton").click(function () {
    $(".responsiveNav").addClass("visibleNav");
    $(".body").addClass("scrollLock");
});


$(".responsiveNavCloseButton").click(function () {
    $(".responsiveNav").removeClass("visibleNav");
    $(".body").removeClass("scrollLock");
});
$(document).keydown(function (e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        $(".responsiveNav").removeClass("visibleNav");
        $(".body").removeClass("scrollLock");
    }
});