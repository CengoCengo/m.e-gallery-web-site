$("#next").click(function(){
    var currentElement = currentElement.next();
    $('html, body').animate({scrollLeft: $(currentElement).offset().left}, 800);
    return false;
 }); 