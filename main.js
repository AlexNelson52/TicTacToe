const row = document.querySelectorAll('.rows')
const h1Text = document.querySelector('.headerText')
const newGameBtn = document.querySelector('.newGameBtn')

const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];
  return {board}
})();

const player = (name, marker) => {
  return {name,marker}
}

const player1 = player('Player 1', 'X');
const player2 = player('Player 2', 'O');

const playGame = (() =>{
  const {board} = gameBoard;

  let marker = ''

  function playerTurn(e){

    if(gameWinnerCondition(board) === true){
      return} else {
    if(board[e.getAttribute('id')] !== 'X' && board[e.getAttribute('id')] !== 'O' ){
    if(marker === ''){
      h1Text.textContent = "Player 2's Turn"
      marker = player1.marker
      e.textContent = player1.marker
      board.splice(e.getAttribute('id'),1,marker);
    } else {
    if(marker === player1.marker){
      h1Text.textContent = `${player1.name}'s Turn`
      marker = player2.marker
     e.textContent = player2.marker
     board.splice(e.getAttribute('id'),1,marker);

    } else
    if(marker === player2.marker){
      h1Text.textContent = `${player2.name}'s Turn`
      marker = player1.marker
      e.textContent = player1.marker
      board.splice(e.getAttribute('id'),1,marker);
    } 
    
    return gameWinnerCondition(board)
  }
    }
  }

}

function gameWinnerCondition(input){

    if(input[0] === 'X' && input[1] === 'X' && input[2] === 'X' && input[0,1,2] !== 'O' && input[0,1,2] !== ''){
      h1Text.textContent = `${player1.name} Wins`
     return true
} else 
    if(input[1] === 'X' && input[4] === 'X' && input[7] === 'X' && input[1,4,7] !== 'O' && input[1,4,7] !== ''){
      h1Text.textContent = `${player1.name} Wins`
     return true
} else 
    if(input[0] === 'X' && input[3] === 'X' && input[6] === 'X'  && input[0,3,6] !== 'O' && input[0,3,6] !== ''){
      h1Text.textContent = `${player1.name} Wins`
     return true
} else 
    if(input[6] === 'X' && input[7] === 'X' && input[8] === 'X' && input[6,7,8] !== 'O' && input[6,7,8] !== ''){
      h1Text.textContent = `${player1.name} Wins`
     return true
} else 
    if(input[3] === 'X' && input[4] === 'X' && input[5] === 'X' && input[3,4,5] !== 'O' && input[3,4,5] !== ''){
      h1Text.textContent = `${player1.name} Wins`
     return true
} else 
    if(input[2] === 'X' && input[4] === 'X' && input[6] === 'X' && input[2,4,6] !== 'O' && input[2,4,6] !== ''){
      h1Text.textContent = `${player1.name} Wins`
     return true
} else 
    if(input[0] === 'X' && input[4] === 'X' && input[8] === 'X'&& input[0,4,8] !== 'O' && input[0,4,8] !== ''){
      h1Text.textContent = `${player1.name} Wins`
      return true
} else 
    if(input[0] === 'O' && input[1] === 'O' && input[2] === 'O'  && input[0,1,2] !== 'X' && input[0,1,2] !== ''){
      h1Text.textContent = `${player2.name} Wins`
     return true
} else 
    if(input[1] === 'O' && input[4] === 'O' && input[7] === 'O' && input[1,4,7] !== 'X' && input[1,4,7] !== ''){
      h1Text.textContent = `${player2.name} Wins`
      return true
} else 
    if(input[0] === 'O' && input[3] === 'O' && input[6] === 'O' && input[0,3,6] !== 'X' && input[0,3,6] !== ''){
      h1Text.textContent = `${player2.name} Wins`
      return true
} else 
    if(input[6] === 'O' && input[7] === 'O' && input[8] === 'O' && input[6,7,8] !== 'X' && input[6,7,8] !== ''){
      h1Text.textContent = `${player2.name} Wins`
     return true
} else 
    if(input[3] === 'O' && input[4] === 'O' && input[5] === 'O' && input[3,4,5] !== 'X' && input[3,4,5] !== ''){
      h1Text.textContent = `${player2.name} Wins`
     return true
} else 
    if(input[2] === 'O' && input[4] === 'O' && input[6] === 'O'&& input[2,4,6] !== 'X' && input[2,4,6] !== ''){
      h1Text.textContent = `${player2.name} Wins`
     return true
}
  else 
    if(input[0] === 'O' && input[4] === 'O' && input[8] === 'O'&& input[0,4,8] !== 'X' && input[0,4,8] !== ''){
      h1Text.textContent = `${player2.name} Wins`
     return true
  } else
  if (input[0] !== '' && input[1] !== '' && input[2] !== '' && input[3] !== '' && input[4] !== '' && input[5] !== '' && input[6] !== '' && input[7] !== '' && input[8] !== '') {
    h1Text.textContent = "DRAW!"};
  }

newGameBtn.addEventListener('click', () => {

  for(let i = 0; i < row.length; i++){
    row[i].textContent = ''
  }
  for(let j = 0; j < board.length; j++){
    board[j] = ''
  }
  h1Text.textContent = 'Tic Tac Toe'
  marker = ''

})

row
  .forEach(e => {
    e.addEventListener('click', () => {
      playerTurn(e)
  })
  
  })

  return{playerTurn, gameWinnerCondition}
})();
