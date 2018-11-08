window.onload = function getStarted() {
// create a get deck function to output a deck of cards
// getDeck will return an array
function getDeck() {
  var arr = [];
  var start = 0;
  var end = 52;
  var suit = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  for (var i = start; i < end; i++) {
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
    arr.push({
    	value: value,
      suit: suit[Math.floor(i/13)]
    });
  }
  return arr;
};

// create a shuffle deck function
// shuffleDeck will return an array
function shuffleDeck(arr) {
  var array = [];
  while (arr.length){
    var randomIndex = Math.floor(Math.random()*arr.length);
    array.push(arr.splice(randomIndex, 1)[0]);
  }
  return array;
}

// run the functions together in a function 
function start() {
  let deck = getDeck();
  deck = shuffleDeck(deck);
//console.log(deck);
  let hand = deck.slice(0,7);
  // console.log(hand);
}
// an array of objects rather than an array of strings
// each array of objects has a suit and a value assigned to it

// create a function that takes in the array and displays it to the dom for rendering purposes
function render() {
  var deck = getDeck();
  deck = shuffleDeck(deck);
  var hand = deck.slice(0,7);
  //console.log("hand of cards", hand);
  var numSpans = [];
  var sectArray = [];
  //  create a for loop to set the value and color attributes to the hand
  var arrayOfHandValue = [];
  for (var j = 0; j < hand.length; j++) {
    var handValue = hand[j].value;
    arrayOfHandValue.push(handValue);
  };
  //console.log("arrayOfHandValue", arrayOfHandValue);
  // for each numspan set the attribute of data value to arrayOfHandValue
  for ( var a = 0; a < arrayOfHandValue.length; a++) {
    var span = document.createElement("span");
    numSpans.push(span);
    span.setAttribute("data-value", arrayOfHandValue[a]);
    span.setAttribute("class", "cards");
  };
  // console.log(numSpans)
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
  var div = document.createElement("div");
    div.appendChild(sectArray[0]);
    div.appendChild(sectArray[1]);
    div.appendChild(sectArray[2]);
    div.appendChild(sectArray[3]);
    div.appendChild(sectArray[4]);
    div.appendChild(sectArray[5]);
    div.appendChild(sectArray[6]);
  document.body.appendChild(div);
}

start();
render();
}