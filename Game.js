const {player} = require('./Player');
const PromptSync = require('prompt-sync')();

class Game{
    constructor(type){
        this.type = type;
    }
    gameType(){
        console.log("Welcome! Please enter your game type. 'multiplayer' or 'solo'.");
        let type = PromptSync();
        mainRun(type);
    }

    mainRun(type){
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