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
let itemTypeName = ["","Desk","Cupboard","Teddybear","Clock","Magnet","Note"]
let dialogueTest;
let itemDialogue = [""]
let albaDialogue = []
let albaDialogueCount = -1
let inventory = [];

//progress points to bring up dialogue and unlock doors when needed
progressPoint1 = false
progressPoint2 = false

//menu screen variables
let gameStarted = false
let StartButton;

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
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,42, 0, 0, 0, 0], //3
      [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 7,33, 7,29, 7], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0], //8
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0], //9
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0], //10
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]  //11
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
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0], //9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
    ],

    //tile positions when the player comes from each door
  startTiles: [
              [3,6,0], //From Alba's Room
              [11,3,2], //From Laura's Room
              [11,10,3] //From Street
              ],

    //information to determine which room a door leads to
  doorTransitions: [
                    [3,5,0], //To Alba's Room
                    [11,2,2], //To Laura's Room
                    [11,11,3] //From Street
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
      [0, 0, 0, 0, 0,40, 0, 0, 0, 0, 0,40, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0,13, 0, 0, 0, 0, 9,11, 0, 0, 0,10, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0,19, 0, 0, 0, 0,15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
      [0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
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
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], //7
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], //8
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], //9
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], //10
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
      [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
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
    [0, 0, 0, 0, 0,41, 0, 0, 0, 0, 0, 0,41, 0, 0, 0, 0, 0, 0, 0, 0], //1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
    [0, 0, 0, 0,10,12, 0, 0, 0, 9, 0, 0, 0,14, 0, 0, 0, 0, 0, 0, 0], //3
    [0, 0, 0, 0, 0, 0,21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
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
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], //10
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  //11
  ],

  itemMap: [
    //       2nd Value (x)
    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
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
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], //0
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], //1
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], //2
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], //3
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], //4   1st VALUE (y)
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], //5
    [7, 7, 9, 7, 7, 7, 7, 7, 9, 7, 7, 7, 7, 7, 7, 7, 9, 7, 7, 7, 7], //6
    [7, 7, 9, 7, 7, 7, 7, 7, 9, 7, 7, 7, 7, 7, 7, 7, 9, 7, 7, 7, 7], //7
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], //8
    [14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14], //9
    [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], //10
    [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]  //11
  ],

  assetMap: [
    //       2nd Value (x)
    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
      [28,0, 0, 0, 0, 0, 0,32, 0, 0, 0, 0, 0, 0,31, 0, 0, 0, 0, 0, 0], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
      [30,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
    ],

  tileRules: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //1
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2], //2
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], //3
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], //4   1st VALUE (y)
    [1, 1, 2, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], //5
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
              [2,6,1], //from the main house
              [8,6,4] //from the supermarket
              ],

    //information to determine which room a door leads to
  doorTransitions: [
                    [2,5,1], //to the main house
                    [8,5,4], //to the supermarket
                    [20,2,5] //to the graveyard
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
      [0,17, 0, 0, 0, 0, 0, 0, 0, 0, 0,18, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
      [0, 0, 0,22, 0, 0,23, 0, 0, 0, 0, 0, 0,24, 0, 0, 0,25, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,25, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,25, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0,26,27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
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
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1], //4   1st VALUE (y)
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1], //5
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1], //6
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1], //7
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1], //8
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1], //9
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0], //10
    [1, 0, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 2, 0, 0]  //11
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
              [2,10,3] //from the street
              ],

    //information to determine which room a door leads to
  doorTransitions: [
                    [2,11,3], //to the street(left)
                    [18,11,3] //to the street(right)
                    ]
}

let graveyard = {

  backgroundMap: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], //0
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], //1
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], //2
    [2, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2], //3
    [2, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2], //4   1st VALUE (y)
    [2, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2], //5
    [2, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2], //6
    [2, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2], //7
    [2, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2], //8
    [2, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2], //9
    [2, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2], //10
    [2, 2, 2, 2, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 2, 2, 2, 2]  //11
  ],

  assetMap: [
    //       2nd Value (x)
    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
      [0, 0, 0, 0,38, 0, 0, 0, 0, 0, 0,39, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0,34, 0,35, 0, 0, 0, 0, 0,35, 0,35, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0,35, 0,35, 0, 0, 0, 0, 0,34, 0,34, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,37, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0,34, 0,34, 0, 0, 0, 0, 0,35, 0,34, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
      [0, 0, 0, 0,38, 0, 0, 0, 0, 0, 0,39, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
    ],

  tileRules: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //1
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //2
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1], //3
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], //4   1st VALUE (y)
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1], //5
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], //6
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], //7
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1], //8
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], //9
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //10
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]  //11
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
      [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
    ],

    //tile positions when the player comes from each door
  startTiles: [
              [10,11,3] //from the street
              ]
}

