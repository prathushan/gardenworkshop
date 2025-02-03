document.addEventListener('DOMContentLoaded', function () {
  if($('.custom-gallery img').length > 3){
      $('.custom-gallery').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img loading="lazy" src="//thegardenersworkshop.myshopify.com/cdn/shop/t/5/assets/chevron-left-solid.svg?v=138426214335004772491728381067"></button>',
        nextArrow: '<button type="button" class="slick-next"><img loading="lazy" src="//thegardenersworkshop.myshopify.com/cdn/shop/t/5/assets/chevron-right-solid.svg?v=70223058413901164201728380973"></button>',
      });
    }
   if($('.endo-blk-slider-wrap .slider-item').length > 1){
     var testi = $('.endo-blk-slider-wrap');
      testi.slick({
        dots: true,
        arrows:false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: testi.data('slides'),
        slidesToScroll: 1,
     });
    }
     if($('.slick-thumbs li').length > 4){
     var thumbs = $('.slick-thumbs');
      thumbs.slick({
        dots: false,
        arrows:true,
        speed: 300,
        infinite: false,
         vertical: true,
  verticalSwiping: true,
           prevArrow: '<button type="button" class="slick-prev"><img loading="lazy" src="//thegardenersworkshop.myshopify.com/cdn/shop/t/5/assets/chevron-left-solid.svg?v=138426214335004772491728381067"></button>',
        nextArrow: '<button type="button" class="slick-next"><img loading="lazy" src="//thegardenersworkshop.myshopify.com/cdn/shop/t/5/assets/chevron-right-solid.svg?v=70223058413901164201728380973"></button>',
     
        slidesToShow: 4,
        slidesToScroll: 1
     });
    }
});