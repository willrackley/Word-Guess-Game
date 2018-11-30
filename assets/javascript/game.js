var startGameText = document.getElementById("start-game-text");
var wordPlaceholder = document.getElementById("word-placeholder");
var currentWord = document.getElementById("current-word-text");
var guessedLettersText = document.getElementById("guessed-letters-text");

var wins = 0;
var movieChoices = ["jaws","titanic", "toy story"];
var guessedLetters = [];



document.onkeyup = function(event) {
    
    var userGuess = event.key;
    
    
    // adds the key event onto the array so they can be listed under guessed letters
    guessedLetters.push(userGuess);
    

    //chooses a movie from the movieChoices array at random
    var randMovieSelection = movieChoices[Math.floor(Math.random() * movieChoices.length)];

   
    currentWord.textContent = "Current Word";

    if(randMovieSelection === "jaws") {
         wordPlaceholder.textContent = "_ _ _ _";
    } else if (randMovieSelection === "titanic") {
        wordPlaceholder.textContent = "_ _ _ _ _ _ _";
    } else if (randMovieSelection === "toy story") {
        wordPlaceholder.textContent = "_ _ _ \xa0_ _ _ _ _";
    }

if(guessedLetters.length === 1) {
    guessedLettersText.textContent = "";
} else {
    
    guessedLetters.splice(0,1,"Guessed Letters: ");
    guessedLettersText.textContent = guessedLetters.join(' ');
}
    
    

    
    

}