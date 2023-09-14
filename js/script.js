//start game
function playGame(playerChoice) {
    let playerMove = getPlayerMove(playerChoice);
    let computerMove = getComputerMove();
    displayResult(computerMove, playerMove);
}

//player input
function getPlayerMove(playerChoice){
    let playerMove = 'Nieznany ruch';

    if (playerChoice == 'rock') {
        playerMove = 'kamień';
    } 
    else if (playerChoice == 'paper') {
        playerMove = 'papier';
    }
    else if (playerChoice == 'scissors') {
        playerMove = 'nożyce';
    }
    else {
        printMessage (playerMove + '!');
    }
    return playerMove;
}
//computer move
function getComputerMove (){
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to:' + randomNumber);

    let computerMove = 'nieznany ruch';
    if (randomNumber == 1) {
        computerMove = 'kamień';
    }
    if (randomNumber == 2) {
        computerMove = 'papier';
    }
    if (randomNumber == 3) {
        computerMove = 'nożyce';
    }
    return computerMove;
}
//result
function displayResult (computerMove, playerMove){
    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

    if (computerMove == 'kamień' && playerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    }
    else if (computerMove == 'papier' && playerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
    }
    else if (computerMove == 'nożyce' && playerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    }
    else if (computerMove == 'kamień' && playerMove == 'nożyce') {
        printMessage('Tym razem przegrywasz :(!');
    }
    else if (computerMove == 'papier' && playerMove == 'kamień') {
        printMessage('Tym razem przegrywasz :(!');
    }
    else if (computerMove == 'nożyce' && playerMove == 'papier') {
        printMessage('Tym razem przegrywasz :(!');
    }
    else if (computerMove == 'kamień' && playerMove == 'kamień') {
        printMessage('Remis!');
    }
    else if (computerMove == 'papier' && playerMove == 'papier') {
        printMessage('Remis!');
    }
    else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
        printMessage('Remis!');
    } else printMessage ('Nie dokonałeś właściwego wyboru!')
    document.getElementById('messages').innerHTML += '<hr>';
}

document.getElementById('rock').addEventListener('click', function () {
    playGame('rock');
});

document.getElementById('paper').addEventListener('click', function () {
    playGame('paper'); 
});

document.getElementById('scissors').addEventListener('click', function () {
    playGame('scissors'); 
});