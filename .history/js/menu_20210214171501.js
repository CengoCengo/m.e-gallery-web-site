function navMenu(){
  var x = document.getElementById("myLinks");
  var y = document.getElementById("name")
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block"
  } else {
    x.style.display = "block";
    y.style.display = "none"
  }
  }

  function scrollWin() {
      
    document.getElementsByTagName("h1").style.color = "red";
  }
  