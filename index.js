const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;
let gameActive = true;

function playGame(playerChoice){

    if (gameActive == false) {
        alert("Game was over. Please press Play Again to continue");
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case "rock": result = (computerChoice === "scissors") ? "YOU WIN!":"YOU LOSE!";
                        break;

            case "paper": result = (computerChoice === "rock") ? "YOU WIN!":"YOU LOSE!";
                        break;

            case "scissors": result = (computerChoice === "paper") ? "YOU WIN!":"YOU LOSE!";
                        break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText")

    switch(result){
        case "YOU WIN!": resultDisplay.classList.add("greenText");
                        playerScore++;
                        playerScoreDisplay.textContent = playerScore;
                        break;

        case "YOU LOSE!": resultDisplay.classList.add("redText");
                        computerScore++;
                        computerScoreDisplay.textContent = computerScore;
                        break;
    }

    if(playerScore === 10){
        resultDisplay.textContent = "YOU ARE WINNER";
        resultDisplay.classList.add("greenText");
        alert("YOU ARE WINNER");
        gameActive = false;
        return;
    }
    else if(computerScore === 10){
        resultDisplay.textContent = "YOU ARE LOSER";
        resultDisplay.classList.add("redText");
        alert("YOU ARE LOSER");
        gameActive = false
        return;
    }
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    
    playerDisplay.textContent = "PLAYER: ";
    computerDisplay.textContent = "COMPUTER: ";
    resultDisplay.textContent = "";
    playerScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
    gameActive = true;
}