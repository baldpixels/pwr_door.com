"use strict";

// this code works the modern way

//game button vars
var enter = false;
var left = false;
var right = false;
var up = false;
var down = false;

//keypress listeners/functions
$(document).keydown(keyDownHandler);
$(document).keyup(keyUpHandler);

function keyDownHandler(e) {
    if(e.keyCode == 13) {
        enter = true;
    }
    else if(e.keyCode == 37){
        left = true;
    }
    else if(e.keyCode == 38){
        up = true;
    }
    else if(e.keyCode == 39){
        right = true;
    }
    else if(e.keyCode == 40){
        down = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 13) {
        enter = false;
    }
    else if(e.keyCode == 37){
        left = false;
    }
    else if(e.keyCode == 38){
        up = false;
    }
    else if(e.keyCode == 39){
        right = false;
    }
    else if(e.keyCode == 40){
        down = false;
    }
}
