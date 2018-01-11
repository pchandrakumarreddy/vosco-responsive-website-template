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
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 3
            }
        }
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
        autoplayHoverPause: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 5
            }
        }
    });
    $('.counter').counterUp({
        delay: 10,
        time: 2500
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() < 60) {
            $("nav").removeClass("vesco-nav-inverse");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("vesco-nav-inverse");
            $("#back-to-top").fadeIn();
        }
    });
    $("a.smooth-scroll").click(function(event) {
        event.preventDefault();
        let section = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
    $(".navbar-collapse ul li a").on("click touch", function() {
        $(".navbar-toggle").click();
    })
});