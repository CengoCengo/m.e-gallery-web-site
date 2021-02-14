$("#leftslide").click(function(){
    var currentElement = currentElement.leftslide();
    $('html, body').animate({scrollLeft: $(currentElement).offset().left}, 800);
    return false;
 }); 