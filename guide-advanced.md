# Tic-Tac-Toe workshop
## Guide - advanced

Script:
In this workshop we will be creating the Tic-Tac-Toe game, to achieve this,
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


#### Render function

Goal: create a function (and some helper functions) that receives a board (2D array) as an input and draws it to the canvas.

- draw an O
<details>
 <summary>Help for drawing the O</summary>
https://www.w3schools.com/tags/canvas_arc.asp
</details>
<br>

- draw an X
<details>
 <summary>Help for drawing the X</summary>
https://stackoverflow.com/a/12835725/2020696
</details>
<br>  

- draw each element on the board  
You will probably need something that looks like a double for loop (or forEach). You will also need to know the coordinates where you need to draw the shape.
<details>
 <summary>Hint</summary>
You will probably need to calculate the center of the cell you what to draw in based on the coordinates of it. (Like the center of the first cell if each cell (coordinates 0,0) has a height and width of 100) is at 50,50.  
The code will probably resemble this:  
```
var cellCenterX = boardX * tileSize + tileSize/2
```
</details>
