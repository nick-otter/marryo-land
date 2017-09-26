// accesses then draws canvas
var canvas = document.querySelector('#myCanvas');
var context = canvas.getContext('2d');


// Sets location
var xPos = 30;
var yPos = 370;

// Renders circle and line assets
character();
line();

// As soon as keyboard touched, renders line 33 onwards
function move(e){

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

  canvas.width=canvas.width;
  character();
  line();

}

document.onkeydown = move;
