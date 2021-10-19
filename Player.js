class Player{

    constructor(name){
        this.name = name;
        this.gestures = ["Rock", "Scissors", "Paper", "Lizard", "Spock"];
        this.gesture = "";
        this.score = 0;
    }

    chooseGesture(){
        return this.gesture;
    }

}


module.exports = {
    Player:Player
}