// add event listener to button that runs grabs user input and compares to random number
let button= document.getElementById("button");
let restartButton= document.getElementById("restartButton");
let result=document.getElementById("result");

// let text = document.getElementById('hello');
// assign function to variable
let randomNumberGenerator = getRandomInt(1, 10);

button.addEventListener("click", function(){

hideText();
// takes user input
let userGuess = document.getElementById("userGuess").value;
// if number is == to output of function produce well done message (green color)
if ( !userGuess ||isNaN(userGuess) == true|| userGuess>10||userGuess<=0) {
    result.innerHTML="Please Enter a Number Between 1-10";
    }

else if (userGuess < randomNumberGenerator) {
    result.innerHTML="Guess Higher";
    }

else if (userGuess > randomNumberGenerator) {
    result.innerHTML="Guess Lower";
    }

else if (userGuess == randomNumberGenerator) {
    result.innerHTML="<p class='wellDone'>Well done</p>"; 
    gif.innerHTML="<img src='img/congrats.gif'></img>"
    }

    setTimeout(showText,500);
});



// run function that generates number between 1-10
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

console.log(randomNumberGenerator);


function showText() { 
    result.style.opacity = 1 ; 
    }

function hideText() { 
    result.style.opacity = 0 ; 
    }
    







