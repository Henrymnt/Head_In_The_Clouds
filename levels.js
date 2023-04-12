function homepage(){
  if(gamestate=="START"){
  startbutton.visible=true
  levelsbutton.visible=true
  optionsbutton.visible=true
  title.visible=true
  player.visible=false
bottomedge.visible=false
character.visible=false




    if(mousePressedOver(startbutton)){
      gamestate="LV1"
      player.x=windowWidth/2
      player.y=(windowHeight/2)+50
      }
    if(mousePressedOver(levelsbutton)){
     gamestate="LVS"
      }
    
    if(mousePressedOver(optionsbutton)){
      gamestate="OPTIONS"
    }
  }
  else{
    startbutton.visible=false
  levelsbutton.visible=false
  optionsbutton.visible=false
  title.visible=false
  }
}
function levels(){
  if(gamestate==="LVS"){
level1button.visible=true
level2button.visible=true
level3button.visible=true
level4button.visible=true
level5button.visible=true
level6button.visible=true
level7button.visible=true
level8button.visible=true



if(mousePressedOver(level1button)){
  gamestate="LV1"
  player.x=windowWidth/2
  player.y=(windowHeight/2)+50
}
if(mousePressedOver(level2button)){
  gamestate="LV2"
  player.x=windowWidth/2
  player.y=(windowHeight/2)+50
}
if(mousePressedOver(level3button)){
  gamestate="LV3"
  player.x=windowWidth/2
  player.y=(windowHeight/2)+50
}
if(mousePressedOver(level4button)){
  gamestate="LV4"
  player.x=windowWidth/2
  player.y=(windowHeight/2)+50
}
if(mousePressedOver(level5button)){
  gamestate="LV5"
  player.x=windowWidth/2
  player.y=(windowHeight/2)+50
}
if(mousePressedOver(level6button)){
  gamestate="LV6"
  player.x=windowWidth/2
  player.y=(windowHeight/2)+50
}
if(mousePressedOver(level7button)){
  gamestate="LV7"
  player.x=windowWidth/2
  player.y=(windowHeight/2)+50
}
if(mousePressedOver(level8button)){
  gamestate="LV8"
  player.x=windowWidth/2
  player.y=(windowHeight/2)+50
}


  }
  else{
    level1button.visible=false
  level2button.visible=false
  level3button.visible=false
  level4button.visible=false
  level5button.visible=false
  level6button.visible=false
  level7button.visible=false
  level8button.visible=false
  }


}
function options(){
  if(gamestate=="OPTIONS"){
    turnoffrocks.visible=true
    fill("Red")
  textSize(45)
    text("Enable/Disable Rain",200,windowHeight/5)

    if(mousePressedOver(turnoffrocks)&&turnoffrocks.shapeColor=="green"&&pressedcooldown<0){
      turnoffrocks.shapeColor="red"
      rocksOn=false
      pressedcooldown=10
     }
     if(mousePressedOver(turnoffrocks)&&turnoffrocks.shapeColor=="red"&&pressedcooldown<0){
      turnoffrocks.shapeColor="green"
      rocksOn=true
      pressedcooldown=10
     }
textSize(32)
     text("Use WASD and Arrow Keys to move around and jump. ",80,(windowHeight/5)*2)
     text("Press Z to go home. Press X to check the respawn count.",80,((windowHeight/5)*3)-50)

 

  }
  else{
    turnoffrocks.visible=false
  }
}


