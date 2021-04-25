const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ball, ground, stand1, stand2,img, engine, world;

function preload(){

  img = loadImage("polygon.png");

}

function setup() {
  
  createCanvas(1200,600);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(600,600,1200,20);

  stand1 = new Stand(490,350,250,10);
  stand2 = new Stand(800,200,200,10);
 
  
  block1 = new Box(400,275,30,40);
  block2 = new Box(430,275,30,40);
  block3 = new Box(460,275,30,40);
  block4 = new Box(490,275,30,40);
  block5 = new Box(520,275,30,40);
  block6 = new Box(550,275,30,40);
  block7 = new Box(580,275,30,40);
  block8 = new Box (430,235,30,40);
  block9 = new Box(460,235,30,40);
  block10 = new Box(490,235,30,40);
  block11 = new Box(520,235,30,40);
  block12 = new Box(550,235,30,40);
  block13 = new Box(460,195,30,40);
  block14 = new Box(490,195,30,40);
  block15 = new Box(520,195,30,40);
  block16 = new Box(490,155,30,40);

  block17 = new Box(740,175,30,40);
  block18 = new Box(770,175,30,40);
  block19 = new Box(800,175,30,40);
  block20 = new Box(830,175,30,40);
  block21 = new Box(860,175,30,40);
  block22 = new Box(770,135,30,40);
  block23 = new Box(800,135,30,40);
  block24 = new Box(830,135,30,40);
  block25 = new Box(800,95,30,40);

  ball = Bodies.circle(50,200,20 ,{density:2});
  World.add(world, ball);

  slingShot = new Slingshot(this.ball, {x:100, y:300})


}

function draw() {
  background(0);  

  ground.display();

  stand1.display();
  stand2.display();

  slingShot.display();

  strokeWeight(0);
  stroke(0);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("blue");
  block13.display();
  block14.display();
  block15.display();

  fill("white");
  block16.display();

  fill("cyan");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill("coral");
  block22.display();
  block23.display();
  block24.display();

  fill("yellow")
  block25.display();

  

   imageMode(CENTER)
  image(img ,ball.position.x, ball.position.y,40,40);

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32)
  Matter.Body.setPosition(ball, {x:150, y:400});
  slingShot.attach(ball);
}










