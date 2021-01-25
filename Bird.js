class Bird extends Baseclass{
    constructor(x, y) {
      super(x,y,50,50);//call the base class property
      this.image = loadImage("sprites/bird.png");

    };
    display(){
      
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
  
     
    };
  };
  