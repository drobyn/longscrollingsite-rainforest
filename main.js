//document.getElementById('counter').innerHTML = "hello";

//initalize variables - set-up variables
var counter = document.getElementById('counter');
var fromTop = window.pageYOffset;

counter.innerHTML = "Monkey";

//Pseudocode when the user is scrolling update the variable fromTop and make decisions to change stuff on the page
//window.onscroll is a boolean (yes/no)
window.onscroll = function () {
    //when the user scrolls, do all of this!

    fromTop = window.pageYOffset;
    //test if it works
    console.log(fromTop);

    counter.style.top = 100 + fromTop + "px";

    if(fromTop > 1000){
      counter.innerHTML = "More than 1000";
      counter.style.backgroundColor="red";
      counter.style.backgroundImage="url()";
    }
    if(fromTop > 2000){
      counter.innerHTML = "More than 5000";
      counter.style.backgroundColor="red";
      counter.style.backgroundImage="url(yellowsubmarine.png)";
    }
    else {
      counter.innerHTML = "Monkey";
      counter.style.backgroundColor="green";
    }

}
