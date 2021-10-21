actionButtons = document.querySelectorAll('.action');
actionButtons.forEach(btn => {
    btn.addEventListener('click', playRound)
});

playAgainButton = document.querySelector('#play-again-btn')
playAgainButton.addEventListener('click', playAgain)

consoleDiv = document.querySelector('#console');
humanScore = document.querySelector('#human-score');
computerScore = document.querySelector('#computer-score');

let playing = true;

function computerPlay() {
    let randomNum = (Math.random()*100)
    if (randomNum <= 33){
        return 'rock'
    }
    else if (randomNum <= 66){
        return 'paper'
    }
    else {
        return 'scissors'
    }
}

// IF player rock AND computer scissors THEN player wins
// IF player paper AND computer rock THEN player wins
// IF player scissors AND computer paper THEN player wins

function playerWins(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')){
        return true
    }
    else {
        return false
    }
}

function playerTies(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return true
    }
    else {
        return false
    }
}

function incrementScore(playerWon){
    if (playerWon){
        let humanWinTotal = parseInt(humanScore.textContent);
        humanScore.textContent = humanWinTotal + 1;
    }
    else {
        let computerWinTotal = parseInt(computerScore.textContent);
        computerScore.textContent = computerWinTotal + 1;
    }

}

function playAgain(e) {
    playing = true;
    playAgainButton.classList.toggle('hidden')
    computerScore.textContent = 0;
    humanScore.textContent = 0;
    let header = document.createElement('h1');
    header.textContent = "A new game begins!"
    header.style.color = "hotpink";
    header.style.margin = '0px'
    header.style.fontSize = '24px'
    consoleDiv.prepend(header);
    
}

function playRound(e) {


    if (!playing) {
        alert("Start a new game to play again!")
        return
    }

    let para = document.createElement('p')
    let computerSelection = computerPlay();
    let playerSelection = e.target.id
    // playerSelection is passed as lowercase
    if (playerWins(playerSelection, computerSelection)) {
        para.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        incrementScore(true);

    }
    else if (playerTies(playerSelection, computerSelection)){
        para.textContent =  `It's a tie! Both player and computer selected ${playerSelection}`

    }
    else {
        para.textContent =  `You Lose! ${computerSelection} beats ${playerSelection}`
        incrementScore(false);
    };
    
    consoleDiv.prepend(para)

    let playerWinCount = parseInt(humanScore.textContent);
    let computerWinCount = parseInt(computerScore.textContent);
    
    if (computerWinCount === 5 || playerWinCount === 5) {
        let header = document.createElement('h1');
        header.style.margin = '0px'
        header.style.fontSize = '24px'
        if (computerWinCount === 5) {
            header.textContent = 'Game Over, Computer Won!';
        }
        else {
            header.textContent = 'Game Over, Player Won!';
        }
        consoleDiv.prepend(header);
        playing = false;
        
        playAgainButton.classList.toggle('hidden')
        return;
    }

}

// function playGame() {
//     let playing = true;

//     while (playing) {

//     }
// }

function isValidInput(input) {
    if (input === 'rock' || input === 'paper' || input === 'scissors') {
        return true
    }
    else {
        return false
    }
}

function promptPlayerPlay() {
    let response = prompt('Choose your weapon! Type "Rock"/"r", "Paper"/"p", or "Scissors"/"s" (Case insensitive)')?.toLowerCase() ?? null
    switch(response){
        case 'r':
            return 'rock';
        case 'p':
            return 'paper';
        case 's':
            return 'scissors';
    }
    return response
}