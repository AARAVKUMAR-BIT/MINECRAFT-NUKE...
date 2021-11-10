var bg,bg_img;
var good1,good1_img;
var ghost1_img;
 var ghost1;
 var laser,laserImg;
 //var gun,gunImg;

//var shoot = 0;

function preload(){

    bg_img = loadImage("elevator.jpg");
    good1_img = loadImage("good1.png");
    laserImg = loadImage("laser.png");
    ghost1_img = loadImage("ghost1.png");
    laserImage = loadImage("gun.png");
}

function setup(){
    createCanvas(700,600)
    bg = createSprite(600,300);
    bg.addImage(bg_img);
    bg.scale = 1.3;
    bg.velocityX = -1


good1 = createSprite(50,550);
good1.addImage(good1_img);
good1.scale = 0.2;

edges = createEdgeSprites();

laserGroup= new Group;
ghost1Group = new Group;

}

function draw(){
background(0);

bg.velocityX = -1
if (bg.x <50){
    bg.x = bg.width/2;
  }


  if(keyDown("UP_ARROW")){
    good1.y = good1.y - 4;
  
  }
  if(keyDown("DOWN_ARROW")){
    good1.y = good1.y + 4;
  
  }
  
    
  if(keyDown("LEFT_ARROW")){
    good1.x = good1.x - 4;
   
  }
  if(keyDown("RIGHT_ARROW")){
    good1.x = good1.x + 4;
  
  }

  //shoot = shoot-1
  if(keyDown("space")){
  laser = createSprite(good1.x,good1.y);
  laser.addImage(laserImg);
  laser.velocityX = 5 ;
  laserGroup.add(laser);
  //shoot = laser.x;
 
  }
  


  good1.bounceOff(edges);


if(laserGroup.isTouching(ghost1Group)){
  ghost1Group[0].destroy();
  laserGroup[0].destroy();
 
}
  if(ghost1Group.isTouching(good1)){
  
    ghost1Group.setVelocityXEach(0);
    ghost1Group.setVelocityYEach(0);
    ghost1Group.setVisibleEach(false);
    //good1.Visible =false;
    good1.destroy();
    
   
   // bg.velocityX=0;
  
   
   
    
    
  
  }
  spawnGhost();
  drawSprites();

}

function spawnGhost(){
    if(World.frameCount % 60 === 0){
       ghost1 = createSprite(700,300);
       ghost1.addImage(ghost1_img);
       ghost1.scale = 0.5;
       ghost1.velocityX = -2;
       ghost1.y = Math.round(random(550,50));
       ghost1Group.add(ghost1);
       //ghost1Group.lifetime = 134
    }
    
    }