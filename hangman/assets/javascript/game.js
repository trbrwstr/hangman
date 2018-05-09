// Word Array 
var wordsList = ["Spirited Away", "Kikis Delivery Service", "My Neighbor Totoro", "Princess Mononoke", "Ponyo", "Grave of the Fireflies"];
var word = "";
var lettersInWord = [];
var blank = 0;
var blankAndRight = [];
var wrong = [];

// Counters
var winCount = 0;
var lossCount = 0;
var guesses = 10;

// Functions

function startGame() {
    guesses = 10;

chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
lettersInWord = word.split("");
blank = lettersInWord.length;

console.log(chosenWord);

blankAndRight = [];

wrong = [];

for (var i = 0; i < blank; i++) {
    blankAndRight.push("");
};

console.log(blankAndRight);

document.getElementById("guesses-left").innerHTML = guesses;
document.getElementById("word-blanks").innerHTML = blankAndRight.join("");
document.getElementById("wrong").innerHTML = wrong.join("");
};

function checkLetters(letter) {

    var letterInWord = false;

    for (var i = 0; i < blanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (var j = 0; j < blanks; j++) {
            if (chosenWord[j] = letter) {
                blankAndRight[j] = letter;
            }
        }
        console.log(blankAndRight);
    }
    else {
        wrong.push(letter);
        guesses--;
    }
};

function roundComplete() {
    console.log("Wins: " + winCount + " / Losses: " + lossCount + " / Guesses: " + guesses);

    document.getElementById("guesses-left").innerHTML = guesses;
    document.getElementById("word-blanks").innerHTML = blanksAndRight.join("");
    document.getElementById("wrong").innerHTML = wrong.join("");


    if (lettersInChosenWord.toString() === blanksAndRight.toString()) {
    
    winCounter++;
    alert("You win!");

    document.getElementById("winCount").innerHTML = winCounter;
    startGame();
  } else if (guesses === 0) {

    lossCounter++;

    alert("You lose");

    document.getElementById("lossCount").innerHTML = lossCounter;
    startGame();
  }
};

startGame();

document.onkeyup = function(event) {

  var letterGuessed = String.fromCharCode(event.which).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();
};
