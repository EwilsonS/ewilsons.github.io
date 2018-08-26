require("dotenv").config();
var request = require("request");
var keys = require("./keys");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var fs = require("fs");

var client = new Twitter({
  consumer_key: keys.twitter.consumer_key,
  consumer_secret: keys.twitter.consumer_secret,
  access_token_key: keys.twitter.access_token_key,
  access_token_secret: keys.twitter.access_token_secret
});

var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});

var command = process.argv[2];
var title = process.argv.slice(3).join(" ");
var result = " ";

function liri() {
  if (command === "my-tweets") {
    client.get("search/tweets", { q: (screen_name = "BarackObama") }, function(
      error,
      tweets,
      response
    ) {
      for (var i = 0; i < 15; i++) {
        console.log("- " + tweets.statuses[i].text);
        console.log("  " + tweets.statuses[i].created_at);
        console.log("=======================================");
        result = tweets.statuses[i].text;
        // console.log(tweets.statuses[0]);
      }
    });
  } else if (command === "spotify-this-song") {
    if (title) {
      spotify
        .search({ type: "track", query: title })
        .then(function(response) {
          console.log("=======================================");
          console.log("Title: " + response.tracks.items[0].name);
          console.log(
            "Artist: " + response.tracks.items[0].album.artists[0].name
          );
          console.log("Album: " + response.tracks.items[0].album.name);
          console.log(
            "Song Preview: " +
              response.tracks.items[0].album.artists[0].external_urls.spotify
          );
          console.log("=======================================");
          result = response.tracks.items[0].name;
          // console.log(response.tracks);
        })
        .catch(function(err) {
          console.log(err);
        });
    } else {
      spotify
        .search({ type: "track", query: "The Sign ace" })
        .then(function(response) {
          console.log("=======================================");
          console.log("Title: " + response.tracks.items[0].name);
          console.log(
            "Artist: " + response.tracks.items[0].album.artists[0].name
          );
          console.log("Album: " + response.tracks.items[0].album.name);
          console.log(
            "Song Preview: " +
              response.tracks.items[0].album.artists[0].external_urls.spotify
          );
          console.log("=======================================");
          // default to "The Sign" by Ace of Base.
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  } else if (command === "movie-this") {
    // var movie = process.argv.slice(3).join(" ")
    if (title) {
      request(
        "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy",
        function(error, response, body) {
          if (!error && response.statusCode === 200) {
            console.log("=======================================");
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
            console.log(
              "Rottten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value
            );
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Cast: " + JSON.parse(body).Actors);
            console.log("=======================================");
            // console.log(JSON.parse(body));
          }
        }
      );
    } else {
      request(
        "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy",
        function(error, response, body) {
          if (!error && response.statusCode === 200) {
            console.log("=======================================");
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
            console.log(
              "Rottten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value
            );
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Cast: " + JSON.parse(body).Actors);
            console.log("=======================================");
          }
        }
      );
    }
  }
  log();
}
if (command === "do-what-it-says") {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    // console.log(data);
    var dataArr = data.split(",");
    // console.log(dataArr);
    command = dataArr[0];
    title = dataArr[1];

    liri();
  });
}

function log() {
  fs.appendFile(
    "log.txt",
    ", " + command + " ---> " + title + " ---> " + result,
    function(err) {
      if (err) {
        return console.log(err);
      }
    }
  );
  console.log("Logged" + result);
}

liri();
