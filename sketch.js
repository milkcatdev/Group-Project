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

//Items and Inventory
let items = [];
let itemTextures = [];
let itemTypeName = ["","Key","Test"]

let inventory = [];


//LEVEL DATA OBJECTS

let mainHouse = {

  graphicsMap: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2], //0
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 5, 1, 2, 2, 2, 2, 2, 2, 2, 2], //1
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 4, 1, 2, 2, 2, 2, 2, 2, 2, 2], //2
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //3
    [1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //4   1st VALUE (y)
    [8, 8, 8, 4, 8, 8, 8, 8, 8, 8, 3, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8], //5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3], //6
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9], //7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9], //8
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 9, 3, 3, 3, 3, 3, 9], //9
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 2, 9, 3, 3, 3, 3, 3, 9], //10
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 7, 0, 2, 9, 9, 9, 9, 9, 9, 9]  //11
  ],

  tileRules: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //1
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], //2
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //3
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //4   1st VALUE (y)
    [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], //6
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0], //9
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0], //10
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
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], //9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
    ],

  startTiles: [
              [3,6,1],
              [1,7,2]
              ],

  doorTransitions: [
                    [3,5,1],
                    [0,7,2]
                    ]

}

let albaRoom = {

  graphicsMap: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2], //0
    [2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2], //1
    [2, 2, 2, 2, 2, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 2, 2, 2, 2, 2], //2
    [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2], //3
    [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2], //4   1st VALUE (y)
    [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2], //5
    [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2], //6
    [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2], //7
    [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2], //8
    [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2], //9
    [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2], //10
    [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2]  //11
  ],

  tileRules: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //1
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //2
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], //3
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], //4   1st VALUE (y)
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], //5
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], //6
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], //7
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], //8
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], //9
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1], //10
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]  //11
  ],

  itemMap: [
    //       2nd Value (x)
    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
    ],

  startTiles: [
              [10,10,0]
              ],

  doorTransitions: [
                    [10,11,0]
                    ]

}

let garden = {

  graphicsMap: [
  //       2nd Value (x)
  // 0   1    2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19 20
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0], //0
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0], //1
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0], //2
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0], //3
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0], //4   1st VALUE (y)
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 11], //5
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0], //6
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0], //7
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0], //8
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0], //9
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0], //10
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 0]  //11
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

  startTiles: [
              [19,5,0]
              ],

  doorTransitions: [
                    [20,5,0]
                    ]

}

//Level Control Variables

let levels = [mainHouse,albaRoom,garden];
let currentLevel = 0;
let graphicsMap;
let tileRules;

//timer values
let count;
let countMax = 30;

function preload(){

  textures[0] = loadImage('Resources/Images/hallwayFloor.png');
  textures[1] = loadImage('Resources/Images/wall.png')
  textures[2] = loadImage('Resources/Images/Out_Of_Bounds.png')
  textures[3] = loadImage('Resources/Images/table.png')
  textures[4] = loadImage('Resources/Images/doorBottom.png')
  textures[5] = loadImage('Resources/Images/doorTop.png')
  textures[6] = loadImage('Resources/Images/doorLeft.png')
  textures[7] = loadImage('Resources/Images/doorDown.png')
  textures[8] = loadImage('Resources/Images/wallTrim.png')
  textures[9] = loadImage('Resources/Images/kitchenFloor.png')
  textures[10] = loadImage('Resources/Images/grasstile_plain.png')
  textures[11] = loadImage('Resources/Images/doorRight.png')

  //sprite
  playerSprites[0] = loadImage('Resources/Images/AlbaDown.png')
  playerSprites[1] = loadImage('Resources/Images/AlbaLeft.png')
  playerSprites[2] = loadImage('Resources/Images/AlbaUp.png')
  playerSprites[3] = loadImage('Resources/Images/AlbaRight.png')

  //item textures
  itemTextures[0] = loadImage('Resources/Images/Out_Of_Bounds.png')
  itemTextures[1] = loadImage('Resources/Images/key.png')
  itemTextures[2] = loadImage('Resources/Images/collision_Tile.png')
}


function setup() {
  createCanvas(672,384);

  loadLevel();

  player = new Player(playerSprites, 3, 7, playerSizeX,playerSizeY,tileRules);
}

function loadLevel() {
  graphicsMap = levels[currentLevel].graphicsMap
  tileRules = levels[currentLevel].tileRules
  itemMap = levels[currentLevel].itemMap

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
          items[tileX][tileY] = new Item(itemName,itemTextures[itemTexture], tileX, tileY, tileSize, itemID);
        }
        else{
          items[tileX][tileY] = ""
        }
      
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

  for (let tileX = 0; tileX < tilesX; tileX++){
    for (let tileY = 0; tileY < tilesY; tileY++){
      if (itemMap[tileY][tileX] != 0){
        items[tileX][tileY].display()
      }
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
  player.interact();

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

class Item {
  constructor(name,texture,tileX, tileY, tileSize, itemID){
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
    this.tileSize = tileSize; //sets the item size
    this.itemID = itemID; //Determines the type of item
  }

  display(){
    noStroke()
    image(this.texture,this.xPos,this.yPos,this.tileSize,this.tileSize)
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
          }
        }
      }

      //Checks the tile below for items
      if (this.facing == "down"){
        let tileSelectedX = this.tileX 
        let tileSelectedY = this.tileY + 1
        
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
          }
        }
        
      }

      //Checks the tile to the left for items
      if (this.facing == "left"){
        let tileSelectedX = this.tileX - 1
        let tileSelectedY = this.tileY
        
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
          }
        }
      }

      //Checks the tile to the right for items
      if (this.facing == "right"){
        let tileSelectedX = this.tileX + 1
        let tileSelectedY = this.tileY
        
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
          }
        }
      }
    }
  }
}

