"use strict";

// this code works the modern way

var Game = new function(strategy) {
    this.strategy = strategy;
}

Game.prototyp.playScene = function() {
    return this.strategy();
}

var sceneOne = function() {
    console.log('First scene logic here');
}

var sceneTwo = function() {
    console.log('Second scene logic here');
}

var game;
if(e.which == 13) {
    if(condition1) {
        game = new Game(sceneOne);
    } else {
        game = new Game(sceneTwo);
    }

    game.playScene();
}
