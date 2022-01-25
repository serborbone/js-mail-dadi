let randomNumbOne = Math.floor(Math.random() * 6) + 1;
let randomNumbTwo = Math.floor(Math.random() * 6) + 1;

//numero random per giocatore uno
let playerOne = randomNumbOne;

//numero random per giocatore due
let playerTwo = randomNumbTwo;

/*se il numero di giocatore uno è maggiore 
del numero di giocatore due*/

if (randomNumbOne > randomNumbTwo) {

  alert('Giocatore Uno ha vinto!');

} else {

  alert('Giocatore Due ha vinto!');
  
}