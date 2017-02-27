<!-- Scripts -->

 
function tip1(){
var fheight = document.querySelector('.footer').clientHeight;

var hhtml  =  document.querySelector('html').clientHeight - document.querySelector('#page').clientHeight;
 var padding =  hhtml - fheight;
console.log(padding);
if ((padding > 0 )&& (hhtml < 0)) {
	document.querySelector('body').style.paddingBottom = padding+'px';
	document.querySelector('.circle').style.marginBottom = fheight+'px';
}
else { 
	document.querySelector('body').style.paddingBottom = fheight+'px';

}};
 tip1();
window.addEventListener("orientationchange", function() {
	tip1();
 
});




// AJAX ---------------------------------
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("page").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "practice.html", true);
  xhttp.send();
}
function loadDocHome() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("page").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "home.html", true);
  xhttp.send();
}

function toMain() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("page").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "home.html", true);
  xhttp.send();
}

function loadDocSettings() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("page").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "settings.html", true);
  xhttp.send();
}

function loadDocQuize() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("page").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "quize.html", true);
  xhttp.send();
}

function loadDocLessons() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("page").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "lessons.html", true);
  xhttp.send();
}

function loadDocInfo() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("page").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "Info.html", true);
  xhttp.send();
}

function loadpractice() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("page").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "practice-practice.html", true);
  xhttp.send();
}


// for spoilers -------------------------------------------------------
function toggle(n){
	 el = document.getElementById(n).style;
		el.display = (el.display == 'block') ? 'none' : 'block';
	}

// For practice --------------------------------

function range(){

	num1 = Math.floor(Math.random()*range1*10-0.0001);
	alert(num1);
	num2 = Math.floor(Math.random()*range2-0.0001);
	alert(num2);
}


// Функції математичних операцій
function Multiple (x,y){
 var result = x * y;
 return result;
}
function Div (x,y){
  var result = x/y;
  return result;
}
function Add(x,y){
  var result = x+y;
  return result;
}
function Minus(x,y){
  var result = x-y;
  return result;
}
      
