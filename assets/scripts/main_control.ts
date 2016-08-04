const events = () => {
    let menuIsOpen: boolean = false
    let wScroll: number = 0
    let completeHR: boolean = false
    let completeSCREEN: boolean = false
    let completeROCKET: boolean = false

    $('a[href*="#"]:not([href="#"])').click(smoothScroll)

    $(window).scroll(() => {
        let wScroll: number = $(this).scrollTop()
        let screenTRIGGER: number = 900
        let width: number = $(window).width()

        if (width > 920)
            screenTRIGGER = 700

        if (wScroll > 100 && completeHR === false) {
            $('.growable_line').fadeTo('fast', 1)
            $('.growable_line').animate({
                'width': '+=100px'
            }, 2000)


            completeHR = true
        }

        if (wScroll > screenTRIGGER && completeSCREEN === false) {
            $('.contain_img img:nth-child(1)').fadeTo(1000, 1)
            $('.contain_img img:nth-child(2)').fadeTo(2000, 1)
            $('.contain_img img:nth-child(3)').fadeTo(3000, 1)
            $('.contain_img img:nth-child(4)').fadeTo(3500, 1)

            completeSCREEN = true
        }

        if (wScroll > 600 && completeROCKET === false) {
            $('.space .rocket:nth-child(2)').animate({
                'top': '-=40px',
                'left': '+=60px'
            }, 1500)

            $('.space .rocket:nth-child(3)').animate({
                'bottom': '+=60px',
                'right': '-=40px'
            }, 1500)

            completeROCKET = true
        }

        $('.gear').css({
            'transition': 'transform 1s ease-out',
            '-webkit-transform': 'rotate(' + Math.round(wScroll / 2.5) + 'deg)',
            '-moz-transform': 'rotate(' + Math.round(wScroll / 2.5) + 'deg)',
            '-ms-transform': 'rotate(' + Math.round(wScroll / 2.5) + 'deg)',
            'transform': 'rotate(' + Math.round(wScroll / 2.5) + 'deg)',
        })
    })

    $('.main_nav .menu_open').click(() => {
        menuIsOpen = menuIsOpen === false ? manageMenuState(menuIsOpen) : manageMenuState(menuIsOpen)
    })

    $(window).resize(() => {
        if ($(window).width() > 920 && menuIsOpen) {
            manageMenuState(true)
            menuIsOpen = false
        }
    })

    $('section').click(() => {
        menuIsOpen = manageMenuState(menuIsOpen)
    })
}

const manageMenuState = (menuIsOpen: boolean): boolean => {
    if (menuIsOpen === false) {
        $(".main_nav").animate({
            'margin-top': '+=210px'
        }, 400)
        $(".slide_in").animate({
            'margin-top': '+=245px'
        }, 400)

        return true
    } else if (menuIsOpen === true) {
        $(".main_nav").animate({
            'margin-top': '-=210px'
        }, 400)
        $(".slide_in").animate({
            'margin-top': '-=245px'
        }, 400)

        return false
    }
}

const smoothScroll = function(): boolean {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        let target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000)
            return false
        }
    }
}

const animateMenu = () => {
    $(".main_nav .menu_open .line_top").animate({
        'width': '+=30px'
    }, 800)
    $(".main_nav .menu_open .line_middle").animate({
        'width': '+=30px'
    }, 600)
    $(".main_nav .menu_open .line_bottom").animate({
        'width': '+=30px'
    }, 1200)
}

const returnToTop = () => {
    if ($(document).scrollTop() > 0)
        window.scrollTo(0, 0)
}

const animateHeaderDecortation = () => {
    $('.header_container hr').animate({
        'width': '+=100%'
    }, 2000)
}

const pulseCells = () => {
    let imageID: number = 0

    setInterval(() => {
        imageID++

        if (imageID === 1) {
            $('.swappable:nth-child(2)').fadeTo(2000, 1)
            $('.swappable:nth-child(3)').fadeTo(2000, 0)
        } else if (imageID === 2) {
            $('.swappable:nth-child(3)').fadeTo(2000, 1)
            $('.swappable:nth-child(2)').fadeTo(2000, 0)
            imageID = 0
        }
    }, 5000)
}

const pulseNode = () => {
    let width: number = $(window).width()
    let nodeID: number = 0

    setInterval(() => {
        if (width > 410) {
            nodeID++
            if (nodeID === 1) {
                $('.nodes_left:nth-child(4)').fadeTo('fast', 1)
                $('.nodes_right:nth-child(7)').fadeTo('fast', 1)
                $('.nodes_left:nth-child(6)').fadeTo('fast', 0)
                $('.nodes_right:nth-child(9)').fadeTo('fast', 0)
            } else if (nodeID === 2) {
                $('.nodes_left:nth-child(5)').fadeTo('fast', 1)
                $('.nodes_right:nth-child(8)').fadeTo('fast', 1)
                $('.nodes_left:nth-child(4)').fadeTo('fast', 0)
                $('.nodes_right:nth-child(7)').fadeTo('fast', 0)
            } else {
                $('.nodes_left:nth-child(6)').fadeTo('fast', 1)
                $('.nodes_right:nth-child(9)').fadeTo('fast', 1)
                $('.nodes_left:nth-child(5)').fadeTo('fast', 0)
                $('.nodes_right:nth-child(8)').fadeTo('fast', 0)
                nodeID = 0
            }
        }
    }, 2000)
}

$(document).ready(() => {
    returnToTop()
    animateHeaderDecortation()
    pulseNode()
    pulseCells()
    animateMenu()
    events()
})
