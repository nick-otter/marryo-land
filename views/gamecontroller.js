// Move called on key to start game
mario = new Character(30,370)

setInterval(function(){moveandrender;console.log(mario.yPos,mario.xPos)},100)

document.onkeydown = mario.move;
