/* Based on the cycle lab done in class */

$(document).ready(function() {

  $('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slide: 'article',
    cssEase: 'linear',
    adaptiveHeight: true
  });

});