require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];

var input = process.argv.slice(3).join(" ");

function switchCase (){
switch (command) {
    case "concert-this":        
        //console.log(input);
        concertThis();
        break;
    case "spotify-this-song":
        //console.log('spotify song');
        if(input){
          spotifyFunction(input);
        }
        else{
          input = "the sign, ace of base"
          spotifyFunction(input);
        }
        break;
    case "movie-this":
        //console.log('movie-this');
        if(input){
          movieThis(input);
        }
        else{
          input = "Mr.-Nobody"
          movieThis(input);
        }
        break;
    case "do-what-it-says":
        //console.log('do what it says');
        doWhatItSays();
        break;
    default:
        console.log('input a true command');
};
};

function concertThis(){
    axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
  .then(function (response) {
    // handle success
    console.log(input);
    for (var i=0; i<response.data.length; ++i){
        var data = response.data[i];
        var venue = data.venue;
        console.log("Venue: " + venue.name);
        console.log("Venue location: " + venue.city + ", " + venue.region);
        console.log("Event date: " + moment(data.datetime).format("MM/DD/YYYY"));
    }
  })
};

function spotifyFunction(){
    spotify.search({ type: 'track', query: input, limit: 1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

    var data = data.tracks.items;
    // console.log(data[0].artists[0].name);
    for (var i=0; i<data.length; i++){
      console.log("Arist Name: " + data[i].artists[i].name); 
      console.log("Song Name: " + data[i].name); 
      console.log("Preview URL: " + data[i].preview_url); 
      console.log("Album Name: " + data[i].album.name); 
      console.log("-------------------------------");
    }
  });
};

function movieThis(){
  axios.get('http://omdbapi.com/?t=' + input +'&plot=short&apikey=trilogy').then(function(response){

    // console.log(response.data);
    // console.log(response.data.Title);
    var data = response.data;
    // console.log(data);
    console.log("Title: " + data.Title);
    console.log("Release Year: " + data.Year);
    console.log("IMDB Rating: " + data.imdbRating);
    console.log("Rotten Tomatoes Rating: " + data.Ratings[1].Value);
    console.log("Country: " + data.Country);
    console.log("Language: " + data.Language)
    console.log("Plot: " + data.Plot);
    console.log("Actors: " + data.Actors);
    console.log("--------------------------------------");
  });
};

function doWhatItSays (){
  fs.readFile("random.txt", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }
    var dataArr = data.split(",");
    //console.log(dataArr);
    command = dataArr[0];
    input = dataArr[1];
    switchCase();
  });
};

switchCase();