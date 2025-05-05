//INITIALISE PLAYER VARIABLES
let player;
let playerSprites = [];
let walkingDown = [];
let walkingLeft = [];
let walkingUp = [];
let walkingRight = [];
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
let itemTypeName = ["","Desk","Cupboard","Teddybear","Clock","Magnet","Note","npc"]
let itemDialogue = [""]          //list of dialogue for interactables
let albaDialogue = []            //list of alba's dialogue
let albaDialogueCount = -1       //index of alba's dialogue text files to be displayed
let npcDialogue = []            //list of shopper's dialogue
let npcDialogueCount = -1       //index of alba's dialogue text files to be displayed
let inventory = [];
let objectiveList = []           //list of objectives
let currentObjective = -1        //index of objective to be displayed
let characterSpeaking = false
let currentCharacterName;        //name of current character that is speaking
let currentCharacterPicture;     //picture type list of current character that is speaking
let characterPictures = [];      //list of all character pictures
let currentPicture;              //current picture being displayed
let albaPictureType = [[0],[0],[0],[1],[1,1],[1,1],[1,0],[1,0],[0,1,0],[0,0]
                      ,[1,0],[0,1,1,1],[0,0,0,1,1,1],[1,1,1,1,1],[1,1,1,1],[1,1]
                      ,[0],[0,0],[1,1],[1],[1],[1,1],[1,1,1]]  //order to display alba pictures
let npcPictureType = [[2],[3],[4],[6,6,6,5],[5,6,6],[7,8,8],[8,8,8,8],[8,7],[0,0,0,0,0,0]]
let pictureCount;                //what number of dialogue is being displayed to know which picture to display
let albaColour = "#87A8E7"

//progress points to bring up dialogue and unlock doors when needed
progressPoint1 = false
progressPoint2 = false
progressPoint3 = false
progressPoint4 = false
progressPoint5 = false
progressPoint6 = false
progressPoint7 = false
progressPoint8 = false
progressPoint9 = false
progressPoint10 = false
progressPoint11 = false
progressPoint12 = false
progressPoint13 = false
progressPoint14 = false
progressPoint15 = false
progressPoint16 = false
progressPoint17 = false
progressPoint18 = false
progressPoint19 = false
progressPoint20 = false
progressPoint21 = false
progressPoint22 = false
progressPoint23 = false
progressPoint24 = false
progressPoint25 = false
progressPoint26 = false
progressPoint27 = false
progressPoint28 = false
progressPoint29 = false
progressPoint30 = false
progressPoint31 = false
progressPoint32 = false
progressPoint33 = false

