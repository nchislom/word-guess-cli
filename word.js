var Letter = require("./Letter");

function Word(word){
    this.word = [];

    for(letter in word){
        var ltr = new Letter(word[letter]);
        this.word.push(ltr);
    };

    this.showWord = function(){
        let currentWordState = []
        for(let i=0; i<this.word.length; i++){
            currentWordState.push(this.word[i].showLetter());
        }
        return currentWordState.join();
    };

    this.guessLetter = function(letterGuessed){
        for(letter in this.word){
            this.word[letter].checkLetter(letterGuessed);
        }
    };
}

module.exports = Word;
// Test case
// var wrd = new Word("animal");
// console.log("New word is: " + wrd.showWord());
// console.log("Guessing letter: a");
// wrd.guessLetter("a");
// console.log("Now we get: " + wrd.showWord());