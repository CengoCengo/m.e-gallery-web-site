$('#leftslide').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy(1,0); // May need to be -1 to go down
    },10); // Play around with this number. May go too fast

    return false;
});

$(document).mouseup(function(){
    clearInterval(timeout);
    return false;
});