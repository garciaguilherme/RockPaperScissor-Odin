
let choice;
let userChoice;
let validChoices =  ["Rock", "Paper", "Scissor"];

function getComputerChoice() {

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

/* function getHumanChoice() {
    let userAnswer = prompt("What is you choice?");

  if ( userAnswer == validChoices[0] ){
        userChoice = userAnswer;
       return userChoice;
 } else if ( userAnswer == validChoices[1] ){
    userChoice = userAnswer;
    return userChoice;
 }  else if ( userAnswer == validChoices[2] ){
    userChoice = userAnswer;
    return userChoice;
 } else {
       userChoice = "Erro"
        return userChoice;
    }

} */

function getHumanChoice() {
    var userChoice = prompt("What is you choice?");

    if ( userChoice == validChoices[0] ){
        return userChoice;
    } else if ( userChoice == validChoices[1] ){
        return userChoice;
    }  else if ( userChoice == validChoices[2] ){
        return userChoice;
    } else {
        userChoice = "Erro";
        return userChoice;
        }

}


getComputerChoice();
getHumanChoice();

console.log(choice)
console.log(userChoice)