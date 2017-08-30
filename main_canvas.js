'use strict';
const canvasContext = document.getElementById("canvas").getContext("2d");

let matrix = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

const TILESIZE = 10;
const TILEBORDER_WIDTH = 2;
const TOTAL_BORDERLINES = (TILESIZE * 2) - 2;
const BOARDWIDTH = 600;
const BOARDHEIGHT = 600;
const SPACING = BOARDWIDTH / (TOTAL_BORDERLINES/2 + 1);

function initBoard(){
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 0; i < TOTAL_BORDERLINES; i++){
    if(i < TOTAL_BORDERLINES/2){
      canvasContext.fillRect(SPACING * (i + 1),0, TILEBORDER_WIDTH, BOARDHEIGHT);
    }else{
      canvasContext.fillRect(0,SPACING * (i - TOTAL_BORDERLINES/2 + 1), BOARDWIDTH, TILEBORDER_WIDTH);
    }
  }
}

initBoard();
