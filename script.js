
const choices = ["rock", "paper", "scissors"];
let comp; 
let winner;
let userScore=0;
let compScore=0;
let result;
let userTurn;

const buttonDiv = document.getElementById('buttonDiv');
let buttonLabels = [choices];
const scoreDiv = document.createElement('div');
scoreDiv.id = "scoreDiv"
document.body.appendChild(scoreDiv);
const turnPicks = document.createElement('div');
document.body.appendChild(turnPicks);

updateScore(); // starts the game at 0

for(i=0; i<choices.length; i++){
    let button = document.createElement('button');
    button.textContent = choices[i];
    button.id = button.textContent;
    button.addEventListener('click', buttonClick);
    buttonDiv.appendChild(button);
}

function buttonClick(e){
    userTurn = e.target.id;
    oneRound();
}

function oneRound(){
    const compTurn = compChoice();
    winner = checkWin(userTurn, compTurn);
    console.log(userTurn, compTurn, winner);
     turnPicks.textContent = "";
    let turnSelections = document.createTextNode("You chose " + userTurn + ". " + "Computer chose " + compTurn + ". " + winner);
    turnPicks.appendChild(turnSelections)
    getScore();
   
}

function compChoice() {
    return comp = choices[Math.floor(Math.random() * choices.length)];
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
        return 'You win!';
     }
     else {
        return 'Computer wins.';
     }
}

function getScore(){
 
    if(winner === 'Tie!'){
    }
    else if(winner === 'You win!'){
         userScore = ++userScore;
    }
    else if(winner === 'Computer wins.'){
         compScore = ++compScore;
    }
    // console.log(winner)
    console.log('User score: ' + userScore + ', ' + 'Computer score: ' + compScore)
    updateScore();
}

function updateScore(){
    scoreDiv.textContent = 'User score: ' + userScore + ', ' + 'Computer score: ' + compScore;
    if(compScore > 4){
        scoreDiv.textContent = "Computer wins, try again."
        userScore = 0;
        compScore = 0;
    }
    else if(userScore > 4){
        scoreDiv.textContent = "You win! Good job."
        userScore = 0;
        compScore = 0;
    }
}