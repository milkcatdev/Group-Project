let plaintile;
let grassytile1;
let grassytile2;

function setup() {
  createCanvas(400, 400);
}

function preload(){
  plaintile = loadImage('Resources/Images/grasstile_plain.png');
  grassytile1 = loadImage('Resources/Images/grasstile_grassy1.png');
  grassytile2 = loadImage('Resources/Images/grasstile_grassy2.png');
}
function draw() {
  background(220);
  image(plaintile, 0, height/2, 32,32);
  image(grassytile1, 32, height/2, 32,32);
  image(plaintile, 64, height/2, 32,32);
  image(grassytile2, 96, height/2, 32,32);
  image(plaintile, 128, height/2, 32,32);
  image(grassytile1,160, height/2, 32,32);
  image(grassytile2, 192, height/2, 32,32);
}
