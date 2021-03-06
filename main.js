'use strict';
let nextPlayer = document.querySelector('.current-player');
const board = document.querySelector(".board");
const resetButton = document.querySelector('.reset-button');
let gamerunning = true;

let matrix = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

let player = 'X'

function addRowToBoard(board, rowClassName) {
  const row = document.createElement("tr")
  board.appendChild(row)
  row.className = 'row' + rowClassName
}


function addCellToRow(row, cellClassName, cellValue) {
  const cell = document.createElement("td")
  row.appendChild(cell)
  cell.className = cellClassName
  cell.innerHTML = cellValue
}

function cellClassNameCreator(rowIndex, columnIndex){
  return 'cell-' + rowIndex + '-' + columnIndex
}

function renderBoard(board, matrix) {
  matrix.forEach((row, rowIndex) => {
    addRowToBoard(board, rowIndex)
    const rowElement = document.querySelector('.row' + rowIndex)
    row.forEach((item, itemIndex) => {
      let className = cellClassNameCreator(rowIndex, itemIndex)
      addCellToRow(rowElement, className, item)
    })
  })
  addEventListener()
}

function addEventListener(){
  board.addEventListener('click', function(e){
      getPositionFromClass(e.target.className);
    })
}

function getPositionFromClass(nodeClass){
  let className = nodeClass;
  nodeClass = nodeClass.split('-');
  let positionX = parseInt(nodeClass[1]);
  let positionY = parseInt(nodeClass[2]);
  let position = []
  position.push(positionX);
  position.push(positionY);
  addMove(position, className);
}

function setPlayer(){
  if (player === 'X'){
    player = 'O'
  } else {
    player = 'X'
  }
}

function playerChanger(){
    nextPlayer.innerHTML = 'Turn for' + ' ' + player;
}

function setMatrix(matrix, position, className){
  let setClass = document.getElementsByClassName(className);
  if (setClass[0].innerHTML === ''){
    matrix[position[0]][position[1]] = player;
    setClass[0].innerHTML = player;
    checkWinner(matrix);
    if (gamerunning === true){
      setPlayer();
      playerChanger();
    }
    console.log(matrix)
  }
}

function addMove(position, className){
  if (gamerunning === true){
    setMatrix(matrix, position, className);
  }
}

function checkWinner(matrix){
  isLineWin(matrix);
  isColumnWin(matrix);
  isAnyDiagonalWin(matrix);
  if (gamerunning === true){
    noEmptyPlace(matrix);
  }
}

function isLineWin(matrix){
  const tableElements = document.querySelectorAll("tr");
  for(let i = 0; i < matrix.length; i++){
    if (matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2] && matrix[i][0] !== ''){
      isWon();
    }
  }
}

function isColumnWin(matrix){
  for(let j = 0; j < matrix.length; j++){
    if (matrix[0][j] === matrix[1][j] && matrix[1][j] === matrix[2][j] && matrix[0][j] !== ''){
      isWon();
    }
  }
}

function isAnyDiagonalWin(matrix){
  if(matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] && matrix[0][0] !== '' || matrix[2][0] === matrix[1][1] && matrix[1][1] === matrix[0][2] && matrix[2][0] !== '' ){
      isWon();
  }
}

function noEmptyPlace(matrix){
  if(matrix[0].includes('') === false && matrix[1].includes('') === false && matrix[2].includes('') === false){
    gamerunning = false;
    nextPlayer.innerHTML = 'Draw';
    resetButton.innerHTML = 'New game';
    resetButton.addEventListener('click', gameOver);
    board.className = "board";
  }
}

function gameOver(matrix){
  console.log('gameover');
  board.className = "animated flip";
  player = 'X';
  playerChanger();
  gamerunning = true;
  resetButton.innerHTML = 'Reset';
}

function reset(){
  if (gamerunning = true){
    console.log('reset');
    const tableElements = document.querySelectorAll("td");
    for(var i = 0; i < tableElements.length; i++){
      tableElements[i].innerHTML = '';
    }
    matrix = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
    player = 'X';
    playerChanger();
  }
}

function isWon(){
  console.log(player);
  board.className = "board";
  gamerunning = false;
  nextPlayer.innerHTML = 'Winner is player' + ' ' + player;
  resetButton.innerHTML = 'New game';
  resetButton.addEventListener('click', gameOver);
}


renderBoard(board, matrix);
resetButton.addEventListener('click', reset);