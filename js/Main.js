var canvas, canvasContext;

var blueCar = new carClass();
var greenCar = new carClass();

document.getElementById("start-game-button").onclick = function() {
    document.getElementById("start-game-button").style.display = "none";
    document.getElementById("img-Dungeons").style.display = "none";
    document.getElementById("gameCanvas").style.display = "block";

    playBackMusic(1);

    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    colorRect(0,0, canvas.width,canvas.height, 'black');
    colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'white');

    loadImages();
};

window.onload = function() {
    
}

function imageLoadingDoneSoStartGame() {
    var framesPerSecond = 30;
    setInterval(updateAll, 1000/framesPerSecond);

    setupInput();

    loadLevel(levelList[levelNow]);
}

function nextLevel() {
    levelNow++;
    if(levelNow >= levelList.length) {
        levelNow = 0;
    }
    loadLevel(levelList[levelNow]);
}

function loadLevel(whichLevel) {
    trackGrid = whichLevel.slice();
    greenCar.reset(otherCarPic, "McLovin");
    blueCar.reset(carPic, "Cat");
}

function updateAll() {
    moveAll();
    drawAll();
}

function moveAll() {
    blueCar.move();
    greenCar.move();
}

function drawAll() {
    drawTracks();
    blueCar.draw();
    greenCar.draw();
} 
