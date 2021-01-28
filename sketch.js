// line 207
var gameState = "intro"

function preload(){
  hedge1=loadImage("hedgeX.png");
  hedge2=loadImage("hedgeY.png");
  girl=loadImage("girl.png");
  boy=loadImage("boy.png");
  girl2=loadImage("girl2.png");
  boy2=loadImage("boy2.png");
  Cure=loadImage("Cure.png");
  reset=loadImage("reset.png");
  easy=loadImage("easy.png");
  medium=loadImage("medium.png");
  hard=loadImage("hard.png");
  play=loadImage("play.png");
  gunImg=loadImage("gun.png");
  life=loadImage("lives.png");
  virus=loadImage("virus.png");
}

function setup(){
  createCanvas(600,600);

  xGroup = new Group();
  yGroup = new Group();
  virusGroup = new Group();
  bulletGrp=new Group();

  start1=createSprite(220,220);
  start1.addImage(girl);
  start1.visible=false;
  start1.scale=0.5;
  start2=createSprite(380,220);
  start2.addImage(boy);
  start2.visible=false;
  start2.scale=0.5;
  start3=createSprite(220,420);
  start3.addImage(girl2);
  start3.visible=false;
  start3.scale=0.4;
  start4=createSprite(380,420);
  start4.addImage(boy2);
  start4.visible=false;
  start4.scale=0.4;

  end=createSprite(20,20);
  end.shapeColor="black"
  end.scale=0.1

  player = createSprite(580,580);
  player.shapeColor="black"
  player.scale = 0.25;
 
  l2=createSprite(300,300);
  l2.addImage(medium);
  l2.scale=0.2;
  l2.visible=false;
  l1=createSprite(300,200);
  l1.addImage(easy);
  l1.scale=0.2;
  l1.visible=false;
  l3=createSprite(300,400); 
  l3.addImage(hard);
  l3.scale=0.2;
  l3.visible=false;

  playB=createSprite(540,500)
  playB.addImage(play);
  playB.visible=false;
  playB.scale=0.17;

  edges=createEdgeSprites();

  lives=3;
  bullets=3;
  
  liveB=createSprite(180,250);
  liveB.addImage(life);
  liveB.visible=false;
  liveB.scale=0.2;
  gunB=createSprite(420,250);
  gunB.addImage(gunImg);
  gunB.visible=false;
  gunB.scale=0.35;

  gun = createSprite(player.x-20, player.y-50);
  gun.addImage(gunImg);
  gun.scale=0.05;
  gun.visible=false;

  // resetB=createSprite(300,370);
  // resetB.addImage(reset)
  // resetB.scale=0.5;
  // resetB.visible=false;
}

