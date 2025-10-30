let validChoices =  ["Rock", "Paper", "Scissor"];

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



console.log(getComputerChoice())
console.log(getHumanChoice())