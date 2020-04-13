

var gameState = "play";
var canvas,truck1,truck2,truck3,truck4,truck5,ground,groundImg,car,puddle;
var time = 60;
var score=0;
var misses=0;
var puddleImg,carsGroup,puddleGroup,player,playerImg;


function preload(){
  truck1 = loadImage ("sprites/car_red_4.png");
  truck2 = loadImage ("sprites/car_black_4.png");
  truck3 = loadImage ("sprites/car_blue_4.png");
  truck4 = loadImage ("sprites/car_green_small_4.png");
  puddleImg = loadImage ("sprites/barrel_blue.png");
  groundImg = loadImage("sprites/desert.png");
 //playerImg=loadAnimation("sprites/adventurer-crnr-grb-00.png","sprites/adventurer-crnr-grb-01.png","sprites/adventurer-crnr-grb-02.png","sprites/adventurer-crnr-grb-04.png");
}

function setup(){
 canvas=createCanvas(2050,950);
   
  ground=createSprite(1025,475);
  ground.addImage("ground",groundImg);
  ground.scale=3;
  ground.y=ground.height/2;
  player=createSprite(1025,875,100,150);
 // player.addAnimation("player",playerImg);
  //player.scale=8;
  player.debug=true;
  carsGroup=new Group();
  puddleGroup=new Group();
  ground.velocity.y=5;
 
}


function draw() {

 background(0);

 player.position.x = mouseX;
 //player.position.y = mouseY;
 textSize(20);
 if(frameCount%20==0 && time>0 )
 time --;
 fill("ORANGE")
 text("SCORE: "+score,100,20);
 text("MISSES: "+misses,100,60);
 text("COUNT DOWN "+time+" sec",100,100);
 

 if (gameState==="play"){
   
  player.velocity.y=-1;
  spawnCars();
  spawnPuddles();
  if (ground.position.y >950){
    ground.position.y = ground.height/2;
  }
  if(carsGroup.collide(player)){

    car.visible=false;
    score-=1;
  
  }
  if(puddleGroup.collide(player)){
   
    puddle.visible=false;
    score+=1;
  
  }else{
    misses++ ;
  }
  
}  
else if(gameState==="end"){
 
 // ground.velocity.y=0;
  textSize(30);
  text("Game Over",250,200);

}





  drawSprites();
}

function spawnCars (){
  if (frameCount % 75===0){
    
    var rnd1=Math.round(random(ground.position.x-280,ground.position.x+280));
    car= createSprite(rnd1,0);
    car.debug=true;
     var rnd = Math.round(random(1,4));
      switch(rnd){
         case 1:car.addImage(truck1);
         car.scale=1.5;
         break;
         case 2:car.addImage(truck2);
         car.scale=1.5;
         break;
         case 3:car.addImage(truck3);
         car.scale=1.5;
         break;
         case 4:car.addImage(truck4);
         car.scale=2.5;
         break;
         
         break;
         default:break;
     }
   
   
     car.velocity.y=6;
 
    
   
     car.lifetime=1000;
      
     carsGroup.add(car);
    
   }
 
}

function spawnPuddles(){

  if (frameCount % 60===0){
    
    var r=Math.round(random(ground.position.x-280,ground.position.x+280)); 
    puddle= createSprite(r,0);
    puddle.debug=true;
    puddle.addImage(puddleImg);
    puddle.velocity.y=6;
    puddle.scale=2;
    puddle.lifetime=1000;
    puddleGroup.add(puddle);
   

  }

}