var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath(0, 400);
ctx.fillStyle = ("black");
ctx.beginPath();
ctx.arc(50,360,20,0,2*Math.PI);
ctx.fillStyle = "black";
ctx.stroke();

ctx.closePath();
ctx.fill();