function levelone(){
    if(gamestate=="LV1"){
    //visibility

 
  lv1platform1.visible=true
  lv1platform2.visible=true
  lv1platform3.visible=true
  lv1platform4.visible=true
  character.visible=true
      player.visible=true
      bottomedge.visible=true
      flag1.visible=true
 

  if(player.depth>0){
    player.shapeColor="lightgreen"
  }
        jumprelease--
        player.depth++
      
        //movement
      
        if(keyDown("a")||keyDown(LEFT_ARROW)){
          player.x-=8
          character.changeImage("l")
        }
        if(keyDown("d")||keyDown(RIGHT_ARROW)){
          player.x+=8
          character.changeImage("r")
        }
        if(!keyDown("a")&&!keyDown(LEFT_ARROW) && !keyDown("d") &&!keyDown(RIGHT_ARROW)){
          character.changeImage("n")
        }
        
        if(player.x<25){
          player.x+=8
        }
        if(player.x>windowWidth-25){
          player.x-=8
        }
        if(jumprelease<1&&falling==false){
          if(keyDown("w")||keyDown(UP_ARROW)||keyDown("space")){
            player.velocityY=-27.5
            jumprelease=24
          }
        }
        //limits
        if(falling==false){
          fallingboost=1
        if(player.velocityY>=30){
          player.velocityY=15
        }
      }
      else{
        if(fallingboost==1&&player.velocityY>0){
          player.velocityY=0
          fallingboost=0
        }
      }
      
        if(player.y<0){
          player.y=50
          player.velocityY=2.5
        }
        if(player.isTouching(bottomedge)){
          player.y=windowHeight-25
          jumprelease=0
          falling=false
        }
        else{
          if(player.isTouching(lv1platform1)&&gamestate=="LV1"){
            player.y=lv1platform1.y-25
            jumprelease=0
            falling=false
          }
          else{
            if(player.isTouching(lv1platform2)&&gamestate=="LV1"){
              player.y=lv1platform2.y-25
              jumprelease=0
              falling=false
            }
            else{
              if(player.isTouching(lv1platform3)&&gamestate=="LV1"){
                player.y=lv1platform3.y-25
                jumprelease=0
                falling=false
              }
              else{
                if(player.isTouching(lv1platform4)&&gamestate=="LV1"){
                  
                  jumprelease=0
                  falling=false
                 
                  gamestate="LV2"
              player.x=windowWidth/2
              player.y=(windowHeight/2)+250
                }
                else{
                  falling=true
                }
              }
              }
            }
          }
         
        
      
      
      //gravity
        player.velocityY+=3.5
      
        //rocks
        if(frameCount%3==0&&gamestate=="LV1"&&rocksOn==true){
        spawnrocks();
        }
        for(i=0;i<rocks.length;i++){
          if(player.isTouching(rocks[i])){
            player.x=windowWidth/2
            player.y=windowHeight+25
            player.velocityY=0
            player.shapeColor="red"
            player.depth=-5
            rocks[i].destroy()
            deaths++
          }
          if(lv1platform1.isTouching(rocks[i])){
            rocks[i].destroy()
        }
        if(lv1platform2.isTouching(rocks[i])){
          rocks[i].destroy()
      }
      if(lv1platform3.isTouching(rocks[i])){
        rocks[i].destroy()
    }
    if(lv1platform4.isTouching(rocks[i])){
      rocks[i].destroy()
  }

if(falling==true){
    character.changeImage("j")
}
     
          }
      
        }
        else{
            lv1platform1.visible=false
            lv1platform2.visible=false
            lv1platform3.visible=false
            lv1platform4.visible=false
            flag1.visible=false
        }
}
function leveltwo(){
    if(gamestate=="LV2"){
    //visibility

 
  character.visible=true
  player.visible=true
  bottomedge.visible=true
  flag2.visible=true
 
 

    lv2platform1.visible=false
    lv2platform2.visible=false
    lv2platform3.visible=false
    lv2platform4.visible=true

 

  if(player.depth>0){
    player.shapeColor="lightgreen"
  }
        jumprelease--
        player.depth++
        startinglevelcooldown--
      
        //movement
      
        if(keyDown("a")||keyDown(LEFT_ARROW)){
          player.x-=8
          character.changeImage("l")
        }
        if(keyDown("d")||keyDown(RIGHT_ARROW)){
          player.x+=8
          character.changeImage("r")
        }
        if(!keyDown("a")&&!keyDown(LEFT_ARROW) && !keyDown("d") &&!keyDown(RIGHT_ARROW)){
          character.changeImage("n")
        }
        if(player.x<25){
          player.x+=8
        }
        if(player.x>windowWidth-25){
          player.x-=8
        }
        if(jumprelease<1&&falling==false){
          if(keyDown("w")||keyDown(UP_ARROW)||keyDown("space")){
            player.velocityY=-25
            jumprelease=24
          }
        }
        //limits
        if(falling==false){
          fallingboost=1
        if(player.velocityY>=30){
          player.velocityY=15
        }
      }
      else{
        if(fallingboost==1&&player.velocityY>0){
          player.velocityY=0
          fallingboost=0
        }
      }
      
        if(player.y<0){
          player.y=50
          player.velocityY=2.5
        }
        if(player.isTouching(bottomedge)){
          player.y=windowHeight-25
          jumprelease=0
          falling=false
        }
        else{
          if(player.isTouching(lv2platform1)&&gamestate=="LV2"){
            player.y=lv2platform1.y-25
            jumprelease=0
            falling=false
            lv2platform1.visible=true
            lv2platform1.shapeColor="yellow"
          }
          else{
            lv2platform1.shapeColor=30
            if(player.isTouching(lv2platform2)&&gamestate=="LV2"){
              player.y=lv2platform2.y-25
              jumprelease=0
              falling=false
              lv2platform2.visible=true
              lv2platform2.shapeColor="yellow"
            }
            else{
              lv2platform2.shapeColor=30
              if(player.isTouching(lv2platform3)&&gamestate=="LV2"){
                player.y=lv2platform3.y-25
                jumprelease=0
                falling=false
                lv2platform3.visible=true
                lv2platform3.shapeColor="yellow"
              }
              else{
                lv2platform3.shapeColor=30
                if(player.isTouching(lv2platform4)&&gamestate=="LV2"){
                  player.y=lv2platform4.y-25
                  jumprelease=0
                  falling=false
                  gamestate="LV3"
                  player.y=(windowHeight/2)+250
                  player.x=windowWidth/2
                }
                else{
                  falling=true

                  lv2platform1.visible=false
                  lv2platform2.visible=false
                  lv2platform3.visible=false
                }
              }
              }
            }
          }
          for(i=0;i<rocks.length;i++){
          if(lv2platform4.isTouching(rocks[i])){
            rocks[i].destroy()
        }
      }
      
      
      //gravity
        player.velocityY+=3.5
      
        //rocks
        if(frameCount%3==0&&gamestate=="LV2"&&rocksOn==true){
        spawnrocks();
        }
        for(i=0;i<rocks.length;i++){
          if(player.isTouching(rocks[i])){
            player.x=windowWidth/2
            player.y=windowHeight+25
            player.velocityY=0
            player.shapeColor="red"
            player.depth=-5
            rocks[i].destroy()
            lv2platform1.visible=false
            lv2platform1.visible=false
            lv2platform1.visible=false
            deaths++
           
          }
        }

          if(falling==true){
            character.changeImage("j")
        }
        }
        else{
            lv2platform1.visible=false
            lv2platform2.visible=false
            lv2platform3.visible=false
            lv2platform4.visible=false
            flag2.visible=false
        }
}

