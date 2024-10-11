// Arrays and Object Notation Assignment
// Amy Zhang
// Oct 21, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// - using an ICO 

let intro;
let Game;

function preload() {
  BG = loadImage('en.png');
  Intro = loadImage('./images/intro.png');
  Game = loadImage('./images/Suika-font.png');
  // PlayButton = loadImage('./images/Play-Btn.png'); 
  PlayButton = loadImage('PLAY (1).png'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(Intro);
  image(Game, -160, -5,);
  image(PlayButton, 500, 200,);
}


// inspo https://openprocessing.org/sketch/2084936 
// inspo https://scratch.mit.edu/projects/911281961/editor/
// intro inspo https://waytoomany.games/wp-content/uploads/2023/10/2023102406564200_s.jpg