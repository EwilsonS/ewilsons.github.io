// global variables
// ===============================================================
var wordBank = ["words", "pages", "spine", "read", "author"];
var holdWord = "";
var lettersInWord = [];
var numSpaces = 0;
var blanksAndSuccesses = [];
var discardedLetters = [];

var wins = 0;
var lose = 0;
var guessesLeft = 9;


// functions
// =================================================================
// generate a random word
function startGame() {
    holdWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersInWord = holdWord.split("");
    numSpaces = lettersInWord.length;

    // reset
    guessesLeft = 9;
    discardedLetters = [];
    blanksAndSuccesses = [];

    // populate blanksAndSuccesses with right number of spaces
    for (var i = 0; i < numSpaces; i++) {
        blanksAndSuccesses.push("_");
    }

    // change html to reflect conditions
    document.getElementById("blank-word").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("win").innerHTML = wins;
    document.getElementById("losses").innerHTML = lose;


    // test
    console.log(holdWord);
    console.log(lettersInWord);
    console.log(numSpaces);
    console.log(blanksAndSuccesses);
}
function checkLetters(letter) {
    //    check if letter is in word
    var isLetterInWord = false;

    for (var i = 0; i < numSpaces; i++) {
        if (holdWord[i] === letter) {
            isletterInWord = true;
        }
    }

    //  check where the letter exists, then populate our blanksAndSuccessess

    if (isLetterInWord) {
        for (var i = 0; i < numSpaces; i++) {
            if (holdWord[i] === letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    else {
        discardedLetters.push(letter);
        guessesLeft--

    }


    // test
    console.log(blanksAndSuccesses);

}
        function roundOver(){
            console.log("wins: " + wins + "|Losses: " + lose + "|guesses left: " + guessesLeft)
        }




// get user's key selection
// compare user guess to wordBank[index] 


// only display discarded letters that dont match wordBank[indicies]
//  


// main process
// ====================================================================
// initiates game
startGame();

document.onkeyup = function (event) {
    var letterGuessed = event.key.toLowerCase();
    checkLetters(letterGuessed);
    roundOver();

    console.log(letterGuessed);
}