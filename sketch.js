const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobDiameter;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof = new Roof(400,100,300,30);
  bobDiameter=60;
	bob1 = new Bob(280,300,60);
	bob2 = new Bob(340,300,60);
	bob3 = new Bob(400,300,60);
	bob4 = new Bob(460,300,60);
	bob5 = new Bob(520,300,60);

  rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);
  rope4 = new Rope(bob4.body,roof.body,bobDiameter,0);
  rope3 = new Rope(bob3.body,roof.body,0,0);
  rope2 = new Rope(bob2.body,roof.body,-bobDiameter,0)
  rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0)
  
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}
function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-120,y:-70});
  }
}



