// function scrollWin() {
//     var x = document.getElementById("slider-scroll")
//     x.scrollTo(500,0);
//   }

$("#leftslide").click(function () { 
  var leftPos = $("#slider-scroll").scrollLeft;
  $("#slider-scroll").animate({scrollLeft: leftPos- 250}, 800);
});

$("#rightslide").click(function () { 
  var leftPos = $("#slider-scroll").scrollLeft;
  $("#slider-scroll").animate({scrollLeft: leftPos+ 250}, 800);
});