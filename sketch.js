
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	;
var world;
var Dustbin,dustbinImage;
var paperBody;
var backgoundimg;


function preload(){
	dustbinImage=loadImage("dustbingreen.png");
	backgroundimg=loadImage("background.jpg");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new  dustbin(1200,650);
	paperBody=new Paper();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundimg);
  keyPressed();
  groundObject.display();
  dustbinObj.display();
  paperBody.display();
  DUSTBIN();
  fill("black")
  textSize(20);
  text(mouseX+","+mouseY,mouseX,mouseY)

  drawSprites();
}

function DUSTBIN(){
	Dustbin=createSprite(1200,535);
	Dustbin.addImage(dustbinImage);
}

function keyPressed(){
	if(keyDown("up")){
		Body.applyForce(paperBody.body,paperBody.body,{x:20,y:-35})
	}
}