const rock = document.getElementById('btn-1');
const paper = document.getElementById('btn-2');
const scissors = document.getElementById('btn-3');

window.addEventListener("DOMContentLoaded", pressButton);

function pressButton() {  
    rock.addEventListener('click', (event)=> pressedRock(event,rock)),
    paper.addEventListener('click', (event)=> pressedPaper(event,paper)),
    scissors.addEventListener('click', (event)=> pressedScissors(event,scissors)
);
}

function pressedRock(event, pos) {
    let result="rock"
    return result
}
function pressedPaper(event, pos) {
    let result="paper"
    return result
}
function pressedScissors(event, pos) {
    let result="scissors"
    return result
}

const options = ["rock", "paper", "scissors"]
const cpu= options[Math.floor(Math.random() * options.length)]

