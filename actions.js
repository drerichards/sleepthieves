const scrollToSection = () => {
    $('.navigation-item a').click((e) => {
        e.preventDefault()
        let sectionID = e.currentTarget.id
        sectionID = sectionID + 'Section'
        $('html, body').animate({
            scrollTop: $(`#${sectionID}`).offset().top - 60
        }, 1000)
        $("#navi-toggle").click()
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

const showPressText = () => {
    $('#strip').on('mouseover', () => {
        $('#strip').css('opacity', '1')
        $('#strip-ad .text-box').stop().fadeIn(300)
        $('#paint').css('opacity', '0.5')
        $('#paint-ad .text-box').stop().css('display', 'none')
    })
    $('#strip').on('mouseout', () => {
        $('#strip').css('opacity', '0.5')
        $('#strip-ad .text-box').stop().fadeOut(300)
        $('#paint').css('opacity', '1')
        $('#paint-ad .text-box').stop().fadeIn(300)
    })
    $('#type').on('mouseover', () => {
        $('#type').css('opacity', '1')
        $('#type-ad .text-box').stop().fadeIn(300)
        $('#paint').css('opacity', '0.5')
        $('#paint-ad .text-box').css('display', 'none')
    })
    $('#type').on('mouseout', () => {
        $('#type').css('opacity', '0.5')
        $('#type-ad .text-box').stop().fadeOut(300)
        $('#paint').css('opacity', '1')
        $('#paint-ad .text-box').stop().fadeIn(300)
    })
}

function googleMapDisplay() {
    const mapProp = {
        center: { lat: 40.748069, lng: -73.991499 },
        zoom: 15,
    }
    const map = new google.maps.Map(document.getElementById("googleMap"), mapProp)
    const marker = new google.maps.Marker({ position: mapProp.center, map })
}

{
    showPressText()
    scrollToSection()
    changeFolioPics()

    $('.collapse').on('click', function (e) {
        e.preventDefault()
        let delta = 0
        $(this).toggleClass('active')
    })
    googleMapDisplay()
}
