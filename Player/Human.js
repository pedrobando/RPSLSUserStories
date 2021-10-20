const PromptSync = require("prompt-sync");
const {Player} = require("../Player");

class Human extends Player{
    constructor(name){
        super(name, gesture);
    
    }

    chooseGesture(){
        console.log("Please type your choice. 'Rock', 'Paper', 'Scissors', 'Lizard', or 'Spock'");
        this.gesture = PromptSync().toLowerCase();
        return this.gesture;
    }
}

module.exports ={
    Human:Human
}
