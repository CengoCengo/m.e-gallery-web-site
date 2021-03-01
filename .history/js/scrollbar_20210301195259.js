// function scrollWin() {
//     var x = document.getElementById("slider-scroll")
//     x.scrollTo(500,0);
//   }

$(window).click(function () { 
  var leftPos = $("#top").scrollLeft();
  $("#top").animate({scrollLeft: leftPos- 550}, 800);
});

$("#top").click(function () { 
  var leftPos = $("#slider-scroll").scrollLeft();
  $("#slider-scroll").animate({scrollLeft: leftPos+ 550}, 800);
});