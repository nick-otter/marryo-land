var xPos = 30;
var yPos = 370;

function Character (){

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

// move right
console.log(e);

this.keyCode = e.keyCode;

 if(this.keyCode==39){
   xPos+=5;
 }
//
 if(this.keyCode==37){
   xPos-=5;
 }
 if(this.keyCode==38){
   yPos-=5;
 }

 if(this.keyCode==40){
   yPos+=5;
 }

 moveandrender();

};
