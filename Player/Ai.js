const Player = require("../Player");

class Ai extends Player{
    constructor(name){
        super(name);
        super(gesture);
        super(gestures);
    }

    chooseGesture(){
        this.gesture = this.gestures[Math.random(this.gestures.length)];
    }
}