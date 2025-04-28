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
let assets = []; //value to store assets
let assetTileMap = [];

//Items and Inventory
let items = [];
let itemTextures = [];
let itemTypeName = ["","Desk","Cupboard"]
let dialogueTest;
let itemDialogue = [""]
let inventory = [];

//LEVEL DATA OBJECTS

let mainHouse = {

  backgroundMap: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2], //0
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2], //1
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2], //2
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //3
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //4   1st VALUE (y)
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5], //5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6], //6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6], //7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6], //8
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 6, 6, 6, 6, 6, 6, 6], //9
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 6, 6, 6, 6, 6, 6, 6], //10
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 6, 6, 6, 6, 6, 6, 6]  //11
  ],

  assetMap: [
    //       2nd Value (x)
    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 7, 7, 7, 7], //6
      [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
    ],

  tileRules: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //1
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1], //2
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], //3
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //4   1st VALUE (y)
    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], //6
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0], //8
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0], //9
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0], //10
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0]  //11
  ],

  itemMap: [
    //       2nd Value (x)
    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
    ],

    //tile positions when the player comes from each door
  startTiles: [
              [3,6,0], //From Alba's Room
              [1,7,2], //From the Garden
              [11,3,3], //From Laura's Room
              [11,10,4] //From Street
              ],

    //information to determine which room a door leads to
  doorTransitions: [
                    [3,5,0], //To Alba's Room
                    [0,7,2], //To the Garden
                    [11,2,3], //To Laura's Room
                    [11,11,4] //From Street
                    ]
}

let albaRoom = {

  backgroundMap: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], //0
    [2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2], //1
    [2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2], //2
    [2, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 2, 2, 2], //3
    [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2], //4   1st VALUE (y)
    [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2], //5
    [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2], //6
    [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2], //7
    [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2], //8
    [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2], //9
    [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2], //10
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]  //11
  ],

  assetMap: [
    //       2nd Value (x)
    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0,13, 0, 0, 0, 0, 0,11, 0, 0, 0,10, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0,15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0,19,19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0,19,19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
      [0, 0, 0,19,19, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
    ],

  tileRules: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //1
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //2
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //3
    [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1], //4   1st VALUE (y)
    [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1], //5
    [1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1], //6
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], //7
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], //8
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], //9
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], //10
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  //11
  ],

  itemMap: [
    //       2nd Value (x)
    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
    ],

    //tile positions when the player comes from each door
  startTiles: [
              [8,9,1] //from the main house
              ],

    //information to determine which room a door leads to
  doorTransitions: [
                    [8,10,1] //to the main house
                    ]
}

let garden = {
  
  backgroundMap: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0], //0
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0], //1
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0], //2
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0], //3
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0], //4   1st VALUE (y)
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 8], //5
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0], //6
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0], //7
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0], //8
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0], //9
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0], //10
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 0]  //11
  ],

  assetMap: [
    //       2nd Value (x)
    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
    ],

  tileRules: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], //5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
  ],

  itemMap: [
    //       2nd Value (x)
    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
    ],

    //tile positions when the player comes from each door
  startTiles: [
              [19,5,1] //from the main house
              ],

    //information to determine which room a door leads to
  doorTransitions: [
                    [20,5,1] //to the main house
                    ]
}

let lauraRoom = {

  backgroundMap: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], //0
    [2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2], //1
    [2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2], //2
    [2, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 2, 2, 2], //3
    [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2], //4   1st VALUE (y)
    [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2], //5
    [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2], //6
    [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2], //7
    [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2], //8
    [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2], //9
    [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2], //10
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]  //11
  ],

  assetMap: [
    //       2nd Value (x)
    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
    [0, 0, 0, 0,10,12, 0, 0, 0, 0, 0, 0, 0,14, 0, 0, 0, 0, 0, 0, 0], //3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,16, 0, 0, 0, 0, 0, 0, 0], //7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
  ],

  tileRules: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //1
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //2
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //3
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1], //4   1st VALUE (y)
    [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1], //5
    [1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1], //6
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], //7
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], //8
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], //9
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], //10
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  //11
  ],

  itemMap: [
    //       2nd Value (x)
    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
    ],

    //tile positions when the player comes from each door
  startTiles: [
              [10,9,1] //from the main house
              ],

    //information to determine which room a door leads to
  doorTransitions: [
                    [10,10,1] //to the main house
                    ]
}

