function navMenu(){
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

  var y = document.getElementsByClassName("name")

    if(x.style.display==="none"){
      y.style.display = "inline-block";
    }

  }
  