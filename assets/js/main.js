var logoShift = document.getElementById("logo");
var menuAppear = document.getElementById("menuTexts");
var x = 0;
var option = 2;

if (option == 1) {
  logoShift.onclick = function () {
    if (x == 0) {   
      logoShift.style.margin = "2em 20em 3em 0";
      x = 1;
    }
  
    else {   
      logoShift.style.margin = "2em 0em 3em 0";
      x = 0;
    }
  }
}

else if (option == 2 ) {
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
}