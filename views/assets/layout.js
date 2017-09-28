// accesses then draws canvas
var canvas = document.querySelector('#myCanvas');
var context = canvas.getContext('2d');
// makes coin


function coin (){
  this.xcoinpos = 200
  this.ycoinpos = 100
  context.beginPath(0, 400);
  context.fillStyle = ("white");
  context.beginPath();
  context.arc(xcoinpos,ycoinpos,20,0,2*Math.PI);
  console.log(xcoinpos)
  context.fillStyle = "white";
  context.stroke();
  context.closePath();
  context.fill();
};

var mario = new Character
coin();
line();
document.onkeydown = mario.move;

// function collision () {
//    console.log("collisio")
//   console.log(xPos)
//   console.log(xcoinpos)
//   console.log(coin.xcoinpos)
// if (xpos === coin.xcoinpos){
// alert("collision")
// }
// };


function createinitalobjects (){
    canvas.width=canvas.width;
    var mario = new Character;
    coin();
    line();
};


// && (ypos === coin.ycoinpos)
