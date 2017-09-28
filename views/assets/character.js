 xPos = 30;
yPos = 370;
console.log("this is the 1st xpos")
console.log(xPos)

function Character (){
this.jumping = false

  context.beginPath(0, 400);
   context.fillStyle = ("black");
context.beginPath();
context.arc(xPos, yPos,20,0,2*Math.PI);
console.log("this is the 1st xpos")
console.log(xPos)

context.fillStyle = "black";
context.stroke();
context.closePath();
context.fill();
};

Character.prototype.collision = function () {
   console.log("collisio")
  console.log(xPos)
  console.log(xcoinpos)
  console.log(coin.xcoinpos)
if (xpos === coin.xcoinpos){
alert("collision")
}
};

Character.prototype.move= function (e){

this.keyCode = e.keyCode;
if(this.keyCode!==38){

 if(this.keyCode==39){
   xPos+=5;
 }

 if(this.keyCode==37){
   xPos-=5;
 }
 if(this.keyCode==40){
     yPos+=5;
   }
   createinitalobjects();
 };

 if(this.keyCode==38){
   for(var i = 0; i<10; i++){
     _jumpMotion(i,30,10,false)
     _jumpMotion(9-i,30,9,true);
   }
 }
 createinitalobjects();
}


var _jumpMotion = function(amtToMove, stepDist, numOfUpSteps, isDown){
  var delay = 0, upOrDown=1
  if(isDown) { delay = stepDist*numOfUpSteps+70; upOrDown = -1 }
  setTimeout(function(){
    yPos -= 4 * amtToMove * upOrDown;
    createinitalobjects();
    collision();
  },(numOfUpSteps - amtToMove) * stepDist + delay)
};
