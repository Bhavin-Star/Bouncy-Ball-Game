// Engine is used to create the physics engine
const Engine = Matter.Engine;

// World is used to create the physical world and add objects to it. 
const World = Matter.World;

// Bodies is used to create the physical objects which inhabit the world.
const Bodies = Matter.Bodies;

var engine, world, ball, ground;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world =  engine.world;

  var option = {
    isStatic: true
  }

  ground = Bodies.rectangle(400,390,800,10,option);
  World.add(world,ground);
  
  var ball_option = {
    restitution: 2.0
  }
  ball = Bodies.circle(400,100,30,ball_option);
  World.add(world,ball);
  
}

function draw() {
  background(0);  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,30,30);    
  }