$(document).ready(function () {

  AOS.init();
  
   
  // Add smooth scrolling to all links
  $(".scroll").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // Global variables
  // =============================
  var ranNum;
  var blueNum;
  var redNum;
  var whiteNum;
  var yellowNum;
  var crystalScore = 0;

  var wins = 0;
  var losses = 0;

  // functions
  // =================================

  // lets generate all of the random numbers needed to begin and store 
  // them in a function so they reset together when a new game begins
  function startGame() {
    ranNum = Math.floor(Math.random() * 121) + 19;
    $("#main-random").html(ranNum);


    blueNum = Math.floor(Math.random() * 12) + 1;
    redNum = Math.floor(Math.random() * 12) + 1;
    whiteNum = Math.floor(Math.random() * 12) + 1;
    yellowNum = Math.floor(Math.random() * 12) + 1;
    console.log(ranNum, blueNum, redNum, whiteNum, yellowNum);

  }
  // this function adds the crystal presses into one score
  function gamePlay() {
    $("#blue-crystal").click(function () {
      $("#score").html(crystalScore += blueNum);
      winLose();
    });
    $("#red-crystal").click(function () {
      $("#score").html(crystalScore += redNum);
      winLose();
    });
    $("#white-crystal").click(function () {
      $("#score").html(crystalScore += whiteNum);
      winLose();
    });
    $("#yellow-crystal").click(function () {
      $("#score").html(crystalScore += yellowNum);
      winLose();
    });
  }
  function winLose() {
    if (crystalScore === ranNum) {
      wins++;
      $("#wins").html(wins);
      $("#score").text(0);
      $("#score").text("WINNER!")
      reset();
    } else if (crystalScore > ranNum) {
      losses++;
      $("#losses").html(losses);
      $("#score").text(0)
      $("#score").text("LOSER!")
      reset();

    }
  }
  function reset() {
    crystalScore = 0;

    ranNum = Math.floor(Math.random() * 121) + 19;
    $("#main-random").html(ranNum);
    blueNum = Math.floor(Math.random() * 12) + 1;
    redNum = Math.floor(Math.random() * 12) + 1;
    whiteNum = Math.floor(Math.random() * 12) + 1;
    yellowNum = Math.floor(Math.random() * 12) + 1;




  }

  // main process
  // ====================================
  startGame();
  gamePlay();

  console.log(wins);

})