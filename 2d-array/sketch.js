// 2D Array
// Amy Zhang
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// - Attributes to DANI MACCARI for sprites

const COLS = 8;
const ROWS = 8;
const BOARD = Array(ROWS).fill().map(() => Array(COLS).fill(0));

function setup() {
  createCanvas(400, 400);
  for (let j = 0; j  < 3; j++) {
    for (let i = 0; i < cols; i++) {
      if ( i % 2 !== j % 2) {
        board[j][i] = 2;
      }
    }
  }
  for (let j = ROWS-3; j < ROWS; j++) {
    for(let i = 0; i < cols; i++) {
      if (i % 2 !== j % 2) {
        board[j][i] = 1;
      }
    }
  }
}
  
function draw() {
  background(220);
  for (let j = 0; j  < 3; j++) {
    for (let i = 0; i < cols; i++) {
    }
  }
}

// inspo https://codepen.io/Danchuk/pen/waGgqj 
// https://www.youtube.com/watch?v=iJ_B_5W-pDA
// https://editor.p5js.org/simontiger/sketches/WozAjsXVK