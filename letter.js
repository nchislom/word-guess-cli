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