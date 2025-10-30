let humanScore = 0;
let computerScore = 0;
let userChoice;
let choice;

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
    let userChoice = prompt("What is you choice?");

    if ( (userChoice == "Rock") || (userChoice == "Paper") || (userChoice == "Scissor")){
        return userChoice;
    } else {
        userError = "Error";
        return userError;
        }

}

choice = getComputerChoice();
userChoice = getHumanChoice();

console.log(choice);
console.log(userChoice);
console.log();

function winCondition() {
    if ((userChoice == "Rock" && choice == "Paper") || (userChoice == "Paper" && choice == "Scissor") || (userChoice == "Scissor" && choice == "Rock")){
        console.log("Computer wins");
    } else if ( (userChoice == "Paper" && choice == "Rock") || ( userChoice == "Rock" && choice == "Scissor") || ( userChoice == "Scissor" && choice == "Paper") ) {
       console.log("Player wins");
    } else {
        console.log("Draw");
    }
}