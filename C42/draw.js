function draw() {
    background(bg);
    
    spacecraft.addImage(scimg);
    if(!hasDocked){
      spacecraft.x = spacecraft.x + random(-1,1);
      
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2;
    }
      
    if(keyDown("LEFT_ARROW")){
        spacecraft.addImage(scimg3);
      spacecraft.x = spacecraft.x - 1;
    }
      
    if(keyDown("RIGHT_ARROW")){
        spacecraft.addImage(scimg2);
      spacecraft.x = spacecraft.x + 1;
    }
      
    if(keyDown("DOWN_ARROW")){
        spacecraft.addImage(scimg1);
    }
  }
    if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
      hasDocked = true;
      textSize(25);
      fill("white")
      text("Docking Successful!", 200, 300);
    }
    drawSprites();
  }