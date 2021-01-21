class Tree {
  
  constructor(x,y,width,height) {
    var options = {
      isStatic: true
  }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
  //  this.x=x;
    //this.y=y;
    this.image = loadImage("sprites/garden-03.png");

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    image(this.image, 800,400, this.width, this.height);
  }
};