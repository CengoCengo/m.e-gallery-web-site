// function scrollWin() {
//     var x = document.getElementById("slider-scroll")
//     x.scrollTo(500,0);
//   }

$("#leftslide").click(function () { 
  var leftPos = $(window).scrollLeft();
  $(window).animate({scrollLeft: leftPos- 550}, 800);
});

$("#rightslide").click(function () { 
  var leftPos = $(window).scrollLeft();
  $(window).animate({scrollLeft: leftPos+ 550}, 800);
});