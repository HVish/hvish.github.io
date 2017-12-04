/* PAGE STRUCTURE */

/* Ascensor Settings */
var ascensor = jQuery('#ascensorBuilding').ascensor({
    time: 1000,
    childType: 'section',
    swipeNavigation: false,
    easing: 'easeInOutQuint',
    loop: false,
    direction: 'y',
    keyNavigation: false
});
var ascensorInstance = jQuery('#ascensorBuilding').data('ascensor');

/* Add class to the active menu item */
jQuery(".links-to-floor-li:eq(" + ascensor.data("current-floor") + ")").addClass("cv-active");

/* Menu click event */
jQuery('body').find('.links-to-floor-li').on("click", function (e) {
    "use strict";
    e.preventDefault();
    /* Get the id of the floor */
    var floornumber = jQuery(this).data('id');
    /* Remove class from all menu items */
    jQuery('body').find('.links-to-floor-li').removeClass("cv-active");
    /* Add class to the active menu item */
    jQuery(this).addClass("cv-active");
    /* Scroll the page */
    window.location.hash = jQuery(this).data('slug');
    jQuery("#cv-left-slider").gotoSlide(floornumber);
    ascensorInstance.scrollToFloor(floornumber - 1);
    /* Footer animation */
    if (floornumber === 1) {
        jQuery("#footer").animate({
            bottom: '-100%'
        }, 1000);
    } else {
        jQuery("#footer").animate({
            bottom: 0
        }, 1000);
    }
});

/* GO TO FLOOR LINK */

jQuery('body').find('.go-to-floor').on("click", function (e) {
    "use strict";
    e.preventDefault();
    /* Get the id of the floor */
    var floornumber = jQuery(this).data('id');
    /* Remove class from all menu items */
    jQuery('body').find('.links-to-floor-li').removeClass("cv-active");
    /* Add class to the active menu item */
    jQuery('.links-to-floor-li[data-id="' + floornumber + '"]').addClass('cv-active');
    /* Scroll the page */
    window.location.hash = jQuery(this).data('slug');
    jQuery("#cv-left-slider").gotoSlide(floornumber);
    ascensorInstance.scrollToFloor(floornumber - 1);
    /* Footer animation */
    if (floornumber === 1) {
        jQuery("#footer").animate({
            bottom: '-100%'
        }, 1000);
    } else {
        jQuery("#footer").animate({
            bottom: 0
        }, 1000);
    }
});

/* WINDOW LOAD EVENTS */

jQuery(window).on('load', function () {
    "use strict";
    var hash = window.location.hash.substr(1);
    if (window.location.hash) {
        /* Get the active page information from the page link and add/remove required classes */
        var smenu = jQuery(".links-to-floor-li").filter('[data-slug="' + hash + '"]');
        jQuery('body').find('.links-to-floor-li').removeClass("cv-active");
        smenu.addClass("cv-active");
        /* Scroll the page */
        var floornumber = jQuery(".cv-active").data('id');
        ascensorInstance.scrollToFloor(floornumber - 1);
        jQuery("#cv-left-slider").gotoSlide(floornumber);
        /* Footer Animation */
        if (floornumber === 1) {
            jQuery("#footer").animate({
                bottom: '-100%'
            }, 1000);
        } else {
            jQuery("#footer").animate({
                bottom: 0
            }, 1000);
        }
        /* Hide loading icon */
        setTimeout(function () {
            jQuery("body").find('#site-loading').fadeOut(500);
            jQuery("body").find('#site-loading-css').fadeOut(500);
        }, 1000);
    } else {
        /* Hide loading icon */
        setTimeout(function () {
            jQuery("body").find('#site-loading').fadeOut(500);
            jQuery("body").find('#site-loading-css').fadeOut(500);
        }, 1000);
    }
    /* HOMEPAGE TEXT ANIMATION */
    setTimeout(function () {
        jQuery('#home-slide-title span').fadeIn().removeClass('animated slideOutDown').addClass('animated slideInUp');
        jQuery('#home-title h1').fadeIn().removeClass('animated slideOutUp').addClass('animated slideInDown');
        jQuery('#home-title .cv-logo').fadeIn().removeClass('animated slideOutUp').addClass('animated slideInDown');
        jQuery('#home-title p').fadeIn().removeClass('animated slideOutLeft').addClass('animated slideInLeft');
        jQuery('#cv-home-social-bar-container').fadeIn().removeClass('animated slideOutDown').addClass('animated slideInUp');
    }, 1000);
});

/* ICON EFFECT */

jQuery('body').find(".cv-icon-container").on({
    mouseenter: function () {
        "use strict";
        jQuery(this).addClass('animated rubberBand');
    },
    mouseleave: function () {
        "use strict";
        jQuery(this).removeClass('animated rubberBand');
    }
});

/* BACK TO TOP */

jQuery("#cv-back-to-top").on('click', function (event) {
    "use strict";
    event.preventDefault();
    jQuery("body").find('.floor').animate({
        scrollTop: 0
    }, 500);
});

/* OTHER EVENTS */

jQuery(document).ready(function () {
    "use strict";   
    /* SKILLS */
    jQuery("body").find('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').width(jQuery(this).data('percent'));
    });
    
    /* LEFT SLIDER */
    jQuery("#cv-left-slider").nerveSlider({
        /* Image Slider Settings */
        sliderAutoPlay: false,
        sliderWidth: "100%",
        sliderHeight: "100%",
        slideTransitionEasing: 'easeInOutQuint',
        slideTransitionDelay: 0,
        slideTransitionSpeed: 1000,
        sliderResizable: true,
        sliderKeepAspectRatio: false,
        slideTransitionDirection: "down",
        allowKeyboardEvents: false,
        slidesDraggable: false,
        showDots: false,
        showTimer: false,
        showArrows: false,
        showPause: false,
        /* Homepage Text Animations */
        slideTransitionStart: function () {
            jQuery('#home-slide-title span').fadeOut(500).removeClass('animated slideInUp').addClass('animated slideOutDown');
            jQuery('#home-title h1').fadeOut(500).removeClass('animated slideInDown').addClass('animated slideOutUp');
            jQuery('#home-title p').fadeOut(500).removeClass('animated slideInLeft').addClass('animated slideOutLeft');
            jQuery('#home-title .cv-logo').fadeOut(500).removeClass('animated slideInDown').addClass('animated slideOutUp');
            jQuery('#cv-home-social-bar-container').fadeOut(500).removeClass('animated slideInUp').addClass('animated slideOutDown');
        },
        slideTransitionComplete: function () {
            jQuery('#home-slide-title span').fadeIn().removeClass('animated slideOutDown').addClass('animated slideInUp');
            jQuery('#home-title h1').fadeIn().removeClass('animated slideOutUp').addClass('animated slideInDown');
            jQuery('#home-title .cv-logo').fadeIn().removeClass('animated slideOutUp').addClass('animated slideInDown');
            jQuery('#home-title p').fadeIn().removeClass('animated slideOutLeft').addClass('animated slideInLeft');
            jQuery('#cv-home-social-bar-container').fadeIn().removeClass('animated slideOutDown').addClass('animated slideInUp');
        }
        /* Homepage Text Animations END */
    });
});