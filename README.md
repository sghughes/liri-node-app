# liri-node-app

LIRI is a command line node app that will take in parameters and provide data on movies, songs, and concerts. 

The app uses a switch case function to take in four different commands; concert-this, spotify-this-song, movie-this, and do-what-it-says. 

Before you begin: 
To use LIRI, the following Node packages must be installed: axios, fs, node-spotify-api, moment, DotEnv. 
Additionally, keys for the Spotify, Bands in Town, and OMDB APIs will be required.

To run the app, input any of the four commands as argv[2].They will do the following:

-concert-this: This command will provide venue name, venue location, and date of event  for concerts of any artist entered as argv[3]. The artist must currently be touring. 

-spotify-this-song: This command will provide song name, artist, a preview link of the song from Spotify, and album name for any song enetered as argv[3]. The song will default to "The Sign" by Ace of Base if no song is entered. 

-movie-this: This command will output the following information to the terminal/bash window for any movie entered as argv[3]:
   * Title of the movie.   
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
The movie will default to Mr. Nobody if no movie is entered. 

-do-what-it-says: This command will take the text inside of random.txt and then use it to call a LIRI command. 