function draw(){
  background(0);
  gun.x=player.x-20;
  gun.y=player.y-30;
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);
  if (gameState==="intro"){
    stroke("violet");
    fill("violet");
    textSize(30);
    text("INSTRUCTIONS:", 175,180);
    textSize(24);
    noStroke();
    text("Start from the bottom right corner of ", 100,240);
    text("the canvas and take your avatar to the top ", 70, 280);
    text("left to find the cure to the ", 150,320);
    textSize(26);
    text("COVID-19 Pandemic!", 160,360);
    textSize(22);
    text("Use ARROW Keys to Move", 148,400)

    playB.visible=true;
    if(mousePressedOver(playB)){
      gameState="start";
    }
  }
  if (gameState==="start"){
    playB.visible=false;
    stroke("violet");
    fill("violet");
    textSize(30);
    text("Choose Your Avatar:", 158,100)
    start1.visible=true;
    start2.visible=true;
    start3.visible=true;
    start4.visible=true;
    if (mousePressedOver(start1)){
       player.addImage(girl);
       end.addImage(Cure)
       gameState="level";
       start1.visible=false;
       start2.visible=false;
       start3.visible=false;
       start4.visible=false;
    }
    if (mousePressedOver(start2)){
      player.addImage(boy);
      end.addImage(Cure)
      gameState="level";
      start1.visible=false;
      start2.visible=false;
      start3.visible=false;
      start4.visible=false;
   }
   if (mousePressedOver(start3)){
    player.addImage(girl2);
    end.addImage(Cure)
    gameState="level";
    player.scale=0.2;
    start1.visible=false;
    start2.visible=false;
    start3.visible=false;
    start4.visible=false;
 }
  if (mousePressedOver(start4)){
   player.addImage(boy2);
   end.addImage(Cure)
   gameState="level";
   player.scale=0.2;
   start1.visible=false;
   start2.visible=false;
   start3.visible=false;
   start4.visible=false;
}
   player.x=580;
   player.y=580;
  }
  if (gameState==="level"){
    playB.visible=false;
    l1.visible=true;
    l2.visible=true;
    l3.visible=true;
    stroke("violet");
    fill("violet");
    textSize(30);
    text("Choose Difficulty Level:", 138,100);
    fill("white");
    textSize(18);
    text("EASY", 150,200);
    text("MEDIUM",150,300);
    text("HARD", 150,400);
    if (mousePressedOver(l1)){
      gameState="booster";
      xGroup.velocityY=1;
      yGroup.velocityY=1;
      l1.visible=false;
      l2.visible=false;
      l3.visible=false;
    }
    if (mousePressedOver(l2)){
      gameState="booster";
      xGroup.velocityY=3;
      yGroup.velocityY=3;
      l1.visible=false;
      l2.visible=false;
      l3.visible=false;
    }
    if (mousePressedOver(l3)){
      gameState="booster";
      xGroup.velocityY=5;
      yGroup.velocityY=5;
      l1.visible=false;
      l2.visible=false;
      l3.visible=false;
    }
  }
  if (gameState==="booster"){
    playB.visible=false;
    liveB.visible=true;
    gunB.visible=true;
    stroke("violet");
    fill("violet");
    textSize(30);
    text("Choose Any One Booster:", 138,100);
    fill("white");
    noStroke();
    textSize(24);
    text("LIVES:", 150,370);
    text("GUN:", 410,370);
    textSize(20);
    text("You can either live three ", 80,400);
    text("lives", 160,430);
    text("Or you can clear your", 340,400);
    text("path of obstacles thrice", 335,430);
    text("(Use SPACE key to SHOOT)", 315,460);
    fill("red");
    textSize(16);
    text("P.S: If you come in contact with the virus. You will DIE IMMEDIATELY.",80,530); 
    text("BOOSTERS will NOT be able to SAVE you!", 110,550);
    textSize(24);
    text("YOU HAVE BEEN WARNED!", 150,580);
    if (mousePressedOver(liveB)){
      gameState="play1";
      liveB.visible=false;
      gunB.visible=false;
    }
    if (mousePressedOver(gunB)){
      gameState="play2";
      liveB.visible=false;
      gunB.visible=false;
    }
  }
  if (gameState === "play1") {
    playB.visible=false;
    fill("white");
    textSize(18);
    text("Lives: "+ lives, 245,40) 
    if(keyWentDown("left_arrow")){
      player.x = player.x - 5;
    }    
    if(keyWentDown("right_arrow")){
      player.x = player.x + 5;
    }
    if(keyWentDown("up_arrow")){
      player.y = player.y - 5;
    }
    
    if(keyWentDown("down_arrow")){
      player.y = player.y + 5;
    }
    
    if(player.isTouching(end)){
      gameState="win";
    }
    if(player.isTouching(xGroup) || player.isTouching(yGroup)){
      lives--;
      xGroup.destroyEach();
      yGroup.destroyEach();
      player.x=580;
      player.y=580;
    }
    if(player.isTouching(virusGroup)){
      gameState="end";
    }
    if (lives===0){
      gameState="end";
    }
    spawnX();
    spawnY();  
    spawnVirus();
  }
  if (gameState === "play2") {
    playB.visible=false;
    gun.visible=true;
    fill("white");
    textSize(18);
    text("Bullets: "+ bullets, 245,40) 
    if(keyWentDown("space")&& bullets>0){
      var bullet=createSprite(gun.x,gun.y,5,3);
      bullet.shapeColor="yellow";
      bullet.velocityX=-2;
      bullet.lifetime=50;
      bulletGrp.add(bullet);
      bullets--;
    }
    if(bulletGrp.isTouching(xGroup)){
      xGroup.destroyEach();
      bulletGrp.destroyEach();
    }
    if(bulletGrp.isTouching(yGroup)){
      yGroup.destroyEach();
      bulletGrp.destroyEach();
    }
    if(keyWentDown("left_arrow")){
      player.x = player.x - 5;
    }    
    if(keyWentDown("right_arrow")){
      player.x = player.x + 5;
    }
    if(keyWentDown("up_arrow")){
      player.y = player.y - 5;
    }
    if(keyWentDown("down_arrow")){
      player.y = player.y + 5;
    }
    
    if(player.isTouching(end)){
      gameState="win";
    }
    if(player.isTouching(xGroup) || player.isTouching(yGroup)){
      gameState="end";
    }
    if(player.isTouching(virusGroup)){
      gameState="end";
    }
    spawnX();
    spawnY();  
    spawnVirus();
  }
  drawSprites(); 
  if (gameState === "win"){
    playB.visible=false;
    background("limegreen")
    stroke("black");
    fill("black");
    textSize(30);
    text("You Have Cured COVID-19!", 125,300)
    text("Press 'Ctrl + R' to Reset", 195,340);
    xGroup.destroyEach();
    yGroup.destroyEach();
  }
  if (gameState==="end"){
    playB.visible=false;
    background("red")
    stroke("black");
    fill("black");
    textSize(30);
    text("Game Over!", 230,300)
    textSize(20);
    text("Press 'Ctrl + R' to Reset", 195,340);
    xGroup.destroyEach();
    yGroup.destroyEach();
    // resetB.visible=true;
  }
}

function spawnX() {
  if (frameCount % 80 === 0) {
    var x = createSprite(0, 40, Math.round(random(100,300)), 10);
    x.x = Math.round(random(0,600));
    x.velocityY=1;
    x.shapeColor=rgb(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)));
    xGroup.add(x);
    // x.addImage(hedge1);
    // x.velocityX=-1;
  }
}

function spawnY() {
  if (frameCount % 80 === 0) {
    var y = createSprite(480, 40,10 , Math.round(random(100,300)));
    y.x = Math.round(random(0,600));
    y.velocityY=1;
    y.shapeColor=rgb(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)));
    // y.addImage(hedge2);
    // y.velocityX=-1;
    yGroup.add(y);
  }
}
function spawnVirus() {
  if (frameCount % 200 === 0) {
    var v = createSprite(480, 40,10 , Math.round(random(100,300)));
    v.x = Math.round(random(0,600));
    v.velocityY=1;
    v.shapeColor=rgb(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)));
    v.addImage(virus);
    v.scale=0.02;
    virusGroup.add(v);
  }
}