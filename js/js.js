//SLAIDER
$('.sl').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear'
});
//SLAIDER_REFERENCES
$('.sl-ref').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1190,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// //DROPDOWN-HOVER
// $('ul.nav li.dropdown').hover(function() {
//     $(this).find('#m1').stop(true, true).delay(200).fadeIn(500);
// }, function() {
//     $(this).find('#m1').stop(true, true).delay(200).fadeOut(500);
// });
// //DROPDOWN_menu
// $(document).ready(function(){
//     $('.dropdown-submenu a.test').hover(function() {
//         $(this).next('ul').toggle();
//         e.stopPropagation();
//         e.preventDefault();
//     });
// });
// //DROPDOWN_menu
// $(document).ready(function(){
//     $('.dropdown-submenu a.test').on("click", function(e){
//         $(this).next('ul').toggle();
//         e.stopPropagation();
//         e.preventDefault();
//     });
// });
