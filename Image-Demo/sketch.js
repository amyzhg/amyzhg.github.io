// Image Demo
// Sept 23, 2024

let sonic;

function preload() {
  sonic = loadImage('sonic.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  image(sonic, mouseX, mouseY);
}