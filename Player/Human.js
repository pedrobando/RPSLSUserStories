const PromptSync = require("prompt-sync");
const {Player} = require("../Player");

class Human extends Player{
    constructor(name){
        super(name);
        super(gesture);
    }

    chooseGesture(){
        console.log("Please type your choice. 'Rock', 'Paper', 'Scissors', 'Lizard', or 'Spock'");
        gesture = PromptSync();
    }
}

module.exports ={
    Human:Human
}