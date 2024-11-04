// 2D Array
// Amy Zhang
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// - Attributes to DANI MACCARI for sprites


const WIDTH = 600;
const HEIGHT = 600;

const boardWidth = 400;
const boardHeight = 400;
const boardX = (WIDTH - boardWidth) / 2;
const boardY = (HEIGHT - boardHeight) / 2;

function setup() {
}
  
function draw() {
  drawBoard();
}


function drawBoard() {
  // Draw the board in the center of the canvas
  fill(255, 255, 255);
  rect(boardX, boardY, boardWidth, boardHeight);

  // Draw the squares
  for (let i = 0; i < 8; i++) {
    let y = boardY + i * squareHeight;
    for (let j = 0; j < 8; j++) {
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
// inspo https://codepen.io/Danchuk/pen/waGgqj 
// https://www.youtube.com/watch?v=iJ_B_5W-pDA
// https://editor.p5js.org/simontiger/sketches/WozAjsXVK
// https://github.com/arturalkaim/damas?tab=readme-ov-file

// api keys
// https://aimlapi.com/best-ai-apis-for-free
// https://ai.google.dev/gemini-api/docs/quickstart?lang=node

// https://img.icons8.com/?size=160&id=vDhzIZXjB49y&format=png

