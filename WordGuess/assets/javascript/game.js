var bookAnswers = ["words", "pages", "spine", "read", "author"];
var score = 0;
// Load the page and display the random unsolved word " _ _ _ _ _"

window.onload = function () {
    var gameOne = bookAnswers[Math.floor(Math.random() * bookAnswers.length)];
    console.log(gameOne);
    document.getElementById("blank-word").innerHTML = gameOne;      // generates a random word that prints to #blank-word and console

    var numSpaces = gameOne.length;
    var hidden = gameOne.replace(gameOne, numSpaces);
    console.log(hidden);
    document.getElementById("blank-word").innerHTML = hidden;  //converts word to a number

    function convertToBlamks(word) {
        for (var i = 0; i < word.length; i++) {
            var blank = word.replace(word, (" _ ").repeat(hidden));  //replace the converted number with _
            document.getElementById("blank-word").innerHTML = blank;
        }



        console.log(blank);
    }
    convertToBlamks(gameOne);

    document.onkeyup = function (event) {
        var userKey = event.key;

        if ((userKey === gameOne.charAt(gameOne.length - 1)) ||
            (userKey === gameOne.charAt(gameOne.length - 2)) ||
            (userKey === gameOne.charAt(gameOne.length - 3)) ||
            (userKey === gameOne.charAt(gameOne.length - 4)) ||
            (userKey === gameOne.charAt(gameOne.length - 5)) ||
            (userKey === gameOne.charAt(gameOne.length - 6)) ||
            (userKey === gameOne.charAt(gameOne.length - 7)) ||
            (userKey === gameOne.charAt(gameOne.length - 8))) {
            for (var i = 0; i < gameOne.length; i++) {
                var appear = gameOne.replace(gameOne.charAt(gameOne[i]), userKey);
                document.getElementById("blank-word").innerHTML = appear;
            }
            console.log("it works");
            score++;


            // document.getElementById("blank-word").innerHTML = userKey.charAt(blank[gameOne.length - 1]);
        } else {
            // userKey = document.getElementById("discard").innerHTML;
            var element = document.getElementById("discard")
            element.textContent += userKey;

        }

        var html =
                    "<p> " + score + "</p>";
                    
                    

                document.querySelector("#score").innerHTML = html;

    }
    // document.onkeyup = function (event) {
    //     var userKey = event.key;
    //     for (var i = 0; i < gameOne.length; i++){
    //         if (userKey === gameOne[i]){

    //         }
    //     }

    // }

};