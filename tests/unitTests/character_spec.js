beforeEach(function() {
  var character = new Character;
  var canvas = document.querySelector('#myCanvas');
  var context = canvas.getContext('2d');
  var xPos = 30;
  var yPos = 370;
});


describe('Character', function() {

//   describe('#init', function() {
//     it('it draws the character when instantiated', function(){
//       expect(character).to.be.instanceof(Character);
//     });
//   });

  describe('#move', function() {
    it('it moves the character left', function(){
      character.move.keyCode = 39;
      assert.equal(xPos, 35);
    });
  });

});
