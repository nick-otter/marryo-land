// accesses then draws canvas
var canvas = document.querySelector('#myCanvas');
var context = canvas.getContext('2d');

// makes coin


function drawCoin (){
  this.xcoinpos = 200
  this.ycoinpos = 100
  context.beginPath(0, 400);
  context.fillStyle = ("white");
  context.beginPath();
  context.arc(coin.xcoinpos,coin.ycoinpos,20,0,2*Math.PI);
  context.fillStyle = "white";
  context.stroke();
  context.closePath();
  context.fill();
};

// var mario = new Character


function drawCharacter(){
context.beginPath(0, 400);
context.fillStyle = ("black");
context.beginPath();
context.arc(mario.xPos, mario.yPos,20,0,2*Math.PI);
context.fillStyle = "black";
context.stroke();
context.closePath();
context.fill();
};


function line (){

context.beginPath();
context.moveTo(0, 400);
context.lineTo(900, 400);
context.stroke();
};


function moveandrender (){
  canvas.width=canvas.width;
  line();
  if (coin) {drawCoin()}
  drawCharacter();
  document.getElementById("score").innerHTML = mario.score
};
