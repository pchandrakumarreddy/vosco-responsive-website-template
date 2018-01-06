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


});