// Interactive Scene Avoid the cars or become kfc
// Amy Zhang
// October 1st, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// - yummy yummy in my tummy kfc

let player;
let car_red;
let car_black;
let car_blue;
let backgroundIMG;

let sizeX = 100;
let sizeY = 100;
let playerX = 350;
let playerY =350;
let playerMoveY = 3;
let playerMoveX = 3;

let carX = [900, 900, 900];
let carY = [45, 210, 138];
let carSpeedX;

function drawCar() {
  image(car_black, carX[0], carY[0], sizeX, sizeY); // Black Car
  image(car_red, carX[1], carY[1], sizeX, sizeY); // Red Car
  image(car_blue, carX[2], carY[2], sizeX, sizeY); // Blue Car
}

function moveCar() {
  for (let i = 0; i < carX.length; i++) {
    carX[i] -= carSpeedX[i];  // Move cars using their speed
  }
}

function loopCar() {
  for (let i = 0; i < carX.length; i++) {  // Fixed loop condition
    if (carX[i] < -50) {  // When car goes off-screen
      carX[i] = width + random(100, 300);  // Reset position off screen
      carSpeedX[i] = random(1.8, 4.0);     // Randomize new speed
    }
  }
}

// Loading all the images
function preload() {
  backgroundIMG = loadImage("roadbg.png");
  player = loadImage("chicken.png");
  car_black = loadImage("car-black.png");
  car_blue = loadImage("car-blue.png");
  car_red = loadImage("car-red.png");
}

function draw_player() {
  image(player, playerX, playerY, sizeX, sizeY);
}

function move_player() {
  if (keyIsDown(UP_ARROW)) {
    playerY -=playerMoveY;
  }
    if (keyIsDown(DOWN_ARROW)) {
    playerY += playerMoveY;
  }
  if (keyIsDown(RIGHT_ARROW)) {
  playerX +=playerMoveX;
  }
    if (keyIsDown(LEFT_ARROW)) {
      playerX -= playerMoveX;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  carSpeedX = [
    random(1.8, 3.5),
    random(2.3, 3.5),
    random(2.5, 4.0)
  ];
}

function draw() {
  background(backgroundIMG);
  
  draw_player();
  move_player();
  
  loopCar();
  moveCar();
  drawCar();
}




//https://editor.p5js.org/reajmorais/sketches/zdK2iVkD-