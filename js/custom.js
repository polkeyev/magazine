$('.sub-menu-slider__body').slick({
    arrows: true,
    dots: true,
    adaptiveHeigh: false,
    slidesToShow: 1,
    slidesToScrool: 1,
    speed: 2000,
    easing: '',/*animation*/
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    waitForAnimate: true,
    centerMode: false,
    variableWidth: false,
    rows: 1,
    slidePerRow: 1,
    vertical: false,
    verticalSwiping: false,
    fade: false,
    /*asNavFor:"nameSlider"подключение еще одного слайдера*/
    responsive: [/*Настройки при адаптиве*/
        {
            breakpoint: 768,
            settings: {
                autoplaySpeed: 4000,
            }
        }
    ],
    mobileFirst: false,
});

$('.product-item__link').mouseover(function () {
    $(".bucket").attr("src", "img/icons/corsina.svg.svg");
});

$('.product-item__link').mouseout(function () {
    $(".bucket").attr("src", "img/icons/corsina.svg");
});