let street = {
  
  backgroundMap: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [1, 1, 9, 1, 1, 7, 7, 7, 1, 1, 9, 1, 1, 7, 7, 7, 1, 1, 9, 1, 1], //0
    [1, 1, 9, 1, 1, 7, 7, 7, 1, 1, 9, 1, 1, 7, 7, 7, 1, 1, 9, 1, 1], //1
    [7, 7, 9, 7, 7, 7, 7, 7, 7, 7, 9, 7, 7, 7, 7, 7, 7, 7, 9, 7, 7], //2
    [7, 7, 9, 7, 7, 7, 7, 7, 7, 7, 9, 7, 7, 7, 7, 7, 7, 7, 9, 7, 7], //3
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], //4   1st VALUE (y)
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], //5
    [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], //6
    [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], //7
    [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], //8
    [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], //9
    [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], //10
    [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]  //11
  ],

  assetMap: [
    //       2nd Value (x)
    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
      [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
    ],

  tileRules: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1], //0
    [1, 1, 2, 1, 1, 0, 0, 0, 1, 1, 2, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1], //1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
  ],

  itemMap: [
    //       2nd Value (x)
    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
    ],

    //tile positions when the player comes from each door
  startTiles: [
              [2,2,1], //from the main house
              [10,2,5], //from the supermarket(left)
              [10,2,5] //from the supermarket(right)
              ],

    //information to determine which room a door leads to
  doorTransitions: [
                    [2,1,1], //to the main house
                    [10,1,5] //to the supermarket
                    ]
}

let superMarket = {

  backgroundMap: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [2,12,12,12,12,12,12,12,12, 2, 2,12,12,12,12,12,12,12,12,12,12], //0
    [2,13,13,13,13,13,13,13,13, 2, 2,13,13,13,13,13,13,13,13,13,13], //1
    [2,11,11,11,11,11,11,11,11, 2, 2,11,11,11,11,11,11,11,11,11,11], //2
    [2,11,11,11,11,11,11,11,11, 2, 2,11,11,11,11,11,11,11,11,11,11], //3
    [2,11,11,11, 2, 2,11,11,11, 2, 2,11,11,11, 2, 2,11,11,11,11,11], //4   1st VALUE (y)
    [2,11,11,11, 2, 2,11,11,11, 2, 2,11,11,11, 2, 2,11,11,11,11,11], //5
    [2,11,11,11, 2, 2,11,11,11, 2, 2,11,11,11, 2, 2,11,11,11,11,11], //6
    [2,11,11,11, 2, 2,11,11,11,12,12,11,11,11, 2, 2,11,11,11,11,11], //7
    [2,11,11,11, 2, 2,11,11,11,13,13,11,11,11, 2, 2,11,11,11,11,11], //8
    [2,11,11,11, 2, 2,11,11,11,11,11,11,11,11, 2, 2,11,11,11,11,11], //9
    [2,11,11,11, 2, 2,11,11,11,11,11,11,11,11, 2, 2,11,11,11,11,11], //10
    [2,11,11,11, 2, 2,11,11,11,11,11,11,11,11, 2, 2,11,11,11,11,11]  //11
  ],

  assetMap: [
    //       2nd Value (x)
    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
      [0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0]  //11
    ],

  tileRules: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //1
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0], //4   1st VALUE (y)
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0], //5
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0], //6
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0], //7
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0], //8
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0], //9
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0], //10
    [1, 0, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 2, 0, 0]  //11
  ],

  itemMap: [
    //       2nd Value (x)
    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
    ],

    //tile positions when the player comes from each door
  startTiles: [
              [2,10,4] //from the street
              ],

    //information to determine which room a door leads to
  doorTransitions: [
                    [2,11,4], //to the street(left)
                    [18,11,4] //to the street(right)
                    ]
}

//Level Control Variables

let levels = [albaRoom,mainHouse,garden,lauraRoom,street,superMarket];
let currentLevel = 0;
let backgroundMap;
let assetMap;
let tileRules;

//timer values
let count;
let dialogueCount; //which phase the dialogue of an item is on
let dialogueEnd; //which phase the dialogue ends on and the text closes
let dialogueList = []; //the list of dialogue for each item
let countMax = 30;
let dialogueOn = false

