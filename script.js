// As a user, I want to play Rock, Paper, Scissors against an automated opponent.

// As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

// As a user, I expect the computer to choose R, P, or S in return.

// As a user, I want the option to play again whether I win or lose.

// As a user, I want to see my total wins, ties, and losses after each round.

// alert("Hello world!");

var yesOrno = confirm("Do you want to play again?");
// will return true/false 

function playGame() {
var userChoice = prompt("To play, enter R, P, or S");
// will store the player's input
var wins = 0;
var losses = 0;
var ties = 0;
var options = ["R", "P", "S"];

// console.log(options.length);

// Math.floor rounds down the Math.random random decimal picker to a whole number
var randomPicker = Math.floor( Math.random() * options.length);

var compChoice = options[randomPicker]
console.log(compChoice);

// Conditions of the game
if (userChoice !== "R" || userChoice !== "P" || userChoice !== "S") {
// ties
if (
    userChoice === "R" && compChoice === "R" ||
    userChoice === "S" && compChoice === "S" ||
    userChoice === "P" && compChoice === "P"
) {
    ties++;
    alert("Tie! " + ties);
}
// wins
else if ( 
    userChoice === "R" && compChoice === "P" ||
    userChoice === "S" && compChoice === "R" ||
    userChoice === "P" && compChoice === "S"
) {
    wins++;
    alert("You win! " + wins);
}
// Losses
else {
    losses++;
    alert("You lose :( " + losses);
}

// Wrong input
// else {
//     console.log("Play fair! Enter R, P, or S");
// }
}}

playGame()