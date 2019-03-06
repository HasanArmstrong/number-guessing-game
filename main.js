// add event listener to button that runs grabs user input and compares to random number
let button= document.getElementById("button");
let restartButton= document.getElementById("restartButton");
let result=document.getElementById("result");
// assign function to variable
let randomNumberGenerator = getRandomInt(0, 10);
let checkIfNumber;

button.addEventListener("click", function(){

// takes user input
let userGuess = document.getElementById("userGuess").value;
// if number is == to output of function produce well done message (green color)
if (userGuess == ""||isNaN(userGuess) == true||userGuess>10||userGuess<0) {
    result.innerHTML="Please Enter a Number Between 1-10";
    }
else if (userGuess < randomNumberGenerator) {
    result.innerHTML="<p class='gHigher'>Guess Higher";
    }

else if (userGuess > randomNumberGenerator) {
    result.innerHTML="<p class='gHigher'>Guess Lower</p>";
    }
else if (userGuess == randomNumberGenerator) {
        result.innerHTML="<p class='wellDone'>Well done</p>"; 
    }
});

restartButton.addEventListener("click", function(){
    randomNumberGenerator = getRandomInt(0, 10);
    document.getElementById("userGuess").value="";
    document.getElementById("result").innerHTML="";
});

// run function that generates number between 1-10
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

console.log(randomNumberGenerator);







// if number is < than the output of function produce guess higher message (red color)

// if number is > than the output of function produce guess lower message (red color)

// Have reset button to clear guesses