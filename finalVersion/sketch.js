

var gameState = "play";
var canvas,truck1,truck2,truck3,truck4,truck5,ground,groundImg;
var time = 60;
var score=0;
var puddleImg,carsGroup,puddleGroup,player,playerImg;


function preload(){
  truck1 = loadImage ("sprites/truck1.png");
  truck2 = loadImage ("sprites/truck2.png");
  truck3 = loadImage ("sprites/truck3.png");
  truck4 = loadImage ("sprites/truck4.png");
  puddleImg = loadImage ("sprites/pic.png");
  groundImg = loadImage("sprites/Capture.PNG");
 playerImg=loadAnimation("sprites/adventurer-crnr-grb-00.png","sprites/adventurer-crnr-grb-01.png","sprites/adventurer-crnr-grb-02.png","sprites/adventurer-crnr-grb-04.png");
}

function setup(){
 canvas=createCanvas(2050,950);
   
  /*ground=createSprite(200,200);
  ground.addImage("ground",groundImg);
  ground.scale=30;
  ground.y=ground.height/2;*/
  player=createSprite(500,800,100,150);
  player.addAnimation("player",playerImg);
  player.scale=8;
  carsGroup=new Group();
  puddleGroup=new Group();

}


function draw() {

 background(0);

 player.position.x = mouseX;
 player.position.y = mouseY;
 textSize(20);
 if(frameCount%20==0 && time>0 )
 time --;
 fill("ORANGE")
 text("SCORE: "+score,150,20);
 text("Count Down "+time+" sec",150,80);
  
 if (gameState==="play"){
   
 
  spawnCars();
  ///ground.velocity.y=5;

  /*if (ground.y >400){
    ground.y = ground.height/2;
  }*/
     
 
}  
else if(gameState==="end"){
 
 // ground.velocity.y=0;
  textSize(30);
  text("Game Over",250,200);

}

 



  drawSprites();
}

function spawnCars (){
  if (frameCount % 60===0){
    
    var rnd1=Math.round(random(1,4));
    var car= createSprite(rnd1*400,0);
    
     var rnd = Math.round(random(1,5));
      switch(rnd){
         case 1:car.addImage(truck1);
         car.scale=2;
         break;
         case 2:car.addImage(truck2);
         car.scale=2;
         break;
         case 3:car.addImage(truck3);
         car.scale=2;
         break;
         case 4:car.addImage(truck4);
         car.scale=2;
         break;
         
         break;
         default:break;
     }
   
   
     car.velocity.y=5;
 

   
     car.lifetime=250;
      
     carsGroup.add(car);
   }
 
}

function spawnPuddles(){

  if (frameCount % 60===0){
    
    var r=Math.round(random(50,2000)); 
    var puddle= createSprite(r,0);
    puddle.addImage(puddleImg);
    puddle.velocity.y=5;
   
    puddle.lifetime=250;
    puddleGroup.add(puddle);



  }

}