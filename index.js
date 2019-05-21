var Word = require("./Word");
var inquirer = require("inquirer");

var wordBank = ["sasquatch", "nessie", "chupacabra", "bigfoot", "vampire", "unicorn",
"aliens", "bat boy", "poltergeist", "the jersey devil", "yeti", "kraken", "lizard man",
"mothman", "slenderman", "quetzalcoatl", "illuminati", "area 51", "ghost", "greys"];

var pickWord = function(){
    let newWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(newWord);
}

pickWord();

var startGame = function(){
    let guessesLeft = 10;
}