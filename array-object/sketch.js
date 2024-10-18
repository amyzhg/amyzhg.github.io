// Arrays and Object Notation Assignment
// Amy Zhang
// Oct 21, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// - using an ICO using state values 

let intro;
let game;
let gameState = "start";

// loads the images
function preload() {
  intro = loadImage('./images/intro.png');
  game = loadImage('./images/Suika-font.png');
  playButtonPressed = loadImage('yellowBtn.png');
  playButton = loadImage('greyBtn.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (gameState === "start") {
    startScreen();
  }
  else if (gameState === "play") {
    playScreen();
  }
}

function startScreen() {
  background(intro);
  image(game, -160, -5,);

  if (mouseX > 500 && mouseY < 600 && mouseX <=1120 && mouseY > 390) {
    image(playButtonPressed, 500, 400,);
  }
  else {
    image(playButton, 500, 400,);
  }
}

function mouseClicked() {
  if (gameState === "start" && (mouseX > 500 && mouseY < 600 && mouseX <=1120 && mouseY > 390)) {
    gameState = "play";
  }
}

function playScreen() {
  background(intro);
}

// inspo https://openprocessing.org/sketch/2084936 
// inspo https://scratch.mit.edu/projects/911281961/editor/
// intro inspo https://waytoomany.games/wp-content/uploads/2023/10/2023102406564200_s.jpg