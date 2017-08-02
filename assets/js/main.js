//******VARIABLES******

var logoShift = document.getElementById("logo");
var menuAppear = document.getElementById("menuTexts");
var left = document.getElementById("left");
var right = document.getElementById("right");
var leftArrow = document.getElementById("leftArrow");
var rightArrow = document.getElementById("rightArrow");
var gallery = document.getElementById("gallery");
var modal = document.getElementById("modal");
var close = document.getElementById("close1");
var modalDiv = document.getElementById("modalDiv");
var images = 11; //Number of Images to Be Loaded, start at '0'
var amount = ''; //Hold for Hover Scroll Effect
var x = true; //Boolean for Menu Apprearing
var place = '0'; //Pointer for Gallery


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


close.onmouseout = function () {
  close.style.animation = "spin6 0.3s";
  close.style.animationFillMode = "forwards";
  close.style.animationTimingFunction = "ease";
  close.style.animationIterationCount = "1";
}

close.onmouseover = function () {
  close.style.animation = "spin5 0.5s";
  close.style.animationFillMode = "forwards";
  close.style.animationTimingFunction = "ease";
  close.style.animationIterationCount = "1";
}



//******LOAD IMAGES******

$(document).ready(function(){
        var dir = "images/thumbnail/"; // folder location
        var fileextension = ".jpg"; // image format
        var i = "0";
        
        $(function imageloop(){
          $("<div  />").attr('class', "picDiv" ).attr('style', "background-image:url(" + dir + i + fileextension + ")" ).attr('onclick', "javascript:firstOpen(" + i + ");").appendTo("#gallery");
          //$("<img />").attr('src', dir + i + fileextension ).appendTo("#testDiv" + i);
          if (i < images){
            i++;
            imageloop();
          };
        });   
      });


//******SCROLL GALLERY******

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


//******MODAL GALLERY******

function openModal() {
  modal.style.display = "block";
  close.style.animation = "zoom 0.5s";
  close.style.animationTimingFunction = "ease";
  close.style.animationIterationCount = "1";
}



function closeModal() {
  modal.style.display = "none";
}

function firstOpen(z) {
  place = z;
  var dir = "images/gallery/"; // folder location
  var fileextension = ".jpg"; // image format
  modalDiv.style.backgroundImage = "url(" + dir + z + fileextension + ")"; // Change Image Source
  openModal();
}

function changeLeft() {
  var dir = "images/gallery/"; // folder location
  var fileextension = ".jpg"; // image format
  place--;
  if(place < 0){place = images;}
  modalDiv.style.backgroundImage = "url(" + dir + place + fileextension + ")"; // Change Image Source
}

function changeRight() {
  var dir = "images/gallery/"; // folder location
  var fileextension = ".jpg"; // image format
  place++;
  if(place > images){place = 0;}
  modalDiv.style.backgroundImage = "url(" + dir + place + fileextension + ")"; // Change Image Source
}