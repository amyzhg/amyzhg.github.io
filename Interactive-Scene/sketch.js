// Interactive Scene Avoid the cars or become kfc
// Amy Zhang
// October 1st, 2024

// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// - Visual appeal, researching things we haven't learned in class yet such as array in line 95-99
let player;
let car_red;
let car_silly_red;
let car_facing_brown;
let car_2;
let backgroundIMG;

let sizeX = 100;
let sizeY = 100;
let playerX = 350;
let playerY = 350;
let playerMoveY = 3;
let playerMoveX = 3;

let carX = [900, 900, 900, 900];
let carY = [2, 270, 190, 95];
let carSpeedX;

let gameOver = false; // Game over state

function preload() {
  backgroundIMG = loadImage("roadbg.png"); // Load BG
  player = loadImage("chicken.png"); // Load player
  car_silly_red = loadImage("car-silly-red.png"); // Load silly red car
  car_facing_brown = loadImage("car-brown.png"); // Load brown car
  car_red = loadImage("car-red.png"); // Red car
  car_2 = loadImage("car-2.png"); // Load car
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  resetGame(); // State
}

function resetGame() {
  playerX = 350; // Reset player position
  playerY = 350; // Reset player position
  carX = [900, 900, 900, 900]; // Reset car positions
  carSpeedX = [
    random(1.8, 3.5),
    random(2.3, 3.5),
    random(2.5, 4.0),
    random(2.6, 4.5)
  ]; // Randomize speeds
  gameOver = false; // Reset game over state
}

function draw() {
  background(backgroundIMG);
  
  if (!gameOver) {
    draw_player();
    move_player();
    
    loopCar();
    moveCar();
    drawCar();
    
    collisionDetect(); // Check if the chicken hits cars
  } else {
    fill(255);
    textSize(32);
    textAlign(CENTER); // Center the text
    text("Game Over! Press R to Restart", width / 2, height / 2);
  }
}

function draw_player() {
  image(player, playerX, playerY, 50, 50);
}

function move_player() {
  if (keyIsDown(UP_ARROW)) {
    playerY -= playerMoveY;
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerY += playerMoveY;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerX += playerMoveX;
  }
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= playerMoveX;
  }
}

function drawCar() {
  image(car_silly_red, carX[0], carY[0], sizeX, sizeY);
  image(car_red, carX[1], carY[1], sizeX, sizeY);
  image(car_facing_brown, carX[2], carY[2], sizeX, sizeY);
  image(car_2, carX[3], carY[3], sizeX, sizeY);
}

function moveCar() {
  for (let i = 0; i < carX.length; i++) {
    carX[i] -= carSpeedX[i]; // Move cars using their speed
  }
}

function loopCar() {
  for (let i = 0; i < carX.length; i++) {
    if (carX[i] < -65) { // When car goes off-screen
      carX[i] = width + random(100, 300); // Reset position off screen
      carSpeedX[i] = random(1.8, 4.0); // Randomize new speed
    }
  }
}

function collisionDetect() {
  for (let i = 0; i < carX.length; i++) {
    // Check if the chicken intersects with any car
    if (
      playerX < carX[i] + sizeX &&
      playerX + 50 > carX[i] &&
      playerY < carY[i] + sizeY &&
      playerY + 50 > carY[i]
    ) {
      gameOver = true; // Set game over state
    }
  }
}

function keyPressed() {
  if (keyCode === 82) { // 82 is the key code for 'R'
    resetGame(); // Reset game state
  }
}