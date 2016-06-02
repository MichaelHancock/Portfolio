$(document).ready(function() {
    //Program entry point. Run once document is ready
    if ($(document).scrollTop() > 0)
        window.scrollTo(0, 0);

    //Move in rockets
    $('.kerbal .rocket:nth-child(1)').animate({
        'top': '-=40px',
        'left': '+=60px'
    }, 1500);
    $('.kerbal .rocket:nth-child(2)').animate({
        'bottom': '+=60px',
        'right': '-=40px'
    }, 1500);

    animateMenu();
    events();
});

function events() {
    //Function variables
    var isOpen = false;
    var atTop = true;
    var completeSITE = false;
    var completeHR = false;
    var buttonCOUNT = 0;

    //Smooth scroll to local a tags
    $('a[href*="#"]:not([href="#"])').click(function() {

        //Close menu if item is clicked
        if (isOpen === true) {
            $(".main_nav").animate({
                'margin-top': '-=210px'
            }, 400);
            $(".slide_in").animate({
                'margin-top': '-=245px'
            }, 400);

            isOpen = false;
        }

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();

        if (($('.web_design').offset().top - $(window).scrollTop()) < wScroll && completeSITE === false) {
            window.setInterval(scrollSite, 1000);
            window.setInterval(showButtons, 500);
            completeSITE = true;

            //Grow hr after scroll begins
            if (completeHR === false) {
                $('.growable_line').fadeTo('fast', 1);
                $('.growable_line').animate({
                    'width': '+=100px'
                }, 2000);

                completeHR = true;
            }
        }
    });

    //Move site image up and down in browser
    function scrollSite() {
        if (atTop === true) {
            $('.site').css({
                "transform": "translate3d(0, -" + ($('.site').prop('scrollHeight') - $('.browser').prop('scrollHeight')) + "px, 0)"
            });

            //Wait for animation to complete before changing variable value
            $('.site').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
                function(e) {
                    atTop = false;
                });
        } else {
            $('.site').css({
                "transform": "translate3d(0, 0, 0)"
            });

            //Wait for animation to complete before changing variable value
            $('.site').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
                function(e) {
                    atTop = true;
                });
        }
    }

    //Fade in browser control buttons
    function showButtons() {
        switch (buttonCOUNT) {
            case 0:
                $('.browser_button:first-child').fadeTo('slow', 1);
                buttonCOUNT++;
                break;
            case 1:
                $('.browser_button:nth-child(2)').fadeTo('slow', 1);
                buttonCOUNT++;
                break;
            default:
                $('.browser_button:nth-child(3)').fadeTo('slow', 1);
                buttonCOUNT++;
                break;
        }
    }

    //Open / Close slide in menu
    $('.menu_open').click(function() {
        if (isOpen === false) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    //Close menu if window is resized
    $(window).resize(function() {
        closeMenu();
    });



    function openMenu() {
        //Open slide in menu
        if (isOpen === false) {
            $(".main_nav").animate({
                'margin-top': '+=210px'
            }, 400);
            $(".slide_in").animate({
                'margin-top': '+=245px'
            }, 400);

            isOpen = true;
        }
    }

    function closeMenu() {
        //Close slide in menu
        if (isOpen === true) {
            $(".main_nav").animate({
                'margin-top': '-=210px'
            }, 400);
            $(".slide_in").animate({
                'margin-top': '-=245px'
            }, 400);

            isOpen = false;
        }
    }
}

function animateMenu() {
    //Grow menu_open divs
    $(".main_nav .menu_open .line_top").animate({
        'width': '+=30px'
    }, 800);
    $(".main_nav .menu_open .line_middle").animate({
        'width': '+=30px'
    }, 600);
    $(".main_nav .menu_open .line_bottom").animate({
        'width': '+=30px'
    }, 1200);
}
