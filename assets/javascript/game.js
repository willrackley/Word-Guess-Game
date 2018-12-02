var startGameText = document.getElementById("start-game-text");
var wordPlaceholder = document.getElementById("word-placeholder");
var currentWord = document.getElementById("current-word-text");
var guessedLettersText = document.getElementById("guessed-letters-text");

var wins = 0;
var movieChoices = ["jaws","titanic", "goodfellas"];
var guessedLetters = [];
var letterPlaceholders = [];
var randMovieSelection = movieChoices[Math.floor(Math.random() * movieChoices.length)];



function onPageLoad() {
    //chooses a movie from the movieChoices array at random
     
    for(var i = 0; i < randMovieSelection.length; i++) {
        //letterPlaceholders.push("_");
        letterPlaceholders[i] = "_";
    }
    wordPlaceholder.textContent = letterPlaceholders.join(" ");

    guessedLetters = [];

    currentWord.textContent = "Current Word";
console.log(randMovieSelection);
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
            }}}
             else {
                guessedLetters.push(userGuess); 
                console.log("skipping");
                guessedLettersText.textContent = guessedLetters.join(" ");
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