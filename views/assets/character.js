
function Character (){
this.jumping = false
this.xPos = 30;
this.yPos = 370;
};

Character.prototype.moveLeft = function(){
   this.xPos-=5;
   console.log(this.xPos)
 };


 Character.prototype.moveRight = function(){
    this.xPos+=5;
    console.log(this.xPos)
  };

  Character.prototype.moveDown = function(){
     this.yPos+=5;
     console.log(this.xPos)
   };

  Character.prototype.jump = function(){
    for(var i = 0; i<10; i++){
      _jumpMotion(i,30,10,false)
      _jumpMotion(9-i,30,9,true);
    }
     console.log(this.yPos)
   };


 function _jumpMotion(amtToMove, stepDist, numOfUpSteps, isDown){
   var delay = 0, upOrDown=1
   if(isDown) { delay = stepDist*numOfUpSteps+70; upOrDown = -1 }
   setTimeout(function(){
     this.yPos -= 4 * amtToMove * upOrDown;
   },(numOfUpSteps - amtToMove) * stepDist + delay)
 };
