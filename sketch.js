var ball,img,paddle;
function preload() {
 ballImage=loadImage("ball.png");
  paddleImage=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(50,50,10,10)
  ball.addImage("ball",ballImage);
  ball.scale=0.5
  ball.velocityX=9
  ball.velocityY=2
  paddle=createSprite(350,200,10,10)
  paddle.addImage("paddle",paddleImage);
  
  
  

}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
   ball.bounceOff(edges[2]);
   ball.bounceOff(edges[3]);
   ball.bounceOff(paddle);
  paddle.collide(edges[3]);
   paddle.collide(edges[2]);
  //controls
  if(keyDown(UP_ARROW))
  {paddle.velocityY=-5
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.velocityY=5
  }
  drawSprites();
  
}


