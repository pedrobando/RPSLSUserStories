const {Human} = require('./Player/Human');
const PromptSync = require('prompt-sync')();

class Game{
    constructor(){
        //this.game = game;
        this.player1 ;
        this.player2 ;
    }
    
    mainRun(){
        let type = this.gameType();
        switch(type){
            case 'solo':
                console.log("Great! What is your name?");
                let player1 = PromptSync();
                this.player1 = new Human(player1);
                //this.player2 = new Ai();
                console.log("Solooooo");
                break;
            case 'multiplayer':
                console.log("Multiplayerr");
                break;
            case 'exit':
                break;    
        }
    }

    gameType(){
        console.log("Welcome! Please enter your game type. 'multiplayer' or 'solo'. Please enter 'exit' if you wish not to continue.");
        let type = PromptSync();
        return type;
    }

}

module.exports = {
    Game:Game,
}