var box1,box2,box3,box4;

var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1=createSprite(200,200,50,50);
  box1.shapeColor="green";
  box2=createSprite(500,200,50,50);
  box2.shapeColor="green";
  box3=createSprite(800,200,50,50);
  box3.shapeColor="green";
  box4=createSprite(1000,200,50,50);
  box4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
colorChange(movingRect,fixedRect);
var result= addition(5,8);
 console.log(result)
  drawSprites();
}

