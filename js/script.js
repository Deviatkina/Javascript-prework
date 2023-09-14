//player input

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'Nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
} 
else if (playerInput == '2') {
    playerMove = 'papier';
}
else if (playerInput == '3') {
    playerMove = 'nożyce';
}
else {
    printMessage (playerMove + '!');
}
//computer move
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
//result
function displayResult ( computerMove, playerMove){
    printMessage ('Zagrałem ' + computerMove + ', a Ty ' + playerMove + '!');

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
} else printMessage ('Nie dokonałeś wyboru!')
}
