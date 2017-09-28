// accesses then draws canvas
var canvas = document.querySelector('#myCanvas');
var context = canvas.getContext('2d');

// makes coin

function coin (){

  context.beginPath(0, 400);
  context.fillStyle = ("white");
  context.beginPath();
  context.arc(200,100,20,0,2*Math.PI);
  context.fillStyle = "white";
  context.stroke();
  context.closePath();
  context.fill();

};

coin();
// Renders circle and line assets
var mario = new Character
// console.log(coin)
line();

function moveandrender (){

  canvas.width=canvas.width;
  var mario = new Character;
  coin();
  line();
};
