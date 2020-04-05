
class Use{
    constructor(p){
        this.car;
        this.player = p;
        this.water ;
        var carsGroup = new Group();
       
    
    }
    //var player = createSprite(150,275,40,60);

    movement(){
    if(keyDown(LEFT_ARROW) && this.player.x === 350){
        this.player.x = 250;
    }
    if(keyDown(LEFT_ARROW) && this.player.x === 250){
        this.player.x = 150;
    }
    if(keyDown(LEFT_ARROW) && this.player.x === 150){
     this.player.x = 50;
    }



    if(keyDown(RIGHT_ARROW) && this.player.x === 50){
      this.player.x = 150;
    }
    if(keyDown(RIGHT_ARROW) && this.player.x === 150){
       this.player.x = 250;
    }
    if(keyDown(RIGHT_ARROW) && this.player.x === 250){
       this.player.x = 350;
    }


    }
    spawnCars(){
        if(frameCount % 67 === 0 &&  gamestate===1) {
    var rand = Math.round(random(1,4));
    switch(rand){
    case 1:this.car = createSprite(50,-30,65,125);
    car.velocityY = 6;
    break;
    case 2:this.car = createSprite(150,-30,65,125);
    car.velocityY = 6;
    break;
    case 3:this.car = createSprite(250,-30,65,125);
    car.velocityY = 6;
    break;
    case 4:this.car = createSprite(350,-30,65,125);
    car.velocityY = 6;
    break;
    default:break;}
    
    var rnd = Math.round(random(1,5));
    switch(rnd){
        case 1:this.car.addImage(truck1);
        break;
        case 2:this.car.addImage(truck2);
        break;
        case 3:this.car.addImage(truck3);
        break;
        case 4:this.car.addImage(truck4);
        break;
        case 5:this.car.addImage(truck5);
        break;
        default:break;
    }
    
    
    car.lifetime = 350;
    
    carsGroup.add(car);

     }}
     puddle(){
        if(frameCount % 107 === 0 &&  gamestate===1) {
            var ran = Math.round(random(1,4));
            switch(ran){
            case 1:this.water = createSprite(50,-30,65,125);
            water.velocityY = 6;
            break;
            case 2:this.water = createSprite(150,-30,65,125);
            water.velocityY = 6;
            break;
            case 3:this.water = createSprite(250,-30,65,125);
            water.velocityY = 6;
            break;
            case 4:this.water = createSprite(350,-30,65,125);
            water.velocityY = 6;
            break;
            default:break;}


     }}



    change(){
        if(this.car.isTouching(this.player)){
      gamestate = 2
    this.player.hide();
        }
        if(this.car.isTouching(this.player)){
         score = score + 20;
         
           }}
display(){
    drawSprites();
}

}
