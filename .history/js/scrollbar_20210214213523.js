// function scrollWin() {
//     var x = document.getElementById("slider-scroll")
//     x.scrollTo(500,0);
//   }

$("#leftslide").click(function () { 
  var leftPos = $("#slider-scroll");
  $("#slider-scroll").animate({scrollLeft: leftPos- 250}, 800);
});