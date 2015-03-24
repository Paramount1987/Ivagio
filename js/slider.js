$(document).ready(function(){


var sliderTovar =  $('.slider-tovar-page').bxSlider({
  	mode: 'vertical',
  	controls: false,
  	pagerCustom: '.tovar-pager-left',
    easing: 'linear',
    onSliderLoad: function(currentIndex) {  
     var dataImage = $('.slider-tovar-wrap').find('.bx-viewport').find('.slider-tovar-page').children().eq(currentIndex + 1).find("img").attr("data-zoom-image");
      $('.slider-tovar-wrap-page').find('.bx-viewport').addClass("zoom");
      $('.slider-tovar-wrap-page').find('.bx-viewport').attr("data-zoom-image", dataImage);
      
      $(".zoom").elevateZoom({zoomWindowWidth: 560, zoomWindowHeight: 511});
    },
    onSlideBefore: function($slideElement){
      
      var currentimage = $slideElement.find("img").attr("data-zoom-image");
      $('.slider-tovar-wrap').find('.bx-viewport').attr("data-zoom-image", currentimage);
      $('.zoomWindowContainer div').css("background-image", "url(" + currentimage + ")");
    }
  });



var sliderTovarModal =  $('.slider-tovar-modal').bxSlider({
    mode: 'vertical',
    controls: false,
    pagerCustom: '.tovar-pager-modal',
    easing: 'linear',
    startSlide: 2,
        onSliderLoad: function(currentIndex) {  
     var dataImage = $('.slider-tovar-wrap').find('.bx-viewport').find('.slider-tovar-modal').children().eq(currentIndex + 1).find("img").attr("data-zoom-image");
      $('.slider-tovar-wrap-modal').find('.bx-viewport').addClass("zoom-modal");
      $('.slider-tovar-wrap-modal').find('.bx-viewport').attr("data-zoom-image", dataImage);
      
      $(".zoom-modal").elevateZoom({zoomWindowWidth: 430, zoomWindowHeight: 416});
    },
    onSlideBefore: function($slideElement){
      
      var currentimage = $slideElement.find("img").attr("data-zoom-image");
      $('.slider-tovar-wrap-modal').find('.bx-viewport').attr("data-zoom-image", currentimage);
      $('.zoomWindowContainer div').css("background-image", "url(" + currentimage + ")");
    }
  });

var sliderTovarModal2 =  $('.slider-tovar-modal2').bxSlider({
    mode: 'vertical',
    controls: false,
    pagerCustom: '.tovar-pager-modal2',
    easing: 'linear',
    startSlide: 2
  });

$('.next-slider-pager').click(function(){

	sliderTovar.goToNextSlide();

});


$('.next-slider-modal').click(function(){

  sliderTovarModal.goToNextSlide();

});

$('.next-slider-modal2').click(function(){

  sliderTovarModal2.goToNextSlide();

});

$('.prev-slider-pager').click(function(){

	sliderTovar.goToPrevSlide();

});

$('.prev-slider-modal').click(function(){

  sliderTovarModal.goToPrevSlide();

});

$('.prev-slider-modal2').click(function(){

  sliderTovarModal2.goToPrevSlide();

});



var generalSlider = $('.general-slider').bxSlider({
  minSlides: 3,
  maxSlides: 3,
  slideWidth: 220,
  slideMargin: 15,
  maxWidth: "100%"
});

var generalSlider2 = $('.general-slider-2').bxSlider({
mode: "fade"
});




  $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 24500,
      values: [ 775, 12300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ] + "P" );
        $( "#amount-max" ).val( ui.values[ 1 ] + "P");
      }
    });

    $( "#amount" ).val(  $( "#slider-range" ).slider( "values", 0 ) + " P ");

    $( "#amount-max" ).val( $( "#slider-range" ).slider( "values", 1 ) + " P");
 
/////////////////////////////////////////////////
});