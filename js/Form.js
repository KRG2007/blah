class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    background(bgi)
    var title = createElement('h2')
    title.html("Survival Game");
    title.position(500, 0);

    this.input.position(500, 160);
    this.button.position(500, 300);
this.reset.position(displayWidth-100 ,20)

this.reset.mousePressed(()=>{
  game.update(0)
  player.updateCount(0)
  database.ref('players').set('')
})

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });

  }
}