function preload(){
  //background textures with texture, x size, and y size
  textures[0] = [loadImage('Resources/Images/HouseTextures/Tiles/hallwayFloor.png'),tileSize,tileSize]
  textures[1] = [loadImage('Resources/Images/HouseTextures/Tiles/wall.png'),tileSize,tileSize]
  textures[2] = [loadImage('Resources/Images/Out_Of_Bounds.png'),tileSize,tileSize]
  textures[3] = [loadImage('Resources/Images/HouseTextures/Tiles/doorLeft.png'),tileSize,tileSize]
  textures[4] = [loadImage('Resources/Images/HouseTextures/Tiles/doorDown.png'),tileSize,tileSize]
  textures[5] = [loadImage('Resources/Images/HouseTextures/Tiles/wallTrim.png'),tileSize,tileSize]
  textures[6] = [loadImage('Resources/Images/HouseTextures/Tiles/kitchenFloor.png'),tileSize,tileSize]
  textures[7] = [loadImage('Resources/Images/HouseTextures/Tiles/grasstile_plain.png'),tileSize,tileSize]
  textures[8] = [loadImage('Resources/Images/HouseTextures/Tiles/doorRight.png'),tileSize,tileSize]
  textures[9] = [loadImage('Resources/Images/path.png'),tileSize,tileSize]
  textures[10] = [loadImage('Resources/Images/road.png'),tileSize,tileSize]
  textures[11] = [loadImage('Resources/Images/SupermarketTextures/Tiles/supermarketFloor.png'),tileSize,tileSize]
  textures[12] = [loadImage('Resources/Images/SupermarketTextures/Tiles/supermarketWall.png'),tileSize,tileSize]
  textures[13] = [loadImage('Resources/Images/SupermarketTextures/Tiles/supermarketWallTrim.png'),tileSize,tileSize]

  //assets
  assets[0] = [loadImage('Resources/Images/Empty.png'),tileSize,tileSize]
  assets[1] = [loadImage('Resources/Images/HouseTextures/Furniture/dinnerTable.png'),96,96]
  assets[2] = [loadImage('Resources/Images/HouseTextures/Furniture/plant.png'),tileSize,64]
  assets[3] = [loadImage('Resources/Images/HouseTextures/Furniture/door.png'),tileSize,64]
  assets[4] = [loadImage('Resources/Images/HouseTextures/Furniture/doorLeft.png'),tileSize,tileSize]
  assets[5] = [loadImage('Resources/Images/HouseTextures/Furniture/doorDown.png'),tileSize,tileSize]
  assets[6] = [loadImage('Resources/Images/HouseTextures/Furniture/doorRight.png'),tileSize,tileSize]
  assets[7] = [loadImage('Resources/Images/HouseTextures/Furniture/kitchen counter.png'),tileSize,tileSize]
  assets[8] = [loadImage('Resources/Images/HouseTextures/Furniture/kitchen sink.png'),tileSize,64]
  assets[9] = [loadImage('Resources/Images/HouseTextures/Furniture/nightstand.png'),tileSize,tileSize]
  assets[10] = [loadImage('Resources/Images/HouseTextures/Furniture/nightstand_lamp.png'),tileSize,64]
  assets[11] = [loadImage('Resources/Images/HouseTextures/Furniture/alba bed.png'),128,128]
  assets[12] = [loadImage('Resources/Images/HouseTextures/Furniture/laura bed.png'),128,128]
  assets[13] = [loadImage('Resources/Images/HouseTextures/Furniture/albadesk.png'),96,128]
  assets[14] = [loadImage('Resources/Images/HouseTextures/Furniture/lauradesk.png'),96,128]
  assets[15] = [loadImage('Resources/Images/HouseTextures/Furniture/cream rug.png'),64,96]
  assets[16] = [loadImage('Resources/Images/HouseTextures/Furniture/pink rug.png'),96,64]
  assets[17] = [loadImage('Resources/Images/SupermarketTextures/Tiles/storewallleft.png'),256,64]
  assets[18] = [loadImage('Resources/Images/SupermarketTextures/Tiles/storewallright.png'),320,64]
  assets[19] = [loadImage('Resources/Images/HouseTextures/Furniture/Cupboard.png'),tileSize,tileSize]

  //sprite
  playerSprites[0] = loadImage('Resources/Images/CharacterSprites/AlbaDown.png')
  playerSprites[1] = loadImage('Resources/Images/CharacterSprites/AlbaLeft.png')
  playerSprites[2] = loadImage('Resources/Images/CharacterSprites/AlbaUp.png')
  playerSprites[3] = loadImage('Resources/Images/CharacterSprites/AlbaRight.png')

  //item textures
  itemTextures[0] = [loadImage('Resources/Images/Out_Of_Bounds.png'),tileSize,tileSize]
  itemTextures[1] = [loadImage('Resources/Images/Empty.png'),tileSize,tileSize]
  itemTextures[2] = [loadImage('Resources/Images/Empty.png'),tileSize,tileSize]

  itemDialogue[1] = loadStrings('Resources/DeskDialogue.txt')
  itemDialogue[2] = loadStrings('Resources/CupboardDialogue.txt')
}

