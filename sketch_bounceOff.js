var movRect, movingRect;
function setup() {
  createCanvas(1200,800);
 movRect = createSprite(400,100,50,80);
 movRect.shapeColor = "green";
 movRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  movRect.velocityY = 5;
}

function draw() {
  background(0,0,0);  
  
  

  if(movingRect.x - movRect.x < movRect.width/2 + movingRect.width/2
    && movRect.x - movingRect.x < movRect.width/2 + movingRect.width/2)
    {
      movingRect.velocityX = movingRect.velocityX * (-1);
      movRect.velocityX = movRect.velocityX * (-1);
    }

  if(movingRect.y - movRect.y < movRect.height/2 + movingRect.height/2
    && movRect.y - movingRect.y < movRect.height/2 + movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      movRect.velocityY= movRect.velocityY * (-1);
  }


  drawSprites();
}