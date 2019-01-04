//Variables for Game text
var startGameText = document.getElementById("start-game-text");
var wordPlaceholder = document.getElementById("word-placeholder");
var currentWordText = document.getElementById("current-word-text");
var guessedLettersText = document.getElementById("guessed-letters-text");
var guessedLettersHeader = document.getElementById("guessed-letters-header");
var winsText = document.getElementById("wins-text");
var remainingGuessesText = document.getElementById("remaining-guesses-text");
var gameOverText = document.getElementById("game-over-text");
var refreshText = document.getElementById("refresh-text");
var gameHintsText = document.getElementById("game-hints-text");
var lossesText = document.getElementById("losses-text");

//Global Variables
var wins = 0;
var losses = 0;
var movieChoices = ["jaws", "titanic", "goodfellas", "matrix", "space jam", "the lion king", "fight club", "forrest gump", "braveheart", "end"];
var movieHints = ["Steven Spielberg's breakout hit movie featuring a very large mechanical shark", "This was a breakout movie for a young Leo Dicaprio and Kate Winslet", "Hit Scorsese movie staring Robert Dinor, Ray Liota, and Joe Pesci","This movie broke the mold with inovative CGI", "Hit movie storing a NBA star and some famous Looney Tunes", "This Disney animated hit featured many different african animals", "This movie featured a cameo by a rock star by the name of Meatloaf", "This movie featured a famous line comparing life and chocolates", "This was an epic war film directed by Mel Gibson","GAME OVER"];
var choicesCtr = 0;
var currentChoice = [];
var wrongGuessedLetters = [];
var letterPlaceholders = [];
var remainingGuesses = 10;
var winSound = new Audio("assets/sounds/winChime.mp3");


//----------FUNCTIONS-----------  

//function for when the page is first loaded
function onPageLoad() {
    //chooses a movie from the movieChoices array
     currentChoice = movieChoices[choicesCtr];
     hintDisplay();

    //loop through the  movie choices array and place underscores where ever there are characters
    for(var i = 0; i < currentChoice.length; i++) {
        //for movies that are more than one word, this creates a space betwwn the dashes
        if(currentChoice[i] === " ")  {
            letterPlaceholders.push(String.fromCharCode(160));
        } else {
        letterPlaceholders[i] = "_";
        }
    wordPlaceholder.textContent = letterPlaceholders.join(" ");

    //an array to hold all the incorrectly guessed letters
    wrongGuessedLetters = [];

    //currentWordText.textContent = "Current Word";
    remainingGuessesText.textContent = "Remaining Guesses: " + remainingGuesses;

    winsText.textContent = "wins: ";
    lossesText.textContent = "losses: " ;
    }
}

//function to display the hint for the word to be guessed
function hintDisplay(){
    gameHintsText.textContent = movieHints[choicesCtr];

    
      
}
   
//function to replay the game after the intial page load
function rePlay() {
    //hintDisplay();
    //sets the array to the next item in the movie array
    choicesCtr++;
    currentChoice = movieChoices[choicesCtr];
    //resets all variables
    letterPlaceholders = [];

    hintDisplay();

    //loop through the random movie array and place underscores where ever there are characters
    for(var i = 0; i < currentChoice.length; i++) {

       //for movies that are more than one word, this creates a space betwwn the dashes
       if(currentChoice[i] === " ")  {
        letterPlaceholders.push(String.fromCharCode(160));
        } else {
        letterPlaceholders[i] = "_";
        }

    wordPlaceholder.textContent = letterPlaceholders.join(" ");

    //resetting the on screen data
    remainingGuesses = 10;
    wrongGuessedLetters = [];
    currentWordText.textContent = "Current Word";
    guessedLettersText.textContent = wrongGuessedLetters.join(" ");
    remainingGuessesText.textContent = "Remaining Guesses: " + remainingGuesses;
    }
}

// ----------MAIN GAME----------
onPageLoad();

document.onkeyup = function(event) { 

    startGameText.hidden = true;
    var userGuess = event.key.toLowerCase();

    //makes sure that if an non alphabet key is pressed that it will not have any effect on the game
    if(event.keyCode < 65 || event.keyCode > 90 ){
        userGuess = " ";
        //conteracts the remaining guesses counter
        remainingGuesses++
    }
    
    if (currentChoice.indexOf(userGuess) > -1) {
        
       for(var j = 0; j < currentChoice.length; j++) { 
        
            if(currentChoice[j] === userGuess) {
                letterPlaceholders[j] = userGuess;
                wordPlaceholder.textContent = letterPlaceholders.join(" ");
            }
            //once all the letters have been guessed correctly then you won the word and move to the next word
            if(letterPlaceholders.indexOf("_") < 0 ) {
                wins++
                winsText.textContent = "wins: " + wins;
                winSound.play();
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
        losses++;
        lossesText.textContent = "losses: " + losses;
        rePlay();
    
    }
    if(movieChoices[choicesCtr] === "end"){
        console.log("end");
        gameOverText.textContent = "Game Over"
        refreshText.textContent = "the game will restart in 5 secs";
        document.onkeyup = null;
        setTimeout("location.reload(true);", 5000);
        currentWordText.hidden = true;
        wordPlaceholder.hidden = true;
        guessedLettersText.hidden = true;
        guessedLettersHeader.hidden = true;
        remainingGuessesText.hidden = true;
    }
            
   
}




        
        
       
           
        
            
        
    
   
    
   

  
    

