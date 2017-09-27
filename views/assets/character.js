function Character (){

// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
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

// move right
 if(e.keyCode==39){
   xPos+=5;
 }
//
 if(e.keyCode==37){
   xPos-=5;
 }
 if(e.keyCode==38){
   yPos-=5;
 }

 if(e.keyCode==40){
   yPos+=5;
 }

 moveandrender();

}
