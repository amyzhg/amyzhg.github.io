// Arrays and Object Notation Assignment
// Amy Zhang
// Oct 21, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let intro;
let Game;

function preload() {
  BG = loadImage('en.png');
  Intro = loadImage('./images/intro.png');
  Game = loadImage('./images/Suika-Font.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(Intro);
  image(Game, windowWidth/5, windowHeight/15,);  

}


// inspo https://openprocessing.org/sketch/2084936 
// inspo https://scratch.mit.edu/projects/911281961/editor/
// intro inspo https://waytoomany.games/wp-content/uploads/2023/10/2023102406564200_s.jpg