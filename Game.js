const {Human} = require('./Player/Human');
const {Ai} = require('./Player/Ai');
const PromptSync = require('prompt-sync')();

class Game{
    constructor(){
        //this.game = game;
        this.player1 ;
        this.player2 ;
    }
    
    mainMenu(){
        let type = this.gameType();
        type = type.toLowerCase();
        this.validateGame(type);
        switch(type){
            case 'solo':
                this.soloGame()
                break;
            case 'multiplayer':
                this.multiGame();
                break;
            case 'exit':
                break;    
        }
    }

    gameType(){
        console.log("Welcome! Please enter your game type. 'multiplayer' or 'solo'. Please enter 'exit' if you wish not to continue.");
        let vType = PromptSync();
        this.validateGame(vType);
        type = vType
        return type;
    }
    
    validateGame(type){
        if(type != "solo" && type != "multiplayer" && type != "exit"){
            console.log("Please enter a valid option.\n\n")
            return this.mainMenu();
        }
    }


    startSolo(){
        console.log("Great! What is your name?");
        let playerName = PromptSync();
        this.player1 = new Human(playerName);
        this.player2 = new Ai("Node");
    }

    startMulti(){
        console.log("Great! What is PLayer 1's name?");
        let playerName = PromptSync();
        this.player1 = new Human(playerName);
        console.log("Great! What is Player 2's name?");
        let player2Name = PromptSync();
        this.player2 = new Human(player2Name);
    }

    check4Score(){
        if(this.player1.score == 3 || this.player2.score == 3){
            console.log(`Match is over! Final result:\nPlayer 1: ${this.player1.score}\nPlayer 2: {this.player2.score}`);
            this.mainMenu();
        }
    }

    displayScore(){
        console.log(`The score is: ${this.player1.name}:${this.player1.score} | ${this.player2.name}:${this.player2.score}\n${this.player1.name} had ${this.player1.gesture} and ${this.player2.name} had ${this.player2.gesture}\n`);
    }

    match(gestureP1, gestureP2){
        //Lets check hand logic
        if(gestureP1 == gestureP2){
            this.displayScore();
        }
        // rock
        else if(gestureP1 == "rock" && (gestureP2 == "spock" || gestureP2 == "paper")){
            this.player2.score++;
            this.displayScore();
            
        }
        else if(gestureP1 == "rock" && (gestureP2 !== "spock" || gestureP2 !== "paper")){
            this.player1.score++;
            this.displayScore();
            
        }
        // paper
        else if(gestureP1 == "paper" && (gestureP2 == "scissors" || gestureP2 == "lizard")){
            this.player2.score++;
            this.displayScore();
           
        }
        else if(gestureP1 == "paper" && (gestureP2 !== "scissors" || gestureP2 !== "lizard")){
            this.player1.score++;
            this.displayScore();
           
        }
        // scissors
        else if(gestureP1 == "scissors" && (gestureP2 == "rock" || gestureP2 == "spock")){
            player2.score++;
            this.displayScore();
           
        }
        else if(gestureP1 == "scissors" && (gestureP2 !== "rock" || gestureP2 !== "spock")){
            this.player1.score++;
            this.displayScore();
            
        }
        // lizard
        else if(gestureP1 == "lizard" && (gestureP2 == "rock" || gestureP2 == "scissors")){
            this.player2.score++;
            this.displayScore();
            
        }
        else if(gestureP1 == "lizard" && (gestureP2 !== "rock" || gestureP2 !== "scissors")){
          this.player1.score++;
          this.displayScore();
    
        }
        
        //spock
        else if(gestureP1 == "spock" && (gestureP2 == "paper" || gestureP2 == "lizard")){
            this.player2.score++;
            this.displayScore();
            
        }
        else if(gestureP1 == "spock" && (gestureP2 !== "paper" || gestureP2 !== "lizard")){
           this.player1.score++;
           this.displayScore();
            
        }
        
        else{
            console.log(`I don't know who won. ${this.player1.name}s gesture is ${gestureP1}. ${this.player2.name}s gesture is ${gestureP2}`)
        }
    }

    soloGame(){
        this.startSolo();
        while(this.player1.score < 3 && this.player2.score <3){
            this.player1.chooseGesture();
            this.player2.chooseGesture();
            this.match(this.player1.gesture, this.player2.gesture);
        }
        this.mainMenu();    
    }

    multiGame(){
        this.startMulti();
        while(this.player1.score < 3 && this.player2.score <3){
            this.player1.chooseGesture();
            this.player2.chooseGesture();
            this.match(this.player1.gesture, this.player2.gesture);
        }
        this.mainMenu();
    }

    

}

module.exports = {
    Game:Game,
}