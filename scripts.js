let computerScore = 0;
let playerScore = 0;
let gamesPlayed = 0;

function getChoices() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return 'ROCK'
    } else if (computerChoice == 1) {
        return 'PAPER'
    } else {
        return 'SCISSORS'
    }
}

function rps() {
    let playerInput = prompt("What is your move? Rock, Paper, or Scissors?")
    if (playerInput == 'ROCK') {
        if (getChoices() == 'PAPER') {
            computerScore += 1;
        } else if (getChoices() == 'SCISSORS') {
            playerScore += 1;
        }
    } else if (playerInput == "PAPER") {
        if (getChoices() == "ROCK") {
            playerScore += 1;
        } else if (getChoices() == "SCISSORS") {
            computerScore += 1;
        }
    } else {
        if (getChoices() == "ROCK") {
            computerScore += 1;
        } else if (getChoices() == "PAPER") {
            playerScore += 1;
        }
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        rps()
        gamesPlayed += 1;
    }
}

game()

console.log("PLAYER SCORE: " + playerScore, "\nCOMPUTER SCORE: " + computerScore, "\nGAMES PLAYED: " + gamesPlayed);