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

function playRound(playerSelection, computerSelection) {
    // playerSelection is passed as lowercase
    if (playerWins(playerSelection, computerSelection)) {
        //console.log(`You Win! ${playerSelectionLower} beats ${computerSelection}`);
        return "win";
    }
    else if (playerTies(playerSelection, computerSelection)){
        //console.log(`It's a tie! Both player and computer selected ${playerSelectionLower}`);
        return "tie";
    }
    else {
        //console.log(`You Lose! ${computerSelection} beats ${playerSelectionLower}`);
        return "lose";
    };
}

function game() {
    let playerSelectionLower = playerSelection.toLowerCase()
    let playerWins = 0
    let computerWins = 0
    let ties = 0
    for (i=0; i < 5; i++){
        let computerSelection = computerPlay()
        let result = playRound(playerSelectionLower, computerSelection)
        if (result === 'win'){
            console.log(`You Win! ${playerSelectionLower} beats ${computerSelection}`);
            playerWins += 1;
        }
        else if (result === 'tie'){
            console.log(`It's a tie! Both player and computer selected ${playerSelectionLower}`);
            ties += 1;
        }
        else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelectionLower}`)
            computerWins += 1;
        }
    }
    console.log(`Results are in! Player won ${playerWins} rounds, Computer won ${computerWins} round, and there were ${ties} ties!`)
    if (playerWins > computerWins) {
        console.log("Player won more rounds; therefore, the game! Congratulations")
    }
    else if (playerWins === 0 && computerWins === 0) {
        console.log("Every round was a tie. An even match!")
    }
    else if (playerWins === computerWins){
        console.log("Players won and tied an equal amount. An even match!")
    }
    else {
        console.log("Computer wins. Better luck next time!")
    };
}


game()
// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));