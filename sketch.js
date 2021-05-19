var canvas, backgroundImage;
var playerRobo;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database,bgi;
var knight1,knight2,knights,obstaclesGroup;
var form, player, game,shootingRobo,jumpRobo,obstacleImg,deadRobo,gameState=2;
function preload(){
  bgi=loadImage("desktop.jpeg");
playerRobo=loadImage("playerRobo.png");
shootingRobo=loadImage("shootingRobo.png");
jumpRobo=loadImage("jumpRobo.png");
deadRobo=loadImage("deadRobo.png");

obstacleImg=loadImage("obstacle.png");
}


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  obstaclesGroup = new Group()
}


function draw(){
  background("pink")
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    game.spawnObstacles();
  }

 // if(gameState === 2){
   // game.end();
  //}
}
