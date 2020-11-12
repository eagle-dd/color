var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
 fixedRect =  createSprite(400, 200, 50, 50);
 movingRect = createSprite(100,100,80,100);
 fixedRect.shapeColor = "red";
 movingRect.shapeColor = "red";
}

function draw() {
  background(0); 
  movingRect.x =mouseX;
  movingRect.y = mouseY; 
  if(movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2
     &&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
     && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
     && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }else{
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  }
  
  drawSprites();
}