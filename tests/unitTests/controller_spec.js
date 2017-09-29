var assert = chai.assert
var expect = chai.expect



function marioDouble(){}
marioDouble.prototype = {
  xPos: 30,
  yPos: 35
};

function coinDouble(){}
coinDouble.prototype ={
  xPos: 35,
  yPos: 35
};


beforeEach(function() {
  var canvas = document.querySelector('#myCanvas');
  var context = canvas.getContext('2d');
});


describe('Gamecontroller', function() {

  describe('#checkCollision', function() {
    it('removes coin if collides', function(){
      var coin = coinDouble
      var mario = marioDouble
      checkCollision()
      assert.equal(coin, null)
    });
  });
});
