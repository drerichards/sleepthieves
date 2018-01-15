const scrollToSection = () => {
    $('.nav-item a, .hvr-sink').click((e) => {
        e.preventDefault()
        let sectionID = e.currentTarget.id + "Section"
        $('.nav li:nth-child(1)').removeClass('active')
        $('.nav li:nth-child(2)').removeClass('active')
        $('.nav-item a').removeClass('active')
        $(e.target).addClass('active')
        $('.hvr-sink i').removeClass('active')
        if (sectionID == 'aboutArrowSection') {
            sectionID = 'aboutSection'
        }
        if (sectionID == 'aboutSection') {
            $('.hvr-sink i').removeClass('active')
            $('.nav li:nth-child(2)').addClass('active')
        }

        $('html, body').animate({
            scrollTop: $(`#${sectionID}`).offset().top - 60
        }, 1000)
    })
}

const branding = [
    ["img/portfolio/ajuma.jpg", "South African Fashion Week"],
    ["img/portfolio/vintage.jpg", "Pusherman"],
    ["img/portfolio/hard.jpg", "Cine Studio"],
    ["img/portfolio/click.jpg", "One Click Away"]
],
    webDesign = [
        ["img/portfolio/power.jpg", "No One Man"],
        ["img/portfolio/snob.jpg", "High Snobiety"],
        ["img/portfolio/gall.jpg", "Lemon Neopolitan"],
        ["img/portfolio/music.jpg", "Journey Into Sound"]
    ],
    socMedia = [
        ["img/portfolio/maxi.jpg", "Speed of Sound"],
        ["img/portfolio/board.jpg", "Board Walk"],
        ["img/portfolio/range.jpg", "Range Drop, Drop Top"],
        ["img/portfolio/chloe.jpg", "Saint & Sinner"]
    ],
    campaign = [
        ["img/portfolio/shades.jpg", "Vector Post Portwear"],
        ["img/portfolio/pink.jpg", "The Audio Rendezvous"],
        ["img/portfolio/smoke.jpg", "Birds of Paradise"],
        ["img/portfolio/washed.jpg", "With and Without"]
    ]
const showFolioPics = tabClicked => {
    let boxNum = 1
    for (let i = 0; i < 4; i++) {
        $('.portfolio-grid > div:nth-child(' + boxNum + ') > ul > li').css('background-image', 'url(' + (tabClicked)[i][0] + ')').css('transition', 'all 0.6s')
        $('.portfolio-grid > div:nth-child(' + boxNum + ') > ul > li > div > div.caption-text > h1').html((tabClicked)[i][1])
        boxNum++
    }
}
const changeFolioPics = () => {

    showFolioPics(branding)
    $('#branding').click((e) => {
        e.preventDefault()
        $('#branding').hasClass('hvr-active') ? $('#branding').removeClass('hvr-active') : 
        $('.button').removeClass('hvr-active')
        $('#branding').addClass('hvr-active')
        showFolioPics(branding)
    })
    $('#webDesign').click((e) => {
        $('.button').removeClass('hvr-active')
        $('#webDesign').addClass('hvr-active')
        e.preventDefault()
        showFolioPics(webDesign)
    })
    $('#socMedia').click((e) => {
        e.preventDefault()
        $('.button').removeClass('hvr-active')
        $('#socMedia').addClass('hvr-active')
        showFolioPics(socMedia)
    })
    $('#campaign').click((e) => {
        e.preventDefault()
        $('.button').removeClass('hvr-active')
        $('#campaign').addClass('hvr-active')
        showFolioPics(campaign)
    })
}
const waveCounter = () => {
    $('.count').each(() => {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
                duration: 6500,
                easing: 'swing',
                step: (now) => {
                    $(this).text(Math.ceil(now))
                }
            })
    })
}
const clientQuote = () => {
    $('.zooey span').mouseover((e) => {
        e.preventDefault()
        $('.clientQuote').html('\"Lorem ipsum dolor sit amet, consectetur adipisicing elit!\"')
    })
    $('.power span').mouseover((e) => {
        e.preventDefault()
        $('.clientQuote').html('\"Fusce hendrerit tristique ante, eget sagittis magna commodo ut!\"')
    })
    $('.jackie span').mouseover((e) => {
        e.preventDefault()
        $('.clientQuote').html('\"Vestibulum pharetra amet porta tincidunt. Donec dictum lorem sit!\"')
    })
    $('.ava span').mouseover((e) => {
        e.preventDefault()
        $('.clientQuote').html('\"Fusce cursus molestie risus eu finibus. Quisque dictum tellus!\"')
    })
}

{
    scrollToSection()
    changeFolioPics()
    waveCounter()
    clientQuote()
}
