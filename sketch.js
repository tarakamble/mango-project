
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2,mango3,mango4,mango5,mango6;
var stoneObj
var launcherObject
var launchForce = 100;


var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1600, 600);
	engine = Engine.create();
	world = engine.world;


	stoneObj=new stone(225,410,30)
	mango1=new mango(1100,100,30);
	mango2=new mango(1210,170,30);
	mango3=new mango(1250,178,40);
	mango4=new mango(1220,100,45);
	mango5=new mango(1200,120,35);
	mango6=new mango(1100,150,25);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:225,y:410})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stoneObj.display();
launcherObject.display();
  groundObject.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcherObject.fly();
}

function keyPressed(){
    if (keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, {x:225 , y: 410});
        launcherObject.attach (stoneObj.body);
    }
}
