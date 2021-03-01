// function scrollWin() {
//     var x = document.getElementById("slider-scroll")
//     x.scrollTo(500,0);
//   }

$("#leftslide").click(function () { 
  var leftPos = $(".general").scrollLeft();
  $("#slider-scroll").animate({scrollLeft: leftPos- 550}, 800);
});

$("#.general").click(function () { 
  var leftPos = $(".general").scrollLeft();
  $("#slider-scroll").animate({scrollLeft: leftPos+ 550}, 800);
});