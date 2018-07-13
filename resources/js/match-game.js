// Generate random value order for cards
function generateCardValues() {
  var cardNumbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
  var randomCardNumbers = [];
  while (randomCardNumbers.length < 16) {
    var randomNumber = Math.floor(Math.random() * cardNumbers.length);
    randomCardNumbers.push(cardNumbers[randomNumber]);
    cardNumbers.splice(randomNumber, 1);
  };
  return randomCardNumbers;
};

// Create cards and values
function renderCards(cardValues) {
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
};

// Add eventListener
function cardListener() {
  var i = 0;
  let cards = game.getElementsByTagName("span");
  //var skipped = [];
  console.log(cards);
  while (i < 16) {
    cards[i].parentNode.addEventListener("click", color);
    //skipped.push(true);
    i++;
  };
  //console.log(skipped.length);
};

// Check if match
function checkMatching() {
  let cards = game.getElementsByClassName("card active");
  if (cards.length === 2) {
    if (cards[0].childNodes[0].innerHTML === cards[1].childNodes[0].innerHTML) {
      var card10 = cards[0];
      var card20 = cards[1];
      card10.className = "card found";
      card20.className = "card found";
    }
    else {
      var card1 = cards[0];
      var card2 = cards[1];
      card1.addEventListener("click", color);
      card1.removeAttribute("class");
      card1.setAttribute("class", "card");
      card2.addEventListener("click", color);
      card2.removeAttribute("class");
      card2.setAttribute("class", "card");
    };
  };
};

//Change card state on click
var color = function() {
  var i = this.childNodes[0].innerHTML;
  var count = 0;
  let cards = game.getElementsByTagName("span");
  switch (i) {
    case "1":
        this.id = "card1";
        this.className = "card active";
      cards[Number(i)].parentElement.removeEventListener("click", color);
      count++;
        break;
    case "2":
        this.id = "card2";
        this.className = "card active";
      cards[Number(i)].parentElement.removeEventListener("click", color);
        break;
    case "3":
        this.id = "card3";
        this.className = "card active";
      cards[Number(i)].parentElement.removeEventListener("click", color);
      count++;
        break;
    case "4":
        this.id = "card4";
        this.className = "card active";
      cards[Number(i)].parentElement.removeEventListener("click", color);
      count++;
        break;
    case "5":
        this.id = "card5";
        this.className = "card active";
      cards[Number(i)].parentElement.removeEventListener("click", color);
      count++;
        break;
    case "6":
        this.id = "card6";
        this.className = "card active";
      cards[Number(i)].parentElement.removeEventListener("click", color);
      count++;
        break;
    case "7":
        this.id = "card7";
        this.className = "card active";
      cards[Number(i)].parentElement.removeEventListener("click", color);
      count++;
        break;
    case "8":
        this.id = "card8";
        this.className = "card active";
      cards[Number(i)].parentElement.removeEventListener("click", color);
      count++;
        break;
  };
  var activeCheck = game.getElementsByClassName("card active");
  console.log(activeCheck[0]);
  console.log(activeCheck[1]);
};

// See if all combinations are found
function gameComplete() {
  let cards = game.getElementsByClassName("card found");
  if (cards.length === 16) {
    var congratulate = document.createElement("h3");
    var congratulateText = document.createTextNode("Congratulations, you found all possible combinations!");
    congratulate.appendChild(congratulateText);
    document.getElementsByClass("col-md-3").appendChild(congratulate);
  };
};

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
