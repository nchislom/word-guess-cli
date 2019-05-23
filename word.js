var Letter = require("./Letter");

function Word(word){
    this.word = [];

    for(letter in word){
        var ltr = new Letter(word[letter]);
        this.word.push(ltr);
        // Reveal spaces in word object
        if(this.word[letter].hiddenLetter === " "){
            this.word[letter].guessedYet = true;
        }
    };

    this.showWord = function(){
        let currentWordState = []
        for(let i=0; i<this.word.length; i++){
            currentWordState.push(this.word[i].showLetter());
        }
        return currentWordState.join().replace(/,/g, " ");
    };

    this.revealWord = function(){
        let revealedWord = [];
        for(letter in this.word){
            this.word[letter].guessedYet = true;
            revealedWord.push(this.word[letter].showLetter());
        }
        return revealedWord.join().replace(/,/g, " ");
    }

    this.guessLetter = function(letterGuessed){
        for(letter in this.word){
            this.word[letter].checkLetter(letterGuessed);
        }
    };
}

module.exports = Word;