// accesses then draws canvas
var canvas = document.querySelector('#myCanvas');
var context = canvas.getContext('2d');

// makes coin

var coin = function (){
  context.beginPath(0, 400);
  context.fillStyle = ("white");
  context.beginPath();
  context.arc(200,100,20,0,2*Math.PI);
  context.fillStyle = "white";
  context.stroke();
  context.closePath();
  context.fill();
};

var line = function (){
  context.beginPath();
  context.moveTo(0, 400);
  context.lineTo(900, 400);
  context.stroke();
};
var drawChar = function(){
  context.beginPath(0, 400);
  context.fillStyle = ("black");
  context.beginPath();
  context.arc(mario.xPos, mario.yPos,20,0,2*Math.PI);
  context.fillStyle = "black";
  context.stroke();
  context.closePath();
  context.fill();
}

function moveandrender (){
  canvas.width=canvas.width;
  line();
  coin();
  drawChar();
};
