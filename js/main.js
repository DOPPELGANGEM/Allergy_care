'use strict'

// slick pc
$('.product_info_pricelist').slick({
  infinite: true,
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [ 
  {  
    breakpoint: 1440, 
    settings: {
      arrows: false,
      } 
    },
  ]
});

//slick mo
$('.product_info_pricelist_mo').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
});

// floating menu
$(window).on('scroll', function (){
  if($(window).scrollTop() > 200) {
		$('body').addClass('scroll');
	} else {
		$('body').removeClass('scroll');
	}
});
$(window).trigger('scroll');

$('.floating_btn').on('click',function (){
	$('html,body').animate({scrollTop:0},1000);
})






