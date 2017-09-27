var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

var myCircle={
  centerX:50,
  centerY:50,
  radius:25,
  fill:'blue'
}

redraw();

document.getElementById('move').addEventListener('click',function(){
  myCircle.centerX+=5;
  redraw();
});

function redraw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.arc( myCircle.centerX, myCircle.centerY, myCircle.radius, 0, Math.PI*2 );
  ctx.closePath();
  ctx.fillStyle=myCircle.fill;
  ctx.fill();
}
