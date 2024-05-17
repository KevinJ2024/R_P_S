const rock = document.getElementById('btn-1');
const paper = document.getElementById('btn-2');
const scissors = document.getElementById('btn-3');
let playerScore=0;
let cpuScore=0;

window.addEventListener("DOMContentLoaded", pressButton);

function pressButton() {  
    rock.addEventListener('click', pressedRock),
    paper.addEventListener('click', pressedPaper),
    scissors.addEventListener('click', pressedScissors);
}
function pressedRock() {
    result="rock"
    return winCondition(result)
}
function pressedPaper() {
    result="paper"
    return winCondition(result)
}
function pressedScissors() {
    result="scissors"
    return winCondition(result)
}

function winCondition(result) {
    const options = ["rock", "paper", "scissors"]
    const cpu= options[Math.floor(Math.random() * options.length)]
    if (result === cpu ) {
        console.log("empate")
    } else if (
        (result == "rock" && cpu =="paper") || (result == "paper" && cpu == "rock") || (result == "scissors" && cpu == "paper") 
    ) {
        playerScore+=1;
        console.log("player win"+playerScore)
    } else {
        cpuScore+=1;
        console.log("cpu win"+cpuScore)
    }
}