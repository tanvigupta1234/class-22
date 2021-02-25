const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var helicopter,package,ground,engine,world,helicopter1,package1;
var helicopterImage,packageImage;

function preload(){
  
  helicopterImage = loadImage("helicopter.png");
  packageImage = loadImage("package.png");
  
}

function setup() {
  
  createCanvas(400, 400);

  var object_option={
     isStatic:true
}
  
  var bouncing_option={
    isStatic:true, 
    restitution:1
  }
  
  engine=Engine.create();
  world=engine.world;
  ground=Bodies.rectangle(200,390,200,20,object_option);
  package=Bodies.rectangle(200,100,10,10,bouncing_option);
  helicopter=Bodies.rectangle(200,100,20,20,object_option);
  World.add(world,ground);
  World.add(world,package);
  World.add(world,helicopter);
  
  package1=createSprite(200,100,10,10,object_option);
  package1.addImage(packageImage);
  package1.scale=0.1;
  
  helicopter1=createSprite(200,100,20,20); 
  helicopter1.addImage(helicopterImage);
  helicopter1.scale=0.4;
 
  
}

function draw() {
  
  background(0);
 
  Engine.update(engine);
  
  
  
  package1.x = package.position.x
  package1.y  = package.position.y
  
  helicopter1.x = helicopter.position.x
  helicopter1.y = helicopter.position.y
  
  rectMode(CENTER);
  rect(200,390,400,20);
   
  if(keyDown("DOWN_ARROW")){
    Matter.Body.setStatic(package,false);
  }
  
  drawSprites()
}