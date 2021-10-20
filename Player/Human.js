const PromptSync = require("prompt-sync")();
const {Player} = require("../Player");

class Human extends Player{
    constructor(name){
        super(name);
    
    }

    chooseGesture(){
        console.log("Please type your choice. 'Rock', 'Paper', 'Scissors', 'Lizard', or 'Spock'");
        this.gesture = PromptSync();
        //this.gesture = this.gestures[3];
        this.gesture = this.gesture.toLowerCase();
    }
}

module.exports ={
    Human:Human
}
