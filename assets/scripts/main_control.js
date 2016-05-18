$(document).ready(function() {
    //Program entry point. Run once document is ready
    if ($(document).scrollTop() > 0)
        window.scrollTo(0, 0);

    //Grow horizontal rule
    $('.header_container hr').animate({
        'width': '+=100%'
    }, 2000);

    var nodeID = 0;
    var imageID = 0;
    var lineID = 0;
    setInterval(pulseNode, 2000);
    setInterval(pulseCells, 5000);

    //Pulse between nodes_left
    function pulseNode() {
        var width = $(window).width();

        //Only pulse images when nodes are visable
        if (width > 410) {

            nodeID++;

            if (nodeID === 1) {
                $('.nodes_left:nth-child(4)').fadeTo('fast', 1);
                $('.nodes_right:nth-child(7)').fadeTo('fast', 1);
                $('.nodes_left:nth-child(6)').fadeTo('fast', 0);
                $('.nodes_right:nth-child(9)').fadeTo('fast', 0);
            } else if (nodeID === 2) {
                $('.nodes_left:nth-child(5)').fadeTo('fast', 1);
                $('.nodes_right:nth-child(8)').fadeTo('fast', 1);
                $('.nodes_left:nth-child(4)').fadeTo('fast', 0);
                $('.nodes_right:nth-child(7)').fadeTo('fast', 0);
            } else {
                $('.nodes_left:nth-child(6)').fadeTo('fast', 1);
                $('.nodes_right:nth-child(9)').fadeTo('fast', 1);
                $('.nodes_left:nth-child(5)').fadeTo('fast', 0);
                $('.nodes_right:nth-child(8)').fadeTo('fast', 0);
                nodeID = 0;
            }
        }
    }

    function pulseCells() {
        imageID++;

        if (imageID === 1) {
            $('.swappable:nth-child(2)').fadeTo(2000, 1);
            $('.swappable:nth-child(3)').fadeTo(2000, 0);
        } else if (imageID === 2) {
            $('.swappable:nth-child(3)').fadeTo(2000, 1);
            $('.swappable:nth-child(2)').fadeTo(2000, 0);
            imageID = 0;
        }
    }

    function pulseLines() {
        lineID++;

        if (lineID === 0) {
            $('.cross_line:first-child').fadeTo(500, 0.4);
            $('.cross_line:nth-child(2)').fadeTo(500, 1);
        } else if (lineID === 1) {
            $('.cross_line:first-child').fadeTo(500, 1);
            $('.cross_line:nth-child(2)').fadeTo(500, 0.4);
            lineID = 0;
        }
    }

    animateMenu();
    events();
});

function events() {
    //Local variables
    var isOpen = false;
    var wScroll = 0;
    var completeHR = false;
    var completeROCKET = false;

    //Smooth scroll to local a tags
    $(function() {
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

    });

    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        var screenTRIGGER = 900;
        var width = $(window).width();

        if (width > 920)
            screenTRIGGER = 700;

        //Grow hr after scroll begins
        if (wScroll > 100 && completeHR === false) {
            $('.growable_line').fadeTo('fast', 1);
            $('.growable_line').animate({
                'width': '+=100px'
            }, 2000);


            completeHR = true;
        }

        //Fade in screen when trigger scroll height is hit
        if (wScroll > screenTRIGGER && completeSCREEN === false) {
            $('.contain_img img:nth-child(1)').fadeTo(1000, 1);
            $('.contain_img img:nth-child(2)').fadeTo(2000, 1);
            $('.contain_img img:nth-child(3)').fadeTo(3000, 1);
            $('.contain_img img:nth-child(4)').fadeTo(3500, 1);

            completeSCREEN = true;
        }

        //Fly in rockets when trigger height is reached
        if (wScroll > 600 && completeROCKET === false) {
            $('.space .rocket:nth-child(2)').animate({
                'top': '-=40px',
                'left': '+=60px'
            }, 1500);

            $('.space .rocket:nth-child(3)').animate({
                'bottom': '+=60px',
                'right': '-=40px'
            }, 1500);

            completeROCKET = true;
        }

        //Rotate gears in about section
        $('.gear').css({
            'transition': 'transform 1s ease-out',
            '-webkit-transform': 'rotate(' + Math.round(wScroll / 2.5) + 'deg)',
            '-moz-transform': 'rotate(' + Math.round(wScroll / 2.5) + 'deg)',
            '-ms-transform': 'rotate(' + Math.round(wScroll / 2.5) + 'deg)',
            'transform': 'rotate(' + Math.round(wScroll / 2.5) + 'deg)',
        });
    });

    //Open / Close slide in menu
    $('.main_nav .menu_open').click(function() {

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

    //Close menu if anything other than the menu is clicked
    $('section').click(function() {
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
