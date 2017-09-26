

var canvas = document.querySelector('#myCanvas');
var context = canvas.getContext('2d');

var xPos = 5;
var yPos = 300;

context.rect(xPos, yPos, 50, 50);
context.stroke();

function move(e){

// move right
  if(e.keyCode==39){
    xPos+=5;
  }
  //
  if(e.keyCode==37){
    xPos-=5;
    console.log(xPos)
  }
  if(e.keyCode==38){
    yPos-=5;
  }

  if(e.keyCode==40){
    yPos+=5;
  }

  canvas.width=canvas.width;
  context.rect(xPos, yPos, 50, 50);
  context.stroke();

}

document.onkeydown = move;
