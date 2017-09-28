var xPos = 30;
var yPos = 370;

function Character (){
this.jumping = false
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");

// Sets location

context.beginPath(0, 400);
context.fillStyle = ("black");
context.beginPath();
context.arc(xPos, yPos,20,0,2*Math.PI);
context.fillStyle = "black";
context.stroke();
context.closePath();
context.fill();

// context.rect(xPos, yPos, 50, 50);
// context.stroke();

};

Character.prototype.move= function (e){

// To find keyCode uncomment below:
// alert(e.keyCode)

this.keyCode = e.keyCode;

if(this.keyCode!==38){


 if(this.keyCode==39){
   xPos+=5;
 }
//
 if(this.keyCode==37){
   xPos-=5;
 }

 if(this.keyCode==40){
     yPos+=5;
   }

   moveandrender();
 };


 if(this.keyCode==38){
   for(var i = 0; i<10; i++){
     _jumpMotion(i,30,10,false)
     _jumpMotion(9-i,30,9,true);
   }
 }

}

var _jumpMotion = function(amtToMove, stepDist, numOfUpSteps, isDown){
  var delay = 0, upOrDown=1
  if(isDown) { delay = stepDist*numOfUpSteps+70; upOrDown = -1 }
  setTimeout(function(){
    yPos -= 4 * amtToMove * upOrDown;
    moveandrender();
  },(numOfUpSteps - amtToMove) * stepDist + delay)
};
