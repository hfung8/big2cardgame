// create a get deck function to output a deck of cards
// getDeck will return an array
class GetDeck {

  constructor(arr, start,end,suit){
  this.arr = [];
  this.start = 0;
  this.end = 52;
  this.suit = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  }

  createSuit() {
  for (var i = this.start; i < this.end; i++) {
    //arr.push(start++);
    var value = (i % 13) + 1;
    if (value === 1) {
      value = "A";
    } else if (value === 11) {
      value = "J";
    } else if (value === 12) {
      value = "Q";
    } else if (value === 13) {
      value = "K";
    }
    let color = (i < 26) ? "red" : "black";
    console.log(color);
    this.arr.push({
    	value: value,
      suit: this.suit[Math.floor(i/13)],
      color: color
    });
  }
  return this.arr;
  }
};

// create a shuffle deck function
// shuffleDeck will return an array
function shuffle(arr) {
  var array = [];
  while (arr.length){
    var randomIndex = Math.floor(Math.random()*arr.length);
    array.push(arr.splice(randomIndex, 1)[0]);
  }
  return array;
}

// run the functions together in a function
class Start {

  getNewStartDeck() {
  let deck = new GetDeck();
  var playDeck = deck.createSuit();
  console.log(playDeck);
  

  var shuffledDeck = shuffle(playDeck);
  console.log(deck);
  var hand = shuffledDeck.slice(0,7);
  console.log(hand);
  return hand; 
  }
}
// an array of objects rather than an array of strings
// each array of objects has a suit and a value assigned to it

// create a function that takes in the array and displays it to the dom for rendering purposes
function render() {
  let deck = new Start();
  var playDeck = deck.getNewStartDeck();
  console.log("hand of cards", playDeck);
  var numSpans = [];
  var suitSpans = [];
  var sectArray = [];
  //  create a for loop to set the value and color attributes to the hand
  var arrayOfHandValue = [];
  var arrayOfSuitValue = [];
  for (var j = 0; j < playDeck.length; j++) {
    var handValue = playDeck[j].value;
    var suitValue = playDeck[j].suit;
    arrayOfSuitValue.push(suitValue);
    arrayOfHandValue.push(handValue);
  };
  //console.log("arrayOfHandValue", arrayOfHandValue);
  // for each numspan set the attribute of data value to arrayOfHandValue
  for ( var a = 0; a < arrayOfHandValue.length; a++) {
    var span = document.createElement("span");
    numSpans.push(span);
    span.innerHTML = arrayOfHandValue[a];
    span.setAttribute("class", "cards");
  };
  // for each span set the color value
  

  // create a separate value for the suit value and set it to an innerHTML for the span tag
  for ( var p = 0; p < arrayOfSuitValue.length; p++) {
    var span = document.createElement("span");
    suitSpans.push(span);
    span.innerHTML = arrayOfSuitValue[p];
  }
  console.log(suitSpans[0]);
  console.log(numSpans)
  // numSpans.forEach(function(item){
  //   console.log(item);
  // })
  // numSpans has the spans with the data-value attribute set to the value of the hand
  for ( var x = 0; x < numSpans.length; x++) {
    var section = document.createElement("section");
    section.append(numSpans[x]);
    sectArray.push(section);
  }
  // sectArray has the array of sections
  // console.log("SectArray", sectArray);
  // append sectArray to a div in the document body
var div= document.createElement("div");
var value = document.createElement("div");
var suit = document.createElement("div");
suit.setAttribute("class", "suitValue");
// div.setAttribute("class", "div-elem");
// divOne = suitSpans[0];
for ( var i = 0; i < 7; i++) {
  var suitAndValue = suitSpans.concat(sectArray);
}
console.log(suitAndValue);

// var suitAndValue = suitSpans.concat(sectArray);
  var firstSuitValue = suitAndValue[0];
  var secondSuitValue = suitAndValue[1];
  var thirdSuitValue = suitAndValue[2];
  var fourthSuitValue = suitAndValue[3];
  var fifthSuitValue = suitAndValue[4];
  var sixthSuitValue = suitAndValue[5];
  var seventhSuitValue = suitAndValue[6];

  var cardSuitOne = document.createElement("div");
  var cardSuitTwo = document.createElement("div");
  var cardSuitThree = document.createElement("div");
  var cardSuitFour = document.createElement("div");
  var cardSuitFive = document.createElement("div");
  var cardSuitSix = document.createElement("div");
  var cardSuitSeven = document.createElement("div");

  cardSuitOne.classList.add("cardSuitOne");
  cardSuitTwo.classList.add("cardSuitTwo");
  cardSuitThree.classList.add("cardSuitThree");
  cardSuitFour.classList.add("cardSuitFour");
  cardSuitFive.classList.add("cardSuitFive");
  cardSuitSix.classList.add("cardSuitSix");
  cardSuitSeven.classList.add("cardSuitSeven");

  cardSuitOne.appendChild(firstSuitValue);
  cardSuitTwo.appendChild(secondSuitValue);
  cardSuitThree.appendChild(thirdSuitValue);
  cardSuitFour.appendChild(fourthSuitValue);
  cardSuitFive.appendChild(fifthSuitValue);
  cardSuitSix.appendChild(sixthSuitValue);
  cardSuitSeven.appendChild(seventhSuitValue);

  suit.appendChild(cardSuitOne);
  suit.appendChild(suitAndValue[7]);
  suit.appendChild(cardSuitTwo);
  suit.appendChild(suitAndValue[8]);
  suit.appendChild(cardSuitThree);
  suit.appendChild(suitAndValue[9]);
  suit.appendChild(cardSuitFour);
  suit.appendChild(suitAndValue[10]);
  suit.appendChild(cardSuitFive);
  suit.appendChild(suitAndValue[11]);
  suit.appendChild(cardSuitSix);
  suit.appendChild(suitAndValue[12]);
  suit.appendChild(cardSuitSeven);
  suit.appendChild(suitAndValue[13]);
  div.appendChild(suit);
  suit.classList.add("suits");
  console.log(suit);
  document.body.appendChild(div);
}
window.onload = function() {
render();
}