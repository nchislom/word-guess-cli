var Word = require("./Word");
var inquirer = require("inquirer");
var colors = require("colors/safe");

// Random word bank setup
const wordBank = ["sasquatch", "nessie", "chupacabra", "bigfoot", "vampire", "unicorn",
"aliens", "batboy", "poltergeist", "the jersey devil", "yeti", "kraken", "lizard man",
"mothman", "slenderman", "quetzalcoatl", "illuminati", "ghost", "greys",
"the bermuda triangle"];

// Initial game stat setup
var guessesLeft = 10;
var lettersGuessed = [];
var gameOver = false;

// Begin random roll from word bank
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

// Create new random word object
var word = new Word(randomWord);

// Start of game/guess loop
var nextGuess = function(){
    if(gameOver === false){
        console.log("\n" + word.showWord() + "\n");    
        
        // Begin user input
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: "Choose a letter:"
            }
        ]).then(function(userInput){

            // Push user input into array of guessed letters
            if(!lettersGuessed.includes(userInput.letter)){
                lettersGuessed.push(userInput.letter);

                // Snapshot of word-state pre-guess
                var wordBeforeGuess = word.showWord().replace(/,/g, "");
                
                // Apply guessed letter to word object
                word.guessLetter(userInput.letter);
                
                // Snapshot or word-state post-guess
                var wordAfterGuess = word.showWord().replace(/,/g, "");
    
                // Compare before and after word-states
                if(wordBeforeGuess === wordAfterGuess){
                    console.log(colors.red("\nINCORRECT"));
                    guessesLeft--;
                    console.log("Guesses Left: " + guessesLeft);
                } else {
                    console.log(colors.green("\nCORRECT!"));
                    if(!word.showWord().includes("_")){
                        gameOver = true;
                    }
                }
    
                // LOST scenario
                if(guessesLeft < 1 && word.showWord().includes("_")){
                    console.log(colors.yellow("\nGame Over\n"));
                    console.log(colors.yellow("The word was: " + word.revealWord()));
                    console.log(colors.yellow("\nNext word..."));
                    guessesLeft = 10;
                    lettersGuessed = [];
                    var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
                    word = new Word(randomWord);
                    nextGuess();
    
                // WIN scenario
                } else if(gameOver === true){
                    console.log(word.showWord());
                    console.log(colors.rainbow("\nYou got it right! Next word..."));
                    guessesLeft = 10;
                    lettersGuessed = [];
                    gameOver = false;
                    var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
                    word = new Word(randomWord);
                    nextGuess();
    
                // Continue recursive function game loop
                } else {
                    nextGuess();
                }
                
            } else {
                console.log(colors.yellow("Letter already guessed. Choose another..."));
                console.log("Letters guessed thus far: " + lettersGuessed);
                nextGuess();
            }

        });
    }
}

// Entry point of application
nextGuess();