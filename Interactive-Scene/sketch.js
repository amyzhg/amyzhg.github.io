// Interactive Scene PIP BOY
// Amy Zhang
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let vaultboy;

function preload(){
  vaultboy = loadImage("vaultboy.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  image(vaultboy, 200, 300);
}



// switch tabs for arrow keys 
// use time clock
// 
