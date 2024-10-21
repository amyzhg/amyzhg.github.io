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

let fruit1;
let fruit2;
let fruit3;
let fruit4;
let fruit5;
let fruit6;
let fruit7;
let fruit8;
let fruit9;
let fruit10;
let fruit11;

// loads the images
function preload() {
  let fruits = {
    fruit1: loadImage('./images/fruit1.png'),
    fruit2: loadImage('./images/fruit2.png'),
    fruit3: loadImage('./images/fruit3.png'),
    fruit4: loadImage('./images/fruit4.png'),
    fruit5: loadImage('./images/fruit5.png'),
    fruit6: loadImage('./images/fruit6.png'),
    fruit7: loadImage('./images/fruit7.png'),
    fruit8: loadImage('./images/fruit8.png'),
    fruit9: loadImage('./images/fruit9.png'),
    fruit10: loadImage('./images/fruit10.png'),
    fruit11: loadImage('./images/fruit11.png'),
    fruit: random([fruit1, fruit2, fruit3, fruit4,])
  };
  intro = loadImage('./images/intro.png');
  game = loadImage('./images/Suika-font.png');
  playButtonPressed = loadImage('/images/yellowBtn.png');
  playButton = loadImage('/images/greyBtn.png');
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
  
  // Centers the game title horizontally and vertically
  image(game, (width - game.width) / 2, (height - game.height) / 10 + 50);

  // Defines the button size
  let buttonWidth = playButton.width;
  let buttonHeight = playButton.height;

  // Centers the play button horizontally and place it slightly lower on the screen
  let buttonX = (width - buttonWidth) / 2;
  let buttonY = height / 2 + 10;

  // Checks if the mouse is over the button
  if (mouseX > buttonX && mouseX < buttonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight) {
    image(playButtonPressed, buttonX, buttonY);
  } else {
    image(playButton, buttonX, buttonY);
  }
}

function mouseClicked() {
  // Plays the game when button is clicked
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