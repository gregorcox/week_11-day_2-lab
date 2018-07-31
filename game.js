const Game = function(name){
  this.name = name;
  this.players = [];
  this.deck = []
}

Game.prototype.addPlayer = function(playerName){
  this.players.push(playerName);
};

Game.prototype.deal = function(player1, player2){
  const firstHalf = this.deck.slice(0, this.deck.length/2);
  const secondHalf = this.deck.slice(this.deck.length/2, this.deck.length - 1);
  // adding first half to player 1
  for (card of firstHalf) {
    player1.cards.push(card);
  }
  for (card of secondHalf) {
    player2.cards.push(card);
  }
}

Game.prototype.chooseCard = function(player){
  return this.players;
}

Game.prototype.addCardToDeck = function(card){
  this.deck.push(card);
}

Game.prototype.countCards = function(){
  return this.deck.length;
}

module.exports = Game;
