class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    knight1=createSprite(100,200)
knight1.addImage(playerRobo);
knight1.scale=0.5
    knight2= createSprite(300,200)
    knight2.addImage(playerRobo);
    knight2.scale=0.5
knights=[knight1,knight2]
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();
    imageMode(CENTER)
    // long background image for the track/ bg
image(bgi,displayWidth/2,displayHeight/2,displayWidth,displayHeight)
//allPlayers[player1[name],player2[name]]   
if(allPlayers !== undefined){
    
     
var index = 0,x=200,y;

      for(var plr in allPlayers){
        index = index +1;
        x =x +300;
        y = displayHeight  - allPlayers[plr].distance;
       
        knights[index-1].x=x
        knights[index-1].y=y
        if (index===player.index){
        ellipse(x,y,60,60)
        camera.position.x=displayWidth/2
camera.position.y=knights[index-1].y
text(player.name,x,y-100)
if(knights[index-1].isTouching(obstaclesGroup)){
  knights[index-1].addImage(deadRobo)
//gameState = 2
//text("gameover",200,200);
}

 if(keyDown("r")){
    knights[index-1].addImage(shootingRobo);
  }
  if(keyWentUp("r")){
    knights[index-1].addImage(playerRobo);
  }
  // other poses for the player
  if(keyDown("g")){
    knights[index-1].addImage(jumpRobo);
    knights[index-1].velocityY=-5;
  }
  if(keyWentUp("g")){
    knights[index-1].addImage(playerRobo);
  }

      } // end of if
    } //end of for
  }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
 
   
  drawSprites()

  }


 spawnObstacles() {
    if(frameCount % 100 === 0) {
      var obstacle = createSprite(random(0,800),random(0,800),10,40);
    
     obstacle.addImage(obstacleImg);
            
      obstaclesGroup.add(obstacle);
    }
  }

 // end()
  //{
   // text("gameover",200,200);
    
  //}
}
