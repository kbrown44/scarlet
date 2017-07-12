//******VARIABLES******

var logoShift = document.getElementById("logo");
var menuAppear = document.getElementById("menuTexts");
var x = true;



//******MENU APPEAR******

  logoShift.onclick = function () {
    if (x == true) {   
        menuAppear.style.display = "block";
        logoShift.style.margin = "2em 0 0.5em 0";
        x = false;
      }
  
    else {   
        menuAppear.style.display = "none";
        logoShift.style.margin = "2em 0 1em 0";
        x = true;
      }
  }
  
  function menuClose() {
    menuAppear.style.display = "none";
    logoShift.style.margin = "2em 0 3em 0";
    x = true;
    
  }



//******ANIMATIONS******

logoShift.onmouseout = function () {
  logoShift.style.animation = "spin4 0.2s";
  logoShift.style.animationFillMode = "forwards";
  logoShift.style.animationTimingFunction = "ease";
  logoShift.style.animationIterationCount = "1";
}

logoShift.onmouseover = function () {
  logoShift.style.animation = "spin3 0.3s";
  logoShift.style.animationFillMode = "forwards";
  logoShift.style.animationTimingFunction = "ease";
  logoShift.style.animationIterationCount = "1";
}
