// function scrollWin() {
//     var x = document.getElementById("slider-scroll")
//     x.scrollTo(500,0);
//   }

$("#leftslide").click(function () { 
  var leftPos = $('html,body').scrollLeft();
  $('html,body').animate({scrollLeft: leftPos- 550}, 800);
});

$("#rightslide").click(function () { 
  var leftPos = $('html,body').scrollLeft();
  $('html,body').animate({scrollLeft: leftPos+ 550}, 800);
});