//menu screen variables
let gameStarted = false
let gameEnded = false
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
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], //6
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
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,50, 0, 0, 0, 0, 0], //5
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
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //2
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], //3
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], //4   1st VALUE (y)
    [1, 1, 2, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], //5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], //6
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
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0], //6
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
      [0, 0, 0,48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
      [0, 0, 0,22, 0, 0,23, 0, 0, 0, 0, 0,49,24, 0,46, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,46, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,45, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,25, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0,47, 0,26,27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0]  //11
    ],

  tileRules: [
  //       2nd Value (x)
  // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //0
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //1
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1], //4   1st VALUE (y)
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1], //5
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1], //6
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1], //7
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1], //8
    [1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1], //9
    [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0], //10
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]  //11
  ],

  itemMap: [
    //       2nd Value (x)
    // 0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0], //9
      [0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //11
    ],

    //tile positions when the player comes from each door
  startTiles: [
              [2,10,3] //from the street
              ],

    //information to determine which room a door leads to
  doorTransitions: [
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
      [0, 0, 0, 0,44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
      [0, 0, 0, 0, 0, 0, 0, 0, 0,51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
      [0, 0, 0, 0, 0,34, 0,35, 0, 0, 0, 0, 0,35, 0,35, 0, 0, 0, 0, 0], //3
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4   1st VALUE (y)
      [0, 0, 0, 0, 0,35, 0,35, 0,50, 0, 0, 0,34, 0,34, 0, 0, 0, 0, 0], //5
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
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1], //5
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], //6
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
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
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
let doorX;
let doorY;

//dialogueValues
let dialogueCount; //which phase the dialogue of an item is on
let dialogueEnd; //which phase the dialogue ends on and the text closes
let dialogueList = []; //the list of dialogue for each item
let dialogueColour; //determines the colour of dialogue
let dialogueOn = false

//timer values
let count;
let countMax = 30;
let animationCount = 0
let animationCountMax = 12;

//font
let gamefont;
let mainthemebgm;
let sadthemebgm;

function preload(){
  //music
  mainthemebgm = loadSound('Resources/Audio/Music/MainTheme.ogg');
  sadthemebgm = loadSound('Resources/Audio/Music/SadTheme.ogg');
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
  textures[14] = [loadImage('Resources/Images/StreetTextures/Tiles/pathedge.png'),tileSize,tileSize]

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
  assets[44] = [loadImage('Resources/Images/GraveyardTextures/graveyardbushes.png'),416,64]
  assets[45] = [loadImage('Resources/Images/CharacterSprites/Cashier.png'),96,64]
  assets[46] = [loadImage('Resources/Images/SupermarketTextures/Furniture/Till2.png'),192,64]
  assets[47] = [loadImage('Resources/Images/CharacterSprites/Shopper1.png'),32,64]
  assets[48] = [loadImage('Resources/Images/CharacterSprites/Shopper2.png'),32,64]
  assets[49] = [loadImage('Resources/Images/CharacterSprites/Shopper3.png'),32,64]
  assets[50] = [loadImage('Resources/Images/CharacterSprites/Marco.png'),32,64]
  assets[51] = [loadImage('Resources/Images/GraveyardTextures/bench.png'),96,64]
  
  //sprite
  playerSprites[0] = loadImage('Resources/Images/CharacterSprites/AlbaDown.png')
  playerSprites[1] = loadImage('Resources/Images/CharacterSprites/AlbaLeft.png')
  playerSprites[2] = loadImage('Resources/Images/CharacterSprites/AlbaUp.png')
  playerSprites[3] = loadImage('Resources/Images/CharacterSprites/AlbaRight.png')
  
  //walking animations
  walkingDown[0] = loadImage('Resources/Images/CharacterSprites/albawalking/albadown1.png')
  walkingDown[1] = loadImage('Resources/Images/CharacterSprites/albawalking/albadown2.png')
  walkingDown[2] = loadImage('Resources/Images/CharacterSprites/albawalking/albadown3.png')
  walkingDown[3] = loadImage('Resources/Images/CharacterSprites/albawalking/albadown4.png')
  walkingLeft[0] = loadImage('Resources/Images/CharacterSprites/albawalking/albaleft1.png')
  walkingLeft[1] = loadImage('Resources/Images/CharacterSprites/albawalking/albaleft2.png')
  walkingLeft[2] = loadImage('Resources/Images/CharacterSprites/albawalking/albaleft3.png')
  walkingLeft[3] = loadImage('Resources/Images/CharacterSprites/albawalking/albaleft4.png')
  walkingUp[0] = loadImage('Resources/Images/CharacterSprites/albawalking/albaup1.png')
  walkingUp[1] = loadImage('Resources/Images/CharacterSprites/albawalking/albaup2.png')
  walkingUp[2] = loadImage('Resources/Images/CharacterSprites/albawalking/albaup3.png')
  walkingUp[3] = loadImage('Resources/Images/CharacterSprites/albawalking/albaup4.png')
  walkingRight[0] = loadImage('Resources/Images/CharacterSprites/albawalking/albaright1.png')
  walkingRight[1] = loadImage('Resources/Images/CharacterSprites/albawalking/albaright2.png')
  walkingRight[2] = loadImage('Resources/Images/CharacterSprites/albawalking/albaright3.png')
  walkingRight[3] = loadImage('Resources/Images/CharacterSprites/albawalking/albaright4.png')

  //character pictures
  characterPictures[0] = loadImage('Resources/Images/CharacterSprites/characterArt/albaHappy.png')
  characterPictures[1] = loadImage('Resources/Images/CharacterSprites/characterArt/albaSad.png')
  characterPictures[2] = loadImage('Resources/Images/CharacterSprites/characterArt/ShopperIcon1.png')
  characterPictures[3] = loadImage('Resources/Images/CharacterSprites/characterArt/ShopperIcon2.png')
  characterPictures[4] = loadImage('Resources/Images/CharacterSprites/characterArt/ShopperIcon3.png')
  characterPictures[5] = loadImage('Resources/Images/CharacterSprites/characterArt/CashierHappy.png')
  characterPictures[6] = loadImage('Resources/Images/CharacterSprites/characterArt/CashierSad.png')
  characterPictures[7] = loadImage('Resources/Images/CharacterSprites/characterArt/MarcoHappy.png')
  characterPictures[8] = loadImage('Resources/Images/CharacterSprites/characterArt/MarcoSad.png')
  
  //dialogue
  itemTextures[0] = [loadImage('Resources/Images/Out_Of_Bounds.png'),tileSize,tileSize] //Nothing, used to stop 0 on the map being an item
  itemTextures[1] = [loadImage('Resources/Images/Interact.png'),tileSize,tileSize] //Desk interaction
  itemTextures[2] = [loadImage('Resources/Images/Interact.png'),tileSize,tileSize] //Cupboard interaction
  itemTextures[3] = [loadImage('Resources/Images/Interact.png'),tileSize,tileSize] //Teddybear interaction
  itemTextures[4] = [loadImage('Resources/Images/Interact.png'),tileSize,tileSize] //Clock interaction
  itemTextures[5] = [loadImage('Resources/Images/Interact.png'),tileSize,tileSize] //Magnet interaction
  itemTextures[6] = [loadImage('Resources/Images/Interact.png'),tileSize,tileSize] //Note interaction
  itemTextures[7] = [loadImage('Resources/Images/Interact.png'),tileSize,tileSize] //Shopper1 interaction
  itemTextures[8] = [loadImage('Resources/Images/Interact.png'),tileSize,tileSize] //Shopper2 interaction
  itemTextures[9] = [loadImage('Resources/Images/Interact.png'),tileSize,tileSize] //Shopper3 interaction
  itemTextures[10] = [loadImage('Resources/Images/Interact.png'),tileSize,tileSize] //Cashier interaction
  itemTextures[11] = [loadImage('Resources/Images/Interact.png'),tileSize,tileSize] //Marco interaction

  itemDialogue[1] = loadStrings('Resources/Dialogue/ItemDialogue/DeskDialogue.txt')
  itemDialogue[2] = loadStrings('Resources/Dialogue/ItemDialogue/CupboardDialogue.txt')
  itemDialogue[3] = loadStrings('Resources/Dialogue/ItemDialogue/TeddybearDialogue.txt')
  itemDialogue[4] = loadStrings('Resources/Dialogue/ItemDialogue/ClockDialogue.txt')
  itemDialogue[5] = loadStrings('Resources/Dialogue/ItemDialogue/MagnetDialogue.txt')
  itemDialogue[6] = loadStrings('Resources/Dialogue/ItemDialogue/NoteDialogue.txt')
  itemDialogue[7] = "empty"

  albaDialogue[0] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue1.txt')
  albaDialogue[1] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue2.txt')
  albaDialogue[2] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue3.txt')
  albaDialogue[3] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue4.txt')
  albaDialogue[4] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue5.txt')
  albaDialogue[5] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue6.txt')
  albaDialogue[6] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue7.txt')
  albaDialogue[7] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue8.txt')
  albaDialogue[8] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue9.txt')
  albaDialogue[9] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue10.txt')
  albaDialogue[10] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue11.txt')
  albaDialogue[11] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue12.txt')
  albaDialogue[12] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue13.txt')
  albaDialogue[13] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue14.txt')
  albaDialogue[14] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue15.txt')
  albaDialogue[15] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue16.txt')
  albaDialogue[16] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue17.txt')
  albaDialogue[17] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue18.txt')
  albaDialogue[18] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue19.txt')
  albaDialogue[19] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue20.txt')
  albaDialogue[20] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue21.txt')
  albaDialogue[21] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue22.txt')
  albaDialogue[22] = loadStrings('Resources/Dialogue/AlbaDialogue/AlbaDialogue23.txt')

  npcDialogue[0] = loadStrings('Resources/Dialogue/NPCDialogue/NPCDialogue1.txt')
  npcDialogue[1] = loadStrings('Resources/Dialogue/NPCDialogue/NPCDialogue2.txt')
  npcDialogue[2] = loadStrings('Resources/Dialogue/NPCDialogue/NPCDialogue3.txt')
  npcDialogue[3] = loadStrings('Resources/Dialogue/NPCDialogue/CashierDialogue1.txt')
  npcDialogue[4] = loadStrings('Resources/Dialogue/NPCDialogue/CashierDialogue2.txt')
  npcDialogue[5] = loadStrings('Resources/Dialogue/NPCDialogue/MarcoDialogue1.txt')
  npcDialogue[6] = loadStrings('Resources/Dialogue/NPCDialogue/MarcoDialogue2.txt')
  npcDialogue[7] = loadStrings('Resources/Dialogue/NPCDialogue/MarcoDialogue3.txt')
  npcDialogue[8] = loadStrings('Resources/Dialogue/FinalPresentationText.txt')

  objectiveList[0] = loadStrings('Resources/Dialogue/ObjectiveList/Objective1.txt')
  objectiveList[1] = loadStrings('Resources/Dialogue/ObjectiveList/Objective2.txt')
  objectiveList[2] = loadStrings('Resources/Dialogue/ObjectiveList/Objective3.txt')
  objectiveList[3] = loadStrings('Resources/Dialogue/ObjectiveList/Objective4.txt')
  objectiveList[4] = loadStrings('Resources/Dialogue/ObjectiveList/Objective5.txt')
  objectiveList[5] = loadStrings('Resources/Dialogue/ObjectiveList/Objective6.txt')
  objectiveList[6] = loadStrings('Resources/Dialogue/ObjectiveList/Objective7.txt')
  objectiveList[7] = loadStrings('Resources/Dialogue/ObjectiveList/Objective8.txt')
  objectiveList[8] = loadStrings('Resources/Dialogue/ObjectiveList/Objective9.txt')
  objectiveList[9] = loadStrings('Resources/Dialogue/ObjectiveList/Objective10.txt')
  objectiveList[10] = loadStrings('Resources/Dialogue/ObjectiveList/Objective11.txt')
  objectiveList[11] = loadStrings('Resources/Dialogue/ObjectiveList/Objective12.txt')
  objectiveList[12] = loadStrings('Resources/Dialogue/ObjectiveList/Objective13.txt')
  objectiveList[13] = loadStrings('Resources/Dialogue/ObjectiveList/Objective14.txt')
  objectiveList[14] = loadStrings('Resources/Dialogue/ObjectiveList/Objective15.txt')
  objectiveList[15] = loadStrings('Resources/Dialogue/ObjectiveList/Objective16.txt')
}

function setup() {
  createCanvas(672,384);
  loadLevel();
  player = new Player(playerSprites, 10, 5, playerSizeX,playerSizeY,tileRules);
  //set font to custom pixel font
  textFont(gamefont);
  mainthemebgm.setVolume(0.5);
  
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
        if (items[tileX][tileY].interactable){
        items[tileX][tileY].display()
        }
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
    if (dialogueOn == false){
      player.dialogue = "empty";
      characterSpeaking = false
    }else{
      stroke("white")
      fill(0,0,0,150)
      rect(0,330,672,384)
      textStyle(BOLD)
      textAlign(CENTER)
      fill(dialogueColour)
      stroke(dialogueColour)
      strokeWeight(0.6)
      if (gameEnded){
        fill(0)
        square(0,0,700)
        fill(dialogueColour)
        textSize(12)
        text(player.dialogue,86,height/2,500)
      }else{
        strokeWeight(0.6)
        textSize(9)
        text(player.dialogue,0,height-37,667)
      }
      if (characterSpeaking && pictureCount >= 0 && !gameEnded){
        stroke("white")
        fill(0,0,0,150)
        rect(0,300,80,28)
        rect(608,264,672,64)
        fill(dialogueColour)
        stroke(dialogueColour)
        text(currentCharacterName,40,318)
        image(characterPictures[currentCharacterPicture[pictureCount][dialogueCount]],608,264,64,64)
      }
    }
  }

  //displays 
  if (currentObjective >= 0 && !gameEnded){
    fill(0,0,0,150)
    stroke('white')
    strokeWeight(0.6)
    rect(20,20,200,50)
    fill(255)
    textSize(9)
    textAlign(LEFT)
    text("Objective:",25,35)
    textSize(8)
    text(objectiveList[currentObjective],25,52,180)
  }

  //displays main menu
  if (gameStarted == false){
    image(frontcover,0,0,width,height);
    strokeWeight(1)
    stroke('white')
    fill(0)
    rect(500,350,width,height)
    fill(255)
    textSize(30)
    textAlign(CENTER)
    text("¿Dónde está \n Laura?",500,160)
    textSize(6)
    strokeWeight(0.3)
    text("Controls:",505,360,160)
    text("W,A,S,D To Move",505,370,160)
    text("E to Interact",505,380,160)
  }
  if (gameEnded && !dialogueOn){
    fill(0)
    square(0,0,700)
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
    this.interactable = false
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
    this.frame = 0
    this.speed = 2
    this.spriteDirection = 0

    this.dialogue = "empty"
  }

  display(){
    if (this.facing == "down"){
      this.spriteDirection = 0;
      if (this.isMoving){
        this.playAnimation(walkingDown)
      }
    }
    if (this.facing == "left"){
      this.spriteDirection = 1;
      if (this.isMoving){
        this.playAnimation(walkingLeft)
      }
    }
    if (this.facing == "up"){
      this.spriteDirection = 2;
      if (this.isMoving){
        this.playAnimation(walkingUp)
      }
    }
    if (this.facing == "right"){
      this.spriteDirection = 3;
      if (this.isMoving){
        this.playAnimation(walkingRight)
      }
    }
    if (!this.isMoving){
    image(this.sprites[this.spriteDirection],this.xPos,this.yPos-this.playerSizeX,this.playerSizeX,this.playerSizeY);
    }
  }

  playAnimation(direction){
    if(this.frame >= 4){
      this.frame = 0
    }
    image(direction[this.frame],this.xPos,this.yPos-this.playerSizeX,this.playerSizeX,this.playerSizeY);
    animationCount ++
    if (animationCount == animationCountMax){
      this.frame ++
      animationCount = 0
    }
  }

  setDirection(){
    let up = 87;    //w
    let down = 83;    //s
    let left = 65;    //a
    let right = 68    //d

    if (!this.isMoving && gameStarted && !gameEnded){
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
    if (gameStarted){
      //opens doors as the player picks up more items
      let inventorySize = inventory.length
      if (inventorySize == 0 && !dialogueOn && !progressPoint1){ //Desk and cupboard objective displays once
        progressPoint1 = true                                    //the dialogue is closed
        currentObjective ++
        items[7][5].interactable = true
        items[3][9].interactable = true
      }
      if (inventorySize == 2 && !dialogueOn && !progressPoint2){   //opens the door to leave and makes
        progressPoint2 = true                                      //alba speak after 2 items have been
        albaRoom.tileRules[10][8] = 2                              //interacted with, also brings up next
        albaDialogueCount ++                                       //objective to leave the room
        currentObjective ++
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)
      }
      if (doorX == 8 && doorY == 10 && currentLevel == 1 && !progressPoint3){ //brings up next alba dialogue
        albaDialogueCount ++                                                  //and next objective to check laura's room
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)   
        currentObjective ++
        progressPoint3 = true
      }
      if (doorX == 11 && doorY == 11 && currentLevel == 2 && !progressPoint4){ //brings up next alba dialogue
        albaDialogueCount ++                                                   //and next objective to check the teddy bear
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)  
        currentObjective ++
        progressPoint4 = true
        items[5][5].interactable = true
      }
      if (inventorySize == 3 && !dialogueOn && !progressPoint5){ //brings up the next alba dialogue and next objective
        albaDialogueCount ++                                     //to check the clock
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)
        currentObjective ++
        progressPoint5 = true
        items[10][3].interactable = true
      }
      if (inventorySize == 4 && !dialogueOn && !progressPoint6){ //brings up next alba dialogue and next objective
        lauraRoom.tileRules[10][10] = 2                          //to leave the room
        albaDialogueCount ++   
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)                             
        currentObjective ++
        progressPoint6 = true
      }
      if (doorX == 10 && doorY == 10 && currentLevel == 1 && !progressPoint7){ //brings up next alba dialogue
        albaDialogueCount ++                                                   //and next objective to go to the fridge
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)
        currentObjective ++
        progressPoint7 = true
        items[19][6].interactable = true
      }
      if (inventorySize == 5 && !dialogueOn && !progressPoint8){ //brings up the next alba dialogue and next 
        albaDialogueCount ++                                     //to check the table
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)
        currentObjective ++
        progressPoint8 = true
        items[16][9].interactable = true
      }
      if (inventorySize == 6 && !dialogueOn && !progressPoint9){ //brings up next alba dialogue and next objective
        mainHouse.tileRules[11][11] = 2                          //to leave the house
        albaDialogueCount ++   
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)  
        currentObjective ++
        progressPoint9 = true
      }
      if (doorX == 11 && doorY == 11 && currentLevel == 3 && !progressPoint10){ //brings up next alba dialogue
        albaDialogueCount ++                                                   //and next objective to go to the store
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)
        currentObjective ++
        progressPoint10 = true
      }
      if (doorX == 20 && doorY == 2 && currentLevel == 4 && !progressPoint11){ //brings up next alba dialogue
        albaDialogueCount ++                                                   //and next objective to talk to people in the store
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)
        currentObjective ++
        progressPoint11 = true
        items[3][2].interactable = true
      }
      if (inventorySize == 7 && !dialogueOn && !progressPoint12){ //brings up next alba dialogue
        albaDialogueCount ++   
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)  
        progressPoint12 = true
      }
      if (inventorySize == 7 && !dialogueOn && !progressPoint13){ //brings up first npc dialogue
        npcDialogueCount ++   
        player.displayCharacterDialogue(npcDialogue,npcDialogueCount,"#E0685C",'???',npcPictureType)  
        progressPoint13 = true
        items[7][10].interactable = true
      }
      if (inventorySize == 8 && !dialogueOn && !progressPoint14){ //brings up next alba dialogue
        albaDialogueCount ++   
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)  
        progressPoint14 = true
      }
      if (inventorySize == 8 && !dialogueOn && !progressPoint15){ //brings up next npc dialogue
        npcDialogueCount ++   
        player.displayCharacterDialogue(npcDialogue,npcDialogueCount,"#E0A322",'???',npcPictureType)  
        progressPoint15 = true
        items[12][5].interactable = true
      }
      if (inventorySize == 9 && !dialogueOn && !progressPoint16){ //brings up next alba dialogue
        albaDialogueCount ++   
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)  
        progressPoint16 = true
      }
      if (inventorySize == 9 && !dialogueOn && !progressPoint17){ //brings up next npc dialogue
        npcDialogueCount ++   
        player.displayCharacterDialogue(npcDialogue,npcDialogueCount,"#B1A9CC",'???',npcPictureType)  
        progressPoint17 = true
        items[18][9].interactable = true
      }
      if (inventorySize == 10 && !dialogueOn && !progressPoint18){ //brings up next alba dialogue
        albaDialogueCount ++   
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)  
        progressPoint18 = true
      }
      if (inventorySize == 10 && !dialogueOn && !progressPoint19){ //brings up the first cashier dialogue
        npcDialogueCount ++   
        player.displayCharacterDialogue(npcDialogue,npcDialogueCount,"#24BD51",'Cashier',npcPictureType)  
        progressPoint19 = true
      }
      if (inventorySize == 10 && !dialogueOn && !progressPoint20){ //brings up next alba dialogue
        albaDialogueCount ++   
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)  
        progressPoint20 = true
      }
      if (inventorySize == 10 && !dialogueOn && !progressPoint21){ //brings up the next cashier dialogue
        npcDialogueCount ++   
        player.displayCharacterDialogue(npcDialogue,npcDialogueCount,"#24BD51",'Cashier',npcPictureType)  
        progressPoint21 = true
      }
      if (inventorySize == 10 && !dialogueOn && !progressPoint22){ //brings up next alba dialogue and next objective
        albaDialogueCount ++                                       //also opens door to leave the supermarket
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)
        superMarket.tileRules[11][18] = 2 
        currentObjective ++
        progressPoint22 = true
      }
      if (doorX == 18 && doorY == 11 && currentLevel == 3 && !progressPoint23){ //brings up next alba dialogue
        albaDialogueCount ++                                                   //and next objective to talk to marco
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)
        currentObjective ++
        progressPoint23 = true
        items[15][6].interactable = true
      }
      if (inventorySize == 11 && !dialogueOn && !progressPoint24){ //brings up next alba dialogue
        albaDialogueCount ++   
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)  
        progressPoint24 = true
      }
      if (inventorySize == 11 && !dialogueOn && !progressPoint25){ //brings up the first marco dialogue and
        npcDialogueCount ++                                        //objective to go to the graveyard
        player.displayCharacterDialogue(npcDialogue,npcDialogueCount,"#FFB165",'Marco',npcPictureType)  
        progressPoint25 = true
        currentObjective ++
        street.tileRules[2][20] = 2 
      }
      if (doorX == 20 && doorY == 2 && currentLevel == 5 && !progressPoint26){ //brings up next alba dialogue
        albaDialogueCount ++                                                   //and next objective to talk to marco
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)
        mainthemebgm.stop()
        sadthemebgm.loop()
        currentObjective ++
        progressPoint26 = true
        items[9][6].interactable = true
      }
      if (inventorySize == 12 && !dialogueOn && !progressPoint27){ //brings up next alba dialogue
        albaDialogueCount ++                                       //and last objective
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)  
        progressPoint27 = true
        currentObjective ++
      }
      if (inventorySize == 12 && !dialogueOn && !progressPoint28){ //brings up the next marco dialogue
        npcDialogueCount ++                                  
        player.displayCharacterDialogue(npcDialogue,npcDialogueCount,"#FFB165",'Marco',npcPictureType)  
        progressPoint28 = true
      }
      if (inventorySize == 12 && !dialogueOn && !progressPoint29){ //brings up next alba dialogue
        albaDialogueCount ++                                
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)  
        progressPoint29 = true
      }
      if (inventorySize == 12 && !dialogueOn && !progressPoint30){ //brings up the next marco dialogue
        npcDialogueCount ++                                  
        player.displayCharacterDialogue(npcDialogue,npcDialogueCount,"#FFB165",'Marco',npcPictureType)  
        progressPoint30 = true
      }
      if (inventorySize == 12 && !dialogueOn && !progressPoint31){ //brings up last alba dialogue
        albaDialogueCount ++                                
        player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)  
        progressPoint31 = true
      }
      if (inventorySize == 12 && !dialogueOn && !progressPoint32){ //brings up end powerpoint
        gameEnded = true
        npcDialogueCount ++ 
        player.displayCharacterDialogue(npcDialogue,npcDialogueCount,"white",'',npcPictureType)  
        progressPoint32 = true
      }
      if (inventorySize == 12 && !dialogueOn && !progressPoint33){ //resets game 
        progressPoint33 = true
        window.location.reload()
      }
    }
  }

  //displays the next of alba's dialogue to be said
  displayCharacterDialogue(characterDialogue,characterDialogueCount,colour,characterName,picture){
    characterSpeaking = true
    currentCharacterName = characterName
    currentCharacterPicture = picture
    pictureCount = characterDialogueCount
    this.displayDialogue(characterDialogue,characterDialogueCount,colour)
  }

  displayDialogue(dialogueType,dialogueNumber,fontColour){
    dialogueOn = true
    this.transition = true
    dialogueColour = fontColour
    dialogueList = dialogueType[dialogueNumber]
    dialogueCount = 0
    dialogueEnd = dialogueList.length - 1
    this.dialogue = dialogueList[dialogueCount]
    if (dialogueList == "empty"){
      dialogueOn = false
      this.transition = false
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
      //if there is an item, and it is interactable it is removed from the item map
      //and placed into the inventory
      if (itemMap[tileSelectedY][tileSelectedX] != 0 && items[tileSelectedX][tileSelectedY].interactable){

        itemMap[tileSelectedY][tileSelectedX] = 0
        let itemValue = [items[tileSelectedX][tileSelectedY].name,items[tileSelectedX][tileSelectedY].itemID]
        append(inventory,itemValue)
        items[tileSelectedX][tileSelectedY] = ""
        this.displayDialogue(itemDialogue,itemValue[1],'white')
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
  albaDialogueCount ++
  player.displayCharacterDialogue(albaDialogue,albaDialogueCount,albaColour,'Alba',albaPictureType)
}