function computerPlay() {
    const play = Math.floor( Math.random() * 3 );
    switch(play) {
        case 0:
            return "Rock";
            break;
        case 1:
           return "Paper";
           break;
        case 2:
            return "Scissors";
            break;
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    // if draw, return draw
    if( playerSelection == computerSelection ) {
        return "Draw!";
    }

    switch( playerSelection ){
        //Rock conditions
        case "rock":
            if( computerSelection == "paper") {
                return "You Lose! Paper beats Rock";
            } else if( computerSelection == "scissors" ) {
                return "You Win! Rock beats Scissors";
            }    
            break;
        //Paper conditions
        case "paper":
            if( computerSelection == "rock") {
                return "You Win! Paper beats Rock";
            } else if( computerSelection == "scissors" ) {
                return "You Lose! Scissors beats Paper";
            }    
            break;
        //Scissors conditions
        case "scissors":
            if( computerSelection == "rock") {
                return "You Lose! Rock beats Scissors";
            } else if( computerSelection == "paper" ) {
                return "You Win! Scissors beats Paper";
            }    
            break;
        //invalid
        default:
            return "Invalid selection. Try again.";
            break;
    }

  }
   
  function game() {
  
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick rock, paper, scissors");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase() ) );
     }
     
  }

  game();