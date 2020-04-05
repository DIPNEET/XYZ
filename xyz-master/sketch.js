var canvas;
var score ;
var gamestate =  0;
var nameform,player1,use,player;
var truck1,truck2,truck3,truck4,truck5;


function preload(){
    truck1 = loadImage ("sprites/truck1.png");
    truck2 = loadImage ("sprites/truck2.png");
    truck3 = loadImage ("sprites/truck3.png");
    truck4 = loadImage ("sprites/truck4.png");
    truck5 = loadImage ("sprites/truck5.png");

}




function setup(){
 canvas = createCanvas(displayWidth,displayHeight);
 player = createSprite(150,275,40,60); 
   nameform = new NAMEform();
   use();
   player1 = new Player();
   

}

function draw(){
    background("yellow");
   
    nameform.display();
  
 drawSprites();

   
    
}


function use(){



   
        var car;
            
        var water ;
        var carsGroup = new Group();
       
        
   
        
    
        function movement(){
        if(keyDown(LEFT_ARROW) && player.x === 350){
            player.x = 250;
        }
        if(keyDown(LEFT_ARROW) && player.x === 250){
            this.player.x = 150;
        }
        if(keyDown(LEFT_ARROW) && player.x === 150){
         player.x = 50;
        }
    
    
    
        if(keyDown(RIGHT_ARROW) && player.x === 50){
         player.x = 150;
        }
        if(keyDown(RIGHT_ARROW) && player.x === 150){
          player.x = 250;
        }
        if(keyDown(RIGHT_ARROW) && player.x === 250){
           player.x = 350;
        }
    
    
        }
        function spawnCars(){
            if(frameCount % 67 === 0 &&  gamestate===1) {
        var rand = Math.round(random(1,4));
        switch(rand){
        case 1:car = createSprite(50,-30,65,125);
        car.velocityY = 6;
        break;
        case 2:car = createSprite(150,-30,65,125);
        car.velocityY = 6;
        break;
        case 3:car = createSprite(250,-30,65,125);
        car.velocityY = 6;
        break;
        case 4:car = createSprite(350,-30,65,125);
        car.velocityY = 6;
        break;
        default:break;}
        
        var rnd = Math.round(random(1,5));
        switch(rnd){
            case 1:car.addImage(truck1);
            break;
            case 2:car.addImage(truck2);
            break;
            case 3:car.addImage(truck3);
            break;
            case 4:car.addImage(truck4);
            break;
            case 5:car.addImage(truck5);
            break;
            default:break;
        }
        
        
        car.lifetime = 350;
        
        carsGroup.add(car);
    
         }}
         function puddle(){
            if(frameCount % 107 === 0 &&  gamestate===1) {
                var ran = Math.round(random(1,4));
                switch(ran){
                case 1:water = createSprite(50,-30,65,125);
                water.velocityY = 6;
                break;
                case 2:water = createSprite(150,-30,65,125);
                water.velocityY = 6;
                break;
                case 3:water = createSprite(250,-30,65,125);
                water.velocityY = 6;
                break;
                case 4:water = createSprite(350,-30,65,125);
                water.velocityY = 6;
                break;
                default:break;}
    
    
         }
    
    
    
        function change(){
            if(car.isTouching(this.player)){
          gamestate = 2
        player.hide();
            }
            if(car.isTouching(this.player)){
             score = score + 20;
             
               }}
    
       
    }
    















}