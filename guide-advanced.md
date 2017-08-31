# Tic-Tac-Toe workshop
## Guide - advanced

Script:
In this workshop we will be creating the Tic-Tac-Toe game (for simplicity start with a 3*3 board, if you will have time you can extend your solution further), to achieve this,
you will need to go through these steps:
- create a board representation
- decide how you will display the board for the user
- draw the separator lines for the board

If you take a look at **[main.js](/starter-advanced/main.js)** we have done these for you. The board is represented in a variable called _matrix_, as a two dimensional array, we choose a canvas to display the game state for the user (to interact with it, use the _canvasContext_), and we prepared an _initBoard_ function that draws the separator lines on the board (depending on the TILESIZE variable).

#### You will need to create the following:
- a render function ([details](#render-function))  
**specs:** receives a board (2D array) as input, and represents it in the DOM.  
**sub-steps:**
  - draw an O
  - draw an X
  - loop through each element in the 2D matrix and draw the correct element on the correct position
  - do not forget to clean the board when you want to draw a new state on the UI
- move function ([details](#move-function))  
**specs:** receives the player ('X' or 'O') the coordinates of the move and executes the move if it is valid  
**sub-steps:**
  - store the current player
  - create a function that checks if a move is valid
  - create a function that add the move to the board matrix
  - switch player if the move was valid
- event listener ([details](#event-listener))  
**specs:** based on the click or mouseup event add a move to our board representation
**sub-steps:**
  - add an event-listener to the board
  - add a method that logs “YOLO” if you click the board
  - add a method that logs coordinates clicked within the board if you click the board
  - get the tile coordinates from the pixel coordinates
  - connect with the setter
  - check if the move was added to the correct place in the board array after the click
- checker ([details](#checker))  
**specs:** create a function that checks if the game was won or not
**sub-steps:**
  - check the matrix vertically
  - check horizontally
  - check diagonals



## Details

### Render function

Goal: create a function (and some helper functions) that receives a board (2D array) as an input and draws it to the canvas.

- **draw an O**
<details>
 <summary>Help for drawing the O</summary>
https://www.w3schools.com/tags/canvas_arc.asp
</details>
<br>

- **draw an X**
<details>
 <summary>Help for drawing the X</summary>
https://stackoverflow.com/a/12835725/2020696
</details>
<br>  

- **draw each element on the board**  
You will probably need something that looks like a double for loop (or forEach). You will also need to know the coordinates where you need to draw the shape.
<details>
 <summary>Hint</summary>
You will probably need to calculate the center of the cell you what to draw in based on the coordinates of it. (Like the center of the first cell if each cell (coordinates 0,0) has a height and width of 100) is at 50,50.  
The code will probably resemble this:  
```
var cellCenterX = boardX * tileSize + tileSize/2
```
</details>
<br>

- **clean the board**
<details>
  <summary>Hint</summary>
  Probably you could take use of [clearRect](https://github.com/LetsCodeBP/the-snake-workshop/blob/master/reference.md#clear-the-board) function defined on the canvas context.
</details>

### Move function

Goal: create a set of functions that handle a move being added to our game representation.

- **store the current player**
<details>
 <summary>Hint</summary>
Storing 'X or 'O' will probably be sufficient in a place where all of our desired functions can access it.
</details>
<br>  

- **create a function that checks if a move is valid**
<details>
 <summary>Hint</summary>
New move can only be executed if the place where we what to place a move is empty.
You should probably also check if the move position is within the board or not.
</details>
<br>

- **create a function that adds the move to the board matrix**
- **switch player if the move was valid**

### Event listener

Goal: write code that connects the UI and the game. If a player clicks a tile, register the move (if it is a valid one) in the game representation (our 2D matrix).

- **add an event-listener to the board**
<details>
 <summary>Hint</summary>
More on event listeners: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
</details>
<br>

- **add a method that logs “YOLO” if you click the board**
- **add a method that logs coordinates clicked within the board if you click the board**
<details>
 <summary>Hint</summary>
You will probably what to use .offsetX and .offsetY on the [event object](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
</details>
<br>

- **get the tile coordinates from the pixel coordinates**
<details>
 <summary>Hint</summary>
If you cannot think of anything better you could use something along the lines of this:  
```
boardX = parseInt(clickPixelX / boardSizePX * boardTileCount)
```
</details>
<br>

- **connect with the setter**
- **check if the move was added to the correct place in the board array after the click**
<details>
 <summary>Hint</summary>
You can use the developer console (console.log() or console.table()) or you can simply call the render function after a move was made.
</details>
<br>

### Checker

Goal: write a function that checks if the game was won by a player.  
General recommended approach: your sub-functions (vertical, horizontal, diagonal checker) should assemble strings that they pass to a generic checker function.  
How to check: if we assume that the board is 3*3, the you should check that there are no empty spots in the string (if the non moved tile is represented as ' ') or if the string length is 3 (if the non moved tile is represented as '') AND the string only contains the same characters (X 's or O's).
