// Square Moving
// Sept 19 2024


let x = 0;
let y = 0;
let speed = 8;
let size = 50;
let state = "right";

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  movesquare();
  displaysquare();
}

function movesquare() {
  if (state === "right"){
    x += speed;
    if (x >= width - size) {
      state = "down";
    }
  }
  else if (state === "down") {
    y += speed;
    if (y >= height - size) {
      state = "left";
    }
  }
  else if (state === "left") {
    x -=speed;
    if (x <= 0 ) {
      state = "up";
    }
  }
  else if (state === "up"){
    y -= speed;
    if (y <= 0) {
      state = "right";
    }
  }
}

function displaysquare() {
  square(x,y,size );
  fill('blue');
}
