//INITIALISE PLAYER VARIABLES
let player;
let playerSprites = [];
let playerSizeX = 32;
let playerSizeY = 64;

//INITIALISE TILEMAP VARIABLES
let tileMap = []; //array to store tiles in
let tilesX = 21; //number of tiles on the x axis
let tilesY = 12; //number of tiles on the y axis
let tileSize = 32; //the size of the tiles
let textures = []; //value to store textures


//LEVEL DATA OBJECTS

let level0 = {

  graphicsMap: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2], //0
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 5, 1, 2, 2, 2, 2, 2, 2, 2, 2], //1
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 4, 1, 2, 2, 2, 2, 2, 2, 2, 2], //2
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //3
    [1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //4   1st VALUE (y)
    [1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3], //6
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 0, 3, 3, 3, 3, 3, 0], //9
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 0, 3, 3, 3, 3, 3, 0], //10
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 7, 0, 2, 0, 0, 0, 0, 0, 0, 0]  //11
  ],

  tileRules: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //1
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], //2
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //3
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //4   1st VALUE (y)
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0], //9
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0], //10
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]  //11
  ],

  startTiles: [
              [3,7],
              [3,7]
              ]



}

//Level Control Variables

let levels = [level0];
let currentLevel = 0;
let graphicsMap;
let tileRules;

//timer values
let count;
let countMax = 30;

function preload(){

  textures[0] = loadImage('Resources/Images/floor.png');
  textures[1] = loadImage('Resources/Images/wall.png')
  textures[2] = loadImage('Resources/Images/Out_Of_Bounds.png')
  textures[3] = loadImage('Resources/Images/table.png')
  textures[4] = loadImage('Resources/Images/doorBottom.png')
  textures[5] = loadImage('Resources/Images/doorTop.png')
  textures[6] = loadImage('Resources/Images/doorLeft.png')
  textures[7] = loadImage('Resources/Images/doorDown.png')

  //sprite
  playerSprites[0] = loadImage('Resources/Images/AlbaDown.png')
  playerSprites[1] = loadImage('Resources/Images/AlbaLeft.png')
  playerSprites[2] = loadImage('Resources/Images/AlbaUp.png')
  playerSprites[3] = loadImage('Resources/Images/AlbaRight.png')
}


function setup() {
  createCanvas(672,384);

  loadLevel();

  player = new Player(playerSprites, 3, 7, playerSizeX,playerSizeY,tileRules);
}

function loadLevel() {
  graphicsMap = levels[currentLevel].graphicsMap
  tileRules = levels[currentLevel].tileRules

  //CREATING TILEMAP
  let tileID = 0; // ID number for a specific tile

  //nested loop that creates the tile map 
  for (let tileX = 0; tileX < tilesX; tileX++) {
    tileMap[tileX] = []; //creates an empty column on the tilemap
    for (let tileY = 0; tileY < tilesY; tileY++) {

      //Set the texture for the tile
      let texture = graphicsMap[tileY][tileX];
      //creates a new tile from the tile class and puts it in the current column
      tileMap[tileX][tileY] = new Tile(textures[texture], tileX, tileY, tileSize, tileID);

      tileID++;
    }
  }
}

function draw() {
  background(0);

  //displays all of the tiles
  for (let tileX = 0; tileX < tilesX; tileX++){
    for (let tileY = 0; tileY < tilesY; tileY++){
      tileMap[tileX][tileY].display()
    }
  }

  if (player.transition){
    //called once per frame to make a 30 second timer
    if (count === countMax) player.transition = false;
    else count ++
  }
  player.display();

  player.setDirection();
  player.move();

  //displays a message in each of the selected tiles
}

//creates the tile class
class Tile {
  constructor(texture,tileX, tileY, tileSize, tileID){
    //tile texture
    this.texture = texture;
    //position on tile map
    this.tileX = tileX;
    this.tileY = tileY;
    //pixel position on the canvas
    this.xPos = this.tileX * tileSize;
    this.yPos = this.tileY * tileSize;

    this.tileSize = tileSize; //sets the tile size
    this.tileID = tileID; //sets the tileID number
  }

  display(){
    noStroke()
    image(this.texture,this.xPos,this.yPos,this.tileSize,this.tileSize)
  }
  debugGrid(){
    let xPadding = 2; //padding for x values
    let yCoordinatePadding = 8; //padding for the y for the coordinate value
    let yIDPadding = 18; // padding for the y for the id value

    //Text Settings for the coordinate and id text
    strokeWeight(1)
    stroke("black")
    fill(121,51,255)

    //display x and y coordinate text
    textSize(8)
    text("X: "+ this.tileX + ",Y: " + this.tileY, this.xPos + xPadding, this.yPos + yCoordinatePadding)

    //display tileID text
    textSize(10)
    text("ID: " + this.tileID, this.xPos + xPadding, this.yPos + yIDPadding)
  }