function setup() {
  createCanvas(672,384);

  loadLevel();
  player = new Player(playerSprites, 9, 7, playerSizeX,playerSizeY,tileRules);
}

function loadLevel() {
  backgroundMap = levels[currentLevel].backgroundMap
  assetMap = levels[currentLevel].assetMap
  tileRules = levels[currentLevel].tileRules
  itemMap = levels[currentLevel].itemMap

  //CREATING TILEMAP
  makeTileMap(tileMap,backgroundMap,textures);
  
  //CREATING ASSET MAP
  makeTileMap(assetTileMap,assetMap,assets);

  //CREATING ITEMMAP
  //nested loop that creates the item map 
  for (let tileX = 0; tileX < tilesX; tileX++) {
    items[tileX] = []; //creates an empty column on the tilemap
    for (let tileY = 0; tileY < tilesY; tileY++) {

      //Set the texture for the tile
      let itemTexture = itemMap[tileY][tileX];
      let itemID = itemTexture
      let itemName = itemTypeName[itemID]
        //creates a new tile from the tile class and puts it in the current column
        if (itemID != 0){
          items[tileX][tileY] = new Item(itemName,itemTextures[itemTexture][0], tileX, tileY, itemTextures[itemTexture][1], itemTextures[itemTexture][2], itemID, itemDialogue[itemID]);
        }
        else{
          items[tileX][tileY] = ""
        }
      
    }
  }
}

