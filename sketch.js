
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 450);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = new Ground(600,height,1200,20)
	paper=new Paper(100,400,30,);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  paper.display();
}



