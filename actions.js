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
    ["https://res.cloudinary.com/andrerichards/image/upload/v1516451391/sleep/ajuma.jpg", "South African Fashion Week"],
    ["https://res.cloudinary.com/andrerichards/image/upload/v1516451391/sleep/vintage.jpg", "Pusherman"],
    ["https://res.cloudinary.com/andrerichards/image/upload/v1516451391/sleep/hard.jpg", "Cine Studio"],
    ["https://res.cloudinary.com/andrerichards/image/upload/v1516451391/sleep/click.jpg", "One Click Away"]
],
    webDesign = [
        ["https://res.cloudinary.com/andrerichards/image/upload/v1516451391/sleep/power.jpg", "No One Man"],
        ["https://res.cloudinary.com/andrerichards/image/upload/v1516451391/sleep/snob.jpg", "High Snobiety"],
        ["https://res.cloudinary.com/andrerichards/image/upload/v1516451391/sleep/gall.jpg", "Lemon Neopolitan"],
        ["https://res.cloudinary.com/andrerichards/image/upload/v1516451391/sleep/music.jpg", "Journey Into Sound"]
    ],
    socMedia = [
        ["https://res.cloudinary.com/andrerichards/image/upload/v1516451391/sleep/maxi.jpg", "Speed of Sound"],
        ["https://res.cloudinary.com/andrerichards/image/upload/v1516451391/sleep/board.jpg", "Board Walk"],
        ["https://res.cloudinary.com/andrerichards/image/upload/v1516451391/sleep/range.jpg", "Range Drop, Drop Top"],
        ["https://res.cloudinary.com/andrerichards/image/upload/v1516451391/sleep/chloe.jpg", "Saint & Sinner"]
    ],
    campaign = [
        ["https://res.cloudinary.com/andrerichards/image/upload/v1516451391/sleep/shades.jpg", "Vector Post Portwear"],
        ["https://res.cloudinary.com/andrerichards/image/upload/v1516451391/sleep/pink.jpg", "The Audio Rendezvous"],
        ["https://res.cloudinary.com/andrerichards/image/upload/v1516451391/sleep/smoke.jpg", "Birds of Paradise"],
        ["https://res.cloudinary.com/andrerichards/image/upload/v1516451391/sleep/washed.jpg", "With and Without"]
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

const collapseActiveBox = () => {
    $('.collapse').on('click', () => {
        $('.collapse').removeClass('active')
    })
}

const showPressText = () => {
    $('#strip').on('mouseover', () => {
        $('#strip-ad .text-box').stop().fadeIn(300)
        $('#paint-ad .text-box').stop().css('display', 'none')
    })
    $('#strip').on('mouseout', () => {
        $('#strip-ad .text-box').stop().fadeOut(300)
        $('#paint-ad .text-box').stop().fadeIn(300)
    })
    $('#type').on('mouseover', () => {
        $('#type-ad .text-box').stop().fadeIn(300)
        $('#paint-ad .text-box').css('display', 'none')
    })
    $('#type').on('mouseout', () => {
        $('#type-ad .text-box').stop().fadeOut(300)
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
    collapseActiveBox()
    $('.collapse').on('click', function (e) {
        e.preventDefault()
        let delta = 0
        $(this).toggleClass('active')
    })
    googleMapDisplay()
}
