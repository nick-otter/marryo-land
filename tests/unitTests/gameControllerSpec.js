var assert = chai.assert
var expect = chai.expect


beforeEach(function() {
  var canvas = document.querySelector('#myCanvas');
  var context = canvas.getContext('2d');
  var coin = new Coin;
  coin.xcoinpos = 20;
  var mario = new Character
});

describe('#collision', function() {
  it('score increases on coin collision', function(){
    var mario = new Character
    setTimeout(checkCollision, 800);
    setTimeout(function() {
    assert.equal(mario.score === 1)}, 1000)
  });

});

// describe('#endpage', function() {
//   it('goes to a background page', function(){
//     var mario = new Character
//     setTimeout(checkCollision, 800);
//     setTimeout(function() {
//     assert.equal(context.background === white)}, 3000)
//   });
//
// });
