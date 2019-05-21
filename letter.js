// Constructor for Letter object

function Letter(hiddenLetter){
    this.hiddenLetter = hiddenLetter;
    this.guessedYet = false;
    this.showLetter = function(){
        if(this.guessedYet){
            return this.hiddenLetter;
        } else {
            return "_";
        }
    }
    this.checkLetter = function(char){
        if(char === this.hiddenLetter){
            this.guessedYet = true;
        }
    }
}

module.exports = Letter;

// Test case...
// var ltr = new Letter("j");
// console.log("Guessed yet: " + ltr.guessedYet);
// console.log("Hidden letter: " + ltr.hiddenLetter);
// console.log("Showing letter: " + ltr.showLetter());
// console.log("\nInputting guess as 'j'...");
// ltr.checkLetter("j");
// console.log("Guessed yet: " + ltr.guessedYet);
// console.log("Hidden letter: " + ltr.hiddenLetter);
// console.log("Showing letter: " + ltr.showLetter());

