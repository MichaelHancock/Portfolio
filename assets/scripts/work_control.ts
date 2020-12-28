const workEvents = () => {
    let completeSite: boolean = false
    let completeHR: boolean = false

    $(window).scroll(() => {
        let wScroll: number = $(this).scrollTop()

        if (($('.web_design').offset().top - $(window).scrollTop()) < wScroll && completeSite === false) {
            completeSite = true
            scrollSite()
            showButtons()

            if (!completeHR) {
                $('.growable_line').fadeTo('fast', 1)
                $('.growable_line').animate({
                    'width': '+=100px'
                }, 2000)

                completeHR = true
            }
        }
    })
}

const scrollSite = () => {
    const pulse = () => {
        if (atTop) {
            $('.site').css({
                "transform": "translate3d(0, -" + ($('.site').prop('scrollHeight') - $('.browser').prop('scrollHeight')) + "px, 0)"
            })

            $('.site').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () => atTop = false)
        } else {
            $('.site').css({
                "transform": "translate3d(0, 0, 0)"
            })

            $('.site').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () => atTop = true)
        }
    }

    let atTop: boolean = true
    setInterval(pulse, 1000)
}

const showButtons = () => {
    const pulse = () => {
        switch (buttonCount) {
            case 0:
                $('.browser_button:first-child').fadeTo('slow', 1)
                buttonCount++
                break
            case 1:
                $('.browser_button:nth-child(2)').fadeTo('slow', 1)
                buttonCount++
                break
            default:
                $('.browser_button:nth-child(3)').fadeTo('slow', 1)
                clearInterval(interval)
                break
        }
    }

    let buttonCount: number = 0
    const interval = setInterval(pulse, 500)
}

const animateRockets = () => {
    $('.kerbal .rocket:nth-child(2)').animate({
        'top': '-=40px',
        'left': '+=60px'
    }, 1500)
    $('.kerbal .rocket:nth-child(3)').animate({
        'bottom': '+=60px',
        'right': '-=40px'
    }, 1500)
}

$(document).ready(() => {
    animateRockets()
    workEvents()
})
