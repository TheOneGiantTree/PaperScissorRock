//  ALGORITHM
// Have computer select from rock, paper, scissor
// Have user select rock, paper, scissor
// Make sure user inputs are not case sensitive
// Compare userInput to compInput and declare a winner
// 
//
//  PSEUDOCODE
// function getComputerChoice (choice){
//     select random number 0-2
//         if 0 let choice = rock
//         if 1 let choice = paper
//         if 2 let choice = scissor
//      return choice
// 
// let userChoice = prompt user rock paper scissor
// return string back with .toLowerCase
// 
// compare compInput to userInput
//  if same, declare tie
//  if user == rock && comp == scissors, declare win
//  if user == paper && comp == rock, declare win
//  if user == scissor && comp == paper, declare win
//  else, declare loss
//  
//  

// Computer's turn
function compTurn() {
let getComputerChoice = ["rock", "paper", "scissors"]
let compChoice = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];
return compChoice;
}

// User's turn
function userTurn(){
    let playerChoice = prompt("Make a selection.");
    return (playerChoice.toLowerCase())
}

// creates variables to store the results of comp / user turns
let compInput = compTurn()
console.log(compInput)
let userInput = userTurn()
console.log(userInput)

// compare the results of both turns and determine a winner.
function game(){
    if (userInput === compInput){
        return "Tie!"
    }
    else if ((userInput == "rock" && compInput == "scissors")||
        (userInput == "paper" && compInput == "rock")||
        (userInput == "scissors" && compInput == "paper")||
        (userInput == "paper" && compInput == "rock")){
            return "You win!"
        }
    else {return "You lose."}
}
console.log(game())