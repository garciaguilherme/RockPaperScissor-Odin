let humanScore = 0;
let computerScore = 0;
let userChoice, choice;

function getComputerChoice() {
    let choice;
    let randomizer = Math.random();
    if ( randomizer <= 0.3) {
        choice = "Paper";
    } else if ( randomizer >= 0.4 && randomizer <= 0.6) { 
        choice = "Scissor";
    } else {
        choice = "Rock";
    }

    return choice;
}


function getHumanChoice() {
    let userPrompt = prompt("What is you choice?");
    let userChoice = userPrompt.charAt(0).toUpperCase() + userPrompt.slice(1).toLowerCase();

        if ( (userChoice == "Rock") || (userChoice == "Paper") || (userChoice == "Scissor")){
        return userChoice;
    } else {
        userError = "Error";
        return userError;
        }

}

function winCondition(human, computer) {
    if ((human == "Rock" && computer == "Paper") || (human == "Paper" && computer == "Scissor") || (human == "Scissor" && computer == "Rock")){
        computerScore++;
        return ("Computer wins");
    } else if ( (human == "Paper" && computer == "Rock") || ( human == "Rock" && computer == "Scissor") || ( human == "Scissor" && computer == "Paper") ) {
        humanScore++;
       return ("Player wins");
    } else {
        return ("Draw");
    }
}


function playGame(rounds) {
    for ( i = 0; i <= rounds; i++){
        console.log("Round " + i);

        choice = getComputerChoice();
        userChoice = getHumanChoice();

        let result = winCondition(userChoice, choice);

        console.log("Computer: " + choice);
        console.log("Human: " + userChoice);
        console.log(result);
        console.log("Points: " + "Computer: " + computerScore + ", Human: " + humanScore);
    }
}

// Plays the game for five rounds
playGame(5);

// Final result message
if ( computerScore > humanScore) {
    console.log("Game over! You lose!")
} else if ( computerScore == humanScore) {
    console.log("Draw! Play again!")
} else {
    console.log("Victory! You won!")
}