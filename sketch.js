var startbutton, levelsbutton, optionsbutton, title

var level1button, level2button, level3button, level4button,level5button,level6button,level7button,level8button

var turnoffrocks
var rocksOn=true
var pressedcooldown=0


var player
var leftedge,rightedge,topedge,bottomedge, ground1,ground2,ground3,ground4,ground5,ground6, groundimg 
var lv1platform1, lv1platform2, lv1platform3, lv1platform4
var lv2platform1, lv2platform2, lv2platform3, lv2platform4
var lv3platform1, lv3platform2, lv3platform3, lv3platform4
var lv4platform1, lv4platform2, lv4platform3, lv4platform4
var lv5platform1, lv5platform2, lv5platform3, lv5platform4
var lv6platform1, lv6platform2, lv6platform3, lv6platform4
var lv7platform1, lv7platform2, lv7platform3, lv7platform4
var lv8platform1, lv8platform2, lv8platform3, lv8platform4

var falling=true
var fallingboost=0
var jumprelease=0
var gamestate="START"
var win=false
var rock
var rocks=[]
var startinglevelcooldown
var deaths=0

var characterimg, backgroundimg, background, cloudimg,cloud2img,cloud3img,titleimg
var character

var startimg,levelsimg,optionsimg

var flag1, flag2, flag3,flag4,flag5,flag6,flag7,flag8
var flagimg
var lv1img,lv2img,lv3img, lv4img,lv5img,lv6img,lv7img,lv8img, music, mutebutton, mutebuttonimg1,mutebuttonimg2
var mutebuttoncooldown=0
var musicplaystate=true

//sounds
var bruhsound

