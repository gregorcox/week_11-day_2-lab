const Player = function(name){
  this.name = name;
  this.cards = [];
}

Player.prototype.countCards = function(){
  return this.cards.length;
}

module.exports = Player;
