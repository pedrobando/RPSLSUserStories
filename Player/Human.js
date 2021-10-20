const PromptSync = require("prompt-sync")();
const {Player} = require("../Player");

class Human extends Player{
    constructor(name){
        super(name);
    
    }
    validateInput(){
        if(this.gesture != "rock" && this.gesture != "paper" && this.gesture != "scissors" && this.gesture != "lizard" && this.gesture != "spock"){
            return this.chooseGesture();
        }
    }
    chooseGesture(){
        console.log("Please type your choice. 'Rock', 'Paper', 'Scissors', 'Lizard', or 'Spock'");
        this.gesture = PromptSync();
        this.gesture = this.gesture.toLowerCase();
        validateInput();
    }

    
}

module.exports ={
    Human:Human
}