  displayMessage(){
    //text settings for the assessed message
    image(stoneTile,this.xPos,this.yPos)
  }
}


class Player {
  constructor(sprites,startX,startY,playerSizeX,playerSizeY,tileRule){
    //sprite
    this.sprites = sprites;

    //tile position
    this.tileX = startX;
    this.tileY = startY;

    //tile data
    this.playerSizeX = playerSizeX;
    this.playerSizeY = playerSizeY;
    this.tileRules = tileRule;
    this.transition = false;

    //coordinates of player on grid
    this.xPos = startX * playerSizeX;
    this.yPos = startY * playerSizeX;

    //target pisition on grid
    this.tx = this.xPos;
    this.ty = this.yPos;

    //direction
    this.dirX = 0;
    this.dirY = 0;
    this.facing = "down"

    //movement
    this.isMoving = false;
    this.speed = 4
    this.spriteDirection = 0

  }

  display(){
    if (this.facing == "down"){
      this.spriteDirection = 0;
    }
    if (this.facing == "left"){
      this.spriteDirection = 1;
    }
    if (this.facing == "up"){
      this.spriteDirection = 2;
    }
    if (this.facing == "right"){
      this.spriteDirection = 3;
    }
    image(this.sprites[this.spriteDirection],this.xPos,this.yPos-this.playerSizeX,this.playerSizeX,this.playerSizeY);
  }

  setDirection(){
    let up = 87;    //w
    let down = 83;    //s
    let left = 65;    //a
    let right = 68    //d

    if (!this.isMoving){

      //moves up
      if (keyIsDown(up)){
        this.dirX = 0;
        this.dirY = -1;
        this.facing = "up";
      }

      //moves down
      if (keyIsDown(down)){
        this.dirX = 0;
        this.dirY = 1;
        this.facing = "down";
      }

      //moves left
      if (keyIsDown(left)){
        this.dirX = -1;
        this.dirY = 0;
        this.facing = "left";
      }

      //moves down
      if (keyIsDown(right)){
        this.dirX = 1;
        this.dirY = 0;
        this.facing = "right";
      }

      //checks target tile
      this.checkTargetTile()
    }
  }

  checkTargetTile(){
    //checks for transition
    if (this.transition){
      this.dirX = 0;
      this.dirY = 0;
    }

    //calculate current position
    this.tileX = Math.floor(this.xPos / this.playerSizeX);
    this.tileY = Math.floor(this.yPos / this.playerSizeX);
    
    //calculate next tile
    let nextTileX = this.tileX + this.dirX;
    let nextTileY = this.tileY + this.dirY;

    //Sets bounds for the border of the map
    if (nextTileX >= 0 &&        //left
        nextTileX < tilesX &&    //right
        nextTileY >= 0 &&        //top
        nextTileY < tilesY){     //bottom

          if (tileRules[nextTileY][nextTileX] === 2){ //transitions to new level through doors(eventually)
            currentLevel ++
            if (currentLevel >= levels.length){
              currentLevel = 0
            }
            loadLevel()
            this.setPlayerPosition(0)
            count = 0;
            this.transition = true;
          }
          
          else if (tileRules[nextTileY][nextTileX] === 3){//coded to go back to old levels but may change
            currentLevel --
            
            loadLevel()
            this.setPlayerPosition(1)
            count = 0;
            this.transition = true;
          }

          //checks if next tile is not walkable
          else if (tileRules[nextTileY][nextTileX] != 1
                    && tileRules[nextTileY][nextTileX] != 4){
            //next pixel positions
            this.tx = nextTileX * playerSizeX;
            this.ty = nextTileY * playerSizeX;

            //starts movement
            this.isMoving = true;
          }

    }

  }

  move(){

    //moves player
    if (this.isMoving){
      this.xPos += this.speed * this.dirX;
      this.yPos += this.speed * this.dirY;
    }

    //stops moving player
    if (this.xPos === this.tx && this.yPos === this.ty){
      this.isMoving = false;
      this.dirX = 0
      this.dirY = 0

    }
  }

  //sets start position in each level
  setPlayerPosition(doorValue){
    this.tileX = levels[currentLevel].startTiles[doorValue][0] 
    this.tileY = levels[currentLevel].startTiles[doorValue][1]

    this.xPos = this.tileX * playerSizeX
    this.yPos = this.tileY * playerSizeY
  }
}

