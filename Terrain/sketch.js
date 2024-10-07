// Terrain Generation
// Oct 7th 2024

let terrain = [];
const NUMBER_OF_RECTS = 1000;
noStroke();


function setup() {
  createCanvas(windowWidth, windowHeight);
  let widthOfRect = width/NUMBER_OF_RECTS;
  generateTerrain(widthOfRect);
}

function draw() {
  background(backgroundIMG);

  for (let someRect of terrain) {
    rect(someRect.x, someRect.y, someRect.w, someRect.h);
  }
}

function preload() {
  backgroundIMG = loadImage("Cloud_BG.jpg");
}

function generateTerrain(widthOfRect) {
  let time = 0;
  let deltaTime = 0.001;
  for (let x = 0; x < width; x += widthOfRect) {
    let theHeight = noise(time) * height
    noStroke();
    fill("green");
    let someRect = spawnRectangle(x, theHeight, widthOfRect);
    terrain.push(someRect);
    time += deltaTime;
  }
}

function spawnRectangle(leftSide, rectHeight, rectWidth) {
  let theRect = {
    x: leftSide,
    y: height - rectHeight,
    w: rectWidth,
    h: rectHeight,
  };

  return theRect;
}
