var box2,box3,paper
var ground,engine,world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;






function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	
	
    var  ground_option={
      isStatic:true
	}
	
	



	//Create a Ground
	ground = Bodies.rectangle(400, 690,800, 100 ,ground_option );
     World.add(world, ground);

	 

	 
	 box2=new Dustbin(600,660,200,200)
	 box3=new Dustbin(600,660,200,200)

	
	 paper=new Paper(200,650,10,10)
}



function draw() {
	background(173,234,250);
	Engine.update(engine);
	rectMode(CENTER);
	rect(ground.position.x,ground.position.y,800,10)

	
	box2.display();
	box3.display();
    paper.display()
 

  
}

function keyPressed(){

if(keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:115,y:160})

}
}

