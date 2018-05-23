//pong clone
//mouse to control both paddles

var paddleA, paddleB, ball, wallTop, wallBottom;
var MAX_SPEED = 10;

var backgroundImage;

function setup() {
  createCanvas(800,400);
  //frameRate(6);
  
	backgroundImage = loadImage('sun.jpg');
	
  paddleA = createSprite(30, height/2, 10, 100);
  paddleA.immovable = true;
  
  paddleB = createSprite(width-28, height/2, 10, 100);
  paddleB.immovable = true;
  
  wallTop = createSprite(width/2, -30/2, width, 30);
  wallTop.immovable = true;
  
  wallBottom = createSprite(width/2, height+30/2, width, 30);
  wallBottom.immovable = true;
  
  ball = createSprite(width/200, height/20, 20, 20);
  ball.maxSpeed = MAX_SPEED;
  
	paddleB.shapeColor = color("blue");
  paddleA.shapeColor = paddleB.shapeColor;
	ball.shapeColor = color("Green");
	ball.draw = function() {
		fill("Green");
		ellipse(0, 0, 20, 20);
	}
  
  ball.setSpeed(MAX_SPEED, -180);
}

function draw() {
  background(backgroundImage,0.0);

  
  paddleA.position.y = constrain(mouseY, paddleA.height/2, height-paddleA.height/2);
  paddleB.position.y = constrain(mouseY, paddleA.height/2, height-paddleA.height/2);
  
  ball.bounce(wallTop);
  ball.bounce(wallBottom);
  
  if(ball.bounce(paddleA)) {
    var swing = (ball.position.y-paddleA.position.y)/3;
    ball.setSpeed(MAX_SPEED, ball.getDirection()+swing);
  }
  
  if(ball.bounce(paddleB)) {
    var swing = (ball.position.y-paddleB.position.y)/3;
    ball.setSpeed(MAX_SPEED, ball.getDirection()-swing);
  }
  
  if(ball.position.x<0) {
  ball.position.x = width/2;
  ball.position.y = height/2;
  ball.setSpeed(MAX_SPEED, 0);
  }
  
  if(ball.position.x>width) {
  ball.position.x = width/2;
  ball.position.y = height/2;
  ball.setSpeed(MAX_SPEED, 180);
  }
  
  drawSprites();
  
}
