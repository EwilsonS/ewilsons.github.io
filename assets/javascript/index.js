$(document).ready(function () {

  //third party animation
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

  
  
  // click quote
  $("#next-btn").click(function(){
      var number = Math.floor((Math.random() * quotes.length));
      $("#quote-q").text(quotes[number].q);
      $("#quote-a").text(quotes[number].a)
    })

    // random quote
    $(document).ready(function() {
      var number = Math.floor((Math.random() * quotes.length));
      $("#quote-q").text(quotes[number].q);
      $("#quote-a").text(quotes[number].a)
    })
  
  var quotes = [
    {"q":"Leadership and learning are indispensable to each other", "a": "-JFK"},
    {"q":"There are no secrets to success, It is the result of preparation, hard work, and learning from failure", "a": "-Colin Powell"},
    {"q":"Tell me and I forget. Teach me and I remember. Involve me and I learn", "a": "-Benjamin Franklin"},
    {"q":"Innovation distinguishes between a leader and a follower", "a": "-Steve Jobs"},
    {"q":"It always seems impossible until it's done", "a": "-Nelson Mandela"},
    {"q":"Learn as if you were to live forever", "a": "-Gandhi"},
  ]

})