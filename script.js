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
// --oneRound--
// compare compInput to userInput
//  if same, declare tie
//  if user == rock && comp == scissors, declare win
//  if user == paper && comp == rock, declare win
//  if user == scissor && comp == paper, declare win
//  else, declare loss
//  
//  -- fullGame -- 
// function fullGame (oneRound){
// score = i
// for (let i=0; i < 5; ++i)
// play round, if win, 
//      if lose
//   play round, if   
// 
// 
// 

const choices = ["rock", "paper", "scissors"];
const compTurn = compChoice();
const userTurn = userChoice();
const winner = checkWin(userTurn, compTurn);
console.log(userTurn)
console.log(("Computer chooses: "+compTurn+". ")+
    ("User chooses: "+userTurn+". ")+ winner)

function userChoice(){
    let userPicks = prompt("rock, paper, or scissors?");
    while(userPicks == null){
         userPicks = prompt("No really: rock, paper, or scissors??");
    }
    userPicks = userPicks.toLowerCase();
    let check = checkUserInput(userPicks);
    while(check == false){
        userPicks = prompt("Check your spelling, and try again.")
        while(userPicks == null){
            userPicks = prompt("No really: rock, paper, or scissors??")
        }
        userPicks = userPicks.toLowerCase();
        check = checkUserInput(userPicks);
    }
    console.log(check)
    return userPicks
}

function compChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWin(player, computer){
    if(player === computer){
        return 'Tie!';
    }
    else if (
        (player == "rock" && computer == "scissors") ||
        (player == "paper" && computer == "rock") ||
        (player == "scissors" && computer == "paper")
        ) {
        return 'User wins!';
     }
     else {
        return 'Computer wins.';
     }
}
function checkUserInput(input){
    return choices.includes(input)
}

// ~~OLD CODE, SAVED FOR POSTERITY~~
// // Computer's turn
// function compTurn() {
// let getComputerChoice = ["rock", "paper", "scissors"]
// let compChoice = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)];
// return compChoice;
// }

// // User's turn
// function userTurn(){
//     let playerChoice = prompt("Make a selection.");
//     return (playerChoice.toLowerCase())
// }

// // creates variables to store the results of comp / user turns
// let compInput = compTurn()
// console.log(compInput)
// let userInput = userTurn()
// console.log(userInput)

// // compare the results of both turns and determine a winner.
// function oneRound(userInput, compInput){
//     if (userInput === compInput){
//             return "Tie!"
//     }
//     else if ((userInput == "rock" && compInput == "scissors")||
//         (userInput == "paper" && compInput == "rock")||
//         (userInput == "scissors" && compInput == "paper")||
//         (userInput == "paper" && compInput == "rock")){
//             return "You win!";
//         }
//     else {return "You lose."}
// }
// console.log(oneRound())

// function fullGame(){
   
//     oneRound();
// }



