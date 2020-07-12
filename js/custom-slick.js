
$(document).ready(() => {
    $('.what-clients-say__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.what-clients-say__client-list'
    });

    $('.what-clients-say__client-list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        asNavFor: '.what-clients-say__carousel',
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 100,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    })
});

