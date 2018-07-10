var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
var wins = 0;
var losses = 0;
var attemptsLeft = 9;
var wrongLetter;




document.onkeyup = function (event) {
    var userKey = event.key;

    console.log(userKey + computerGuess);
    attemptsLeft--;


    if (userKey === computerGuess) {

        wins++;

    } else {
        losses++;

    }
    var element = document.getElementById("discarded")
    element.textContent += userKey;

    var html =
        "<p>You chose: " + userKey + "</p>" +
        "<p>The Computer chose: " + computerGuess + "</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Attempts Left: " + attemptsLeft + "</p>" +
        "<p>Guesses so far : " + userKey + "</p>";


    document.querySelector("#game-play").innerHTML = html;



};