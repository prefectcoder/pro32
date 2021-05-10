const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

var backgroundImg; 

function preload() { 
backgroundImg = loadImage("galaxypic.jpg");
     }

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);

    box3 = new Box(400,400,50,50);
    box4 = new Box(440,200,50,100);

    ground = new Ground(200,height,800,20);
    ground1 = new Ground(400,height,800,20);

    backgroundImg.scale=5;
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground1.display();
    ground.display();
}