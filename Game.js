const {Human} = require('./Player/Human');
const {Ai} = require('./Player/Ai');
const PromptSync = require('prompt-sync')();

class Game{
    constructor(){
        //this.game = game;
        this.player1 = player1;
        this.player2 = player2;
    }
    
    mainRun(){
        let type = this.gameType();
        switch(type){
            case 'solo':
                this.startSolo()
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


    startSolo(){
        console.log("Great! What is your name?");
        let playerName = PromptSync();
        player1 = new Human(playerName);
        player2 = new Ai("Node");
        return match(player1.chooseGesture, player2.chooseGesture, player1, player2);
    }

    startMulti(){
        console.log("Great! What is PLayer 1's name?");
        let playerName = PromptSync();
        player1 = new Human(playerName);
        console.log("Great! What is PLayer 2's name?");
        let player2Name = PromptSync();
        player2 = new Human(player2Name);
        return match(player1.chooseGesture, player2.chooseGesture, player1, player2);
    }

    match(gestureP1, gestureP2, player1, player2){
        if(player1.score == 3 || player2.score == 3){
            console.log(`Match is over! Final result:\nPlayer 1: ${player1.score}\nPlayer 2: {player2.score}`)
        }
        else if{
            if(gestureP1 == "rock" && (gestureP2 !=== "spock" || gestureP2 !=== "paper")){
                player1.score++;
                match(player1.chooseGesture, player2.chooseGesture);
            }
            else{
                player2.score++;
                match(player1.chooseGesture, player2.chooseGesture);
            }
        }
        else if{
            if(gestureP1 == "paper" && (gestureP2 !=== "scissors" || gestureP2 !=== "lizard")){
                player1.score++;
                match(player1.chooseGesture, player2.chooseGesture);
            }
            else{
                player2.score++;
                match(player1.chooseGesture, player2.chooseGesture);
            }
        }
        else if{
            if(gestureP1 == "scissors" && (gestureP2 !=== "rock" || gestureP2 !=== "spock")){
                player1.score++;
                match(player1.chooseGesture, player2.chooseGesture);
            }
            else{
                player2.score++;
                match(player1.chooseGesture, player2.chooseGesture);
            }
        }
        else if{
            if(gestureP1 == "lizard" && (gestureP2 !=== "rock" || gestureP2 !=== "scissors")){
                player1.score++;
                match(player1.chooseGesture, player2.chooseGesture);
            }
            else{
                player2.score++;
                match(player1.chooseGesture, player2.chooseGesture);
            }
        }
        else if{
            if(gestureP1 == "spock" && (gestureP2 !=== "paper" || gestureP2 !=== "lizard")){
                player1.score++;
                match(player1.chooseGesture, player2.chooseGesture);
            }
            else{
                player2.score++;
                match(player1.chooseGesture, player2.chooseGesture);
            }
        }

    }

}

module.exports = {
    Game:Game,
}