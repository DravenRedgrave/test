$(document).ready(function() {
  $('.spoiler-title').click(function(event) {
    if($('.spoiler').hasClass('one')){
      $('.spoiler-title').not($(this)).removeClass('active');
      $('.spoiler-text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});
var scroll = new SmoothScroll('a[href*="#"]',{
  speed: 800,
	speedAsDuration: true,
  behavior:'smooth'
});
