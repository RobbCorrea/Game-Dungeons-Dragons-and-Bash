const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;
var theArena =  [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25,
    25, 26, 30, 31, 26, 0, 0, 0, 0, 37, 0, 0, 0, 0, 0, 25, 29, 25, 29, 25,
    25, 29, 25, 0, 0, 0, 0, 37, 0, 0, 0, 32, 0, 0, 0, 0, 0, 26, 26, 25,
    25, 25, 0, 0, 0, 32, 0, 0, 0, 32, 0, 0, 0, 37, 0, 0, 32, 0, 38, 25,
    25, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 37, 0, 0, 37, 0, 0, 0, 0, 25,
    25, 26, 0, 0, 26, 36, 26, 27, 28, 26, 27, 28, 26, 27, 28, 0, 0, 0, 0, 25,
    25, 17, 2, 2, 17, 35, 0, 0, 0, 38, 0, 0, 0, 0, 26, 37, 26, 0, 0, 25,
    25, 20, 18, 19, 20, 36, 0, 37, 0, 0, 0, 37, 0, 0, 0, 0, 38, 0, 38, 25,
    25, 17, 3, 3, 17, 35, 0, 0, 37, 33, 34, 0, 0, 36, 0, 0, 0, 0, 0, 25,
    25, 26, 0, 0, 26, 36, 26, 0, 0, 0, 36, 37, 0, 35, 0, 0, 38, 0, 38, 25,
    25, 26, 0, 0, 26, 35, 26, 0, 32, 0, 35, 0, 0, 37, 0, 0, 0, 0, 0, 25,
    25, 26, 0, 0, 32, 30, 31, 0, 36, 0, 38, 0, 0, 32, 0, 30, 31, 0, 25, 25,
    25, 26, 0, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25,
    25, 25, 29, 25, 25, 25, 29, 25, 25, 29, 0, 0, 26, 0, 0, 0, 25, 25, 29, 25,
    25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25];

var slamZone =  [1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 5, 1, 1, 1, 1, 1, 5, 0, 0, 5, 1, 1, 1, 1, 1, 5, 0, 1,
    1, 0, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 0, 1,
    1, 0, 1, 4, 4, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 4, 4, 1, 0, 1,
    1, 0, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 0, 1,
    1, 0, 1, 4, 4, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 4, 4, 1, 0, 1,
    1, 2, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 2, 1,
    1, 1, 5, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 5, 1, 1,
    1, 0, 0, 0, 1, 0, 1, 4, 4, 4, 4, 4, 4, 1, 0, 1, 0, 0, 0, 1,
    5, 0, 5, 0, 5, 0, 1, 4, 5, 3, 3, 5, 4, 1, 0, 5, 0, 5, 0, 5,
    1, 0, 1, 0, 0, 0, 1, 4, 1, 0, 0, 1, 4, 1, 0, 0, 0, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 5, 0, 0, 5, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1];

var oldLevel =  [4, 4, 4, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 4, 4,
    4, 4, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 4,
    4, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14,
    14, 0, 0, 0, 0, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 0, 0, 0, 14,
    10, 0, 0, 10, 14, 4, 24, 4, 8, 9, 4, 10, 23, 10, 23, 10, 23, 0, 0, 14,
    6, 0, 0, 7, 10, 0, 0, 14, 4, 4, 4, 14, 0, 0, 0, 0, 6, 0, 0, 7,
    6, 0, 0, 7, 0, 0, 0, 0, 14, 4, 14, 0, 0, 0, 0, 0, 6, 0, 0, 7,
    6, 0, 0, 7, 0, 0, 0, 0, 0, 14, 14, 0, 0, 10, 0, 0, 6, 0, 0, 7,
    6, 0, 0, 7, 0, 0, 0, 0, 0, 0, 14, 0, 0, 23, 0, 0, 6, 0, 0, 7,
    6, 0, 0, 7, 0, 0, 10, 0, 0, 0, 10, 0, 0, 10, 0, 0, 6, 0, 0, 7,
    10, 2, 2, 10, 0, 0, 23, 14, 0, 0, 0, 0, 0, 23, 0, 0, 13, 0, 0, 14,
    17, 20, 20, 17, 0, 0, 10, 14, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 14,
    21, 3, 0, 0, 0, 0, 23, 4, 14, 0, 0, 0, 14, 23, 0, 0, 0, 0, 0, 14,
    22, 3, 0, 0, 0, 0, 10, 4, 4, 4, 4, 4, 4, 4, 14, 0, 0, 0, 24, 14,
    17, 20, 20, 17, 4, 4, 4, 4, 4, 11, 12, 4, 4, 4, 4, 4, 4, 4, 4, 4];

