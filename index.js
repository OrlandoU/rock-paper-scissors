function computerPlay(){
    const cpuSelection = ["Rock","Paper", "Scissors"]
    return cpuSelection[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, cpuSelection){
    let player = playerSelection.toLowerCase();
    let computer = cpuSelection.toLowerCase();
    let counterBoard = document.querySelector('.currentScore')

    if(player == 'rock'){
        if (computer == 'paper'){
            return "You Lose! Paper beats Rock"
        }
        else if(computer == 'scissors'){
            counter++
            counterBoard.textContent = counter
            return "You Won! Rock beats Scissors"
        }
        else{
            return "TIEEEEE"
        }
    }
    else if (player == 'paper'){
        if (computer == 'scissors'){
            return "You Lose! Scissors beats Paper"
        }
        else if(computer == 'rock'){
            counter++
            counterBoard.textContent = counter
            return "You Won! Paper beats Rock"
        }
        else{
            return "TIEEEEE"
        }
    }
    else{
        if (computer == 'rock'){
            return "You Lose! Rock beats Scissors"
        }
        else if(computer == 'paper'){
            counter++
            counterBoard.textContent = counter
            return "You Won! Scissor beats Paper"
        }
        else{
            return "TIEEEEE"
        }
    }
}
function restartGame(){

}

function game(){
    let computerSelection = computerPlay();
    let userSelection = this.dataset.option
    document.querySelector('.result').textContent = (playRound(userSelection,computerSelection));
    this.addEventListener('transitionend', removeClass) 
    this.classList.add('onclicky')
}
function removeClass(e){
    this.classList.remove('onclicky')
}
let counter = 0;
const options = document.querySelectorAll('.selection');
options.forEach(option=>option.addEventListener('click',game))

