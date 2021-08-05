var lion1,lion2,lion3,lion4,lion5,lion6,lion7,lion8,lion9,lion10,lion11,lion12,lion13;
var lion1Img,lion2Img,lion3Img,lion4Img,lion5Img,lion6Img,lionImg7,lion8Img,lion9Img,lion10Img,lion11Img,
lion12Img,lion13Img;
var background1,background2;
var background1Img,background2Img;
var invisibleGround;
var food,hole,stone,foodImg,holeImg,stoneImg,obstaclesGroup;
var END=0;
var PLAY=1;
var gameState=PLAY;
var gameOver,restart;
var score=0;
var obstaclesGroup;

function preload(){

lion1Img=loadAnimation("lion1.png","lion2.png","lion3.png","lion4.png","lion5.png","lion6.png","lion7.png","lion8.png","lion9.png","lion10.png","lion11.png","lion12.png","lion13.png");


background1Img=loadImage("background1.jpg");
background2Img=loadImage("background2.jpg");

foodImg=loadImage("food.png");
holeImg=loadImage("hole.png");
stoneImg=loadImage("stone.png");


}


function setup() {
  createCanvas(displayWidth,displayHeight-150);
  background2=createSprite(width,height/2-10);
  background2.addImage(background2Img);
  background2.velocityX = -5;
  background2.scale=4
  background2.visible=false
  
  lion=createSprite(width/2-500,height-100);
    lion.addAnimation("lionrunning",lion1Img);
    lion.scale=2.5;
    lion.visible=false
    lion.debug=true;
lion.setCollider("circle",0,0,30)
obstaclesGroup=new Group();
    background1=createSprite(100,190);
    background1.visible=false;
    invisibleGround=createSprite(200,height-10,width,20);
  form=new Form() 

}

function draw() {
  background(background1Img);
console.log(lion.y);

  if(background2.x<200){
    background2.x=width/2

    }
if(gameState===PLAY){

 score = score + Math.round(frameCount/60)

  if(keyDown("space")&&lion.y>250){
lion.velocityY = -17;
  }

  lion.velocityY = lion.velocityY + 0.8
if(keyDown("r")){
  lion.visible=true
}
obstacles();

if(obstaclesGroup.isTouching(lion)){
  gameState=END;

}
drawSprites();
}


lion.collide(invisibleGround);

if (gameState===END){
textSize(35)
text("GAMEOVER!",width/2,height/2);
}


form.display()

 
 textSize(22);
text("score ="+ score,width-200,50);

 
}

function obstacles(){
  if(frameCount % 400 === 0){
var obstacle = createSprite(displayWidth,displayHeight,5,20);
obstacle.addImage(holeImg)
obstacle.velocityX = -3
obstacle.scale=.7;
obstacle.y=Math.round(random(550,600))
obstacle.x=Math.round(random(500,600))
 obstaclesGroup.add(obstacle);
lion.depth=obstacle.depth+1
obstacle.lifetime=200;
  }

if(frameCount % 200 ===0){
var obstacle1=createSprite(700,900,5,20);
obstacle1.addImage(stoneImg)
obstacle1.velocityX=-3
obstacle1.scale=.7;
obstacle1.x=Math.round(random(500,600))
obstacle1.y=Math.round(random(500,550))
obstacle1.lifetime=200;
lion.depth=obstacle1.depth+1
obstaclesGroup.add(obstacle1);
}

  
}