function levelthree(){
  if(gamestate=="LV3"){
  //visibility


lv3platform1.visible=true
lv3platform2.visible=true
lv3platform3.visible=true
lv3platform4.visible=true


flag3.visible=true
character.visible=true
player.visible=true
bottomedge.visible=true
player.velocityX=1


      jumprelease--
      player.depth++
      startinglevelcooldown--
    
      //movement
    
      if(keyDown("a")||keyDown(LEFT_ARROW)){
        player.x-=8
        character.changeImage("l")
      }
      if(keyDown("d")||keyDown(RIGHT_ARROW)){
        player.x+=8
        character.changeImage("r")
      }
      if(!keyDown("a")&&!keyDown(LEFT_ARROW) && !keyDown("d") &&!keyDown(RIGHT_ARROW)){
        character.changeImage("n")
      }
      if(player.x<25){
        player.x+=8
      }
      if(player.x>windowWidth-25){
        player.x-=8
      }
      if(jumprelease<1&&falling==false){
        if(keyDown("w")||keyDown(UP_ARROW)||keyDown("space")){
          player.velocityY=-25
          jumprelease=24
        }
      }
      //limits
      if(falling==false){
        fallingboost=1
      if(player.velocityY>=30){
        player.velocityY=15
      }
    }
    else{
      if(fallingboost==1&&player.velocityY>0){
        player.velocityY=0
        fallingboost=0
      }
    }
    
      if(player.y<0){
        player.y=50
        player.velocityY=2.5
      }
      if(player.isTouching(bottomedge)){
        player.y=windowHeight-25
        jumprelease=0
        falling=false
      }
      else{
        if(player.isTouching(lv3platform1)&&gamestate=="LV3"){
          player.y=lv3platform1.y-25
          jumprelease=0
          falling=false
          lv3platform1.shapeColor="yellow"
        }
        else{
          lv3platform1.shapeColor=30
          if(player.isTouching(lv3platform2)&&gamestate=="LV3"){
            player.y=lv3platform2.y-25
            jumprelease=0
            falling=false
            lv3platform2.shapeColor="yellow"
          }
          else{
            lv3platform2.shapeColor=30
            if(player.isTouching(lv3platform3)&&gamestate=="LV3"){
              player.y=lv3platform3.y-25
              jumprelease=0
              falling=false
              lv3platform3.shapeColor="yellow"
            }
            else{
              lv3platform3.shapeColor=30
              if(player.isTouching(lv3platform4)&&gamestate=="LV3"){
                player.y=lv3platform4.y-25
                  jumprelease=0
                  falling=false
                  gamestate="LV4"
                  player.y=(windowHeight/2)+250
                  player.x=windowWidth/2
              }
              else{
                falling=true
              }
            }
            }
          }
        }
        for(i=0;i<rocks.length;i++){
        if(lv3platform1.isTouching(rocks[i])){
          rocks[i].destroy()
      }
      if(lv3platform2.isTouching(rocks[i])){
        rocks[i].destroy()
    }
    if(lv3platform3.isTouching(rocks[i])){
      rocks[i].destroy()
  }
  if(lv3platform4.isTouching(rocks[i])){
    rocks[i].destroy()
}
}      
      
    
    
    //gravity
      player.velocityY+=3.5
    
      //rocks
      if(frameCount%3==0&&gamestate=="LV3"&&rocksOn==true){
      spawnrocks();
      rock.velocityX=4
      
      }
      for(i=0;i<rocks.length;i++){
        if(player.isTouching(rocks[i])){
          player.x=windowWidth/2
          player.y=windowHeight+25
          player.velocityY=0
          player.shapeColor="red"
          player.depth=-5
          rocks[i].destroy()
         deaths++
        }
      }


        if(falling==true){
          character.changeImage("j")
      }
    
      }
      else{
          lv3platform1.visible=false
          lv3platform2.visible=false
          lv3platform3.visible=false
          lv3platform4.visible=false
          flag3.visible=false
          player.velocityX=0
      }
}
function levelfour(){
  if(gamestate=="LV4"){
  //visibility


lv4platform1.visible=true
lv4platform2.visible=true
lv4platform3.visible=true
lv4platform4.visible=true


flag4.visible=true
character.visible=true
player.visible=true
bottomedge.visible=true
player.velocityX=1


      jumprelease--
      player.depth++
      startinglevelcooldown--
    
      //movement
    
      if(keyDown("a")||keyDown(LEFT_ARROW)){
        player.x-=8
        character.changeImage("l")
      }
      if(keyDown("d")||keyDown(RIGHT_ARROW)){
        player.x+=8
        character.changeImage("r")
      }
      if(!keyDown("a")&&!keyDown(LEFT_ARROW) && !keyDown("d") &&!keyDown(RIGHT_ARROW)){
        character.changeImage("n")
      }
      if(player.x<25){
        player.x+=8
      }
      if(player.x>windowWidth-25){
        player.x-=8
      }
      if(jumprelease<1&&falling==false){
        if(keyDown("w")||keyDown(UP_ARROW)||keyDown("space")){
          player.velocityY=-25
          jumprelease=24
        }
      }
      //limits
      if(falling==false){
        fallingboost=1
      if(player.velocityY>=30){
        player.velocityY=15
      }
    }
    else{
      if(fallingboost==1&&player.velocityY>0){
        player.velocityY=0
        fallingboost=0
      }
    }
    
      if(player.y<0){
        player.y=50
        player.velocityY=2.5
      }
      if(player.isTouching(bottomedge)){
        player.y=windowHeight-25
        jumprelease=0
        falling=false
      }
      else{
        if(player.isTouching(lv4platform1)&&gamestate=="LV4"){
          player.y=lv4platform1.y-25
          jumprelease=0
          falling=false
          lv4platform1.shapeColor="yellow"
        }
        else{
          lv4platform1.shapeColor=30
          if(player.isTouching(lv4platform2)&&gamestate=="LV4"){
            player.y=lv4platform2.y-25
            jumprelease=0
            falling=false
            lv4platform2.shapeColor="yellow"
          }
          else{
            lv4platform2.shapeColor=30
            if(player.isTouching(lv4platform3)&&gamestate=="LV4"){
              player.y=lv4platform3.y-25
              jumprelease=0
              falling=false
              lv4platform3.shapeColor="yellow"
            }
            else{
              lv4platform3.shapeColor=30
              if(player.isTouching(lv4platform4)&&gamestate=="LV4"){
                player.y=lv4platform4.y-25
                jumprelease=0
                falling=false
                gamestate="LV5"
                player.y=(windowHeight/2)+250
                player.x=windowWidth/2
              }
              else{
                falling=true
              }
            }
            }
          }
        }
        for(i=0;i<rocks.length;i++){
        if(lv4platform1.isTouching(rocks[i])){
          rocks[i].destroy()
      }
      if(lv4platform2.isTouching(rocks[i])){
        rocks[i].destroy()
    }
    if(lv4platform3.isTouching(rocks[i])){
      rocks[i].destroy()
  }
  if(lv4platform4.isTouching(rocks[i])){
    rocks[i].destroy()
}
}      
      
    
    
    //gravity
      player.velocityY+=3.5
    
      //rocks
      if(frameCount%3==0&&gamestate=="LV4"&&rocksOn==true){
      spawnrocks();
      let rand=Math.round(random(1,2))
      if(rand===1){
      rock.velocityX=4
      }
     if(rand===2){
      rock.velocityX=-4
      }
      
      }
      for(i=0;i<rocks.length;i++){
        if(player.isTouching(rocks[i])){
          player.x=windowWidth/2
          player.y=windowHeight+25
          player.velocityY=0
          player.shapeColor="red"
          player.depth=-5
          rocks[i].destroy()
         deaths++
        }
      }

        if(falling==true){
          character.changeImage("j")
      }
    
      }
      else{
          lv4platform1.visible=false
          lv4platform2.visible=false
          lv4platform3.visible=false
          lv4platform4.visible=false
          flag4.visible=false
          player.velocityX=0
      }
}
function levelfive(){
  if(gamestate=="LV5"){
  //visibility



  character.visible=true
  player.visible=true
  bottomedge.visible=true
  flag5.visible=true
 
 

    lv5platform1.visible=false
    lv5platform2.visible=false
    lv5platform3.visible=false
    lv5platform4.visible=true

 

  if(player.depth>0){
    player.shapeColor="lightgreen"
  }
        jumprelease--
        player.depth++
        startinglevelcooldown--
      
        //movement
      
        if(keyDown("a")||keyDown(LEFT_ARROW)){
          player.x-=8
          character.changeImage("l")
        }
        if(keyDown("d")||keyDown(RIGHT_ARROW)){
          player.x+=8
          character.changeImage("r")
        }
        if(!keyDown("a")&&!keyDown(LEFT_ARROW) && !keyDown("d") &&!keyDown(RIGHT_ARROW)){
          character.changeImage("n")
        }
        if(player.x<25){
          player.x+=8
        }
        if(player.x>windowWidth-25){
          player.x-=8
        }
        if(jumprelease<1&&falling==false){
          if(keyDown("w")||keyDown(UP_ARROW)||keyDown("space")){
            player.velocityY=-25
            jumprelease=24
          }
        }
        //limits
        if(falling==false){
          fallingboost=1
        if(player.velocityY>=30){
          player.velocityY=15
        }
      }
      else{
        if(fallingboost==1&&player.velocityY>0){
          player.velocityY=0
          fallingboost=0
        }
      }
      
        if(player.y<0){
          player.y=50
          player.velocityY=2.5
        }
        if(player.isTouching(bottomedge)){
          player.y=windowHeight-25
          jumprelease=0
          falling=false
        }
        else{
          if(player.isTouching(lv5platform1)&&gamestate=="LV5"){
            player.y=lv5platform1.y-25
            jumprelease=0
            falling=false
            lv5platform1.visible=true
            lv5platform1.shapeColor="yellow"
          }
          else{
            lv5platform1.shapeColor=30
            if(player.isTouching(lv5platform2)&&gamestate=="LV5"){
              player.y=lv5platform2.y-25
              jumprelease=0
              falling=false
              lv5platform2.visible=true
              lv5platform2.shapeColor="yellow"
            }
            else{
              lv5platform2.shapeColor=30
              if(player.isTouching(lv5platform3)&&gamestate=="LV5"){
                player.y=lv5platform3.y-25
                jumprelease=0
                falling=false
                lv5platform3.visible=true
                lv5platform3.shapeColor="yellow"
              }
              else{
                lv5platform3.shapeColor=30
                if(player.isTouching(lv5platform4)&&gamestate=="LV5"){
                  player.y=lv5platform4.y-25
                  jumprelease=0
                  falling=false
                  gamestate="LV6"
                  player.y=(windowHeight/2)+250
                  player.x=windowWidth/2
                }
                else{
                  falling=true

                  lv5platform1.visible=false
                  lv5platform2.visible=false
                  lv5platform3.visible=false
                }
              }
              }
            }
          }
          for(i=0;i<rocks.length;i++){
          if(lv5platform4.isTouching(rocks[i])){
            rocks[i].destroy()
        }
      }
          
    
    //gravity
      player.velocityY+=3.5
    
      //rocks
      if(frameCount%3==0&&gamestate=="LV5"&&rocksOn==true){
      spawnrocks();
      let rand=Math.round(random(1,2))
      if(rand===1){
      rock.velocityX=4
      }
     if(rand===2){
      rock.velocityX=-4
      }
      
      }
      for(i=0;i<rocks.length;i++){
        if(player.isTouching(rocks[i])){
          player.x=windowWidth/2
          player.y=windowHeight+25
          player.velocityY=0
          player.shapeColor="red"
          player.depth=-5
          rocks[i].destroy()
         deaths++
        }
      }

        if(falling==true){
          character.changeImage("j")
      }
    
      }
      else{
          lv5platform1.visible=false
          lv5platform2.visible=false
          lv5platform3.visible=false
          lv5platform4.visible=false
          flag5.visible=false
          player.velocityX=0
      }
}
function levelsix(){
  if(gamestate=="LV6"){
  //visibility


lv6platform1.visible=true
lv6platform2.visible=true
lv6platform3.visible=true
lv6platform4.visible=true


flag6.visible=true
character.visible=true
player.visible=true
bottomedge.visible=true
player.velocityX=1


      jumprelease--
      player.depth++
      startinglevelcooldown--
    
      //movement
    
      if(keyDown("a")||keyDown(LEFT_ARROW)){
        player.x-=8
        character.changeImage("l")
      }
      if(keyDown("d")||keyDown(RIGHT_ARROW)){
        player.x+=8
        character.changeImage("r")
      }
      if(!keyDown("a")&&!keyDown(LEFT_ARROW) && !keyDown("d") &&!keyDown(RIGHT_ARROW)){
        character.changeImage("n")
      }
      if(player.x<25){
        player.x+=8
      }
      if(player.x>windowWidth-25){
        player.x-=8
      }
      if(jumprelease<1&&falling==false){
        if(keyDown("w")||keyDown(UP_ARROW)||keyDown("space")){
          player.velocityY=-25
          jumprelease=24
        }
      }
      //limits
      if(falling==false){
        fallingboost=1
      if(player.velocityY>=30){
        player.velocityY=15
      }
    }
    else{
      if(fallingboost==1&&player.velocityY>0){
        player.velocityY=0
        fallingboost=0
      }
    }
    
      if(player.y<0){
        player.y=50
        player.velocityY=2.5
      }
      if(player.isTouching(bottomedge)){
        player.y=windowHeight-25
        jumprelease=0
        falling=false
      }
      else{
        if(player.isTouching(lv6platform1)&&gamestate=="LV6"){
          player.y=lv6platform1.y-25
          jumprelease=0
          falling=false
          lv6platform1.shapeColor="yellow"
        }
        else{
          lv6platform1.shapeColor=30
          if(player.isTouching(lv6platform2)&&gamestate=="LV6"){
            player.y=lv6platform2.y-25
            jumprelease=0
            falling=false
            lv6platform2.shapeColor="yellow"
          }
          else{
            lv6platform2.shapeColor=30
            if(player.isTouching(lv6platform3)&&gamestate=="LV6"){
              player.y=lv6platform3.y-25
              jumprelease=0
              falling=false
              lv6platform3.shapeColor="yellow"
            }
            else{
              lv6platform3.shapeColor=30
              if(player.isTouching(lv6platform4)&&gamestate=="LV6"){
                player.y=lv6platform4.y-25
                jumprelease=0
                falling=false
                gamestate="LV7"
                player.y=(windowHeight/2)+250
                player.x=windowWidth/2
              }
              else{
                falling=true
              }
            }
            }
          }
        }
        for(i=0;i<rocks.length;i++){
        if(lv6platform1.isTouching(rocks[i])){
          rocks[i].destroy()
      }
      if(lv6platform2.isTouching(rocks[i])){
        rocks[i].destroy()
    }
    if(lv6platform3.isTouching(rocks[i])){
      rocks[i].destroy()
  }
  if(lv6platform4.isTouching(rocks[i])){
    rocks[i].destroy()
}
}      
      
    
    
    //gravity
      player.velocityY+=3.5
    
      //rocks
      if(frameCount%3==0&&gamestate=="LV6"&&rocksOn==true){
      spawnrocks();
      rock.velocityX=4
      let rand=Math.round(random(1,2))
      if(rand===1){
        rock.velocityX=4
        }
       if(rand===2){
        rock.velocityX=-4
        }
        rock.velocityY=15
      
      }
      for(i=0;i<rocks.length;i++){
        if(player.isTouching(rocks[i])){
          player.x=windowWidth/2
          player.y=windowHeight+25
          player.velocityY=0
          player.shapeColor="red"
          player.depth=-5
          rocks[i].destroy()
         deaths++
        }
      }

        if(falling==true){
          character.changeImage("j")
      }
    
      }
      else{
          lv6platform1.visible=false
          lv6platform2.visible=false
          lv6platform3.visible=false
          lv6platform4.visible=false
          flag6.visible=false
          player.velocityX=0
      }
}
function levelseven(){
  if(gamestate=="LV7"){
  //visibility


lv7platform1.visible=true
lv7platform2.visible=true
lv7platform3.visible=true
lv7platform4.visible=true


flag7.visible=true
character.visible=true
player.visible=true
bottomedge.visible=true
player.velocityX=1


      jumprelease--
      player.depth++
      startinglevelcooldown--
    
      //movement
    
      if(keyDown("a")||keyDown(LEFT_ARROW)){
        player.x-=8
        character.changeImage("l")
      }
      if(keyDown("d")||keyDown(RIGHT_ARROW)){
        player.x+=8
        character.changeImage("r")
      }
      if(!keyDown("a")&&!keyDown(LEFT_ARROW) && !keyDown("d") &&!keyDown(RIGHT_ARROW)){
        character.changeImage("n")
      }
      if(player.x<25){
        player.x+=8
      }
      if(player.x>windowWidth-25){
        player.x-=8
      }
      if(jumprelease<1&&falling==false){
        if(keyDown("w")||keyDown(UP_ARROW)||keyDown("space")){
          player.velocityY=-25
          jumprelease=24
        }
      }
      //limits
      if(falling==false){
        fallingboost=1
      if(player.velocityY>=30){
        player.velocityY=15
      }
    }
    else{
      if(fallingboost==1&&player.velocityY>0){
        player.velocityY=0
        fallingboost=0
      }
    }
    
      if(player.y<0){
        player.y=50
        player.velocityY=2.5
      }
      if(player.isTouching(bottomedge)){
        player.y=windowHeight-25
        jumprelease=0
        falling=false
      }
      else{
        if(player.isTouching(lv7platform1)&&gamestate=="LV7"){
          player.y=lv7platform1.y-25
          jumprelease=0
          falling=false
          lv7platform1.shapeColor="yellow"
        }
        else{
          lv7platform1.shapeColor=30
          if(player.isTouching(lv7platform2)&&gamestate=="LV7"){
            player.y=lv7platform2.y-25
            jumprelease=0
            falling=false
            lv7platform2.shapeColor="yellow"
          }
          else{
            lv7platform2.shapeColor=30
            if(player.isTouching(lv7platform3)&&gamestate=="LV7"){
              player.y=lv7platform3.y-25
              jumprelease=0
              falling=false
              lv7platform3.shapeColor="yellow"
            }
            else{
              lv7platform3.shapeColor=30
              if(player.isTouching(lv7platform4)&&gamestate=="LV7"){
                player.y=lv7platform4.y-25
                  jumprelease=0
                  falling=false
                  gamestate="LV8"
                  player.y=(windowHeight/2)+250
                  player.x=windowWidth/2
              }
              else{
                falling=true
              }
            }
            }
          }
        }
        for(i=0;i<rocks.length;i++){
        if(lv7platform1.isTouching(rocks[i])){
          rocks[i].destroy()
      }
      if(lv7platform2.isTouching(rocks[i])){
        rocks[i].destroy()
    }
    if(lv7platform3.isTouching(rocks[i])){
      rocks[i].destroy()
  }
  if(lv7platform4.isTouching(rocks[i])){
    rocks[i].destroy()
}
}      
      
    
    
    //gravity
      player.velocityY+=3.5
    
      //rocks
      if(frameCount%2==0&&gamestate=="LV7"&&rocksOn==true){
      spawnrocks();
      rock.velocityX=4
      let rand=Math.round(random(1,2))
      if(rand===1){
        rock.velocityX=4
        }
       if(rand===2){
        rock.velocityX=-4
        }
        rock.velocityY=3
        rock.shapeColor="white"
      
      }
      for(i=0;i<rocks.length;i++){
        if(player.isTouching(rocks[i])){
          player.x=windowWidth/2
          player.y=windowHeight+25
          player.velocityY=0
          player.shapeColor="red"
          player.depth=-5
          rocks[i].destroy()
         deaths++
        }
      }
     

        if(falling==true){
          character.changeImage("j")
      }
    
      }
      else{
          lv7platform1.visible=false
          lv7platform2.visible=false
          lv7platform3.visible=false
          lv7platform4.visible=false
          flag7.visible=false
          player.velocityX=0
      }
}
function leveleight(){
  if(gamestate=="LV8"){
  //visibility


lv8platform1.visible=true
lv8platform2.visible=true
lv8platform3.visible=true
lv8platform4.visible=true


flag8.visible=true
character.visible=true
player.visible=true
bottomedge.visible=true



      jumprelease--
      player.depth++
      startinglevelcooldown--
    
      //movement
    
      if(keyDown("a")||keyDown(LEFT_ARROW)){
        player.x-=8
        character.changeImage("l")
      }
      if(keyDown("d")||keyDown(RIGHT_ARROW)){
        player.x+=8
        character.changeImage("r")
      }
      if(!keyDown("a")&&!keyDown(LEFT_ARROW) && !keyDown("d") &&!keyDown(RIGHT_ARROW)){
        character.changeImage("n")
      }
      if(player.x<25){
        player.x+=8
      }
      if(player.x>windowWidth-25){
        player.x-=8
      }
      if(jumprelease<1&&falling==false){
        if(keyDown("w")||keyDown(UP_ARROW)||keyDown("space")){
          player.velocityY=-25
          jumprelease=24
        }
      }
      //limits
      if(falling==false){
        fallingboost=1
      if(player.velocityY>=30){
        player.velocityY=15
      }
    }
    else{
      if(fallingboost==1&&player.velocityY>0){
        player.velocityY=0
        fallingboost=0
      }
    }
    
      if(player.y<0){
        player.y=50
        player.velocityY=2.5
      }
      if(player.isTouching(bottomedge)){
        player.y=windowHeight-25
        jumprelease=0
        falling=false
      }
      else{
        if(player.isTouching(lv8platform1)&&gamestate=="LV8"){
          player.y=lv8platform1.y-25
          jumprelease=0
          falling=false
          lv8platform1.shapeColor="yellow"
        }
        else{
          lv8platform1.shapeColor=30
          if(player.isTouching(lv8platform2)&&gamestate=="LV8"){
            player.y=lv8platform2.y-25
            jumprelease=0
            falling=false
            lv8platform2.shapeColor="yellow"
          }
          else{
            lv8platform2.shapeColor=30
            if(player.isTouching(lv8platform3)&&gamestate=="LV8"){
              player.y=lv8platform3.y-25
              jumprelease=0
              falling=false
              lv8platform3.shapeColor="yellow"
            }
            else{
              lv8platform3.shapeColor=30
              if(player.isTouching(lv8platform4)&&gamestate=="LV8"){
                player.y=lv8platform4.y-25
                  jumprelease=0
                  falling=false
                  win=true
                  player.y=(windowHeight/2)+250
                  player.x=windowWidth/2
              }
              else{
                falling=true
              }
            }
            }
          }
        }
        for(i=0;i<rocks.length;i++){
        if(lv8platform1.isTouching(rocks[i])){
          rocks[i].destroy()
      }
      if(lv8platform2.isTouching(rocks[i])){
        rocks[i].destroy()
    }
    if(lv8platform3.isTouching(rocks[i])){
      rocks[i].destroy()
  }
  if(lv8platform4.isTouching(rocks[i])){
    rocks[i].destroy()
}
}      
      
    
    
    //gravity
      player.velocityY+=3.5
    
      //rocks
      if(frameCount%3==0&&gamestate=="LV8"&&rocksOn==true){
      spawnrocks();
        let rand=Math.round(random(1,2))
        if(rand===1){
          rock.velocityX=8
          }
         if(rand===2){
          rock.velocityX=-8
          }
          rock.velocityY=15
      }
      for(i=0;i<rocks.length;i++){
        if(player.isTouching(rocks[i])){
          player.x=windowWidth/2
          player.y=windowHeight+25
          player.velocityY=0
          player.shapeColor="red"
          player.depth=-5
          rocks[i].destroy()
         deaths++
        }
      }

        if(falling==true){
          character.changeImage("j")
      }
    
      }
      else{
          lv8platform1.visible=false
          lv8platform2.visible=false
          lv8platform3.visible=false
          lv8platform4.visible=false
          flag8.visible=false
          player.velocityX=0
      }
}
