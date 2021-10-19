class Player{

    constructor(name){
        this.name = name;
        this.gestures = ["Rock", "Scissors", "Paper", "Lizard", "Spock"];
        this.gesture = "";
        this.score = 0;
    }

    chooseGesture(){

    }

}


module.exports = {
    Player:Player
}