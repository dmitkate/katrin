var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('.toTop').fadeIn();
 
} else {
 
$('.toTop').fadeOut();

}
 
});
 
$('.toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});

$(function () {
  //script for popups
  $('a.show_popup').click(function () {
    $('div.'+$(this).attr("rel")).fadeIn(500);
    $("body").append("<div id='overlay'></div>");
    $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
    return false;       
  }); 
  $('a.closed').click(function () {
    $(this).parent().fadeOut(100);
    $('#overlay').remove('#overlay');
    return false;
  });
  
  //script for tabs
  $("div.selectTabs").each(function () {
    var tmp = $(this);
    $(tmp).find(".lineTabs li").each(function (i) {
      $(tmp).find(".lineTabs li:eq("+i+") a").click(function(){
        var tab_id=i+1;
        $(tmp).find(".lineTabs li").removeClass("active");
        $(this).parent().addClass("active");
        $(tmp).find(".tab_content div").stop(false,false).hide();
        $(tmp).find(".tab"+tab_id).stop(false,false).fadeIn(300);
        return false;
      });
    });
  });
});