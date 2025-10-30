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
    let userChoice = prompt("What is you choice?");

    if ( (userChoice == "Rock") || (userChoice == "Paper") || (userChoice == "Scissor")){
        return userChoice;
    } else {
        userError = "Error";
        return userError;
        }

}

function winCondition() {
    if ((userChoice == "Rock" && choice == "Paper") || (userChoice == "Paper" && choice == "Scissor") || (userChoice == "Scissor" && choice == "Rock")){
        return ("Computer wins");
    } else if ( (userChoice == "Paper" && choice == "Rock") || ( userChoice == "Rock" && choice == "Scissor") || ( userChoice == "Scissor" && choice == "Paper") ) {
       return ("Player wins");
    } else {
        return ("Draw");
    }
}

choice = getComputerChoice();
userChoice = getHumanChoice();

let result = winCondition();

console.log("Computer: " + choice);
console.log("Human: " + userChoice);
console.log(result);

