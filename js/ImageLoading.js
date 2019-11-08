var carPic = document.createElement("img");
var otherCarPic = document.createElement("img");
var trackPics = [];

var picsToLoad = 0; // set automatically based on imageList in loadImages()

function countLoadedImagesAndLaunchIfReady() {
    picsToLoad--;
    console.log(picsToLoad);
    if(picsToLoad == 0) {
        imageLoadingDoneSoStartGame();
    }
}

function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = "images/"+fileName;
}

function loadImageForTrackCode(trackCode, fileName) {
    trackPics[trackCode] = document.createElement("img");
    beginLoadingImage(trackPics[trackCode], fileName);
}

function loadImages() {
    var imageList = [
        {varName: carPic, theFile: "player1car.png"},
        {varName: otherCarPic, theFile: "player2car.png"},

        {trackType: TRACK_ROAD, theFile: "track_road.png"},
        {trackType: TRACK_WALL, theFile: "track_wall.png"},
        {trackType: TRACK_GOAL, theFile: "track_goal.png"},
        {trackType: TRACK_TREE, theFile: "little_tree.png"},
        {trackType: TRACK_FLAG, theFile: "track_flag.png"},
        {trackType: TRACK_GARLEFT, theFile: "leftGard.png"},
        {trackType: TRACK_GARIGHT, theFile: "rightGard.png"},
        {trackType: CASC_LEFT, theFile: "cascLeft.png"},
        {trackType: CASC_RIGHT, theFile: "cascRight.png"},
        {trackType: MELLOW_RIGHT, theFile: "cerrArbolRightt.png"},
        {trackType: MELLOW_LEFT, theFile: "cerrArbolLeft.png"},
        {trackType: ROSES, theFile: "roses.png"},
        {trackType: DEER, theFile: "venadito.png"},
        {trackType: BUSH, theFile: "arbustito.png"},
        {trackType: DOOR_LEFT, theFile: "doorLeftClosed.png"},
        {trackType: DOOR_RIGHT, theFile: "doorRightClosed.png"},
        {trackType: SMALL_TOWER, theFile: "smallTower.png"},
        {trackType: WALL_STONE, theFile: "wallStone.png"},
        {trackType: DOORUP_LEFT, theFile: "doorUpLeft.png"},
        {trackType: DOORUP_RIGHT, theFile: "doorUpRight.png"},
        {trackType: DAISIES, theFile: "daisies.png"},
        {trackType: PULLKART, theFile: "pullKart.png"},
        {trackType: TESTYLE, theFile: "testTyle.png"},
        {trackType: CARPET, theFile: "carpet.png"},
        {trackType: TABLE_LEFT, theFile: "tableLeft.png"},
        {trackType: TABLE_RIGHT, theFile: "tableRight.png"},
        {trackType: HOME_LEFT, theFile: "homeLeft.png"},
        {trackType: HOME_RIGHT, theFile: "homeRight.png"},
        {trackType: PAINTING, theFile: "painting.png"},
        {trackType: FANCY_CHAIR, theFile: "fancyChair.png"},
        {trackType: SHELF_LEFT, theFile: "bookShelf.png"},
        {trackType: SHELF_RIGHT, theFile: "bookShelfRight.png"},
        {trackType: SHELF_TOP, theFile: "bookShelfTopRight.png"},
        {trackType: SHELF_BOTTOM, theFile: "bookShelfTopLeft.png"},
        {trackType: BLADES, theFile: "blades.png"},
        {trackType: FIRE, theFile: "fire.png"}
        ];

    picsToLoad = imageList.length;

    for(var i=0;i<imageList.length;i++) {
        if(imageList[i].varName != undefined) {
            beginLoadingImage(imageList[i].varName, imageList[i].theFile);
        } else {
            loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
        }
    }
}