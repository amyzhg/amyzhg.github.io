// Arrays and Object Notation Assignment
// Amy Zhang
// Oct 21, 2024

// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// - using an ICO using state values
// - Using Matter.Js https://brm.io/matter-js/
// - HTML alert for controls
// - Using Vectors

// - inspiration: https://cat-bounce.com/

let engine;
let world;

let gameState = "play";

let cats = [];
let catImages = [];
let numCats = 30; // Initial spawm number of cats

// Load the images
function preload() {
  catImages.push(loadImage('./images/cat1.png'));
  catImages.push(loadImage('./images/cat2.png'));
  catImages.push(loadImage('./images/cat3.png'));
  catImages.push(loadImage('./images/cat4.png'));
  catImages.push(loadImage('./images/cat5.png'));
  catImages.push(loadImage('./images/cat6.png'));
  catImages.push(loadImage('./images/cat7.png'));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Matter.Engine.create();
  world = engine.world;

  let ground = Matter.Bodies.rectangle(width / 2, height - 2, width, 20, { isStatic: true });
  Matter.World.add(world, ground);

  // Spawns cats
  for (let i = 0; i < numCats; i++) {
    spawnCat();
  }
}

function draw() {
  if (gameState === "start") {
    startScreen();
  }
  else if (gameState === "play") {
    playScreen();
  }
}


function mouseClicked() {
  if (gameState === "play" && mouseButton === LEFT) {
    spawnCat(); // Spawns a new random cat on left-click
  }
}

function playScreen() {
  background("white");

  Matter.Engine.update(engine); // Update the Matter.js engine

  // Draws and update all cats
  for (let cat of cats) {
    cat.update();
    cat.draw();
  }
}

function spawnCat() {
  let randomIndex = int(random(0, catImages.length));
  let x = random(width);
  let y = random(height - 50); // Spawns within the canvas
  let size = random(30, 200); // Random size for the cat

  let cat = new Cat(randomIndex, createVector(x, y), size);
  cats.push(cat);
}

class Cat {
  constructor(index, position, diameter) {
    this.index = index % catImages.length;
    this.position = position;
    this.diameter = diameter;
    this.velocity = createVector(random(-2, 2), random(-2, 2)); // Random velocity
  }

  update() {
    // Update position based on velocity
    this.position.add(this.velocity);

    // Bounce off edges
    if (this.position.x < this.diameter / 2 || this.position.x > width - this.diameter / 2) {
      this.velocity.x *= -1;
    }
    if (this.position.y < this.diameter / 2 || this.position.y > height - this.diameter / 2) {
      this.velocity.y *= -1;
    }

    // Move the cat with the mouse if it's clicked
    if (mouseIsPressed && dist(mouseX, mouseY, this.position.x, this.position.y) < this.diameter / 2) {
      this.position.x = mouseX;
      this.position.y = mouseY;
    }
  }

  draw() {
    push();
    translate(this.position.x, this.position.y);
    imageMode(CENTER);
    image(catImages[this.index], 0, 0, this.diameter, this.diameter); // Draw cat image
    pop();
  }
}