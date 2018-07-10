// global variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var countDown = 3;


// lets begin with a title page and "start" button
// set up on click event that clears page, displays game questions and starts clock.
function startGame() {
    $("#title").html("<h1>Name That Movie<br><small> By Evan Wilson</small></h1><hr><h3>Answer before time expires!</h3><br><br><br><br>");
    $("#clock").html("   " + "<small> Time Remaining</small>");
    $("#start").click(questions);


}

// write function that makes game and store in a variable
var questions = function questionsPage() {
    $("#main-game").html(gameHtml);
    $("input[type='radio']").click(function () {
        var rightValue = $("input[id='right']:checked").val();
        var wrongValue = $("input[id='wrong']:checked").val();
        if (rightValue) {
            correctAnswers++;
        } else if (wrongValue) {
            incorrectAnswers++;
        } else {
            unanswered++;
        }
    });

    // countdown function
    var setIntervalId = setInterval(function () {
        $("#clock").html(countDown-- + "<small> seconds left</small>");
        if (countDown === -1) {
            clearInterval(setIntervalId);
           
            lastPage();
        }
    }, 1000);

    var lastPage = function results() {
        // write in a results page here
        $("#main-game").html("<img src='assests/images/pulp-fiction.gif'><br>" + "<h1>Correct: " + correctAnswers + "<br>Incorrect: " + incorrectAnswers +
            "<br>Unanswered: " + unanswered + "</h1>" + "<button class= 'btn btn-info' id='restart'>Play Again</button>");

        $("#restart").click(function(){
            $("#main-game").empty();
            

        });

        console.log("this is the results function")
    }
}


startGame();

console.log(countDown);

var gameHtml =

    // Q1
    "<h4>   Say WHAT again!   </h4>" +
    "<input class='q1' id='wrong' type='radio' name='answers1'>" +
    "<label>   Snakes on a Plane   </label>" +

    "<input class='q1' id='wrong' type='radio' name='answers1'>" +
    "<label>   Lakeview Terrace   </label>" +

    "<input class='q1' id='right' type='radio' name='answers1'>" +
    "<label>   Pulp Fiction   </label>" +

    "<input class='q1'  id='wrong' type='radio' name='answers1'>" +
    "<label>  Deep Blue Sea   </label>" +

    "<br><br><br>" +
    // Q2
    "<h4>   And you will know my name is the Lord when I lay my vengeance upon thee!   </h4>" +
    "<input type='radio' id='right' name='answers2'>" +
    "<label>   Pulp Fiction   </label>" +

    "<input type='radio' id='wrong'  name='answers2'>" +
    "<label>   Lakeview Terrace   </label>" +

    "<input type='radio'  id='wrong' name='answers2'>" +
    "<label>   The Hateful Eight   </label>" +

    "<input type='radio'  id='wrong' name='answers2'>" +
    "<label>  Deep Blue Sea   </label>" +

    "<br><br><br>" +
    // Q3
    "<h4>   What Does Marcellus Wallace Look Like?  </h4>" +
    "<input type='radio'  id='wrong' name='answers3'>" +
    "<label>   Black Snake Moan  </label>" +

    "<input type='radio' id='wrong'  name='answers3'>" +
    "<label>   Lakeview Terrace   </label>" +

    "<input type='radio'  id='wrong' name='answers3'>" +
    "<label>   The Hateful Eight   </label>" +

    "<input type='radio' id='right' name='answers3'>" +
    "<label>   Pulp Fiction   </label>";


