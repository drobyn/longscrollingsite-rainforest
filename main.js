//document.getElementById('counter').innerHTML = "hello";

//initalize variables - set-up variables
var counter = document.getElementById('info');
var fromTop = window.pageYOffset;

counter.innerHTML = "Layer";

//Pseudocode when the user is scrolling update the variable fromTop and make decisions to change stuff on the page
//window.onscroll is a boolean (yes/no)
window.onscroll = function () {
    //when the user scrolls, do all of this!

    fromTop = window.pageYOffset;
    //test if it works
    console.log(fromTop);

    counter.style.top = 150 + fromTop + "px";
    counter.style.color = "white";


    if(fromTop > 400){
      counter.innerHTML = "Upper Canopy Layer";
      //counter.style.backgroundColor="red";
      //counter.style.backgroundImage="url()";
    }
    if(fromTop > 1000){
      counter.innerHTML = "Understory Layer";
      //counter.innerHTML = "More than 5000";
      //counter.style.backgroundColor="red";
    }

    if(fromTop > 9100){
      counter.innerHTML = "Forest Floor Layer";
      //counter.innerHTML = "More than 5000";
      //counter.style.backgroundColor="red";
    }
    if (fromTop < 200) {
      counter.innerHTML = "Emergent Layer";
      //counter.style.backgroundColor="green";
    }

}
