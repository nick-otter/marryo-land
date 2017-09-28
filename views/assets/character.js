

function Character (){
this.jumping = false
this.xPos = 30;
this.yPos = 370;
this.score = 0;
};

Character.prototype.moveLeft = function(){
   this.xPos-=5;
  //  console.log(this)
  //  console.log(coin.xcoinpos)
 };


 Character.prototype.moveRight = function(){
    this.xPos+=5;
    // console.log(this)
  };

  Character.prototype.moveDown = function(){
     this.yPos+=5;

   };

  Character.prototype.jump = function(){
    for(var i = 0; i<10; i++){
      this._jumpMotion(i,30,10,false)
      this._jumpMotion(9-i,30,9,true);
    }

   };

   Character.prototype.collision = function () {
    if (xpos === coin.xcoinpos){
     alert("collision")
      }
 };


 Character.prototype._jumpMotion = function (amtToMove, stepDist, numOfUpSteps, isDown){
   var delay = 0, upOrDown=1, self = this;
   if(isDown) { delay = stepDist*numOfUpSteps+70; upOrDown = -1 }
   setTimeout(function(){
    //  console.log(this)
     self.yPos -= 4 * amtToMove * upOrDown;
       if (self.xPos === coin.xcoinpos && self.yPos === coin.ycoinpos){
         self.score += 1
         coin = null;
         window.console.log(self.score)
       };
   },(numOfUpSteps - amtToMove) * stepDist + delay)
 };
