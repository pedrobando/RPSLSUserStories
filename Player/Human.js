const {Player} = require("../Player");

class Human extends Player{
    constructor(name){
        super(name);
    }
}

module.exports ={
    Human:Human
}