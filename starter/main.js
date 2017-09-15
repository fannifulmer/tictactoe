'use strict';
const board = document.querySelector(".board");

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

function setPlayer(){
  if (player === 'X'){
    player = 'O'
  } else {
    player = 'X'
  }
}

function playerChanger(){
  let nextPlayer = document.querySelector('h1');
    nextPlayer.innerHTML = 'Turn for' + ' ' + player;
}

function setMatrix(matrix, position, className){
  matrix[position[0]][position[1]] = player;

  let setClass = document.getElementsByClassName(className);
  if (setClass[0].innerHTML === ''){
    setClass[0].innerHTML = player;  
    isLineWin(matrix);
    isColumnWin(matrix);
    isAnyDiagonalWin(matrix);
    setPlayer();
  }
}

function addMove(position, className){
  setMatrix(matrix, position, className);
  playerChanger();
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

function addEventListener(){
  board.addEventListener('click', function(e){
      getPositionFromClass(e.target.className);
    })
}

function isLineWin(matrix){
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

function isWon(){
  console.log('win' + player);
}

renderBoard(board, matrix);
