const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird; 
function preload() {
    backgroundImg = loadImage("sprites/garden-01.png");
}

function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1600,20);

  //  box1 = new Box(700,320,70,70);
  //  box2 = new Box(920,320,70,70);
    fa1 = new flower2(810, 200);
    f1 = new flower1(410,200);

    Tree3 = new Tree(700,240,400,400);
    Tree4 = new Tree(400,440,400,400);
    fa2 = new flower2(810, 220);
    fb1 = new flower3(600,320);

    f3 =  new flower1(810,480);

    f4 = new flower1(760,120);
    f5 = new flower1(870,120);

    bird = new Scissor(100,100);

    f6 = new flower1(430,380);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    //box1.display();
    //box2.display();
    ground.display();
    fa1.display();
    f1.display();

    Tree3.display();
    Tree4.display();
    fa2.display();
    f3.display();
fb1.display();

    f4.display();
    f5.display();

    bird.display();
    f6.display();
}
