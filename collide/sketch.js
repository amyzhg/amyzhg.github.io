// Collide 2D Library
function setup() {
  createCanvas(windowHeight, windowWidth);
  collideDebug(true);
}

// Return an object containing the x,y position of the intersection
// using the optional calcIntersection boolean:
let hit = false;
let img;

class Cat {
  constructor(index, position, diameter) {
    this.color = color(random(255), random(255), random(255)); // Assign random color
  }
}

function preload() {
  img = loadImage("cat6.png");
}


function draw() {
  background(255);
  line(200, 300, 100, 150);
  
  img(mouseX, mouseY, 350, 50);

  hit = collideLineLine(200, 300, 100, 150, mouseX, mouseY, 350, 50, true);

  // Use vectors as input:
  // const p1    = createVector(200, 300);
  // const p2    = createVector(100, 150);
  // const mouse = createVector(mouseX, mouseY);
  // const p4    = createVector(350, 50);
  // hit = collideLineLineVector(p1, p2, mouse, p4, true);
    
  stroke(hit.x ? color('red') : 0);
  print('X-intersection:', hit.x);
  print('Y-intersection:', hit.y);
}