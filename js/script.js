//player input

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'Nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
    printMessage ('Twój ruch to ' + playerMove + '!');
} 
else if (playerInput == '2') {
    playerMove = 'papier';
    printMessage ('Twój ruch to ' + playerMove + '!');
}
else if (playerInput == '3') {
    playerMove = 'nożyce';
    printMessage ('Twój ruch to ' + playerMove + '!');
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
    printMessage ('Ruch computera to ' + computerMove + '!');
}
if (randomNumber == 2) {
    computerMove = 'papier';
    printMessage ('Ruch computera to ' + computerMove + '!');
}
if (randomNumber == 3) {
    computerMove = 'nożyce';
    printMessage ('Ruch computera to ' + computerMove + '!');
}
//result

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
    printMessage('Wygrywa Komputer!');
}
else if (computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('Wygrywa Komputer!');
}
else if (computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('Wygrywa Komputer!');
}
else {
    printMessage('Remis!');
}
