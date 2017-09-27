// accesses then draws canvas
var canvas = document.querySelector('#myCanvas');
var context = canvas.getContext('2d');

// Sets location
var xPos = 30;
var yPos = 370;

// Renders circle and line assets
character();
line();

function moveandrender (){

  canvas.width=canvas.width;
  character();
  line();

};
