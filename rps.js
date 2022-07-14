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
                computerScore++;
                return "You Lose! Paper beats Rock";
            } else if( computerSelection == "scissors" ) {
                playerScore++;
                return "You Win! Rock beats Scissors";
            }    
            break;
        //Paper conditions
        case "paper":
            if( computerSelection == "rock") {
                playerScore++;
                return "You Win! Paper beats Rock";
            } else if( computerSelection == "scissors" ) {
                computerScore++;
                return "You Lose! Scissors beats Paper";
            }    
            break;
        //Scissors conditions
        case "scissors":
            if( computerSelection == "rock") {
                computerScore++;
                return "You Lose! Rock beats Scissors";
            } else if( computerSelection == "paper" ) {
                playerScore++;
                return "You Win! Scissors beats Paper";
            }    
            break;
        //invalid
        default:
            return "Invalid selection. Try again.";
            break;
    }

  }

  function getResult(e) {
        const results = document.querySelector('div.results');
        const newResult = document.createElement('div');
        newResult.innerText = playRound(this.innerText.toLowerCase(), computerPlay().toLowerCase() );
        results.appendChild(newResult);
        tallyScore();
    }

  function game() {
     const buttons = document.querySelectorAll('button');
     buttons.forEach( (button) => {
        button.addEventListener('click', getResult);
     });
  }

  function tallyScore() {
    const winner = document.querySelector('div.winner');
    const score = document.querySelector('div.score');
    winner.innerText = "";
    score.innerText = `${playerScore} - ${computerScore}`;
    if( playerScore >= 5 ) {
        winner.innerText = "PLAYER WINS!";
        playerScore = 0;
        computerScore = 0;
    }
    if( computerScore >= 5 ) {
        winner.innerText ="COMPUTER WINS!";
        playerScore = 0;
        computerScore = 0;
    }
  }

  let playerScore = 0;
  let computerScore = 0;
  game();