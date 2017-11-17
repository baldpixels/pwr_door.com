"use strict";
//global

  var cursorLoc = [20, 100];

  function moveLeft(){
    cursorLoc[0] = cursorLoc[0] - 5;
  }
  function moveUp(){
    cursorLoc[1] = cursorLoc[1] - 5;
  }
  function moveRight(){
    cursorLoc[0] = cursorLoc[0] + 5;
  }
  function moveDown(){
    cursorLoc[1] = cursorLoc[1] + 5;
  }
