let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
  }
else (playerInput == '3'){
    playerMove = 'nożyce';
  }
printMessage('Twój ruch to: ' + playerMove);

let computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

else if computerMove = 'papier';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');

else computerMove = 'nożyce';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to kamień, to wygrywasz!');

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }
else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
}
else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Wygrywa Komputer!');
}
else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Wygrywa Komputer!');
}
else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Wygrywa Komputer!');
}