function preload(){
//https://imslp.eu/files/imglnks/euimg/a/ae/IMSLP729210-PMLP1607-13.02._Symphony_No._9_In_D_Major,_Op._125_(%22Choral%22)-_Third_Movement_-_Adagio_Molto_E_Cantabile;_Andante_Moderato;_Adagio.mp3
//Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
  music=loadSound("bgmusic.mp3")

  lv1img=loadImage("lv1.png")
  lv2img=loadImage("lv2.png")
  lv3img=loadImage("lv3.png")
  lv4img=loadImage("lv4.png")
  lv5img=loadImage("lv5.png")
  lv6img=loadImage("lv6.png")
  lv7img=loadImage("lv7.png")
  lv8img=loadImage("lv8.png")

characterimg=loadImage("character.png")
characterleftimg=loadImage("charactermovingleft.png")
characterrightimg=loadImage("charactermovingright.png")
characterjumpimg=loadImage("characterjump.png")
cloudimg=loadImage("cloud.png")
cloud2img=loadImage("cloud2.png")
cloud3img=loadImage("cloud3.png")

mutebuttonimg1=loadImage("playmusic.png")
mutebuttonimg2=loadImage("mutemusic.png")

backgroundimg=loadImage("backg.png")
groundimg=loadImage("cloudground.png")
titleimg=loadImage("title.png")
startimg=loadImage("start.png")
levelsimg=loadImage("levels.png")
optionsimg=loadImage("options.png")
flagimg=loadImage("flag.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 
  //create

  title=createSprite((windowWidth/2), windowHeight/7+50)
  title.addImage(titleimg)
  title.scale=0.5

startbutton=createSprite((windowWidth/2),(windowHeight/7)*2+150, 600, windowHeight/7)
startbutton.shapeColor=200
startbutton.addImage(startimg)
startbutton.scale=0.33
levelsbutton=createSprite(windowWidth/2,(windowHeight/7)*4+75, 600, windowHeight/7)
levelsbutton.shapeColor=200
levelsbutton.addImage(levelsimg)
levelsbutton.scale=0.33
optionsbutton=createSprite(windowWidth/2,(windowHeight/7)*6+0, 600, windowHeight/7)
optionsbutton.shapeColor=200
optionsbutton.addImage(optionsimg)
optionsbutton.scale=0.33

level1button=createSprite(150, windowHeight/5, 200, 75)
level1button.shapeColor=200
level1button.addImage(lv1img)
level1button.scale=0.5
level2button=createSprite(400, windowHeight/5, 200, 75)
level2button.shapeColor=200
level2button.addImage(lv2img)
level2button.scale=0.5
level3button=createSprite(650, windowHeight/5, 200, 75)
level3button.shapeColor=200
level3button.addImage(lv3img)
level3button.scale=0.5
level4button=createSprite(900, windowHeight/5, 200, 75)
level4button.shapeColor=200
level4button.addImage(lv4img)
level4button.scale=0.5
level5button=createSprite(1150, windowHeight/5, 200, 75)
level5button.shapeColor=200
level5button.addImage(lv5img)
level5button.scale=0.5
level6button=createSprite(150, (windowHeight/5)*2, 200, 75)
level6button.shapeColor=200
level6button.addImage(lv6img)
level6button.scale=0.5
level7button=createSprite(400, (windowHeight/5)*2, 200, 75)
level7button.shapeColor=200
level7button.addImage(lv7img)
level7button.scale=0.5
level8button=createSprite(650, (windowHeight/5)*2, 200, 75)
level8button.shapeColor=200
level8button.addImage(lv8img)
level8button.scale=0.5

turnoffrocks=createSprite(windowWidth-500, (windowHeight/5)-10, 200, 75)
turnoffrocks.shapeColor="green"



  player=createSprite(windowWidth/2,windowHeight/2,50,50)

  character=createSprite(windowWidth/2,windowHeight/2,50,50)
  character.addImage("n",characterimg)
  character.addImage("l",characterleftimg)
  character.addImage("r",characterrightimg)
  character.addImage("j",characterjumpimg)
  character.scale=0.2 


  leftedge=createSprite(0,windowHeight/2,5,windowHeight)
  rightedge=createSprite(windowWidth,windowHeight/2,5,windowHeight)
  topedge=createSprite(windowWidth/2,0,windowWidth,5)
  bottomedge=createSprite(windowWidth/2,windowHeight,windowWidth,20)
  bottomedge.shapeColor="white"

  mutebutton=createSprite(windowWidth-50,50)
  mutebutton.addImage("play",mutebuttonimg1)
  mutebutton.addImage("mute",mutebuttonimg2)
  mutebutton.scale=0.2

  flag1=createSprite(950,windowHeight-435,10,10)
  flag1.addImage(flagimg)
  flag1.scale=0.25
  flag1.depth=0
  flag2=createSprite(950,windowHeight-435,10,10)
  flag2.addImage(flagimg)
  flag2.scale=0.25
  flag2.depth=0
  flag3=createSprite(950,windowHeight-435,10,10)
  flag3.addImage(flagimg)
  flag3.scale=0.25
  flag3.depth=0
  flag4=createSprite(950,windowHeight-435,10,10)
  flag4.addImage(flagimg)
  flag4.scale=0.25
  flag4.depth=0
  flag5=createSprite(950,windowHeight-435,10,10)
  flag5.addImage(flagimg)
  flag5.scale=0.25
  flag5.depth=0
  flag6=createSprite(950,windowHeight-435,10,10)
  flag6.addImage(flagimg)
  flag6.scale=0.25
  flag6.depth=0
  flag7=createSprite(950,windowHeight-435,10,10)
  flag7.addImage(flagimg)
  flag7.scale=0.25
  flag7.depth=0
  flag8=createSprite(950,windowHeight-435,10,10)
  flag8.addImage(flagimg)
  flag8.scale=0.25
  flag8.depth=0

  lv1platform1=createSprite(400,windowHeight-100,400,10)
  lv1platform1.shapeColor="yellow"
  lv1platform1.addImage("cloud",cloud2img)
  lv1platform2=createSprite(900,windowHeight-200,400,10)
  lv1platform2.shapeColor="yellow"
  lv1platform2.addImage("cloud",cloudimg)
  lv1platform3=createSprite(400,windowHeight-300,400,10)
  lv1platform3.shapeColor="yellow"
  lv1platform3.addImage("cloud",cloud3img)
  lv1platform4=createSprite(900,windowHeight-400,400,10)
  lv1platform4.shapeColor="lightgreen"
  lv1platform4.addImage("cloud",cloud2img)

  lv2platform1=createSprite(400,windowHeight-100,400,10)
  lv2platform1.shapeColor="yellow"
  lv2platform1.addImage("cloud",cloudimg)
  lv2platform2=createSprite(900,windowHeight-200,400,10)
  lv2platform2.shapeColor="yellow"
  lv2platform2.addImage("cloud",cloudimg)
  lv2platform3=createSprite(400,windowHeight-300,400,10)
  lv2platform3.shapeColor="yellow"
  lv2platform3.addImage("cloud",cloudimg)
  lv2platform4=createSprite(900,windowHeight-400,400,10)
  lv2platform4.shapeColor="lightgreen"
  lv2platform4.addImage("cloud",cloudimg)

  lv3platform1=createSprite(400,windowHeight-100,400,10)
  lv3platform1.shapeColor="yellow"
  lv3platform1.addImage("cloud",cloudimg)
  lv3platform2=createSprite(900,windowHeight-200,400,10)
  lv3platform2.shapeColor="yellow"
  lv3platform2.addImage("cloud",cloudimg)
  lv3platform3=createSprite(400,windowHeight-300,400,10)
  lv3platform3.shapeColor="yellow"
  lv3platform3.addImage("cloud",cloudimg)
  lv3platform4=createSprite(900,windowHeight-400,400,10)
  lv3platform4.shapeColor="lightgreen"
  lv3platform4.addImage("cloud",cloudimg)

  lv4platform1=createSprite(400,windowHeight-100,400,10)
  lv4platform1.shapeColor="yellow"
  lv4platform1.addImage("cloud",cloudimg)
  lv4platform2=createSprite(900,windowHeight-200,400,10)
  lv4platform2.shapeColor="yellow"
  lv4platform2.addImage("cloud",cloudimg)
  lv4platform3=createSprite(400,windowHeight-300,400,10)
  lv4platform3.shapeColor="yellow"
  lv4platform3.addImage("cloud",cloudimg)
  lv4platform4=createSprite(900,windowHeight-400,400,10)
  lv4platform4.shapeColor="lightgreen"
  lv4platform4.addImage("cloud",cloudimg)

  lv5platform1=createSprite(400,windowHeight-100,400,10)
  lv5platform1.shapeColor="yellow"
  lv5platform1.addImage("cloud",cloudimg)
  lv5platform2=createSprite(900,windowHeight-200,400,10)
  lv5platform2.shapeColor="yellow"
  lv5platform2.addImage("cloud",cloudimg)
  lv5platform3=createSprite(400,windowHeight-300,400,10)
  lv5platform3.shapeColor="yellow"
  lv5platform3.addImage("cloud",cloudimg)
  lv5platform4=createSprite(900,windowHeight-400,400,10)
  lv5platform4.shapeColor="lightgreen"
  lv5platform4.addImage("cloud",cloudimg)

  lv6platform1=createSprite(400,windowHeight-100,400,10)
  lv6platform1.shapeColor="yellow"
  lv6platform1.addImage("cloud",cloudimg)
  lv6platform2=createSprite(900,windowHeight-200,400,10)
  lv6platform2.shapeColor="yellow"
  lv6platform2.addImage("cloud",cloudimg)
  lv6platform3=createSprite(400,windowHeight-300,400,10)
  lv6platform3.shapeColor="yellow"
  lv6platform3.addImage("cloud",cloudimg)
  lv6platform4=createSprite(900,windowHeight-400,400,10)
  lv6platform4.shapeColor="lightgreen"
  lv6platform4.addImage("cloud",cloudimg)

  lv7platform1=createSprite(400,windowHeight-100,400,10)
  lv7platform1.shapeColor="yellow"
  lv7platform1.addImage("cloud",cloudimg)
  lv7platform2=createSprite(900,windowHeight-200,400,10)
  lv7platform2.shapeColor="yellow"
  lv7platform2.addImage("cloud",cloudimg)
  lv7platform3=createSprite(400,windowHeight-300,400,10)
  lv7platform3.shapeColor="yellow"
  lv7platform3.addImage("cloud",cloudimg)
  lv7platform4=createSprite(900,windowHeight-400,400,10)
  lv7platform4.shapeColor="lightgreen"
  lv7platform4.addImage("cloud",cloudimg)

  lv8platform1=createSprite(400,windowHeight-100,400,10)
  lv8platform1.shapeColor="yellow"
  lv8platform1.addImage("cloud",cloudimg)
  lv8platform2=createSprite(900,windowHeight-200,400,10)
  lv8platform2.shapeColor="yellow"
  lv8platform2.addImage("cloud",cloudimg)
  lv8platform3=createSprite(400,windowHeight-300,400,10)
  lv8platform3.shapeColor="yellow"
  lv8platform3.addImage("cloud",cloudimg)
  lv8platform4=createSprite(900,windowHeight-400,400,10)
  lv8platform4.shapeColor="lightgreen"
  lv8platform4.addImage("cloud",cloudimg)


  leftedge.visible=false
  rightedge.visible=false
  topedge.visible=false
 



}

function draw() {
  background(30); 
  background(backgroundimg)
  //jumprelease


  if (music.isPlaying()==false&&musicplaystate==true) { 
    music.play();
    mutebutton.changeImage("play")
  
  } 

  if(mousePressedOver(mutebutton)&&mutebuttoncooldown<1){
    if(musicplaystate===true){
      music.stop()
      mutebutton.changeImage("mute")
      musicplaystate=false
      console.log("yes")

      mutebuttoncooldown=12
    }
  }
  if(mousePressedOver(mutebutton)&&mutebuttoncooldown<1){
    if(musicplaystate===false){
      music.play();
      mutebutton.changeImage("play")
      musicplaystate=true

      mutebuttoncooldown=12
    }
  }

  if(keyDown("x")){
    alert(deaths)
  }



pressedcooldown--
mutebuttoncooldown--

  levelone();
  leveltwo();
  levelthree();
  levelfour();
  levelfive();
  levelsix();
  levelseven();
  leveleight();


  if(keyDown("z")){
    gamestate="START"
  }

 

 
  player.visible=false
  drawSprites();

  
 homepage(); 
 levels();
 options();

 character.x=player.x
 character.y=player.y-12

 if(win===true&&gamestate=="LV8"){
  textSize(50)
  fill("red")
  textAlign(CENTER);
  text("Congratulations... You have reached cloud 9!",windowWidth/2,(windowHeight/2)-50)
}

 
}
 


function spawnrocks(){
  var rand=random(0,windowWidth)
  rock=createSprite(rand,-50,12,35);
  rock.velocityY=10
  rock.shapeColor="blue"
  rock.lifetime=60
  rocks.push(rock)  
}
