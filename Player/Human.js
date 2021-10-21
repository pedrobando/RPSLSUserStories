const PromptSync = require("prompt-sync")();
const {Player} = require("../Player");

class Human extends Player{
    constructor(name){
        super(name);
    
    }
    
    chooseGesture(){
        console.log(` ${this.name }, please type your choice. 'Rock', 'Paper', 'Scissors', 'Lizard', or 'Spock'`);
        this.gesture = PromptSync();
        this.gesture = this.gesture.toLowerCase();
        this.validateInput();
    }

    validateInput(){
        if(this.gesture != "rock" && this.gesture != "paper" && this.gesture != "scissors" && this.gesture != "lizard" && this.gesture != "spock" ){
            console.log("Please enter a valid option.\n\n")
            return this.chooseGesture();
        }
    }


    
}

module.exports ={
    Human:Human
}
