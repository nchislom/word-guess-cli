var Word = require("./Word");
var inquirer = require("inquirer");

const wordBank = ["sasquatch", "nessie", "chupacabra", "bigfoot", "vampire", "unicorn",
"aliens", "batboy", "poltergeist", "the jersey devil", "yeti", "kraken", "lizard man",
"mothman", "slenderman", "quetzalcoatl", "illuminati", "ghost", "greys"];

var guessesLeft = 10;
var lettersGuessed = [];
var gameOver = false;

// var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var randomWord = wordBank[9];
var word = new Word(randomWord);

var nextGuess = function(){
    if(gameOver === false){
        console.log("")
        console.log(word.showWord() + "\n");    
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: "Choose a letter:"
            }
        ]).then(function(userInput){
            
            // Snapshot of word-state pre-guess
            var wordBeforeGuess = word.showWord().replace(/,/g, "");
            
            // Apply guessed letter to word object
            word.guessLetter(userInput.letter);
            
            // Snapshot or word-state post-guess
            var wordAfterGuess = word.showWord().replace(/,/g, "");

            // Compare before and after word-states
            if(wordBeforeGuess === wordAfterGuess){
                console.log("\nINCORRECT");
                guessesLeft--;
                console.log("Guesses Left: " + guessesLeft);
            } else {
                console.log("\nCORRECT!");
                if(!word.showWord().includes("_")){
                    gameOver = true;
                }
            }

            
            if(guessesLeft < 1 && word.showWord().includes("_")){
                console.log("\nGame Over\n\nThe word was: " + word.revealWord());
                console.log("\nNext word...");
                guessesLeft = 10;
                lettersGuessed = [];
                // gameOver = false;
                var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
                word = new Word(randomWord);
                nextGuess();
            } else if(gameOver === true){
                console.log(word.showWord());
                console.log("\nYou got it right! Next word...");
                guessesLeft = 10;
                lettersGuessed = [];
                gameOver = false;
                var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
                word = new Word(randomWord);
                nextGuess();
            } else {
                nextGuess();
            }
        });
    } 
}

nextGuess();