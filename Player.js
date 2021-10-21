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

    gesturePopulator(){
        //let g1 = new Rock();
        //....
        //this.gestures.push(g1)
    }

}


module.exports = {
    Player:Player
}