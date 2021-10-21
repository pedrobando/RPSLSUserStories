const PromptSync = require("prompt-sync")();
const {Player} = require("../Player");

class Human extends Player{
    constructor(name){
        super(name);
    
    }
    
    chooseGesture(){
        console.log(` ${this.name }, please type your choice. 'Rock', 'Paper', 'Scissors', 'Lizard', or 'Spock'`);
        let uGesture = PromptSync();
        this.validateInput(uGesture);
        this.gesture = uGesture.toLowerCase();
    }

    validateInput(gesture){
        if(gesture != "rock" && gesture != "paper" && gesture != "scissors" && gesture != "lizard" && gesture != "spock" ){
            console.log("Please enter a valid option.\n\n")
            return this.chooseGesture();
        }
    }


    
}

module.exports ={
    Human:Human
}
