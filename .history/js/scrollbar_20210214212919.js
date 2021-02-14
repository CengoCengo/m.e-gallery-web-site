// function scrollWin() {
//     var x = document.getElementById("slider-scroll")
//     x.scrollTo(500,0);
//   }

$(".leftArrow").click(function () { 
  $(".innerWrapper").animate({scrollLeft: 250}, 800);
});