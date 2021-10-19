const Player = require("../Player");

class Ai extends Player{
    constructor(name){
        super(name, gesture, gestures);
    }

    chooseGesture(){
        this.gesture = this.gestures[Math.random(this.gestures.length)];
        return this.gesture;
    }
}

module.exports = {
    Ai:Ai
}