const {Player} = require("../Player");

class Ai extends Player{
    constructor(name){
        super(name);
    }

    chooseGesture(){
        this.gesture = this.gestures[Math.floor(Math.random()*this.gestures.length)];
        this.gesture = this.gesture.toLowerCase();
    }
}

module.exports = {
    Ai:Ai
}