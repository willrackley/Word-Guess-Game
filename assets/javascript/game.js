var startGameText = document.getElementById("start-game-text");
var wordPlaceholder = document.getElementById("word-placeholder");
var currentWordText = document.getElementById("current-word-text");
var guessedLettersText = document.getElementById("guessed-letters-text");
var winsText = document.getElementById("wins-text");
var remainingGuessesText = document.getElementById("remaining-guesses-text");
var gameOverText = document.getElementById("game-over-text");
var refreshText = document.getElementById("refresh-text");

var wins = 0;
var movieChoices = ["jaws","titanic", "goodfellas", "matrix", "space jam"];
var wrongGuessedLetters = [];
var letterPlaceholders = [];
var randMovieSelection = [];
var letterWins = 0;
var remainingGuesses = 10;


//----------FUNCTIONS-----------  

function onPageLoad() {
    //chooses a movie from the movieChoices array at random
     randMovieSelection = movieChoices[Math.floor(Math.random() * movieChoices.length)];
    

    //loop through the random movie array and place underscores where ever there are characters
    for(var i = 0; i < randMovieSelection.length; i++) {

        //for movies that are more than one word, this creates a space betwwn the dashes
        if(randMovieSelection[i] === " ")  {
            letterPlaceholders.push(String.fromCharCode(160));
            letterWins= 1;

        } else {
        letterPlaceholders[i] = "_";
        }
    

    wordPlaceholder.textContent = letterPlaceholders.join(" ");

    //an array to hold all the incorrectly guessed letters
    wrongGuessedLetters = [];

    currentWordText.textContent = "Current Word";
    remainingGuessesText.textContent = "Remaining Guesses: " + remainingGuesses;

    winsText.textContent = "wins: " 

    console.log(randMovieSelection); 
}
}

function rePlay() {
    //sets the array to another random item
    randMovieSelection = movieChoices[Math.floor(Math.random() * movieChoices.length)];

    //resets all variables
    letterWins = 0;
    letterPlaceholders = [];
    
    console.log(randMovieSelection);

    //loop through the random movie array and place underscores where ever there are characters
    for(var i = 0; i < randMovieSelection.length; i++) {
        letterPlaceholders[i] = "_";
        }
    wordPlaceholder.textContent = letterPlaceholders.join(" ");

    //resetting the on screen data
    remainingGuesses = 10;
    currentWordText.textContent = "Current Word";
    guessedLettersText.textContent = wrongGuessedLetters.join(" ");
    remainingGuessesText.textContent = "Remaining Guesses: " + remainingGuesses;
}

// ----------MAIN GAME----------
onPageLoad();


document.onkeyup = function(event) { 
 
    var userGuess = event.key.toLowerCase();
    //makes sure that if an non alphabet key is pressed that it will not have any effect on the game
    if(event.keyCode < 65 || event.keyCode > 90 ){
        userGuess = " ";
        //conteracts the remaining guesses counter
        remainingGuesses++
    }

    console.log(userGuess);
    
    if (randMovieSelection.indexOf(userGuess) > -1) {
        
       for(var j = 0; j < randMovieSelection.length; j++) { 
        
            if(randMovieSelection[j] === userGuess) {
                letterPlaceholders[j] = userGuess;
                wordPlaceholder.textContent = letterPlaceholders.join(" ");
                letterWins++; 
            }
            if(letterWins === randMovieSelection.length){
                wins++
                winsText.textContent = "wins: " + wins;
                 console.log("you won!");
                 rePlay();
            }
        }
    } else {
            wrongGuessedLetters.push(userGuess); 
            guessedLettersText.textContent = wrongGuessedLetters.join(" ");
            remainingGuesses--
            remainingGuessesText.textContent = "Remaining Guesses: " + remainingGuesses;

            }
                if( remainingGuesses === 0) {
                gameOverText.textContent = "Game Over";
                document.onkeyup = null;
                setTimeout("location.reload(true);", 5000);  
                refreshText.textContent = "the game will restart in 5 secs";
                }
            }
        
        
       
           
        
            
        
    
   
    
   

  
    

