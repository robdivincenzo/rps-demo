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

    //Rock conditions
    if( playerSelection == "rock" ) {
        if( computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
        } else if( computerSelection == "scissors" ) {
            return "You Win! Rock beats Scissors";
        }
    }
    
    //Paper conditions
    if( playerSelection == "paper" ) {
        if( computerSelection == "rock") {
            return "You Win! Paper beats Rock";
        } else if( computerSelection == "scissors" ) {
            return "You Lose! Scissors beats Paper";
        }
    }

    //Scissors conditions
    if( playerSelection == "scissors" ) {
        if( computerSelection == "rock") {
            return "You Lose! Rock beats Scissors";
        } else if( computerSelection == "paper" ) {
            return "You Win! Scissors beats Paper";
        }
    }


  }
   
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase() ) );
  