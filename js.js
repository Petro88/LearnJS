"use strict";
var target;
var guessInputColor;
var guessInput;
var guesses = 0;
var finished = false;
var randomColorinteger;
var arrColor;


function doGames() {
    arrColor = ["green", "blue", "yellow", "coral", "pink", "silver", "white", "black", "red", "lime"];
    var randomNamber = Math.random() * 10;
    randomColorinteger = Math.floor(randomNamber);
    target = arrColor[randomColorinteger];
    alert("The answer is" + target);
    while (!finished) {
        guessInputColor = prompt("I am thinking of one of this colors\n\n" + "green, blue, yellow, coral, pink, silver, white, black, red, lime\n\n" + "What colours am I thinking of?");
       
        /*
        cond = arrColor.some(function (item) {
            return item == guessInputColor;
        });
        */
        guesses++;
        finished = solution();

    }
}

function solution() {

    if ((arrColor.some(function (item) {
            return item == guessInputColor;
        })) == false) {
        alert("I dont recognized your colour\n\n" + "Please try again late");
        return false;
    }

    if (arrColor.indexOf(guessInputColor) < randomColorinteger) {
        alert("Sorry your guesses is not corect\n\n" + "Your color is numeric lower then mine\n\n" + "Please try again");
        return false;
    }

    if (arrColor.indexOf(guessInputColor) > randomColorinteger) {
        alert("Your color is numeric higher then mine");
        return false;
    }
    /*
    if (arrColor.indexOf(guessInputColor) + 1 == randomColorinteger)*/
    $("body").css("background-color", guessInputColor);
    alert("Congratulate you have guessed the color!\n" + "It look you" + guesses + "to finish the game");
    return true;

}
