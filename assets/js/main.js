//******VARIABLES******

var logoShift = document.getElementById("logo");
var menuAppear = document.getElementById("menuTexts");
var x = 0;



//******MENU APPEAR******

  logoShift.onclick = function () {
    if (x == 0) {   
        menuAppear.style.display = "block";
        logoShift.style.margin = "2em 0 0.5em 0";
        x = 1;
      }
  
    else {   
        menuAppear.style.display = "none";
        logoShift.style.margin = "2em 0 3em 0";
        x = 0;
      }
  }
  
  function menuClose() {
    menuAppear.style.display = "none";
    logoShift.style.margin = "2em 0 3em 0";
    x = 0;
    
  }



//******ANIMATIONS******

logoShift.onmouseout = function () {
  logoShift.style.animation = "spin4 0.2s";
  logoShift.style.animationFillMode = "forwards";
  logoShift.style.animationTimingFunction = "ease";
  logoShift.style.animationIterationCount = "1";
}

logoShift.onmouseover = function () {
  logoShift.style.animation = "spin3 0.4s";
  logoShift.style.animationFillMode = "forwards";
  logoShift.style.animationTimingFunction = "ease";
  logoShift.style.animationIterationCount = "1";
}