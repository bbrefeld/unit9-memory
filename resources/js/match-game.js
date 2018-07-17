
// Reset button
function reset() {
  var i = 0;
  var x = 0;
  let cards = game.getElementsByClassName("card");
  let cardContainers = game.getElementsByClassName("col-xs-3");
  var cardArray = [];
  var mainContainer = document.getElementsByClassName("col-md-9");
  while (x < 16) {
    cardArray.push(cards[x]);
    x++;
  };
  while (i < 16) {
    cardArray[i].removeEventListener("click", color);
    while (cardArray[i].firstChild) {
      cardArray[i].removeChild(cardArray[i].firstChild);
    };
    if (cardArray.length != 0) {
      cardArray[i].parentNode.removeChild(mainContainer.childNodes[cardArray.length]);
    };
    i++;
  };
};

var cardGame = {

  generateCardValues : function() {
    var cardNumbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
    var randomCardNumbers = [];
    while (randomCardNumbers.length < 16) {
      var randomNumber = Math.floor(Math.random() * cardNumbers.length);
      randomCardNumbers.push(cardNumbers[randomNumber]);
      cardNumbers.splice(randomNumber, 1);
    };
    return randomCardNumbers;
  },

  renderCards        : function(cardValues) {
    var i = 0;
    while (i < 16) {
      var cardContainer = document.createElement("div");
      cardContainer.className = "col-xs-3";
      var cardCreate = document.createElement("div");
      cardCreate.className = "card";
      onclick = "colorCards(this)";
      var spanCreate = document.createElement("span");
      var number = document.createTextNode(cardValues[i]);
      spanCreate.appendChild(number);
      cardCreate.appendChild(spanCreate);
      cardContainer.appendChild(cardCreate);
      document.getElementById("game").appendChild(cardContainer);
      i++;
    };
    if (i === 16) {
      this.cardListener();
    };
  },

  cardListener       : function() {
    var i = 0;
    let cardsx = game.getElementsByTagName("span");
    while (i < 16) {
      cardsx[i].parentNode.addEventListener("click", cardGame.color);
      i++;
    };
  },

  checkMatching      : function() {
    let cards = document.getElementsByClassName("card active");
    if (cards.length === 2) {
      if (cards[0].childNodes[0].innerHTML === cards[1].childNodes[0].innerHTML) {
        var card10 = this.cards[0];
        var card20 = this.cards[1];
        card10.className = "card found";
        card20.className = "card found";
      }
      else {
        var card1 = this.cards[0];
        var card2 = this.cards[1];
        card1.addEventListener("click", color);
        card1.removeAttribute("class");
        card1.setAttribute("class", "card");
        card2.addEventListener("click", color);
        card2.removeAttribute("class");
        card2.setAttribute("class", "card");
      };
      this.gameComplete();
    };
  },

  color             : function() {
    var i = this.childNodes[0].innerHTML;
    this.id = "card" + i;
    this.className = "card active";
    this.removeEventListener("click", cardGame.color);
    cardGame.checkMatching();
  },

  gameComplete      : function() {
    let cards = game.getElementsByClassName("card found");
    if (this.cards.length === 16) {
      var congratulate = document.createElement("h3");
      var congratulateText = document.createTextNode("Congratulations, you found all possible combinations!");
      congratulate.appendChild(congratulateText);
      var test = document.getElementsByClassName("col-md-3");
    };
  }
};

/* // flow of functions
document.addEventListener("DOMContentLoaded", function() {
  cardGame.renderCards(cardGame.generateCardValues());
  if (cardGame.renderCards === "x") {
    cardGame.cardListener();
    if (cardGame.cardListener === "x") {
      if (cardGame.cards.length === 2) {
        cardGame.checkMatching();
      } else if (cardGame.cards.length === 16) {
        cardGame.gameComplete();
      };
    };
  };
}); */

// flow of functions
document.addEventListener("DOMContentLoaded", function() {
  cardGame.renderCards(cardGame.generateCardValues());
});
