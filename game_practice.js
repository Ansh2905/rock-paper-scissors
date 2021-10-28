let rock = document.getElementById('rock');
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors');
let container = document.getElementById('container');

rock.addEventListener('click', displayResults);
paper.addEventListener('click', displayResults);
scissors.addEventListener('click', displayResults);


let playerWin = 0;
let computerWin = 0;
let roundResults = document.createElement('p');
roundResults.classList = "whiteText gameName smallerFont";

let div = document.createElement('div');
let score = document.createElement('p');
score.textContent = "Current score: You: " + playerWin + " Computer: " + computerWin;
score.classList = "whiteText gameName smallerFont";
div.appendChild(score);
container.appendChild(div);

function computerPlay(){
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(e) {
    let playerSelection = e.target.id;
    computerSelection = computerPlay();
    if(playerSelection == computerSelection)
    {
        roundResults.textContent = "Tied Round!"
    }
    else if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper"))
    {
        playerWin++;
        roundResults.textContent = "You won that round!";
    }
    else
    {
        computerWin++;
        roundResults.textContent = "You lost that round!";
    }
    if(playerWin == 5 || computerWin == 5)
    {
        if(playerWin == 5)
        {
            roundResults.textContent = "You won the game!";
        }
        else
        {
            roundResults.textContent = "You lost the game!";
        }
    }
    return roundResults;
}

function displayResults (e) {
    let roundResults = playRound(e);
    console.log(roundResults);
    if(roundResults.textContent == "You won the game!" || roundResults.textContent == "You lost the game!")
    {
        instructions = container.querySelectorAll('.instructions');
        instructions.forEach(instruction => container.removeChild(instruction));
        div.classList = "gameName whiteText winnerText";
        div.removeChild(score);
        div.textContent = roundResults.textContent;
        container.appendChild(div);
    }
    div.insertBefore(roundResults, score);
    score.textContent = "Current score: You: " + playerWin + " Computer: " + computerWin;
}