var levelList = [theArena, slamZone, oldLevel];
var levelNow = 2;//Regresar esto a cero
var trackGrid = [];

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_FLAG = 5;
const TRACK_GARLEFT = 6;
const TRACK_GARIGHT = 7;
const CASC_LEFT = 8;
const CASC_RIGHT = 9;
const ROSES = 10;
const MELLOW_LEFT = 11;
const MELLOW_RIGHT = 12;
const DEER = 13;
const BUSH = 14;
const SMALL_TOWER = 17;
const DOOR_LEFT = 18;
const DOOR_RIGHT = 19;
const WALL_STONE = 20;
const DOORUP_LEFT = 21;
const DOORUP_RIGHT = 22;
const DAISIES = 23;
const PULLKART = 24;
const TESTYLE = 25;
const CARPET = 26;
const TABLE_LEFT = 27;
const TABLE_RIGHT = 28;
const PAINTING = 29;
const HOME_LEFT = 30;
const HOME_RIGHT = 31;
const FANCY_CHAIR = 32;
const SHELF_LEFT = 33;
const SHELF_RIGHT = 34;
const SHELF_TOP = 35;
const SHELF_BOTTOM = 36;
const BLADES = 37;
const FIRE = 38;

//Cheers 
var sound = new Audio("./sounds/McLovin.mp3");
            sound.preload = 'auto';
            sound.load();
            
var sound2 = new Audio("./sounds/meeow.wav");
            sound2.preload = 'auto';
            sound2.load();

var sound3 = new Audio("./sounds/gameSong.mp3");
            sound3.preload = 'auto';
            sound3.loop = 'true';
            sound3.load();

var sound4 = new Audio("./sounds/laugh.wav");
            sound4.preload = 'auto';
            sound4.load();            
        
var sound5 = new Audio("./sounds/cry.mp3");
            sound5.preload = 'auto';
            sound5.load();  

function playSound(volume) {
 var click = sound.cloneNode();
 click.volume = volume;
 click.play();
}

function playSound2(volume) {
    var click = sound2.cloneNode();
    click.volume = volume;
    click.play();
   }

function playBackMusic(volume){
    var click = sound3.cloneNode();
    click.volume = volume;
    click.play();
}

function mcLovinCrash(volume){
    var click = sound4.cloneNode();
    click.volume = volume;
    click.play();
}

function catCrash(volume){
    var click = sound5.cloneNode();
    click.volume = volume;
    click.play();
}

function returnTileTypeAtColRow(col, row) {
    if(col >= 0 && col < TRACK_COLS &&
        row >= 0 && row < TRACK_ROWS) {
         var trackIndexUnderCoord = rowColToArrayIndex(col, row);
         return trackGrid[trackIndexUnderCoord];
    } else {
        return TRACK_WALL;
    }
}

function carTrackHandling(whichCar) {
    var carTrackCol = Math.floor(whichCar.x / TRACK_W);
    var carTrackRow = Math.floor(whichCar.y / TRACK_H);
    var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

    if(carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
        carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {
        var tileHere = returnTileTypeAtColRow( carTrackCol,carTrackRow );

        if(tileHere == TRACK_GOAL) {
            if(whichCar.name == 'McLovin')
                playSound(1);
            else
                playSound2(1);  
            console.log(whichCar.name + " WINS!");
            nextLevel();
        } else if(tileHere != TRACK_ROAD) {
            // next two lines added to fix a bug, mentioned in video 9.6
            // undoes the car movement which got it onto the wall
            whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed;
            whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;
            if(whichCar.name == 'McLovin')
                mcLovinCrash(1);
            else
                catCrash(1);  
            whichCar.speed *= -0.5;
        } // end of track found
    } // end of valid col and row
} // end of carTrackHandling func

function rowColToArrayIndex(col, row) {
    return col + TRACK_COLS * row;
}

function drawTracks() {

    var arrayIndex = 0;
    var drawTileX = 0;
    var drawTileY = 0;
    for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
        for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {

            var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
            var tileKindHere = trackGrid[arrayIndex];
            var useImg = trackPics[tileKindHere];

            canvasContext.drawImage(useImg,drawTileX,drawTileY);
            drawTileX += TRACK_W;
            arrayIndex++;
        } // end of for each col
        drawTileY += TRACK_H;
        drawTileX = 0;
    } // end of for each row

} // end of drawTracks func