//Level Control Variables

let levels = [albaRoom,mainHouse,lauraRoom,street,superMarket,graveyard];
let currentLevel = 0;
let backgroundMap;
let assetMap;
let tileRules;

//dialogueValues
let dialogueCount; //which phase the dialogue of an item is on
let dialogueEnd; //which phase the dialogue ends on and the text closes
let dialogueList = []; //the list of dialogue for each item
let dialogueColour; //determines the colour of dialogue
let dialogueOn = false

//timer values
let count;
let countMax = 30;

//font
let gamefont;
let mainthemebgm;

function preload(){
  //music
  mainthemebgm = loadSound('Resources/Audio/Music/MainTheme.ogg');
  mainthemebgm.setVolume(0.5);
  //custom font
  gamefont = loadFont('Resources/Fonts/dogicapixel.otf');
  //cover image for title screen
  frontcover = loadImage('Resources/Images/frontcover.png');

  //background textures with texture, x size, and y size
  textures[1] = [loadImage('Resources/Images/HouseTextures/Tiles/wall.png'),tileSize,tileSize]
  textures[0] = [loadImage('Resources/Images/HouseTextures/Tiles/hallwayFloor.png'),tileSize,tileSize]
  textures[2] = [loadImage('Resources/Images/Out_Of_Bounds.png'),tileSize,tileSize]
  textures[3] = [loadImage('Resources/Images/HouseTextures/Tiles/doorLeft.png'),tileSize,tileSize]
  textures[4] = [loadImage('Resources/Images/HouseTextures/Tiles/doorDown.png'),tileSize,tileSize]
  textures[5] = [loadImage('Resources/Images/HouseTextures/Tiles/wallTrim.png'),tileSize,tileSize]
  textures[6] = [loadImage('Resources/Images/HouseTextures/Tiles/kitchenFloor.png'),tileSize,tileSize]
  textures[7] = [loadImage('Resources/Images/StreetTextures/Tiles/grasstile_plain.png'),tileSize,tileSize]
  textures[8] = [loadImage('Resources/Images/HouseTextures/Tiles/doorRight.png'),tileSize,tileSize]
  textures[9] = [loadImage('Resources/Images/StreetTextures/Tiles/path.png'),tileSize,tileSize]
  textures[10] = [loadImage('Resources/Images/StreetTextures/Tiles/road.png'),tileSize,tileSize]
  textures[11] = [loadImage('Resources/Images/SupermarketTextures/Tiles/supermarketFloor.png'),tileSize,tileSize]
  textures[12] = [loadImage('Resources/Images/SupermarketTextures/Tiles/supermarketWall.png'),tileSize,tileSize]
  textures[13] = [loadImage('Resources/Images/SupermarketTextures/Tiles/supermarketWallTrim.png'),tileSize,tileSize]
  textures[14] = [loadImage('Resources/Images/StreetTextures/Tiles/Pathedge.png'),tileSize,tileSize]

  //assets that go on top of tiles
  assets[0] = [loadImage('Resources/Images/Empty.png'),tileSize,tileSize]
  assets[1] = [loadImage('Resources/Images/HouseTextures/Furniture/dinnerTable.png'),96,96]
  assets[2] = [loadImage('Resources/Images/HouseTextures/Furniture/plant.png'),tileSize,64]
  assets[3] = [loadImage('Resources/Images/HouseTextures/Furniture/door.png'),tileSize,64]
  assets[4] = [loadImage('Resources/Images/HouseTextures/Furniture/doorLeft.png'),tileSize,tileSize]
  assets[5] = [loadImage('Resources/Images/HouseTextures/Furniture/doorDown.png'),tileSize,tileSize]
  assets[6] = [loadImage('Resources/Images/HouseTextures/Furniture/doorRight.png'),tileSize,tileSize]
  assets[7] = [loadImage('Resources/Images/HouseTextures/Furniture/kitchen counter.png'),tileSize,64]
  assets[8] = [loadImage('Resources/Images/HouseTextures/Furniture/kitchen sink.png'),tileSize,64]
  assets[9] = [loadImage('Resources/Images/HouseTextures/Furniture/nightstand.png'),tileSize,64]
  assets[10] = [loadImage('Resources/Images/HouseTextures/Furniture/nightstand_lamp.png'),tileSize,64]
  assets[11] = [loadImage('Resources/Images/HouseTextures/Furniture/alba bed.png'),128,128]
  assets[12] = [loadImage('Resources/Images/HouseTextures/Furniture/laura bed.png'),128,128]
  assets[13] = [loadImage('Resources/Images/HouseTextures/Furniture/albadesk.png'),96,128]
  assets[14] = [loadImage('Resources/Images/HouseTextures/Furniture/lauradesk.png'),96,128]
  assets[15] = [loadImage('Resources/Images/HouseTextures/Furniture/cream_rug.png'),96,64]
  assets[16] = [loadImage('Resources/Images/HouseTextures/Furniture/pink rug.png'),96,64]
  assets[17] = [loadImage('Resources/Images/SupermarketTextures/Tiles/storewallleft.png'),256,64]
  assets[18] = [loadImage('Resources/Images/SupermarketTextures/Tiles/storewallright.png'),320,64]
  assets[19] = [loadImage('Resources/Images/HouseTextures/Furniture/Cupboard.png'),tileSize,128]
  assets[20] = [loadImage('Resources/Images/HouseTextures/Furniture/Clock.png'),tileSize,tileSize]
  assets[21] = [loadImage('Resources/Images/HouseTextures/Furniture/teddybear.png'),tileSize,tileSize]
  assets[22] = [loadImage('Resources/Images/SupermarketTextures/Furniture/Fruit1.png'),tileSize,256]
  assets[23] = [loadImage('Resources/Images/SupermarketTextures/Furniture/Fruit2.png'),tileSize,256]
  assets[24] = [loadImage('Resources/Images/SupermarketTextures/Furniture/Fruit3.png'),tileSize,256]
  assets[25] = [loadImage('Resources/Images/SupermarketTextures/Furniture/Till.png'),128,64]
  assets[26] = [loadImage('Resources/Images/SupermarketTextures/Furniture/SmallFruit1.png'),tileSize,tileSize]
  assets[27] = [loadImage('Resources/Images/SupermarketTextures/Furniture/SmallFruit2.png'),tileSize,tileSize]
  assets[28] = [loadImage('Resources/Images/StreetTextures/assets/house.png'),192,192]
  assets[29] = [loadImage('Resources/Images/HouseTextures/Furniture/Fridge.png'),tileSize,64]
  assets[30] = [loadImage('Resources/Images/StreetTextures/assets/road.png'),672,64]
  assets[31] = [loadImage('Resources/Images/StreetTextures/assets/church.png'),224,224]
  assets[32] = [loadImage('Resources/Images/StreetTextures/assets/supermarket.png'),224,192]
  assets[33] = [loadImage('Resources/Images/HouseTextures/Furniture/cooker.png'),tileSize,64]
  assets[34] = [loadImage('Resources/Images/GraveyardTextures/gravestone1.png'),tileSize,64]
  assets[35] = [loadImage('Resources/Images/GraveyardTextures/gravestone2.png'),tileSize,64]
  assets[36] = [loadImage('Resources/Images/GraveyardTextures/lauragravestone.png'),tileSize,64]
  assets[37] = [loadImage('Resources/Images/GraveyardTextures/graveyardpath.png'),tileSize,192]
  assets[38] = [loadImage('Resources/Images/GraveyardTextures/graveyardbushesleft.png'),192,64]
  assets[39] = [loadImage('Resources/Images/GraveyardTextures/graveyardbushesright.png'),192,64]
  assets[40] = [loadImage('Resources/Images/HouseTextures/Furniture/albawindow.png'),128,64]
  assets[41] = [loadImage('Resources/Images/HouseTextures/Furniture/laurawindow.png'),128,64]
  assets[42] = [loadImage('Resources/Images/HouseTextures/Furniture/kitchenwindow.png'),96,64]
  assets[43] = [loadImage('Resources/Images/HouseTextures/Furniture/welcomemat.png'),96,tileSize]


  //sprite
  playerSprites[0] = loadImage('Resources/Images/CharacterSprites/AlbaDown.png')
  playerSprites[1] = loadImage('Resources/Images/CharacterSprites/AlbaLeft.png')
  playerSprites[2] = loadImage('Resources/Images/CharacterSprites/AlbaUp.png')
  playerSprites[3] = loadImage('Resources/Images/CharacterSprites/AlbaRight.png')

  //item interactions
  itemTextures[0] = [loadImage('Resources/Images/Out_Of_Bounds.png'),tileSize,tileSize] //Nothing, used to stop 0 on the map being an item
  itemTextures[1] = [loadImage('Resources/Images/Empty.png'),tileSize,tileSize] //Desk interaction
  itemTextures[2] = [loadImage('Resources/Images/Empty.png'),tileSize,tileSize] //Cupboard interaction
  itemTextures[3] = [loadImage('Resources/Images/Empty.png'),tileSize,tileSize] //Teddybear interaction
  itemTextures[4] = [loadImage('Resources/Images/Empty.png'),tileSize,tileSize] //Clock interaction
  itemTextures[5] = [loadImage('Resources/Images/Empty.png'),tileSize,tileSize] //Magnet interaction
  itemTextures[6] = [loadImage('Resources/Images/Empty.png'),tileSize,tileSize] //Note interaction

  itemDialogue[1] = loadStrings('Resources/Dialogue/ItemDialogue/DeskDialogue.txt')
  itemDialogue[2] = loadStrings('Resources/Dialogue/ItemDialogue/CupboardDialogue.txt')
  itemDialogue[3] = loadStrings('Resources/Dialogue/ItemDialogue/TeddybearDialogue.txt')
  itemDialogue[4] = loadStrings('Resources/Dialogue/ItemDialogue/ClockDialogue.txt')
  itemDialogue[5] = loadStrings('Resources/Dialogue/ItemDialogue/MagnetDialogue.txt')
  itemDialogue[6] = loadStrings('Resources/Dialogue/ItemDialogue/NoteDialogue.txt')

  albaDialogue[0] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue1.txt')
  albaDialogue[1] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue2.txt')

}

