'use strict';
const canvasContext = document.getElementById("canvas").getContext("2d");

let matrix = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

const TILESIZE = 3;
const TILEBORDER_WIDTH = 2;
const TOTAL_BORDERLINES = (TILESIZE * 2) - 2;
const BOARDSIZEPX = 300;
const SPACING = BOARDSIZEPX / (TOTAL_BORDERLINES/2 + 1);

function initBoard(){
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 0; i < TOTAL_BORDERLINES; i++){
    if(i < TOTAL_BORDERLINES/2){
      canvasContext.fillRect(SPACING * (i + 1),0, TILEBORDER_WIDTH, BOARDSIZEPX);
    }else{
      canvasContext.fillRect(0,SPACING * (i - TOTAL_BORDERLINES/2 + 1), BOARDSIZEPX, TILEBORDER_WIDTH);
    }
  }
}

initBoard();
