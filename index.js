function computerPlay(){
    const cpuSelection = ["Rock","Paper", "Scissors"]
    return cpuSelection[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, cpuSelection){

    let player = playerSelection.toLowerCase();
    let computer = cpuSelection.toLowerCase();

    if(player == 'rock'){
        if (computer == 'paper'){
            return "You Lose! Paper beats Rock"
        }
        else if(computer == 'scissors'){
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
            return "You Won! Scissor beats Paper"
        }
        else{
            return "TIEEEEE"
        }
    }
}

function game(){
    for(let i = 0;i<5;i++){
        let computerSelection = computerPlay();
        let userSelection = prompt("You choose?");
        
        console.log(playRound(userSelection,computerSelection))
    }
}
game()

