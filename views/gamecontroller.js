var mario = new Character
var coin = new Coin

// console.log(mario.score, "snakes")
  var intervalRunner = setInterval(function(){
  if (mario.score < 1){moveandrender(); checkCollision();}
  else {
    moveandrender();
    console.log(intervalRunner)
    clearInterval(intervalRunner)
    setTimeout(printendpage,1500);}
}, 30)


function checkCollision(){
  if (coin){
    if (mario.xPos === coin.xcoinpos && mario.yPos === coin.ycoinpos){
      mario.score += 1
      window.console.log(mario.score)
      coin = null
}}};


document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        mario.jump()
    }
    else if (e.keyCode == '40') {
        mario.moveDown()
    }
    else if (e.keyCode == '37') {
       mario.moveLeft()
    }
    else if (e.keyCode == '39') {
      mario.moveRight()
    }

}
