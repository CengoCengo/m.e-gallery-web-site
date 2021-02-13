function navMenu(){
  var x = document.getElementById("myLinks");
  var y = document.getElementById("name")
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "inline"
  } else {
    x.style.display = "block";
  }
  }
  