//******VARIABLES******

var logoShift = document.getElementById("logo");
var menuAppear = document.getElementById("menuTexts");
var x = 0;



//******MENU APPEAR******

logoShift.onclick = function () {
  if (x == 0) {   
      menuAppear.style.display = "block";
      logoShift.style.margin = "2em 0em 0.5em 0";
      x = 1;
    }
  
  else {   
      menuAppear.style.display = "none";
      logoShift.style.margin = "2em 0em 3em 0";
      x = 0;
    }
}




//******ANIMATIONS******

logoShift.onmouseout = function () {
  logoShift.style.animation = "spin4 0.3s";
  logoShift.style.animationFillMode = "forwards";
  logoShift.style.animationTimingFunction = "ease";
  logoShift.style.animationIterationCount = "1";
}

logoShift.onmouseover = function () {
  logoShift.style.animation = "spin3 0.5s";
  logoShift.style.animationFillMode = "forwards";
  logoShift.style.animationTimingFunction = "ease";
  logoShift.style.animationIterationCount = "1";
}



