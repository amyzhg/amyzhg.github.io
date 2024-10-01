// Interactive Scene Avoid the cars or become kfc
// Amy Zhang
// October 1st, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// - yummy yummy in my tummy kfc

// ADD ANOTHER CAR AND ADD KFC DEATH AND MAYBE DEATH SOUND
// intro is fast and furious but its all chicken instead of head
// cornol sanders chases him around green spots only

// let player;
// let car_red;
// let car_silly_red;
// let car_facing_brown;
// let car_2;
// let backgroundIMG;

// let sizeX = 100;
// let sizeY = 100;
// let playerX = 350;
// let playerY =350;
// let playerMoveY = 3;
// let playerMoveX = 3;
// let collision = false;

// let carX = [900, 900, 900, 900];
// let carY = [2, 270, 190, 95];
// let carSpeedX;

// function drawCar() {
//   image(car_silly_red, carX[0], carY[0], sizeX, sizeY); // Black Car
//   image(car_red, carX[1], carY[1], sizeX, sizeY); // Red Car
//   image(car_facing_brown, carX[2], carY[2], sizeX, sizeY); // Brown Car (facing wrong way)
//   image(car_2, carX[3], carY[3], sizeX, sizeY); // Car with vroom
// }

// function moveCar() {
//   for (let i = 0; i < carX.length; i++) {
//     carX[i] -= carSpeedX[i];  // Move cars using their speed
//   }
// }

// function loopCar() {
//   for (let i = 0; i < carX.length; i++) {  // Fixed loop condition
//     if (carX[i] < -65) {  // When car goes off-screen
//       carX[i] = width + random(100, 300);  // Reset position off screen
//       carSpeedX[i] = random(1.8, 4.0);     // Randomize new speed
//     }
//   }
// }

// // Loading all the images
// function preload() {
//   backgroundIMG = loadImage("roadbg.png");
//   player = loadImage("chicken.png");
//   car_silly_red = loadImage("car-silly-red.png");
//   car_facing_brown = loadImage("car-brown.png");
//   car_red = loadImage("car-red.png");
//   car_2 = loadImage("car-2.png");
// }

// function draw_player() {
//   image(player, playerX, playerY, 50, 50);
// }

// function move_player() {
//   if (keyIsDown(UP_ARROW)) {
//     playerY -=playerMoveY;
//   }
//   if (keyIsDown(DOWN_ARROW)) {
//     playerY += playerMoveY;
//   }
//   if (keyIsDown(RIGHT_ARROW)) {
//     playerX +=playerMoveX;
//   }
//   if (keyIsDown(LEFT_ARROW)) {
//     playerX -= playerMoveX;
//   }
// }

// function collisionDetect() {
//   for (let i = 0; i < carX.length; i++) { // Fixed loop to stop at length
//     collision = collideRectCircle(carX[i], carY[i], sizeX, sizeY, playerX, playerY, 50); // Assuming player is 50x50
//     if (collision) {
//       playerY = 368;  // Reset player Y position after collision
//     }
//   }
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   carSpeedX = [
//     random(1.8, 3.5),
//     random(2.3, 3.5),
//     random(2.5, 4.0),
//     random(2.6, 4.5)
//   ];
// }

// function draw() {
//   background(backgroundIMG);
  
//   draw_player();
//   move_player();
//   collisionDetect();
  
//   loopCar();
//   moveCar();
//   drawCar();
// }


// inspo CREDS 
//https://editor.p5js.org/reajmorais/sketches/zdK2iVkD-

let player;
let car_red;
let car_silly_red;
let car_facing_brown;
let car_2;
let backgroundIMG;
let hitSound; // Sound when the player is hit

let sizeX = 100;
let sizeY = 100;
let playerX = 350;
let playerY = 350;
let playerMoveY = 3;
let playerMoveX = 3;
let collision = false;

let carX = [900, 900, 900, 900];
let carY = [2, 270, 190, 95];
let carSpeedX;
let gameOver = false;

function preload() {
    backgroundIMG = loadImage("roadbg.png");
    player = loadImage("chicken.png");
    car_silly_red = loadImage("car-silly-red.png");
    car_facing_brown = loadImage("car-brown.png");
    car_red = loadImage("car-red.png");
    car_2 = loadImage("car-2.png");
    hitSound = loadSound("hit_sound.mp3"); // Load hit sound
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    carSpeedX = [
        random(1.8, 3.5),
        random(2.3, 3.5),
        random(2.5, 4.0),
        random(2.6, 4.5)
    ];
}

function draw() {
    background(backgroundIMG);
    
    if (!gameOver) {
        draw_player();
        move_player();
        
        loopCar();
        moveCar();
        drawCar();
    } else {
        fill(255);
        textSize(32);
        text("Game Over! Press R to Restart", 150, height / 2);
    }
}

function drawCar() {
    image(car_silly_red, carX[0], carY[0], sizeX, sizeY); // Silly Red Car
    image(car_red, carX[1], carY[1], sizeX, sizeY); // Red Car
    image(car_facing_brown, carX[2], carY[2], sizeX, sizeY); // Brown Car
    image(car_2, carX[3], carY[3], sizeX, sizeY); // Another Car
}

function moveCar() {
    for (let i = 0; i < carX.length; i++) {
        carX[i] -= carSpeedX[i];  // Move cars using their speed
    }
}

function loopCar() {
    for (let i = 0; i < carX.length; i++) {
        if (carX[i] < -65) {  // When car goes off-screen
            carX[i] = width + random(100, 300);  // Reset position off screen
            carSpeedX[i] = random(1.8, 4.0);     // Randomize new speed
        }
    }
}

function draw_player() {
    image(player, playerX, playerY, 50, 50);
}

function move_player() {
    if (keyIsDown(UP_ARROW)) {
        playerY -= playerMoveY;
    }
    if (keyIsDown(DOWN_ARROW)) {
        playerY += playerMoveY;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        playerX += playerMoveX;
    }
    if (keyIsDown(LEFT_ARROW)) {
        playerX -= playerMoveX;
    }
}

function keyPressed() {
  if (key === 'R') { // Press R to reset the game
      resetGame();
  }
}

function resetGame() {
  gameOver = false; // Reset game over state
  playerX = 350; // Reset player position
  playerY = 350; // Reset player position
  player = loadImage("chicken.png"); // Reset image
  carX = [900, 900, 900, 900]; // Reset car positions
  for (let i = 0; i < carX.length; i++) {
      carSpeedX[i] = random(1.8, 4.5); // Randomize new speeds
  }
  loop(); // Restart the draw loop
}