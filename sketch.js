const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg,boy;
var Ground,tree;
var mango1, mango2, mango3, mango4, mango5;
var stone,chain;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,600,50,50);
	boy.addImage(boyImg,"boyImg");
	boy.scale = 0.06;

	Ground = new ground(400,650);

	tree = new Tree(500,350,300,300);

	mango1 = new mango(550,450,30);
	mango2 = new mango(570,470,30);
	mango3 = new mango(630,450,30);
	mango4 = new mango(680,430,30);
	mango5 = new mango(630,400,30);

	stone = new Stone(150,550,50);

	chain = new Chain(stone.body,{x:150,y:550});


	Engine.run(engine);
  
}


function draw() {
  background('white');
  rectMode(CENTER);
 
  
	//console.log(tree)

  Ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango1.collision(stone,stone.body);
  mango2.collision(stone,stone.body);
  mango3.collision(stone,stone.body);
  mango4.collision(stone,stone.body);
  mango5.collision(stone,stone.body);
  chain.display();
  stone.display();
  
  drawSprites();
 
}
function mouseDragged(){
    Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){

    chain.fly();

}
function keyPressed(){
	if(keyCode === 32){
		chain.attach(stone.body);
	}
}


