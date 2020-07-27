
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bwall, lwall, rwall, twall;
var tcL, tcB, tcR;
var trash;

var Power = 10

//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	
	bwall = new Wall(400, 667, 800, 10)
	lwall = new Wall(0, 350, 20, 700)
	rwall = new Wall(800, 350, 20, 700)
	twall = new Wall(400, 0, 800, 20)
	tcL = new TrashCan(580, 630, 20, 60)
	tcR = new TrashCan(720, 630, 20, 60)
	tcB = new TrashCan(650, 650, 120, 20)
	trash = new Trash(50, 640, 10)


  
}


function draw() {
  background(0);


Engine.update(engine)

bwall.display()
tcL.display()
tcB.display()
tcR.display()
trash.display()

if(keyCode === DOWN_ARROW){
	
	Power = Power-0.3
	
	}

	if(keyCode === UP_ARROW){
	
		Power = Power+0.3
		
		}

}



function keyPressed(){

	if (keyCode === RIGHT_ARROW){
	Body.applyForce(trash.ball, trash.ball.position,{x: Power, y:-Power});
	}
	
	if (keyCode === LEFT_ARROW){
		Body.applyForce(trash.ball, trash.ball.position,{x: -Power, y:-Power});
	}	
}