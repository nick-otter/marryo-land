var assert = chai.assert
var expect = chai.expect


beforeEach(function() {
  var character = new Character;
  var canvas = document.querySelector('#myCanvas');
  var context = canvas.getContext('2d');
  var xPos = 30;
  var yPos = 370;
});


describe('Character', function() {

  describe('#init', function() {
    it('xPos position on canvas is defined', function(){
      var character =  new Character;
      assert.equal(character.xPos, 30);
    });
    it('yPos position on canvas is defined', function(){
      var character =  new Character;
      assert.equal(character.yPos, 370);
    });
  });

  describe('#moveLeft', function() {
    it('it moves the character to the left', function(){
      var character =  new Character
      character.moveLeft();
      assert.equal(character.xPos, 25);
    });
  });

  describe('#moveRight', function() {
    it('it moves the character to the right', function(){
      var character =  new Character
      character.moveRight();
      assert.equal(character.xPos, 35);
    });
  });

  describe('#moveDown', function() {
    it('it moves the character down', function(){
      var character =  new Character
      character.moveDown();
      assert.equal(character.yPos, 375);
    });
  });

  describe('#jump', function() {
    it('it makes the character jump', function(){
      var character =  new Character
      character.jump();
      setTimeout( function() {
      assert.equal(character.jumpTracker.length, 20)}, 1000)
    });
  });

  describe('#collision', function() {
    it('it makes the character jump', function(){
      var character =  new Character
      character.jump();
      assert.equal(character.yPos, 370);
    });
  });

});
