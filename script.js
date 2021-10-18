function computerPlay() {
    let randomNum = (Math.random()*100)
    if (randomNum <= 33){
        return 'Rock'
    }
    else if (randomNum <= 66){
        return 'Paper'
    }
    else {
        return 'Scissors'
    }
}

function computerLog() {
    console.log(computerPlay())
}