var number1;
var number2;
var result3;
var range1;
var range2;
var check1;
var check2;
var check3;
var devider12;
var currentState = 1;
var PageHeight;
var ScreenHeight;
var footer;
var test111
var random111;
function tip1(){
  PageHeight = document.getElementById("page");
  ScreenHeight = window.innerHeight;
  footer = document.getElementById("footer");
  // console.log(PageHeight.clientHeight > ScreenHeight - footer.clientHeight);
  if (PageHeight.clientHeight > ScreenHeight - footer.clientHeight) {
    // footer.style.display = "absolute";
    test111 = ScreenHeight - PageHeight.clientHeight;
    console.log(PageHeight.clientHeight);
    if (test111 > 0) {
      footer.style.bottom = -footer.clientHeight + test111 + "px";
    }else{
      footer.style.bottom = -footer.clientHeight + "px";
    }
  }else{
    footer.style.bottom = 0;
    PageHeight.style.paddingBottom = footer.clientHeight + "px";
  }
}
window.addEventListener("orientationchange", function() {
  tip1();
});






// for spoilers -------------------------------------------------------
function toggle(n){
	 el = document.getElementById(n).style;
   console.log(document.getElementById(n).offsetHeight);
   document.getElementById(n).parentElement.style.marginBottom = document.getElementById(n).clientHeight + 20 + "px";
    if (el.visibility == 'visible') {
      document.getElementById(n).parentElement.style.marginBottom = 20 + "px";
    }
		el.visibility = (el.visibility == 'visible') ? 'hidden' : 'visible';
	}

// For practice --------------------------------
function randominrange(min, max) {
    return Math.round(Math.random() * (max - min) + min);
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
      


function toNextLesson(){
  var result3Input = document.getElementById("result3");
  if (result3Input.value == result3) {
    // console.log("pa");
    result3Input.value = "";
    document.getElementById("nextbutton").style.borderColor = "#3b83b3";
    number1 = randominrange(Number(range1), Number(range2));
    number2 = randominrange(Number(range1), Number(range2));
    if (number1 < number2) {
      console.log(number1+"Swap!"+number2);
      forAtime = number1;
      number1 = number2;
      number2 = forAtime;
    }
    if (check3) {
      console.log("simple numbers!");
      number1 = number1.toString();
      number2 = number2.toString();
      // console.log(number1);
      if (Math.random() > 0.5) {
        number2[number2.length - 1] = "0";
      }else{
        number2[number2.length - 1] = "5";
      }
      if (Math.random() > 0.5) {
        number1[number1.length - 1] = "0";
      }else{
        number1[number1.length - 1] = "5";
        // console.log(number1[number1.length - 1]);
      }
      // console.log(number1[number1.length - 1]);
      number1 = Number(number1);
      number2 = Number(number2);
    }     

      if (check1 && check2) {
        if(Math.random() > 0.5){
          result3 = Math.round(number1 / number2);
          devider12 = "/";
        }else{
          result3 = number1 * number2;
          devider12 = "*";
        }
      }
      if(check1 && !check2){
        result3 = Math.round(number1 / number2);
        devider12 = "/";
      }
      if(!check1 && check2){
        result3 = number1 * number2;
        devider12 = "*";
      }
      console.log("result!!" + result3);

    document.querySelector('.num').innerHTML = number1+'&nbsp;&nbsp;'+devider12+'&nbsp;&nbsp; '+number2+ '&nbsp;&nbsp;=';
    result3Input.focus();
    document.getElementById("currentStatePractice").innerHTML = currentState + "/10";
    currentState++;
  }else{
    document.getElementById("nextbutton").style.borderColor = "red"; 
    result3Input.focus();

  }
}
// function devider12(){
//   console.log(result3);
//   if (check1 && check2) {
//     if(Math.random() > 0.5){
//       result3 = number1 / number2;
//       return "/";
//     }else{
//       result3 = number1 * number2;
//       return "*";
//     }
//   }
//   if(check1 && !check2){
//     result3 = number1 / number2;
//     return "/";
//   }
//   if((!check1 && check2) && (!check1 && !check2)){
//     result3 = number1 * number2;
//     return "*";
//   }

// }





































// AJAX ---------------------------------
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("page").innerHTML =
      this.responseText;
      document.getElementById("page").style.paddingBottom = 0;
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
      document.getElementById("page").style.paddingBottom = 0;
      tip1();
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
      document.getElementById("page").style.paddingBottom = 0;
      tip1();
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
      document.getElementById("page").style.paddingBottom = 0;
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
      document.getElementById("page").style.paddingBottom = 0;
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
      document.getElementById("page").style.paddingBottom = 0;
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
      document.getElementById("page").style.paddingBottom = 0;
    }
  };
  xhttp.open("GET", "Info.html", true);
  xhttp.send();
}

