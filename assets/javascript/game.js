var startGameText = document.getElementById("start-game-text");
var wordPlaceholder = document.getElementById("word-placeholder");
var currentWordText = document.getElementById("current-word-text");
var guessedLettersText = document.getElementById("guessed-letters-text");
var winsText = document.getElementById("wins-text");
var remainingGuessesText = document.getElementById("remaining-guesses-text");
var gameOverText = document.getElementById("game-over-text");
var refreshText = document.getElementById("refresh-text");

var wins = 0;
var movieChoices = ["jaws","titanic", "goodfellas"];
var guessedLetters = [];
var letterPlaceholders = [];
var randMovieSelection = movieChoices[Math.floor(Math.random() * movieChoices.length)];
var letterWins = 0;
var remainingGuesses = 10;
var didWin = false;



function onPageLoad() {
    //chooses a movie from the movieChoices array at random
     
    for(var i = 0; i < randMovieSelection.length; i++) {
        //letterPlaceholders.push("_");
        letterPlaceholders[i] = "_";
    }
    wordPlaceholder.textContent = letterPlaceholders.join(" ");

    guessedLetters = [];

    currentWordText.textContent = "Current Word";
    remainingGuessesText.textContent = "Remaining Guesses: " + remainingGuesses;

    winsText.textContent = "wins: " 

console.log(randMovieSelection);
}


function youWon() {
if(letterWins === randMovieSelection.length){
   wins++
   winsText.textContent = "wins: " + wins;
    console.log("you won!");
}
}




onPageLoad();


document.onkeyup = function(event) {
    
    var userGuess = event.key;
    console.log(userGuess);
    
    if(randMovieSelection.indexOf(userGuess) > -1) {
        
       for(var j = 0; j < randMovieSelection.length; j++) { 
        
            if(randMovieSelection[j] === userGuess) {
                letterPlaceholders[j] = userGuess;
                wordPlaceholder.textContent = letterPlaceholders.join(" ");
                letterWins++; 
                youWon();
            }
        }
    } else {
                guessedLetters.push(userGuess); 
                guessedLettersText.textContent = guessedLetters.join(" ");
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
        
       
           
        
            
        
    
    // adds the key event onto the array so they can be listed under guessed letters
    //guessedLetters.push(userGuess);
    

   

   
    //currentWord.textContent = "Current Word";

   
    /*if(randMovieSelection === "jaws") {
         wordPlaceholder.textContent = "_ _ _ _";
    } else if (randMovieSelection === "titanic") {
        wordPlaceholder.textContent = "_ _ _ _ _ _ _";
    } else if (randMovieSelection === "toy story") {
        wordPlaceholder.textContent = "_ _ _ \xa0_ _ _ _ _";
    }*/

/*if(guessedLetters.length === 1) {
    guessedLettersText.textContent = "";
} else {
    
    guessedLetters.splice(0,1,"Guessed Letters: ");
    
}
    
   

   onPageLoad(); 
    

} */