function setup() {
  createCanvas(672,384);
  loadLevel();
  player = new Player(playerSprites, 10, 5, playerSizeX,playerSizeY,tileRules);
  //set font to custom pixel font
  textFont(gamefont);
  
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

  //makes the start button
  if (!gameStarted){
    StartButton = createButton("Start")
    StartButton.style('font-size', '40px');
    StartButton.style('color', 'white');
    StartButton.style('background-color','transparent');
    StartButton.style('border-radius','40px');
    StartButton.style('border-color','white');
    StartButton.position(width/2+75,260);
    StartButton.size(180,60);
    StartButton.mousePressed(startGame);
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
  player.checkProgress();

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
      textSize(9)
      fill(dialogueColour)
      text(player.dialogue,0,height-37,667)
    }
  }

  if (gameStarted == false){
    
    fill(0)
    
    square(0,0,700)
    fill(255)
    image(frontcover,0,0,width,height);
    textSize(30)
    textStyle(BOLD)
    textAlign(CENTER)
    text("¿Dónde está \n Laura?",500,160)
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

    if (!this.isMoving && gameStarted){
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

  checkProgress(){
    //opens doors as the player picks up more items
    let inventorySize = inventory.length
    if (inventorySize == 2 && !dialogueOn && !progressPoint1){
      progressPoint1 = true
      albaRoom.tileRules[10][8] = 2
      this.displayAlbaDialogue()
    }
    if (inventorySize == 4){
      lauraRoom.tileRules[10][10] = 2
    }
    if (inventorySize == 6){
      mainHouse.tileRules[11][11] = 2
    }
  }

  //displays the next of alba's dialogue to be said
  displayAlbaDialogue(){
    albaDialogueCount ++
    dialogueOn = true
    this.transition = true
    dialogueColour = "lightgreen"
    dialogueList = albaDialogue[albaDialogueCount]
    dialogueCount = 0
    dialogueEnd = dialogueList.length - 1
    this.dialogue = dialogueList[dialogueCount]
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
        dialogueOn = true
        this.transition = true
        dialogueColour = "white"
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

function startGame(){
  mainthemebgm.loop();
  gameStarted = true
  buttonPressed = true
  StartButton.remove()
  player.displayAlbaDialogue()
}