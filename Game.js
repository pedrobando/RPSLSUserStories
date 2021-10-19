const player = require('./Player');
const PromptSync = require('prompt-sync')();

class Game{

    constructor(type){
        this.type = type;
    }

    mainRun(){
        console.log("Welcome! Please enter 'multiplayer' or 'solo'.")
        let type = PromptSync();

        if(type == "solo"){
            //run Solo script
        }
        else if(type == "multiplayer"){
            //run script for multiplayer
        }
        else{
            console.log("Please enter a valid game type.");
            this.mainRun();
        }
    }

}

module.exports = {
    Game:Game,
}