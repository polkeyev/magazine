$(document).ready(function () {
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

    $('.product-card__slider-body').slick({
        arrows: true,
        dots: false,
        adaptiveHeigh: false,
        slidesToShow: 4,
        slidesToScrool: 4,
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

    $('.stock-product__slider-body').slick({
        arrows: true,
        dots: false,
        adaptiveHeigh: false,
        slidesToShow: 4,
        slidesToScrool: 4,
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


    let lm = document.querySelector('.img1')
    $('.product-card__slider-body, .stock-product__slider-body').mouseover(function (event) {
        if (event.target.className == 'img1') {
            lm = event.target
            lm.parentNode.parentNode.style.borderColor = '#ff9c00';
            let a = lm.parentNode.parentNode.querySelector('.bucket')
            console.log(a)
        } else {
            lm.parentNode.parentNode.style.borderColor = 'rgb(0%, 0%, 0%, 0)';
        }
    })

});

