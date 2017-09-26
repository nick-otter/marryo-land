var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = ("black");
ctx.beginPath();
ctx.arc(50,360,20,0,2*Math.PI);
ctx.closePath();
ctx.fill();
