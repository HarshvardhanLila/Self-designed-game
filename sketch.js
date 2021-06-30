var Soldier 
var Zombie
var Bullet,Bulletimg
var ground,Fireball,FireballImg

function preload()
{
  Bulletimg = loadImage("Images/bullet.png");
  SoldierAni = loadAnimation("Images/soldierknife1.png","Images/soldierknife2.png","Images/soldierknife3.png");
  Soldierimg = loadImage("Images/soldier1.png");
  SoldierAni2 = loadAnimation("Images/soldier1.png");
  BgImg = loadImage("Images/Background.jpg");
  ZombieImg = loadImage("Images/Zombie.png");
  FireballImg = loadImage("Images/Fireball.jfif")
}
function setup() {
createCanvas(1700,1100);

ground = createSprite(800,600,1700,50);
ground.addImage(BgImg);
ground.x = ground.width /2;
console.log(ground.x);
ground.scale = 3.5
ground.velocityX = 5


Soldier = createSprite(170,850,50,50);
Soldier.addImage(Soldierimg);
Soldier.addAnimation("Knifing",SoldierAni)
Soldier.addAnimation("Stop",SoldierAni2)
Soldier.scale = 1.5



Zombie = createSprite(1600,850,50,50)
Zombie.addImage(ZombieImg);
Zombie.scale = 1.5
}
function draw()
{
  background(0)
  if (ground.x < 0){
    ground.x = 850;
  }
  
if(keyWentDown("A"))
{
  Soldier.changeAnimation("Knifing",SoldierAni)

}
if(keyWentUp("A"))
{
  Soldier.changeAnimation("Stop",SoldierAni2);

}

if(keyDown("space")){
//createBullet();

}
//createFireball();
/*if(Bullet.isTouching(Zombie))
{
Zombie.destroy();

}*/
drawSprites();



}
function createBullet() {
  Bullet = createSprite(20, 100, 20, 10);
  Bullet.addImage(Bulletimg);
  Bullet.x = 270;
  Bullet.y=Soldier.y - 45
  Bullet.velocityX = 4;
  Bullet.lifetime = 150;
  Bullet.scale = 0.1;
}

