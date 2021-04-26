const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  var ground_opts = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_opts);
  World.add(world,ground);

  var ball_opts = {
    restitution : 1
  }

  ball = Bodies.circle(200,100,20,ball_opts);
  World.add(world,ball);
  console.log(ball);

 
}

function draw() {
  background(0);  
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
}