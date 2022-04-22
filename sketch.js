const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;
var bg,melon,bunny;
var rabbit;
var button;

function preload(){
  bg=loadImage("background.png");
  melon=loadImage("melon.png");
  bunny=loadImage("Rabbit-01.png");
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  rabbit=createSprite(250,650,100,100);
  rabbit.addImage(bunny);
  rabbit.scale=0.2;
  button=createImg("melon.png");
  button.position(220,30)
  button.size(50,50)
  button.mouseClicked(drop);
}

function draw() 
{

  //background(51);
  image(bg,width/2,height/2,500,700)
  rope.show();
  ellipse(fruit.position.x,fruit.position.y,20,20);
  Engine.update(engine);
  ground.show();
  image(melon,fruit.position.x,fruit.position.y,80,80);
 drawSprites();




   
}
function drop(){
  rope.break()
  fruit_con.detouch()
  fruit_con=null;



}