function loadpractice(ch1, ch2, ch3, r1, r2, isMode) {

  if (ch2 || r2) {
    check1 = ch1;
    check2 = ch2;
    check3 = ch3;
    range1 = r1;
    range2 = r2;
    console.log(check1, check2, check3, range1, range2);
  }else{
    check1 = document.getElementById("check1").checked;
    check2 = document.getElementById("check2").checked;
    check3 = document.getElementById("check3").checked;
    range1 = document.getElementById("range1").value;
    range2 = document.getElementById("range2").value;
    if (!range2) {
      range2 = 100;
    }
    if (!range1) {
      range1 = 1;
    }
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("page").innerHTML = this.responseText;
      document.getElementById("page").style.paddingBottom = 0;
      document.getElementById("result3").focus();
      if(isMode == "quize"){
        document.getElementById('prevPractice').onclick = function(){ loadDocQuize(); } ;
      }else if(isMode == "lessons"){
        document.getElementById('prevPractice').onclick = function(){ loadDocLessons(); } ;
      }else{
        document.getElementById('prevPractice').onclick = function(){ loadDoc(); } ;
      }
      number1 = randominrange(Number(range1), Number(range2));
      number2 = randominrange(Number(range1), Number(range2));
      if (number1 < number2) {
        console.log(number1+"Swap!"+number2);
        forAtime = number1;
        number1 = number2;
        number2 = forAtime;
      }
      if (check3) {
        console.log("simple numbers!");
        number1 = number1.toString();
        number2 = number2.toString();
        // console.log(number1);
        if (Math.random() > 0.5) {
          number2[number2.length - 1] = "0";
        }else{
          number2[number2.length - 1] = "5";
        }
        if (Math.random() > 0.5) {
          number1[number1.length - 1] = "0";
        }else{
          number1[number1.length - 1] = "5";
          // console.log(number1[number1.length - 1]);
        }
        // console.log(number1[number1.length - 1]);
        number1 = Number(number1);
        number2 = Number(number2);
      }     

        if (check1 && check2) {
          if(Math.random() > 0.5){
            result3 = Math.round(number1 / number2);
            devider12 = "/";
          }else{
            result3 = number1 * number2;
            devider12 = "*";
          }
        }
        if(check1 && !check2){
          result3 = Math.round(number1 / number2);
          devider12 = "/";
        }
        if(!check1 && check2){
          result3 = number1 * number2;
          devider12 = "*";
        }
        console.log("result!!" + result3);
      // result3 = number1 * number2;
      document.querySelector('.num').innerHTML = number1+'&nbsp;&nbsp;'+devider12+'&nbsp;&nbsp; '+number2+ '&nbsp;&nbsp;=';

      document.getElementById("result3").onkeypress = function checktrue(){
        if (document.getElementById("result3").value.toString().length == result3.toString().length) { 
           toNextLesson();
        }
      };  
      document.getElementById("result3").oninput = function checktrue(){
        if (document.getElementById("result3").value.toString().length == result3.toString().length) { 
           toNextLesson();
        }
      };

    }
  };
  xhttp.open("GET", "practice-practice.html", true);
  xhttp.send();
}
