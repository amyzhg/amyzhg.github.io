// 2D Array
// Amy Zhang
// Date
//
// Extra for Experts:
// - Using AI API as an opponent no algorithm so every game is different

// NOTE TO SELF LOOK AT ALL COMMENTS SOME COULD BE NOTE TO SELF fix breaking 
// mayb e changte colours implament the ai center it fix bugs

const WIDTH = 600;
const HEIGHT = 600;

let boardWidth = 400;
let boardHeight = 400;
let boardX = (WIDTH - boardWidth) / 2;
let boardY = (HEIGHT - boardHeight) / 2;

let cols = 8;
let rows = 8;
let squareWidth = boardWidth / cols;
let squareHeight = boardHeight / rows;
let w = squareWidth; // size of each square
let dw = 48; // diameter of the pieces

const SELECT_STATE = 0;
const MOVE_STATE = 1;
let state = SELECT_STATE;

const AI = 1;
const user = 2;
let player = user;

let selectedI = -1;
let selectedJ = -1;

let board = [];
for (let i = 0; i < rows; i++) {
  board[i] = [];
  for (let j = 0; j < cols; j++) {
    board[i][j] = 0;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < cols; i++) {
      if (i % 2 !== j % 2) {
        board[j][i] = AI;
      }
    }
  }

  for (let j = rows - 3; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      if (i % 2 !== j % 2) {
        board[j][i] = user
      }
    }
  }
}
 
function draw() {
  drawBoard();
  // some sort of draw pieces remind myself later
  drawPieces();
}

function drawBoard() {
  // Draw the board in the center of the canvas
  boardX = (width - boardWidth) / 2;
  boardY = (height - boardHeight) / 2;
  rect(boardX, boardY, boardWidth, boardHeight);
  // Draw the squares
  for (let i = 0; i < rows; i++) {
    let y = boardY + i * squareHeight;
    for (let j = 0; j < cols; j++) {
      let x = boardX + j * squareWidth;
      if ((i + j) % 2 === 0) {
        fill(245, 255, 245);
      }
      else {
        fill(200, 210, 200);
      }
      rect(x, y, squareWidth, squareHeight);
    }
  }
}

function drawPieces() {
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      if (board[j][i] ===  AI) {
        fill(0, 0, 255);
      } else if (board[j][i] === user) {
        fill(255, 0, 0);
      } else {
        continue;
      }
      if (i === selectedI && j === selectedJ) {
        stroke(255, 255, 0);
        strokeWeight(3);
      }
      else {
        noStroke();
      }
      circle(boardX + i * squareWidth + squareWidth / 2, boardY + j * squareHeight + squareHeight / 2, dw);
    }
  }
}

function mousePressed() {
  const i = floor((mouseX - boardX) / squareWidth);
  const j = floor((mouseY - boardY) / squareHeight);

  if (i < 0 || i >= cols || j < 0 || j >= rows){
    return;
  }

  if (state === SELECT_STATE) {
    if (board[j][i] === user) {
      selectedI = i;
      selectedJ = j;
    }
    state = MOVE_STATE;
  } else if (state === MOVE_STATE) {
    if (board[j][i] === user) {
      selectedI = i;
      selectedJ = j;
    } else if (board[j][i] === 0) {
      if (user === player) {
        if ((i === selectedI - 1 || i === selectedI + 1) && j === selectedJ - 1) {
          board[j][i] = player;
          board[selectedJ][selectedI] = 0;
          player = AI;
          state = SELECT_STATE;
        }
      } else if (player === AI) {
        if ((i === selectedI - 1 || i === selectedI + 1) && j === selectedJ + 1) {
          board[j][i] = player;
          board[selectedJ][selectedI] = 0;
          player = user;
          state = SELECT_STATE;
        }
      }
    }
  }
}


// inspo https://codepen.io/Danchuk/pen/waGgqj 
// https://www.youtube.com/watch?v=iJ_B_5W-pDA
// https://editor.p5js.org/simontiger/sketches/WozAjsXVK
// https://github.com/arturalkaim/damas?tab=readme-ov-file

// api keys
// https://aimlapi.com/best-ai-apis-for-free
// https://ai.google.dev/gemini-api/docs/quickstart?lang=node

// https://img.icons8.com/?size=160&id=vDhzIZXjB49y&format=png

