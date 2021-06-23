var wall,thickness

var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 20)
 
  wall=createSprite(1200, 200, 60, height/2);

speed=random(223,321)
weight=random(30,52)

thickness=random(22,83)

bullet.velocityX = speed;
}

function draw() {
  background("black") 
  drawSprites();

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness *thickness*thickness)
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
  if(damage<10){
    wall.shapeColor=color(0,255,0)
  }
  
  }
  


}


function hasCollided(lbullet,lwall){
  bulletRightedge=lbullet.x +lbullet.width
  wallleftedge= lwall.x
if (bulletRightedge >=wallleftedge){
  return true
}
return false

}





