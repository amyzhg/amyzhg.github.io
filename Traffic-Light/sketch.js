// Traffic Light Starter Code
// Amy Zhang
// September, 24th, 2024

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis
let waitTime = 2000;
let waitTimeY = 200;
let isYellow = false;
let isRed = true;
let isGreen = false;
let lastTimeSwitched = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();

  // Yellow Light
  if (millis() > lastTimeSwitched + waitTime) {
    isGreen = !isGreen;
    isYellow = true;
  }
  if (isYellow) {
    fill("yellow");
    ellipse(width/2, height/2 - 65, 50, 50); //top
    fill("yellow");
    ellipse(width/2, height/2, 50, 50); //middle
    fill("yellow");
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
  else {
    fill("green");
    ellipse(width/2, height/2 - 65, 50, 50); //top
    fill("green");
    ellipse(width/2, height/2, 50, 50); //middle
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights

}