//******VARIABLES******

var logoShift = document.getElementById("logo");
var menuAppear = document.getElementById("menuTexts");
var left = document.getElementById("left");
var right = document.getElementById("right");
var gallery = document.getElementById("gallery");
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

$(document).ready(function(){
        var dir = "images/thumbnail/"; // folder location
        var fileextension = ".jpg"; // image format
        var i = "1";
        
        $(function imageloop(){
          $("<div  />").attr('class', "picDiv" ).attr('style', "background-image:url(" + dir + i + fileextension + ")" ).appendTo("#gallery");
          //$("<img />").attr('src', dir + i + fileextension ).appendTo("#testDiv" + i);
          if (i<15){
            i++;
            imageloop();
          };
        });   
      });


//******SCROLL GALLERY******

var amount = '';

function scroll() {
  $('#gallery').animate({
    scrollLeft: amount
  }, 100, 'linear',function() {
      if (amount != '') {
        scroll();
      }
    });
}

$('#right').hover(function() {
  amount = '+=20';
  scroll();
}, function() {
      amount = '';
    });

$('#left').hover(function() {
   amount = '-=20';
   scroll();
}, function() {
      amount = '';
    });
