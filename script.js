//  ALGORITHM
// Have computer select from rock, paper, scissor
// Have user select rock, paper, scissor
// Make sure user inputs are not case sensitive
// Return a string that declares the winner
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
// 
// 
// 
//  
//  
function compTurn() {
let getComputerChoice = ["rock", "paper", "scissor"]
let compChoice = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];
console.log(compChoice)
}
compTurn()