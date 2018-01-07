$(document).ready(function() {
    new WOW().init();
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $(".team-members").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        smartSpeed: 300,
        autoplayHoverPause: true
    });
    $("#customers-testimonials").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 300,
        autoplayHoverPause: true
    });
    $("#clients-list").owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        smartSpeed: 300,
        autoplayHoverPause: true
    });
    $('.counter').counterUp({
        delay: 10,
        time: 2500
    });

});