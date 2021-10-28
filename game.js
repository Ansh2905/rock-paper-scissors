function computerPlay(){
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

let playerWins = 0;
let computerWins = 0;


container = document.getElementById('container');
const div = document.createElement('div');
container.appendChild(div);
const score = document.createElement('p');
score.classList = "whiteText gameName smallerFont removeAtEnd";
score.textContent = "Current score:     You: " + playerWins + "     Computer: " +  computerWins;
div.appendChild(score);


const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);
const roundWinner = document.createElement('p');
const gameWinner = document.createElement('p');
roundWinner.classList = 'whiteText gameName smallerFont removeAtEnd';
gameWinner.classList = 'whiteText gameName smallerFont winnerText';

function playRound(e)
{
    if(playerWins != 5 && computerWins != 5)
    {
        let computerSelection = computerPlay();
        let playerSelection = e.target.id;
        if(playerSelection === computerSelection){
            roundWinner.textContent = "Tied round!";
        }
        else{
            if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || 
                (playerSelection === "scissors" && computerSelection === "paper"))
            {
                playerWins++;
                roundWinner.textContent = "You won that round!";
            }
            else{
                computerWins++;
                roundWinner.textContent = "You lost that round.";
            }
        }
        if(playerWins != 5 && computerWins != 5)
        {
            div.appendChild(roundWinner);
            score.textContent = "Current score:\nYou: " + playerWins + "  Computer: " +  computerWins;
            div.appendChild(score);
        }
        if(playerWins == 5 || computerWins == 5)
        {
            instructions = container.querySelectorAll('.instructions');
            instructions.forEach(instruction => container.removeChild(instruction));
            remove = div.querySelectorAll('.removeAtEnd');
            remove.forEach(item => div.removeChild(item));
            if(playerWins == 5)
            {
                gameWinner.textContent = "You won the game!";
            }
            else
            {
                gameWinner.textContent = "You lost the game :(";
            }
            div.appendChild(gameWinner);
        }
    }
}