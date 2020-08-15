var fixedRect, movingRect;
var gameobject1, gameobject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobject1 = createSprite(200, 100, 50 ,50);
  gameobject1.shapeColor = "green"
  gameobject1.debug = true;

  gameobject2 = createSprite(300, 100, 50 ,50);
  gameobject2.shapeColor = "green"
  gameobject2.debug = true;

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {

  background(0,0,0);
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
   
// bounceOff(movingRect, fixedRect)
 if (isTouching(movingRect,gameobject1)){
  gameobject1.shapeColor = "red";
 movingRect.shapeColor = "red";
 }else{
  gameobject1.shapeColor = "green";
  movingRect.shapeColor = "green";
 }
  drawSprites();
}

