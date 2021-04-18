var ball,ballImage,rightPaddle, paddleImage;


var edges;


function preload() {
  ballImage= loadImage("ball.png");
  
  paddleImage= loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  
  ball = createSprite(200,200,20,20);
  ball.addImage("ball",ballImage);
  ball.velocityX=10;
   ball.velocityY=10;
  
   rightPaddle = createSprite(370,200,10,100);
  rightPaddle.addImage("paddle",paddleImage);
  //x, y, width, height
}

function draw() {
  background("yellow");

  
edges = createEdgeSprites();
  
  ball.bounceOff(edges[0]);//left
  
    ball.bounceOff(edges[2]);//top
  
    ball.bounceOff(edges[3]);//bottom
  
    ball.bounceOff(rightPaddle,randomVelocity);


  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
rightPaddle.collide(edges);
  
  
  if(keyDown(UP_ARROW))
  {
    rightPaddle.y=rightPaddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
   rightPaddle.y=rightPaddle.y+20;
  }

  drawSprites();
}

function randomVelocity()
{
  ball.velocityX= random(-6, 6); 
}


