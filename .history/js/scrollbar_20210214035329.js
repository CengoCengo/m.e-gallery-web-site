$("#left-slide").click(function(){
    var currentElement = currentElement.left-slide();
    $('html, body').animate({scrollLeft: $(currentElement).offset().left}, 800);
    return false;
 }); 