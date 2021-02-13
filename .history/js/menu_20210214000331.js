function navMenu(){
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  var y = document.getElementById("name")

    if(x.style.display==="inline"){
      y.style.display = "none";
    }else{
      y.style.display = "inline"
    }

  }
  