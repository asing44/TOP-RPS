let computerScore = 0;
let playerScore = 0;
let gamesPlayed = 0;

const playerChoiceText = document.getElementsByClassName("player-choice-text")[0];
playerChoiceText.textContent = "";

function getChoices() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return 'Rock'
    } else if (computerChoice == 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function rps(playerMove) {
    if (playerMove == 'Rock') {
        playerChoiceText.textContent = "Rock!";
        if (getChoices() == 'Paper') {
            computerScore += 1;
        } else if (getChoices() == 'Scissors') {
            playerScore += 1;
        }
    } else if (playerMove == "Paper") {
        playerChoiceText.textContent = "Paper!";
        if (getChoices() == "Rock") {
            playerScore += 1;
        } else if (getChoices() == "Scissors") {
            computerScore += 1;
        }
    } else {
        playerChoiceText.textContent = "Scissors!";
        if (getChoices() == "Rock") {
            computerScore += 1;
        } else if (getChoices() == "Paper") {
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

// game()

console.log("PLAYER SCORE: " + playerScore, "\nCOMPUTER SCORE: " + computerScore, "\nGAMES PLAYED: " + gamesPlayed);