function makeTileMap(mapType,textureMap,textureType) {
  let tileID = 0; // ID number for a specific tile

  //nested loop that creates the tile map 
  for (let tileX = 0; tileX < tilesX; tileX++) {
    mapType[tileX] = []; //creates an empty column on the tilemap
    for (let tileY = 0; tileY < tilesY; tileY++) {

      //Set the texture for the tile
      let texture = textureMap[tileY][tileX];
      //creates a new tile from the tile class and puts it in the current column
      mapType[tileX][tileY] = new Tile(textureType[texture][0], tileX, tileY, textureType[texture][1], textureType[texture][2], tileID);
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

  //displays all of the tiles
  for (let tileX = 0; tileX < tilesX; tileX++){
    for (let tileY = 0; tileY < tilesY; tileY++){
      assetTileMap[tileX][tileY].display()
    }
  }

  for (let tileX = 0; tileX < tilesX; tileX++){
    for (let tileY = 0; tileY < tilesY; tileY++){
      if (itemMap[tileY][tileX] != 0){
        items[tileX][tileY].display()
      }
    }
  }

  if (player.transition && dialogueOn == false){
    //stops the player moving for 30 frames after going through a door
    if (count === countMax) player.transition = false;
    else count ++
  }

  player.display();
  player.setDirection();
  player.move();
  player.interact();
  player.checkDoorProgress();

  //displays dialogue when item is picked up
  if (player.dialogue == "empty"){
    dialogueCount = 0
  }
  else{
    if (dialogueOn == false) player.dialogue = "empty";
    else{
      stroke("white")
      fill(0,0,0,150)
      rect(0,330,672,384)
      noStroke()
      textStyle(BOLD)
      textSize(13)
      fill('white')
      text(player.dialogue,5,335,667)
    }
  }
}

//creates the tile class
class Tile {
  constructor(texture,tileX, tileY, tileSizeX, tileSizeY, tileID){
    //tile texture
    this.texture = texture;
    //position on tile map
    this.tileX = tileX;
    this.tileY = tileY;
    //pixel position on the canvas
    this.xPos = this.tileX * tileSize;
    this.yPos = this.tileY * tileSize;

    this.tileSizeX = tileSizeX; //sets the tile size
    this.tileSizeY = tileSizeY; //sets the tile size
    this.tileID = tileID; //sets the tileID number
  }

  display(){
    noStroke()
    image(this.texture,this.xPos,this.yPos,this.tileSizeX,this.tileSizeY)
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

class Item {
  constructor(name,texture,tileX, tileY, tileSizeX, tileSizeY, itemID, dialogue){
    //item texture
    this.texture = texture;
    //position on tile map
    this.tileX = tileX;
    this.tileY = tileY;
    //pixel position on the canvas
    this.xPos = this.tileX * tileSize;
    this.yPos = this.tileY * tileSize;

    //itemInfo
    this.name = name;
    this.tileSizeX = tileSizeX; //sets the item size
    this.tileSizeY = tileSizeY; //sets the item size
    this.itemID = itemID; //Determines the type of item
    this.dialogue = dialogue //dialogue for the item type
  }

  display(){
    noStroke()
    image(this.texture,this.xPos,this.yPos,this.tileSizeX,this.tileSizeY)
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
    this.speed = 2
    this.spriteDirection = 0

    this.dialogue = "empty"
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

          if (tileRules[nextTileY][nextTileX] === 2){ //transitions to new level through doors
            let previousLevel;
            let nextLevel;
            let doorX;
            let doorY;
            //goes through door transition list until it finds which door has been used to 
            //find out which room the door goes to
            for (let x = 0; x < levels[currentLevel].doorTransitions.length; x++){
              doorX = levels[currentLevel].doorTransitions[x][0]
              doorY = levels[currentLevel].doorTransitions[x][1]
              if (nextTileX == doorX && nextTileY == doorY){
                nextLevel = levels[currentLevel].doorTransitions[x][2]
              }
            }
            previousLevel = currentLevel
            currentLevel = nextLevel
            loadLevel()
            this.setPlayerPosition(previousLevel)
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

  checkDoorProgress(){
    if (inventory.length >= 2){
      albaRoom.tileRules[10][8] = 2
    }
  }

  //sets start position in each level
  setPlayerPosition(previousLevel){
    //goes through start tiles to find out which tile to start the player on
    //according to the previous level
    for (let x = 0; x < levels[currentLevel].startTiles.length; x++){
      if (previousLevel == levels[currentLevel].startTiles[x][2]){
        this.tileX = levels[currentLevel].startTiles[x][0] 
        this.tileY = levels[currentLevel].startTiles[x][1]
      }
    }
    this.xPos = this.tileX * playerSizeX
    this.yPos = this.tileY * playerSizeX
  }

  interact(){
    if (keyIsDown(69)){ //e
      //Checks the tile above for items
      if (this.facing == "up"){
        let tileSelectedX = this.tileX 
        let tileSelectedY = this.tileY - 1
        this.pickUp(tileSelectedX,tileSelectedY)
      }

      //Checks the tile below for items
      if (this.facing == "down"){
        let tileSelectedX = this.tileX 
        let tileSelectedY = this.tileY + 1
        this.pickUp(tileSelectedX,tileSelectedY)
      }

      //Checks the tile to the left for items
      if (this.facing == "left"){
        let tileSelectedX = this.tileX - 1
        let tileSelectedY = this.tileY
        this.pickUp(tileSelectedX,tileSelectedY)
      }

      //Checks the tile to the right for items
      if (this.facing == "right"){
        let tileSelectedX = this.tileX + 1
        let tileSelectedY = this.tileY
        this.pickUp(tileSelectedX,tileSelectedY)
      }
    }
  }

  pickUp(tileSelectedX,tileSelectedY){
    //checks if tile exists
    if (tileSelectedX >= 0 && tileSelectedX < tilesX && tileSelectedY >= 0 && tileSelectedY < tilesY){
      //if there is an item, it is removed from the item map
      //and placed into the inventory
      if (itemMap[tileSelectedY][tileSelectedX] != 0){

        itemMap[tileSelectedY][tileSelectedX] = 0
        let itemValue = [items[tileSelectedX][tileSelectedY].name,items[tileSelectedX][tileSelectedY].itemID]
        append(inventory,itemValue)
        items[tileSelectedX][tileSelectedY] = ""
        console.log("Inventory",inventory)
        dialogueOn = true
        this.transition = true
        dialogueList = itemDialogue[itemValue[1]]
        dialogueCount = 0
        dialogueEnd = dialogueList.length - 1
        this.dialogue = dialogueList[dialogueCount]
      }
    }
  }
}

function keyPressed(){
  if (keyCode === 69){
    if (dialogueOn && dialogueCount == dialogueEnd){
      dialogueOn = false
      player.transition = false
    }
    
    if (dialogueOn){
      dialogueCount ++
      player.dialogue = dialogueList[dialogueCount]
    }
  }
}
