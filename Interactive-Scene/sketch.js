// Interactive Scene Avoid the cars or become kfc
// Amy Zhang
// October 1st, 2024

// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// - Visual appeal, researching things we haven't learned in class such as text, advanced arrays

let player;
let Blue_Truck;
let Cyan_Truck;
let Orange_Truck;
let backgroundIMG;

let sizeX = 200;
let sizeY = 200;
let playerX = 350;
let playerY = 350;
let playerMoveY = 3;
let playerMoveX = 3;

let carX = [900, 900, 900]; // Fix array size to 3
let carY = [150, 40, 240];
let carSpeedX;

let BG_Sound;
let Death;
let points = 0;

function preload() {
  backgroundIMG = loadImage("BG.png");
  player = loadImage("chicken.png");
  Cyan_Truck = loadImage("Cyan-Truck.png");
  Orange_Truck = loadImage("Orange-Truck.png");
  Blue_Truck = loadImage("Blue-truck.png");
  BG_Sound = loadSound("Tokyo Drift.mp3");
  Death = loadSound("DEATH.mp3");
}

function score() {
  fill(255, 255, 255);
  textSize(50);
  text(points, 250, 60);
}

function scoreUp() {
  if (playerY <= 10) {
    points += 1;
    playerY = 560; // Reset player to the bottom after reaching the top
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  resetGame(); // State
  BG_Sound.play();
}

function resetGame() {
  playerX = 900; // Reset player position
  playerY = 590; // Reset player position
  carX = [900, 900, 900]; // Ensure 3 cars are reset
  carSpeedX = [
    random(6, 9),
    random(7, 11),
    random(5, 10)
  ]; // Randomize speeds for 3 cars
}

function draw() {
  background(backgroundIMG);

  draw_player();
  move_player();
  
  loopCar();
  moveCar();
  drawCar();
  
  score();
  scoreUp();

  collisionDetect(); // Check if the chicken hits cars
}

function draw_player() {
  image(player, playerX, playerY, 60, 60);
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
  image(Cyan_Truck, carX[0], carY[0], sizeX, sizeY);
  image(Blue_Truck, carX[1], carY[1], sizeX, sizeY);
  image(Orange_Truck, carX[2], carY[2], sizeX, sizeY);
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
      carSpeedX[i] = random(5, 11); // Randomize new speed
    }
  }
}

function collisionDetect() {
  for (let i = 0; i < carX.length; i++) {
    // Check if the chicken crashes with any car
    if (
      playerX < carX[i] + sizeX &&
      playerX + 90 > carX[i] &&
      playerY < carY[i] + sizeY &&
      playerY + 90 > carY[i]
    ) {
      points -= 1; // Subtract points for crash
      playerY = 560; // Reset player position to the start

      Death.play();
    }
  }
}

function keyPressed() {
  if (keyCode === 82) { // 82 is the key code for 'R'
    resetGame(); // Resets the game
  }
}
